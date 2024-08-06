import { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // 导入 useLocation
import clsx from 'clsx';
import UserContext from '@/context/UserContext';

import Button from "../Common/Button";
import SvgIcon from "../Common/SvgIcon";
import Menu from "./Menu";
import logo_white from "../../assets/icons/logo_white.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 获取当前路径
  const userContext = useContext(UserContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const switchMenu = (isOpen: boolean) => {
    setIsOpenMenu(isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    if (userContext) {
      userContext.setIsLoggedIn(false);
      userContext.setUserName('');
      userContext.setUser(null);
      setIsUserMenuOpen(false);
      localStorage.clear(); // 清除所有data
      alert('已成功登出');
      navigate("/");
    }
  };

  const buttons = [
    { title: "客房旅宿", buttonStyle: "ghost", className: "p-[1rem]", to: "/rooms" },
    {
      title: userContext?.isLoggedIn ? userContext.userName : "會員登入",
      buttonStyle: "ghost",
      className: userContext?.isLoggedIn ? "p-[1rem] text-primary-100 font-bold relative" : "p-[1rem]",
      to: userContext?.isLoggedIn ? "#" : "/login",
      onClick: userContext?.isLoggedIn ? toggleUserMenu : undefined
    },
    { title: "立即訂房", buttonStyle: "primary", className: "px-[2rem] py-[1rem] bg-primary-100 hover:bg-primary-120 rounded-[8px]", to: "/rooms" },
  ];

  // 确定是否在 "/" 和 "/rooms" 路径下使用默认背景色
  const isSpecialRoute = location.pathname === "/" || location.pathname === "/rooms";
  const headerBg = isSpecialRoute ? "bg-transparent" : "bg-[#140F0A]";

  return (
    <header className={`w-full h-[4rem] md:h-[6rem] flex items-center justify-between py-[1rem] px-[0.75rem] md:px-[4rem] md:py-4 ${headerBg}`}>
      <Link to="/">
        <img src={logo_white} className="w-[6rem] h-[2rem] md:w-[10rem] md:h-[3.25rem]" alt="Logo" />
      </Link>
      <ul className="text-h6 gap-[1rem] hidden md:flex">
        {buttons.map((button, index) => (
          <li key={index}>
            <Button title="" buttonStyle={button.buttonStyle}>
              <Link
                to={button.to}
                className={button.className}
                onClick={button.onClick}
              >
                {button.title}
              </Link>
              {button.title === userContext?.userName && isUserMenuOpen && (
                <div className="absolute mt-3 bg-white rounded-md shadow-lg">
                  <Link
                    to="/user/profile"
                    className="block p-3 text-sm font-semibold text-primary-100"
                  >
                    我的帳戶
                  </Link>
                  <span
                    onClick={handleLogout}
                    className="block w-full text-left p-3 text-sm font-semibold text-primary-100"
                  >
                    登出
                  </span>
                </div>
              )}
            </Button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => switchMenu(true)} className="block md:hidden">
        <SvgIcon name="ic_menu" svgClass="w-[2.5rem] h-[2.5rem] text-neutral-0 cursor-pointer" />
      </button>
      <Menu buttons={buttons} closeMenu={switchMenu} className={clsx(isOpenMenu ? "block" : "hidden", "block md:hidden")} />
    </header>
  );
};

export default Header;
