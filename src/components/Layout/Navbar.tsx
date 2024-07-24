import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import UserContext from '@/context/UserContext';

import Button from "../Common/Button";
import SvgIcon from "../Common/SvgIcon";
import Menu from "./Menu";
import logo_white from "../../assets/icons/logo_white.svg";

const Header = () => {
  const userContext = useContext(UserContext);
  console.log("User context in Header:", userContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const switchMenu = (isOpen: boolean) => {
    setIsOpenMenu(isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
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

  return (
    <header className="w-full bg-[#140F0A] h-[4rem] md:h-[6rem] flex items-center justify-between py-[1rem] px-[0.75rem] md:px-[4rem] md:py-4">
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
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  <Link
                    to="/user/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    我的帳戶
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    登出
                  </Link>
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
