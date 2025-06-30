import NewsCard from "./NewsCard";
import dotImage from "@/assets/images/web/dot.png";

export default function News() {
  return (
    <>
      <div className="relative grid md:grid-cols-12 gap-4 p-14 w-full bg-[#F7F2EE]">
        <img
          src={dotImage}
          alt="Top Right Dots"
          className="absolute top-10 right-28 h-36"
          loading="lazy"
        />
        <div className="flex flex-col items-end pr-14 col-span-3 ">
          <div className="border-b border-[#BE9C7C] pb-3 md:pb-6">
            <p className="text-primary-100 text-h3 md:text-h1">最新</p>
            <p className="text-primary-100 text-h3 md:text-h1">消息</p>
          </div>
        </div>
        <div className="col-span-9">
          <NewsCard />
        </div>
        <img
          src={dotImage}
          alt="Dots Bottom Left"
          className="absolute bottom-[-4.5rem] left-32 h-36"
          loading="lazy"
        />
      </div>
    </>
  );
}
