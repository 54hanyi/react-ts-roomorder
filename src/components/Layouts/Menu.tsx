import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "@/contexts/UserContext";
import Button from "../Common/Button";
import SvgIcon from "../Common/SvgIcon";

type ButtonItem = {
  title: string | JSX.Element;
  buttonStyle: string;
  className: string;
  to: string;
  onClick?: () => void; // 可選的點擊處理
};

type MenuProps = {
  buttons: ButtonItem[];
  className: string;
  closeMenu: (isOpen: boolean) => void;
};

const Menu = ({ buttons, className, closeMenu }: MenuProps) => {
  const userContext = useContext(UserContext);

  const handleLogout = () => {
    if (userContext) {
      userContext.setIsLoggedIn(false);
      userContext.setUserName("");
      userContext.setUser(null);
      localStorage.removeItem("authToken");
      alert("已成功登出");
      closeMenu(false); // 關閉選單
    }
  };

  return (
    <>
      <div className={`${className} fixed inset-0 z-50 bg-neutral-bg px-[1.25rem]`}>
        <button
          type="button"
          onClick={() => closeMenu(false)}
          className="absolute top-[1rem] right-[0.75rem]"
        >
          <SvgIcon name="ic_close" svgClass="w-[2.5rem] h-[2.5rem] text-neutral-0 block md:hidden cursor-pointer" />
        </button>
        <ul className="flex flex-col gap-10 items-center justify-center w-full h-full">
          {buttons.map((button) => (
            <li key={button.title.toString()} className="w-full">
              <Button
                title=""
                buttonStyle={button.buttonStyle}
                defaultClass="w-full"
              >
                <Link to={button.to} className={button.className} onClick={button.onClick}>
                  {button.title}
                </Link>
              </Button>
            </li>
          ))}
          {/* 如果用戶已登入，顯示「我的帳戶」和「登出」 */}
          {userContext?.isLoggedIn && (
            <>
              <li className="w-full">
                <Button title="" buttonStyle="ghost" defaultClass="w-full">
                  <Link to="/user-profile" className="p-[1rem] text-primary-100 font-bold">
                    我的帳戶
                  </Link>
                </Button>
              </li>
              <li className="w-full">
                <Button title="" buttonStyle="ghost" defaultClass="w-full">
                  <span onClick={handleLogout} className="p-[1rem] font-bold">
                    登出
                  </span>
                </Button>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Menu;
