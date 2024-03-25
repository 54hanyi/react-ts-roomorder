import { useMemo } from "react";

type SvgProps = {
  name: string;
  svgClass?: string;
};

const SvgIcon = ({ name, svgClass }: SvgProps) => {
  const symbolId = useMemo(() => `#icon-${name}`, [name]);

  return (
    <>
      <svg className={svgClass} aria-hidden="true">
        <use href={symbolId} />
      </svg>
    </>
  );
};

export default SvgIcon;

