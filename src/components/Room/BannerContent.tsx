import clsx from "clsx";

const BannerContent = () => {
  return (
    <>
      <div
        className={clsx(
          "flex flex-col items-center",
          "lg:flex-row lg:justify-center",
          "mx-[1.25rem] md:mx-[5rem]"
        )}
        style={{ height: `calc(100% - 7.5rem)` }}
      >
        <div
          className={clsx(
            "w-[26rem] h-[10.5rem] lg:h-[7.8rem]",
            "grow-0 shrink",
            "lg:mr-[2rem] xl:mr-[3rem]",
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
            "min-w-[18rem] max-w-[56%] w-full lg:w-[25rem]",
            "grow-0 shrink"
          )}
        >
          <div
            className={clsx(
              "max-w-[48.25rem] relative",
              "pr-[1.25rem] md:pr-[3rem] py-[3rem] lg:py-[4rem]"
            )}
          >
            <h2
              className={clsx(
                "text-neutral-0 mb-[1rem] text-[2.5rem] font-bold",
                "sm:text-[3rem] md:text-[4rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem]"
              )}
            >
              客房旅宿
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerContent;
