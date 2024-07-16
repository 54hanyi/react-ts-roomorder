import React, { useCallback, useRef } from 'react';
import SliderItem from './SliderItem';
import { SliderListProps } from '../../types/slider'; 


const SliderList: React.FC<SliderListProps> = ({ sliderList, sliderImgList }) => {
  const imgContainer = useRef<HTMLUListElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const container = imgContainer.current;
    if (!container) return;

    const startPos = { left: container.scrollLeft, top: container.scrollTop, x: e.clientX, y: e.clientY };

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;

      container.scrollTop = startPos.top - dy;
      container.scrollLeft = startPos.left - dx;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      container.style.cursor = "grab";
      container.style.removeProperty("user-select");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    container.style.cursor = "grabbing";
    container.style.userSelect = "none";
  }, []);

  return (
    <ul ref={imgContainer} className="flex gap-[1rem] overflow-x-scroll" style={{scrollbarWidth: "none"}} onMouseDown={handleMouseDown}>
      {sliderList.map((item) => (
        <SliderItem key={item.title} Item={item} imgData={sliderImgList[item.imgId]} />
      ))}
    </ul>
  );
};

export default SliderList;
