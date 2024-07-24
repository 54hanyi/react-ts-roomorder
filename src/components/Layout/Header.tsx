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

  const switchMenu = (isOpen: boolean) => {
    setIsOpenMenu(isOpen);
  };

  const buttons = [
    { title: "客房旅宿", buttonStyle: "ghost", className: "p-[1rem]", to: "/rooms" },
    { title: userContext?.isLoggedIn ? userContext.userName : "會員登入", buttonStyle: "ghost", className: userContext?.isLoggedIn ? "p-[1rem] text-primary-100 font-bold" : "p-[1rem]", to: userContext?.isLoggedIn ? "/user/profile" : "/login" },
    { title: "立即訂房", buttonStyle: "primary", className: "px-[2rem] py-[1rem] bg-primary-100 hover:bg-primary-120 rounded-[8px]", to: "/rooms" },
  ];

  return (
    <header className="w-full h-[4rem] md:h-[6rem] flex items-center justify-between py-[1rem] px-[0.75rem] md:px-[4rem] md:py-4">
      <Link to="/">
        <img src={logo_white} className="w-[6rem] h-[2rem] md:w-[10rem] md:h-[3.25rem]" alt="Logo" />
      </Link>
      <ul className="text-h6 gap-[1rem] hidden md:flex">
        {buttons.map((button) => (
          <li key={button.title}>
            <Button title="" buttonStyle={button.buttonStyle}>
              <Link to={button.to} className={button.className}>
                {button.title}
              </Link>
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