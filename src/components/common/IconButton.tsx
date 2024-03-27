import clsx from "clsx";
import SvgIcon from "./SvgIcon";

type IconProps = {
  name: string;
  svgClass?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const IconButton = ({ name, svgClass, className, onClick, disabled }: IconProps) => {
  return (
    <>
      <button
        type="button"
        // 若有新的className可以在基礎上外加
        className={clsx(className, "flex items-center justify-center")}
        onClick={onClick}
        disabled={disabled}
      >
        <SvgIcon name={name} svgClass={svgClass} />
      </button>
    </>
  );
};

export default IconButton;
