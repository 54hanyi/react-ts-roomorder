import { bannerImgList } from "../../data/BannerImgList";
import { ReactNode } from "react";
import CarouselLocal from "../Common/CarouselLocal";
import Header from "./Header";

type BannerProps = {
  children: ReactNode;
}

const Banner = ({children}: BannerProps) => {
  return (
    <>
      <div className="w-full h-[45rem] md:h-[55rem]">
        <CarouselLocal imageList={bannerImgList}>
          <div className="w-full h-full absolute top-0 bg-neutral-100/60">
            <Header />
            {children}
          </div>
        </CarouselLocal>
      </div>
    </>
  );
};

export default Banner;

