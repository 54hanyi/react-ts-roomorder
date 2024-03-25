import { bannerImgList } from "../../data/BannerImgList";
import { ReactNode } from "react";
import Carousel from "../Common/Carousel";
import Header from "./Header";

type BannerProps = {
  children: ReactNode;
}

const Banner = ({children}: BannerProps) => {
  return (
    <>
      <div className="w-full h-[45rem] md:h-[55rem]">
        <Carousel imageList={bannerImgList}>
          <div className="w-full h-full absolute top-0">
            <Header />
            {children}
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Banner;

