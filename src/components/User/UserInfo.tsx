import { useContext, useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import UserContext from "@/contexts/UserContext";
import Input from "@/components/Common/Input";
import Button from "../Common/Button";
import { MemberEditData, MemberUpdateDetailData } from "@/types";
import { updateUserDetail, updateUserPwd } from "@/assets/api";

export default function UserInfo() {
  // 從 UserContext 取得目前登入使用者資料與更新方法
  const userContext = useContext(UserContext);

  // 控制是否進入編輯狀態（基本資料／密碼）
  const [isEditingDetails, setIsEditingDetails] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  // React Hook Form - 基本資料表單設定
  const {
    register: registerDetails,
    handleSubmit: handleSubmitDetails,
    reset: resetDetails,
    formState: { errors: errorsDetails },
  } = useForm<MemberEditData>({
    defaultValues: {
      name: userContext.user?.name || "",
      phone: userContext.user?.phone || "",
      birthday: userContext.user?.birthday?.substring(0, 10) || "",
      address: {
        detail: userContext.user?.address?.detail || "",
        zipcode: userContext.user?.address?.zipcode || 0,
        city: userContext.user?.address?.city || "",
        county: userContext.user?.address?.county || "",
      },
    },
    mode: "onTouched", // 觸碰欄位後才顯示錯誤
  });

  // React Hook Form - 密碼表單設定
  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    reset: resetPassword,
    formState: { errors: errorsPassword },
    watch: watchPassword,
  } = useForm<MemberEditData>({
    defaultValues: {
      oldPassword: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });

  // 切換編輯狀態時，自動 reset 對應表單
  useEffect(() => {
    if (isEditingDetails) {
      resetDetails({
        name: userContext.user?.name || "",
        phone: userContext.user?.phone || "",
        birthday: userContext.user?.birthday?.substring(0, 10) || "",
        address: {
          detail: userContext.user?.address?.detail || "",
          zipcode: userContext.user?.address?.zipcode || 0,
          city: userContext.user?.address?.city || "",
          county: userContext.user?.address?.county || "",
        },
      });
    }

    if (isEditingPassword) {
      resetPassword({
        oldPassword: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [
    isEditingDetails,
    isEditingPassword,
    userContext.user,
    resetDetails,
    resetPassword,
  ]);

  // 點擊編輯按鈕 → 切換狀態
  const handleEditDetailsClick = () => {
    setIsEditingDetails(true);
  };

  const handleEditPasswordClick = () => {
    setIsEditingPassword(true);
  };

  // 基本資料送出時的邏輯
  const onSubmitDetails: SubmitHandler<MemberEditData> = async (data) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("無法取得認證 token");
      return;
    }

    try {
      const updateDetailData: MemberUpdateDetailData = {
        userId: userContext.user?._id ?? "",
        name: data.name ?? "",
        phone: data.phone ?? "",
        birthday: data.birthday ?? "",
        address: {
          zipcode: data.address.zipcode || 0,
          detail: data.address.detail || "",
          city: data.address.city || "",
          county: data.address.county || "",
        },
      };

      await updateUserDetail(updateDetailData, token); // ✅ 呼叫 API 更新後端資料

      // 同步更新前端 Context 狀態
      userContext.setUserName(data.name ?? "");
      userContext.setPhone(data.phone ?? "");
      userContext.setBirthday(data.birthday ?? "");
      userContext.setAddress(updateDetailData.address);

      setIsEditingDetails(false); // 退出編輯狀態
      alert("資料更新成功");
    } catch (error) {
      console.error("資料更新失敗", error);
      alert("資料更新失敗");
    }
  };

  // 密碼送出時的邏輯
  const onSubmitPassword: SubmitHandler<MemberEditData> = async (data) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("無法取得認證 token");
      return;
    }

    try {
      if (
        data.password &&
        data.confirmPassword &&
        data.password === data.confirmPassword
      ) {
        const updatePwdData = {
          userId: userContext.user?._id ?? "",
          oldPassword: data.oldPassword ?? "",
          newPassword: data.password,
        };

        await updateUserPwd(updatePwdData, token); // ✅ 呼叫 API 更新密碼

        setIsEditingPassword(false);
        alert("密碼更新成功");
      } else {
        alert("密碼不一致");
      }
    } catch (error) {
      console.error("密碼更新失敗", error);
      alert("密碼更新失敗");
    }
  };

  return (
    <>
      <div className="lg:flex lg:gap-10 my-14">
        {/* 密碼區塊 */}
        <div
          className={`bg-white ${
            isEditingPassword ? "h-[25rem]" : "h-[16rem]"
          } lg:w-[45%] w-full rounded-[1.5rem] p-8 mb-8 transition-all`}
        >
          <p className="text-h5 pb-5">修改密碼</p>
          {isEditingPassword ? (
            <form onSubmit={handleSubmitPassword(onSubmitPassword)}>
              {/* 舊密碼 */}
              <Input
                register={registerPassword}
                errors={errorsPassword}
                id="oldPassword"
                labelText="舊密碼"
                type="password"
                placeholder="請輸入舊密碼"
                rules={{ required: "請輸入舊密碼" }}
              />
              {/* 新密碼 */}
              <Input
                register={registerPassword}
                errors={errorsPassword}
                id="password"
                labelText="新密碼"
                type="password"
                placeholder="請輸入新密碼"
                rules={{
                  minLength: { value: 8, message: "密碼至少需要 8 個字" },
                  pattern: {
                    value: /^(?=.*[a-zA-Z])/,
                    message: "密碼需包含至少 1 個字母",
                  },
                }}
              />
              {/*確認密碼 */}
              <Input
                register={registerPassword}
                errors={errorsPassword}
                id="confirmPassword"
                labelText="確認密碼"
                type="password"
                placeholder="請再次輸入密碼"
                rules={{
                  validate: (value: string) =>
                    value === watchPassword("password") || "密碼不一致",
                }}
              />
              <Button
                title="儲存密碼"
                buttonStyle="ghost"
                defaultClass="text-primary-100 text-h5 hover:text-white hover:bg-primary-100 py-4 px-6 rounded-[0.5rem] my-8 border border-primary-100"
                buttonType="submit"
              />
            </form>
          ) : (
            <>
              <div className="text-h6 pt-8">
                <p>電子信箱</p>
                <p className="pt-1">{userContext.user?.email}</p>
              </div>
              <div className="flex justify-between items-center text-h6 pt-5">
                <div>
                  <p>密碼</p>
                  <p className="pt-1">＊＊＊＊＊＊＊＊</p>
                </div>
                <button
                  className="text-primary-100 hover:text-primary-120"
                  onClick={handleEditPasswordClick}
                >
                  重設
                </button>
              </div>
            </>
          )}
        </div>

        {/*基本資料區塊 */}
        <div className="bg-white h-[30rem] lg:w-[55%] w-full rounded-[1.5rem] p-8 transition-all">
          <p className="text-h5 pb-5">基本資料</p>
          {isEditingDetails ? (
            <form onSubmit={handleSubmitDetails(onSubmitDetails)}>
              <Input
                register={registerDetails}
                errors={errorsDetails}
                id="name"
                labelText="姓名"
                type="text"
                placeholder="請輸入姓名"
                rules={{ required: "請輸入姓名" }}
              />
              <Input
                register={registerDetails}
                errors={errorsDetails}
                id="phone"
                labelText="手機號碼"
                type="text"
                placeholder="請輸入手機號碼"
                rules={{
                  pattern: {
                    value: /^09\d{8}$/,
                    message: "手機號碼格式不正確",
                  },
                }}
              />
              <Input
                register={registerDetails}
                errors={errorsDetails}
                id="birthday"
                labelText="生日"
                type="date"
                placeholder="請輸入生日"
                rules={{}}
              />
              <Input
                register={registerDetails}
                errors={errorsDetails}
                id="address.detail"
                labelText="地址"
                type="text"
                placeholder="請輸入地址"
                rules={{ required: "請輸入地址" }}
              />
              <Button
                title="儲存變更"
                buttonStyle="ghost"
                defaultClass="text-primary-100 text-h5 hover:text-white hover:bg-primary-100 py-4 px-6 rounded-[0.5rem] my-8 border border-primary-100"
                buttonType="submit"
              />
            </form>
          ) : (
            <>
              <div className="text-h6 pt-8">
                <p>姓名</p>
                <p className="pt-1">{userContext.user?.name}</p>
              </div>
              <div className="text-h6 pt-5">
                <p>手機號碼</p>
                <p className="pt-1">{userContext.user?.phone}</p>
              </div>
              <div className="text-h6 pt-5">
                <p>生日</p>
                <p className="pt-1">
                  {userContext.user?.birthday?.substring(0, 10)}
                </p>
              </div>
              <div className="text-h6 pt-5">
                <p>地址</p>
                <p className="pt-1">
                  {userContext.user?.address?.zipcode}{" "}
                  {userContext.user?.address?.city}{" "}
                  {userContext.user?.address?.county}{" "}
                  {userContext.user?.address?.detail}
                </p>
              </div>
              <Button
                title="編輯"
                buttonStyle="ghost"
                defaultClass="text-primary-100 text-h5 hover:text-white hover:bg-primary-100 py-4 px-6 rounded-[0.5rem] my-8 border border-primary-100"
                onClick={handleEditDetailsClick}
                buttonType="button"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
