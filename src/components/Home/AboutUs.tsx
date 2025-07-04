import DecoLine from "@/assets/icons/DecoLine.svg";
import aboutImage from "@/assets/images/web/about.webp";

export default function AboutUs() {
  return (
    <>
      <div className="bg-black pt-[4rem] h-832 w-full">
        <div
          className="relative bg-contain bg-no-repeat bg-center h-576 w-full"
          style={{
            backgroundImage: `url(${aboutImage})`,
          }}
        >
          <div className="absolute bg-gradient-to-b from-neutral-120/80 to-primary-100/80 rounded-br-none rounded-[4rem] border-white border-l border-b mx-4 xl:right-48 xl:top-28 w-full xl:w-752 h-[38rem] xl:h-500">
            <div className="flex items-start text-white text-h3 xl:text-h1 lg:px-12 px-10 pt-10 pb-8">
              <div className="flex-col">
                <p className="mr-4">關於</p>
                <p className="mr-4">我們</p>
              </div>
              <img
                src={DecoLine}
                alt="DecoLine"
                className="absolute top-[4.8rem] left-32 xl:top-24 xl:left-40"
                loading="lazy"
              />
            </div>

            <div className="text-h6 text-white lg:px-12 px-10 py-3">
              <p>
                享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
              </p>
              <p>
                我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
              </p>
            </div>
            <div className="text-h6 text-white lg:px-12 px-10 py-3">
              <p>
                我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
              </p>
              <p>
                我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
              </p>
            </div>
            <div className="text-h6 text-white lg:px-12 px-10 py-4">
              <p>
                在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。{" "}
              </p>
            </div>
            <div className="text-h6 text-white lg:px-12 px-10 py-3">
              <p>
                享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
