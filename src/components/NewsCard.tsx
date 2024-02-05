// import React from 'react'
import news1 from '../../public/images/web/news1.png'
import news2 from '../../public/images/web/news2.png'
import news3 from '../../public/images/web/news3.png'



export default function NewsCard() {
  interface Data {
    id: number;
    title: string;
    image: any;
    description: string;
  }
  const data: Data[] = [
    {
      id: 1,
      title: "秋季旅遊，豪華享受方案",
      image: "./public/images/web/news1.png",
      description:
        "秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。",
    },
    {
      id: 2,
      title: "輕鬆住房專案",
      image: "./public/images/web/news2.png",
      description:
        "我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。",
    },
    {
      id: 3,
      title: "耶誕快樂，住房送禮",
      image: "./public/images/web/news3.png",
      description:
        "聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！",
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="flex flex-row gap-2 mb-6 w-800">
          <img
            className="w-[426px] h-[264px] rounded-md object-cover"
            src={item.image}
            alt=""
          />
          <div className="flex flex-col justify-center p-5 w-2/3 ">
            <header className="text-left text-h3 font-bold pb-4">
              {item.title}
            </header>
            <p className="text-left text-body text-neutral-80 whitespace-pre-line">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
