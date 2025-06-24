import { ReactNode, useState, useEffect } from "react";
import clsx from "clsx";

interface CarouselProps {
  imageList: string[];
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
  }, [current, currentImgIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = current + 1 === imageList.length ? 0 : current + 1;
      setCurrent(nextIndex);
      onNextRoom && onNextRoom();
    }, 3000);

    return () => clearInterval(timer);
  }, [current, imageList.length, onNextRoom]);

  const handleClick = (index: number) => {
    setCurrent(index);
    onRoomChange && onRoomChange(index);
    setTime(0);
  };

  return (
    <>
      <div className="relative w-full h-full">
        <img src={imageList[current]} className="w-full h-full object-cover" alt="房型圖片"/>
        <div className="w-full h-full absolute top-0"></div>
        {children}
        <div className="flex absolute lg:bottom-[2rem] bottom-[1rem] lg:w-full w-[80%] ml-5 lg:ml-0 justify-center">
          {imageList.map((_, index) => (
            <button
              key={index}
              className={clsx(
                "w-[2rem] h-[4px] mr-[0.5rem] last:mr-0 rounded-full",
                `${index === current ? "w-[4rem] bg-primary-100" : "w-[2rem] bg-primary-40"}`
              )}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
