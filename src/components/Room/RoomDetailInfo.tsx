import IconButton from "../../components/Common/IconButton";
import { IRoom } from "../../types/room";
import Deco from "../../assets/icons/ic_Deco.svg";

interface RoomDetailInfoProps {
  roomList: IRoom;
}

export default function RoomDetailInfo({ roomList }: RoomDetailInfoProps) {
  return (
    <>
      <div className="my-3">
        <p className="text-h1 mb-2">{roomList.name}</p>
        <p className="text-body">{roomList.description}</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex">
          <img src={Deco} alt="" />
          <p className="ml-3 text-h5">房型基本資訊</p>
        </div>
        <div className="flex gap-5">
          <div className="border-none bg-white rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
            <IconButton
              name="ic_Size"
              svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
              className="mb-2"
              disabled={true}
            />
            <p className="text-body font-bold">{roomList.areaInfo}</p>
          </div>
          <div className="border-none bg-white rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
            <IconButton
              name="ic_Bed"
              svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
              className="mb-2"
              disabled={true}
            />
            <p className="text-body font-bold">{roomList.bedInfo}</p>
          </div>
          <div className="border-none bg-white rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
            <IconButton
              name="ic_Person"
              svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
              className="mb-2"
              disabled={true}
            />
            <p className="text-body font-bold">{roomList.maxPeople} 人</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex">
          <img src={Deco} alt="" />
          <p className="ml-3 text-h5">房間格局</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 gap-y-0 border-none bg-white rounded-[0.6rem] py-4 pl-4 pr-24 w-full h-22">
          {roomList.layoutInfo.filter(item => item.isProvide).map((item, index) => (
            <div key={index} className="flex items-baseline w-[100px]">
              <IconButton
                name="ic_check"
                svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                className="mb-2"
                disabled={true}
              />
              <p className="text-body">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex">
          <img src={Deco} alt="" />
          <p className="ml-3 text-h5">房內設備</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 gap-y-0 border-none bg-white rounded-[0.6rem] py-4 pl-4 pr-24 w-full h-28">
          {roomList.facilityInfo.filter(item => item.isProvide).map((item, index) => (
            <div key={index} className="flex items-baseline w-[100px]">
              <IconButton
                name="ic_check"
                svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                className="mb-2"
                disabled={true}
              />
              <p className="text-body">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex">
          <img src={Deco} alt="" />
          <p className="ml-3 text-h5">備品提供</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 gap-y-0 border-none bg-white rounded-[0.6rem] py-4 pl-4 pr-24 w-full h-28">
          {roomList.amenityInfo.filter(item => item.isProvide).map((item, index) => (
            <div key={index} className="flex items-baseline w-[100px]">
              <IconButton
                name="ic_check"
                svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                className="mb-2"
                disabled={true}
              />
              <p className="text-body">{item.title}</p>
            </div>
          ))}
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
    </>
  )
}
