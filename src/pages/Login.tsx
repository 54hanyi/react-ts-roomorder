import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userLogin } from "@/api";
import { UserLoginData, UserResponse } from "../types/user";
import SeoHelmet from "@/components/Common/SeoHelmet";
import Input from "../components/Common/Input";

import Line2 from "@/assets/icons/Line2.svg";
import registerBg from "@/assets/images/web/register.webp";

import UserContext from "@/contexts/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserLoginData>({
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });

  const userContext = useContext(UserContext);

  // 在元件載入時，讀取上次登入的帳號並填入表單中
  useEffect(() => {
    const lastLoginEmail = localStorage.getItem("lastLoginEmail");
    console.log("讀取的email:", lastLoginEmail);
    if (lastLoginEmail && lastLoginEmail !== "null") {
      setValue("email", lastLoginEmail); // 自動填入Mail
      setRememberMe(true); // 設定「記住帳號」複選框為勾選狀態
    }
  }, [setValue]);

  const onSubmit = async (data: UserLoginData) => {
    try {
      const response: UserResponse = await userLogin(data);

      if (response.status && response.result) {
        if (userContext) {
          userContext.setUser(response.result);
          userContext.setIsLoggedIn(true);
          userContext.setUserName(response.result.name);
          userContext.setEmail(response.result.email || "");
          userContext.setPhone(response.result.phone || "");
          userContext.setBirthday(
            response.result.birthday.substring(0, 10) || ""
          );
          userContext.setAddress(
            response.result.address || {
              zipcode: 0,
              detail: "",
              city: "",
              county: "",
            }
          );

          if (response.token) {
            localStorage.setItem("authToken", response.token);
          }

          // 如果勾選了「記住帳號」，請儲存目前的信箱到 localStorage
          if (rememberMe) {
            localStorage.setItem("lastLoginEmail", data.email || "");
            const savedEmail = localStorage.getItem("lastLoginEmail");
            console.log("刚保存的邮箱:", savedEmail); // 验证刚保存的邮箱是否正确
          } else {
            localStorage.removeItem("lastLoginEmail"); // 如果沒有勾選，則移除已儲存的信箱
          }
        }
        alert(`歡迎 ${response.result.name}～`);
        navigate("/");
      } else {
        alert("登入失敗: " + response.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("發生錯誤，請稍後再試。");
    }
  };

  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRememberMe(event.target.checked);
  };

  return (
    <>
      <SeoHelmet
        title="登入｜豪華酒店預訂系統"
        description="登入帳號以查詢訂單或修改個人資料。"
        canonical="https://54hanyi.github.io/react-ts-roomorder/login"
      />

      <div className="flex flex-col">
        <div
          className="flex bg-[#140F0A]"
          style={{ height: "calc(100vh - 6rem)" }}
        >
          <div
            className="w-[50%] hidden sm:block bg-cover bg-bottom h-auto z-10"
            style={{
              backgroundImage: `url(${registerBg})`,
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
                    placeholder="hello@example.com"
                    rules={{
                      required: { value: true, message: "請輸入 Email" },
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Email 格式不正確",
                      },
                    }}
                  />
                </div>
                <div className="mt-4">
                  <Input
                    register={register}
                    errors={errors}
                    id="password"
                    labelText="密碼"
                    type="password"
                    placeholder="請輸入密碼"
                    rules={{ required: { value: true, message: "請輸入密碼" } }}
                  />
                </div>

                <div className="flex justify-between items-center mt-2">
                  <label
                    htmlFor="rememberMe"
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="h-3.5 w-3.5 pt-0.5"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                    />
                    <span className="text-body text-white">記住帳號</span>
                  </label>
                  <Link
                    to="/get-code"
                    className="text-body text-primary-100 underline ml-1 pb-[-1px]"
                  >
                    忘記密碼？
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full h-[3rem] mt-8 px-4 py-2 text-body font-medium text-neutral-60 bg-neutral-40 rounded-md focus:outline-none focus:ring-primary-100 hover:bg-primary-100 hover:text-white"
                >
                  會員登入
                </button>
                <div className="flex text-white text-body mt-4">
                  <p>沒有會員嗎？</p>
                  <Link
                    to="/signup"
                    className="text-primary-100 underline ml-1"
                  >
                    前往註冊
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
