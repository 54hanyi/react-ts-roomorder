import { Link } from "react-router-dom";
import Button from "../Common/Button";
import SvgIcon from "../Common/SvgIcon";

type ButtonItem = {
  title: string | JSX.Element;
  buttonStyle: string;
  className: string;
  to: string;
}

type MenuProps = {
  buttons: ButtonItem[];
  className: string;
  closeMenu: (isOpen: boolean) => void;
}

const Menu = ({ buttons, className, closeMenu }: MenuProps) => {
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
        <ul className="flex flex-col items-center justify-center w-full h-full">
          {buttons.map((button) => {
            return (
              <li key={button.title.toString()} className="w-full">
                <Button
                  title=""
                  buttonStyle={button.buttonStyle}
                  defaultClass="w-full"
                >
                  <Link to={button.to} className={button.className}>
                    {button.title}
                  </Link>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Menu;
