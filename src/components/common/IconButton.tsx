import clsx from "clsx";
import SvgIcon from "./SvgIcon";

type IconProps = {
  name: string;
  svgClass?: string;
  className?: string;
  onClick: () => void;
}

const IconButton = ({name, svgClass, className, onClick}: IconProps) => {
  return (
    <>
      <button
        type="button"
        // 若有新的className可以在基礎上外加
        className={clsx(className, "flex items-center justify-center")}
        onClick={onClick}
      >
        <SvgIcon name={name} svgClass={svgClass} />
      </button>
    </>
  );
};

export default IconButton;
