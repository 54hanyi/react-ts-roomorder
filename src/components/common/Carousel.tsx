import { ImageItem } from "../../types/image.type";
import { ReactNode, useState, useEffect } from "react";
import clsx from "clsx";

interface CarouselProps {
  imageList: ImageItem[];
  children?: ReactNode;
}

const Carousel = ({ imageList, children }: CarouselProps) => {
  const [, setTime] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((pre) => {
        if(pre === 60) {
          setCurrent((pre) => (pre + 1 === imageList.length ? 0 : pre + 1));
          return 0;
        }

        return pre + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = (item:ImageItem, index: number) => {
    console.log(item);
    
    setCurrent(index);
    setTime(0);
  };

  return (
    <>
      <div className="relative w-full h-full">
        <picture>
          <source
            media="(max-media: 750px)"
            srcSet={imageList[current].mobile}
          />
          <img src={imageList[current].web} className="w-full h-full object-cover" />
        </picture>
        <div className="w-full h-full absolute top-0 bg-neutral-100/60"></div>
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
