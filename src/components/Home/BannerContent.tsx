import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerContent = () => {
  return (
    <>
      <div
        className={clsx(
          "flex flex-col items-center",
          "lg:flex-row lg:justify-between",
          "mx-[1.25rem] md:mx-[5rem]"
        )}
        style={{ height: `calc(100% - 7.5rem)` }}
      >
        <div
          className={clsx(
            "w-[26rem] h-[10.5rem] lg:h-[7.8rem]",
            "grow-0 shrink",
            "lg:mr-[6rem] xl:mr-[8rem]",
            "flex flex-col items-center lg:block",
            "mb-[2.5rem] lg:mb-0"
          )}
        >
          <h2 className="text-h4 md:text-h2 text-primary-100">享樂酒店</h2>
          <h2 className="text-title md:text-h5 text-primary-100 mb-[1.25rem] lg:mb-[2rem]">
            Enjoyment Luxury Hotel
          </h2>
          <div
            className="w-full h-[2px] hidden lg:block"
            style={{
              background: "linear-gradient(90deg, #BE9C7C, #FFFFFF)",
            }}
          />
          <div
            className="w-[2px] h-[5.2rem] lg:hidden"
            style={{
              background: "linear-gradient(#BE9C7C, #FFFFFF)",
            }}
          />
        </div>
        <div
          className={clsx(
            "relative",
            "min-w-[18rem] max-w-[56%] w-full lg:w-[60rem]",
            "grow-0 shrink"
          )}
        >
          <div
            className={clsx(
              "absolute right-0",
              "h-full",
              "border-t border-r border-[#F5F7F9] rounded-[80px]"
            )}
            style={{
              width: "calc(100% - 3rem)",
              background: "linear-gradient(#FFFFFF00, #FFFFFF4D)",
            }}
          />
          <div
            className={clsx(
              "max-w-[48.25rem] relative",
              "pr-[1.25rem] md:pr-[3rem] py-[3rem] lg:py-[4rem]"
            )}
          >
            <h2
              className={clsx(
                "text-neutral-0 mb-[1rem] text-[2.5rem] font-bold",
                "sm:text-[4rem] md:text-[5rem] lg:text-[4rem] xl:text-[4.5rem] 2xl:text-[5rem]"
              )}
            >
              高雄
              <br />
              豪華住宿之選
            </h2>
            <p
              className={clsx(
                "text-[1rem] font-[500] text-neutral-0 tracking-[5%]",
                "mb-[2.2rem] lg:mb-[3rem]",
                "md:text-[1rem]  xl:text-[1.2rem] 2xl:text-[1.6rem]"
              )}
            >
              我們致力於為您提供無與倫比的奢華體驗與優質服務
            </p>
            <Link to="/rooms">
              <button
                type="button"
                className={clsx(
                  "w-[85%] h-[4rem] lg:h-[6rem]",
                  "flex justify-end items-center",
                  "bg-neutral-0",
                  "text-title md:text-[1.5rem] font-bold",
                  "p-[2.5rem] rounded-[8px]",
                  "hover:bg-primary-100 group"
                )}
              >
                <p className="mr-[1rem] group-hover:text-neutral-0">立即訂房</p>
                <div className="w-[5rem] md:w-[9.2rem] h-[1px] bg-neutral-100 group-hover:bg-neutral-0 group-hover:w-[22%]"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerContent;
