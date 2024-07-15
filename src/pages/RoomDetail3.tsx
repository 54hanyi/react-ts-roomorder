import { useState } from "react";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import IconButton from "../components/Common/IconButton";
import { roomList } from "../data/roomList";
import Deco from "../assets/icons/ic_Deco.svg";


const RoomDetail3 = () => {
  const [currentPeople, setCurrentPeople] = useState(1);

  const setPeople = (state:string) => {
    switch(state) {
      case "plus":
        setCurrentPeople(
          currentPeople + 1 === 10 ? 10 : currentPeople + 1
        );
        break;
      case "minus":
        setCurrentPeople(
          currentPeople - 1 < 0 ? 1 : currentPeople - 1
        );
        break;
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#F7F2EE]">
        <div className="p-16">  
          <div className="flex gap-2">
            <div className="flex w-[55%]">
              <img
                src="/images/web/room2-1.png"
                alt="Room View"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-2 w-[45%]">
              <img
                src="/images/web/room2-2.png"
                alt="Room View"
                className="w-full h-full object-cover rounded-lg col-span-2"
              />
              <img
                src="/images/web/room2-3.png"
                alt="Room View"
                className="w-full h-full object-cover rounded-lg col-span-2"
              />
              <img
                src="/images/web/room2-4.png"
                alt="Room View"
                className="w-full h-full object-cover rounded-lg col-span-2"
              />
              <img
                src="/images/web/room2-5.png"
                alt="Room View"
                className="w-full h-full object-cover rounded-lg col-span-2"
              />
            </div>
          </div>

          <div className="flex my-16 py-8 gap-20 justify-center">
            <div className="flex flex-col gap-10 w-[45%]">
              <div className="my-3">
                <p className="text-h1 mb-2">{roomList[2].title}</p>
                <p className="text-body">{roomList[2].content}</p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex">
                  <img src={Deco} alt="" />
                  <p className="ml-3 text-h5">房型基本資訊</p>
                </div>
                <div className="flex gap-5">
                  <div className="border-none bg-white border rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
                    <IconButton
                      name="ic_Size"
                      svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body font-bold">{roomList[2].size} 坪</p>
                  </div>
                  <div className="border-none bg-white border rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
                    <IconButton
                      name="ic_Bed"
                      svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body font-bold">{roomList[2].bed} 張大床</p>
                  </div>
                  <div className="border-none bg-white border rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
                    <IconButton
                      name="ic_Person"
                      svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body font-bold">{roomList[2].people} 人</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex">
                  <img src={Deco} alt="" />
                  <p className="ml-3 text-h5">房間格局</p>
                </div>
                <div className="flex items-center justify-start gap-3 gap-y-0 border-none bg-white border rounded-[0.6rem] py-4 pl-4 pr-24 w-full h-20 ">
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">市景</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">獨立衛浴</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">客廳</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">書房</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">樓層電梯</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex">
                  <img src={Deco} alt="" />
                  <p className="ml-3 text-h5">房內設備</p>
                </div>
                <div className="flex flex-wrap items-center justify-start gap-3 gap-y-0 border-none bg-white border rounded-[0.6rem] py-4 pl-4 pr-24 w-full h-28 ">
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">平面電視</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">吹風機</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">冰箱</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">熱水壺</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">檯燈</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">衣櫃</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">除濕機</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">浴缸</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">書桌</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">音響</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex">
                  <img src={Deco} alt="" />
                  <p className="ml-3 text-h5">備品提供</p>
                </div>
                <div className="flex flex-wrap items-center justify-start gap-3 gap-y-0 border-none bg-white border rounded-[0.6rem] py-4 pl-4 pr-24 w-full h-28 ">
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">衛生紙</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">拖鞋</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">沐浴用品</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">清潔用品</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">刮鬍刀</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">吊衣架</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">浴巾</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">刷牙用品</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">罐裝水</p>
                  </div>
                  <div className="flex items-baseline w-[100px]">
                    <IconButton
                      name="ic_check"
                      svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                      className="mb-2"
                      disabled={true}
                    />
                    <p className="text-body">梳子</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex">
                  <img src={Deco} alt="" />
                  <p className="ml-3 text-h5">訂房須知</p>
                </div>
                <div className="pl-4">
                  <ol className="list-decimal text-body">
                    <li>入住時間為下午3點，退房時間為上午12點。</li>
                    <li>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li>
                    <li>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li>
                    <li>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li>
                    <li>請愛惜我們的房間與公共空間，並保持整潔。</li>
                    <li>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
                    <li>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li>
                    <li>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li>
                    <li>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li>
                    <li>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="w-[30%]">
              <div className="h-[30rem] bg-white rounded-[1.2rem] px-8 py-10">
                <div className="border-b border-[#ECECEC] pb-3">
                  <p className="text-h5">預訂房型</p>
                </div>
                <div className="mt-6 text-neutral-80">
                  <p className="text-h2 mb-2">尊爵雙人房</p>
                  <p className="text-body">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                </div>
                <div className="mt-6">
                  <div className="flex gap-2">
                    <div className="border border-black w-[50%] rounded-[0.5rem] px-2 py-3 h-16">
                      <label htmlFor="check-in" className="block text-body font-medium text-neutral-80">
                        入住
                      </label>
                      <input
                        type="date"
                        id="check-in"
                        name="check-in"
                        className="mt-1 block w-full border-0 p-0 text-black placeholder-neutral-80 focus:ring-0 sm:text-sm rounded-lg"
                      />
                    </div>
                    <div className="border border-black w-[50%] rounded-[0.5rem] px-2 py-3 h-16">
                      <label htmlFor="check-out" className="block text-body font-medium text-neutral-80">
                        退房
                      </label>
                      <input
                        type="date"
                        id="check-out"
                        name="check-out"
                        className="mt-1 block w-full border-0 p-0 text-black placeholder-neutral-80 focus:ring-0 sm:text-sm rounded-md"
                      />
                    </div>
                  </div>
                  <div className="w-full flex mt-6 justify-between items-center">
                    <p className="text-body font-bold">人數</p>
                    <div className="flex justify-between w-[40%]">
                      <IconButton
                        name="ic_minus"
                        svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                        className="mb-2"
                        onClick={() => setPeople("minus")}
                      />
                      <p className="text-h6">{currentPeople}</p>
                      <IconButton
                        name="ic_plus"
                        svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                        className="mb-2"
                        onClick={() => setPeople("plus")}
                      />
                    </div>
                  </div>
                  <div className="my-6">
                    <p className="text-h5 text-primary-100">NT$ 10,000</p>
                  </div>
                  <button className="bg-primary-100 w-full h-10 rounded-[0.5rem] mt-2">
                    <p className="text-white text-body">立即預訂</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
};

export default RoomDetail3;