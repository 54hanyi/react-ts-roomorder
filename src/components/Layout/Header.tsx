import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Button from "../Common/Button";
import SvgIcon from "../Common/SvgIcon";
import Menu from "./Menu";
import logo_white from "../../assets/icons/logo_white.svg";

const Header = () => {
  const buttons = [
    {
      title: "客房旅宿",
      buttonStyle: "ghost",
      className: "p-[1rem]",
      to: "/rooms",
    },
    {
      title: "會員登入",
      buttonStyle: "ghost",
      className: "p-[1rem]",
      to: "/login",
    },
    {
      title: "立即訂房",
      buttonStyle: "primary",
      className: "px-[2rem] py-[1rem] bg-primary-100 hover:bg-primary-120 rounded-[8px]",
      to: "/rooms",
    },
  ];

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const switchMenu = (isOpen: boolean) => {
    setIsOpenMenu(isOpen);
  };

  return (
    <>
      <header className="w-full h-[4rem] md:h-[7rem] flex items-center justify-between py-[1rem] px-[0.75rem] md:px-[4rem] md:py-0">
        <Link to="/">
          <img src={logo_white} className="w-[6rem] h-[2rem] md:w-[14rem] md:h-[4rem]" />
        </Link>
        <ul className="text-h6 gap-[1rem] hidden md:flex">
          {buttons.map((button) => {
            return (
              <li key={button.title}>
                <Button title="" buttonStyle={button.buttonStyle}>
                  <Link to={button.to} className={button.className}>
                    {button.title}
                  </Link>
                </Button>
              </li>
            );
          })}
        </ul>
        <button type="button" onClick={() => switchMenu(true)} className="block md:hidden">
          <SvgIcon name="ic_menu" svgClass="w-[2.5rem] h-[2.5rem] text-neutral-0 cursor-pointer" />
        </button>
        <Menu buttons={buttons} closeMenu={switchMenu} className={clsx(isOpenMenu ? "block" : "hidden", "block md:hidden")}/>
      </header>
    </>
  )
};

export default Header;

