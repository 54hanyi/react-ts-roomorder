import { foodImgList } from "../data/foodImgList";
import { foodList } from "../data/foodList";
import clsx from "clsx";
import { MouseEvent, useCallback, useRef } from "react";

const RoomSlide = () => {
  const imgContainer = useRef(null);
  const handleMouseDown = useCallback((e: MouseEvent) => {
    const container: HTMLElement | null = imgContainer.current;

    const startPos = {
      left: container!.scrollLeft,
      top: container!.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };
    const handleMouseMove = (e: globalThis.MouseEvent): void => {
      const container: HTMLElement | null = imgContainer.current;
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      container!.scrollTop = startPos.top - dy;
      container!.scrollLeft = startPos.left - dx;
      updateCursor();
    };
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      resetCursor();
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);
  const updateCursor = () => {
    const container: HTMLElement | null = imgContainer.current;
    container!.style.cursor = "grabbing";
    container!.style.userSelect = "none";
  };
  const resetCursor = () => {
    const container: HTMLElement | null = imgContainer.current;
    container!.style.cursor = "grab";
    container!.style.removeProperty("user-select");
  };

  return (
    <>
      <ul
        ref={imgContainer}
        className="flex gap-[24px] overflow-x-scroll no-scroll"
        onMouseDown={($event) => handleMouseDown($event)}
      >
        {foodList.map((food) => {
          return (
            <li
              key={food.title}
              className={clsx(
                "flex-none",
                "relative",
                "w-[300px] md:w-[416px] h-[480px] md:h-[600px]",
                "rounded-[8px] overflow-hidden"
              )}
            >
              <picture className="absolute">
                <source
                  media="(max-width: 750px)"
                  srcSet={foodImgList[food.imgId].mobile}
                />
                <img
                  draggable={false}
                  src={foodImgList[food.imgId].web}
                  className="w-full h-full object-cover"
                />
              </picture>
              <div
                className={clsx(
                  "absolute bottom-0",
                  "w-full h-fit",
                  "text-neutral_0 backdrop-blur-sm",
                  "p-[24px]"
                )}
                style={{
                  background: "linear-gradient(#00000000, #140F0A)",
                }}
              >
                <div className="flex items-center justify-between mb-[24px]">
                  <h3 className="h5">{food.title}</h3>
                  <p className="subtitle md:title">{food.diningTime}</p>
                </div>
                <p className="body_2 md:body">{food.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default RoomSlide;
