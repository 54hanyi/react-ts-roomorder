import RoomCard from "./RoomCard";
import { room2, room3, room4, room5 } from "../../data/roomImgList";
import { roomList } from "../../data/roomList";

const RoomChoose = () => {


  return (
    <>
      <div className="px-60 py-20 bg-[#F7F2EE]">
        <div className="flex flex-col ">
          <div className="text-h5 text-primart-0 mb-6">房型選擇</div>
          <div className="text-h1 text-primary-100 mb-12">各種房型，任您挑選</div>
          <RoomCard roomList={roomList[0]} imageList={room2} />
          <RoomCard roomList={roomList[1]} imageList={room3} />
          <RoomCard roomList={roomList[2]} imageList={room4} />
          <RoomCard roomList={roomList[3]} imageList={room5} />
          <RoomCard roomList={roomList[4]} imageList={room5} />
        </div>
      </div>
    </>
  )
};

export default RoomChoose;