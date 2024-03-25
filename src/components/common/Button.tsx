import { ReactNode, useState, useEffect } from "react";


type ButtonProps = {
  title: string;
  buttonStyle: string;
  defaultClass?: string;
  children?: ReactNode;
  buttonType?: "button" | "submit";
  disabled?: boolean; 
};

const Button = ({
  title,
  buttonStyle,
  defaultClass,
  children,
  buttonType = "button",
  disabled
}: ButtonProps) => {
  const [className, setClassName] = useState("");
  useEffect(() => {
    switch(buttonStyle) {
      case "primary":
        setClassName(
          `${defaultClass} text-neutral-0 disabled:bg-neutral-40 disabled:text-neutral-60 disabled:cursor-not-allowed`
        );
        break;
      case "ghost":
        setClassName(
          `${defaultClass} text-neutral-0 hover:text-primary-100 disabled:text-neutral-60 disabled:cursor-not-allowed`
        );
        break;
    }
  }, [buttonStyle, defaultClass])

  return (
    <button type={buttonType} className={className} disabled={disabled}>
      {title}
      {children}
    </button>
  );
};

export default Button;

