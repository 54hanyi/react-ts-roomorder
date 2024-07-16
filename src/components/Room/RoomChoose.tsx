import { useState, useEffect } from 'react';
import RoomCard from "./RoomCard";
// import { room2, room3, room4, room5 } from "../../data/roomImgList";
import { fetchRoomList } from "../../assets/api";
import { RoomItem } from "../../types/room";

const RoomChoose = () => {
  const [roomList, setRoomList] = useState<RoomItem[]>([]);

  useEffect(() => {
    const getRoomList = async () => {
      try {
        const data = await fetchRoomList();
        console.log("Fetched room list: ", data.result);
        setRoomList(data.result);
      } catch (error) {
        console.error('Failed to fetch room list:', error);
      }
    };

    getRoomList();
  }, []);

  return (
    <>
      <div className="px-60 py-20 bg-[#F7F2EE]">
        <div className="flex flex-col ">
          <div className="text-h5 text-primart-0 mb-6">房型選擇</div>
          <div className="text-h1 text-primary-100 mb-12">各種房型，任您挑選</div>
          {roomList.map((room) => (
            <RoomCard key={room._id} roomList={room} imageList={room.imageUrlList} />
          ))}
        </div>
      </div>
    </>
  )
};

export default RoomChoose;