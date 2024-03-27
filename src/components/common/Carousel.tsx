import { ImageItem } from "../../types/image.type";
import { ReactNode, useState, useEffect } from "react";
import clsx from "clsx";

interface CarouselProps {
  imageList: ImageItem[];
  children?: ReactNode;
  onNextRoom?: () => void;
  onRoomChange?: (index: number) => void;
  currentImgIndex?: number;
}

const Carousel = ({ imageList, children, onNextRoom, onRoomChange, currentImgIndex }: CarouselProps) => {
  const [, setTime] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (currentImgIndex !== undefined && currentImgIndex !== current) {
      setCurrent(currentImgIndex);
    }
  }, [currentImgIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = current + 1 === imageList.length ? 0 : current + 1;
      setCurrent(nextIndex);
      onNextRoom && onNextRoom(); // 检查 onNextRoom 是否存在，如果存在則調用
    }, 3000);

    return () => clearInterval(timer);
    
  }, [current, imageList.length, onNextRoom]);


  const handleClick = (item:ImageItem, index: number) => {
    console.log(item);
    
    setCurrent(index);
    onRoomChange && onRoomChange(index);
    setTime(0);
  };

  return (
    <>
      <div className="relative w-full h-full">
        <picture>
          <source
            media="(max-width: 750px)"
            srcSet={imageList[current].mobile}
          />
          <img src={imageList[current].web} className="w-full h-full object-cover" />
        </picture>
        <div className="w-full h-full absolute top-0"></div>
        {children}
        <div className="flex absolute bottom-[2rem] w-full justify-center">
          {imageList.map((item, index) => (
            <button
              key={index}
              className={clsx(
                "w-[2rem] h-[4px] mr-[0.5rem] last:mr-0 rounded-full",
                `${index === current ? "w-[4rem] bg-primary-100" : "w-[2rem] bg-primary-40"}`
              )}
              onClick={() => handleClick(item, index)}
            />
          ))}
        </div>
      </div>
    </>
  )
};

export default Carousel;
