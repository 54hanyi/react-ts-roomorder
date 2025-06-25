import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../components/Common/Input";
import Line2 from "../assets/icons/Line2.svg";
import { VerifyEmailData } from "../types/user";

const api = import.meta.env.VITE_API_LINK;

const GetCode = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<VerifyEmailData>({
    defaultValues: { email: "" },
    mode: "onTouched",
  });

  const onSubmit = async (data: VerifyEmailData) => {
    const apiUrl = `${api}/api/v1/verify/generateEmailCode`;
    console.log("API URL:", apiUrl);
    try {
      const response = await axios.post(apiUrl, { email: data.email });
      if (response.data.status) {
        alert("驗證碼已發送到您的郵箱");
        navigate(`/reset-password?email=${data.email}`);
      } else {
        setError("email", { type: "manual", message: response.data.message });
      }
    } catch (error) {
      console.error("Error during API call:", error);
      alert("發生錯誤，請重試");
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className="flex bg-[#140F0A]"
        style={{ height: "calc(100vh - 6rem)" }}
      >
        <div
          className="w-[50%] hidden sm:block bg-cover bg-bottom h-auto z-10"
          style={{
            backgroundImage: `url(${
              import.meta.env.BASE_URL
            }images/web/register.webp')`,
          }}
        ></div>
        <div className="relative sm:w-[50%] w-full flex items-center justify-center">
          <img
            src={Line2}
            alt="Line2"
            className="absolute top-14 right-0 w-full"
            loading="lazy"
          />
          <div className="flex flex-col w-[50%]">
            <p className="text-title mb-2 text-primary-100">
              享樂酒店，誠摯歡迎
            </p>
            <p className="sm:text-h1 text-h2 text-white">立即開始旅程</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-8">
                <Input
                  register={register}
                  errors={errors}
                  id="email"
                  labelText="電子信箱"
                  type="email"
                  placeholder="請輸入您的Email"
                  rules={{
                    required: { value: true, message: "請輸入 Email" },
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Email 格式不正確",
                    },
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full h-[3rem] mt-8 px-4 py-2 text-body font-medium text-neutral-60 bg-neutral-40 rounded-md focus:outline-none focus:ring-primary-100 hover:bg-primary-100 hover:text-white"
              >
                取得驗證碼
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCode;
