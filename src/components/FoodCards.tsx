
export default function FoodCards() {
  interface FoodList {
    image: string;
    name: string;
    date: string;
    time: string;
    description: string;
  }
  const foodList: FoodList[] = [
    {
      image:"public/images/web/food1.png",
      name: "海霸",
      date: "SUN-MON",
      time: "11:00 - 20:30",
      description:
        "以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。",
    },
    {
      image:"public/images/web/food2.png",
      name: "日食",
      date: "SUN-MON",
      time: "17:00 - 22:00",
      description:
        "為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。",
    },
    {
      image:"public/images/web/food3.png",
      name: "山臻",
      date: "SUN-MON",
      time: "11:00 - 20:30",
      description:
        "帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。",
    },
    {
      image:"public/images/web/food4.png",
      name: "月永",
      date: "SUN-MON",
      time: "11:00 - 20:00",
      description:
        "從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。",
    },
    {
      image:"public/images/web/food5.png",
      name: "天潮",
      date: "SUN-MON",
      time: "14:00 - 19:30",
      description:
        "我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。",
    },
  ];
  return (
    <>
      <div className="flex py-10 space-x-4 h-[36rem]">
        {foodList.map((food, index) => (
          <div key={index} className="relative w-[20rem] h-[30rem] rounded-md overflow-hidden">
            <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0  flex flex-col justify-end text-white">
              <div className="bg-gradient-to-b from-black/10 to-[#140F0A] backdrop-blur-md p-4" >
                <div className="flex justify-between py-4">
                  <span className="text-h5 ">{food.name}</span>
                  <span className="text-body">{food.date} {food.time}</span>
                </div>
                <p className="text-body">{food.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      grabCursor={true}
    >
      {foodList.map((food, index) => (
        <SwiperSlide key={index} className="flex flex-col">
          <img src={food.image} alt={food.name} className="object-cover" />
          <div className="backdrop-blur-md p-4 text-white">
            <h3 className="text-2xl font-bold">{food.name}</h3>
            <p className="text-sm">{food.date} {food.time}</p>
            <p className="text-sm">{food.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper> */}
    </>
  )
}
