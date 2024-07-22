import { useState, useEffect } from 'react';
import RoomCard from "./RoomCard";
import { apiGetRoomType } from "@/assets/api";
import { IRoom } from "@/types";

const RoomChoose = () => {
  const [roomList, setRoomList] = useState<IRoom[]>([]);

  useEffect(() => {
    const getRoomList = async () => {
      try {
        const token = localStorage.getItem('authToken') || ''; // 獲取token
        const data = await apiGetRoomType(undefined, token); // 調用apiGetRoomType函數以獲取房型列表
        console.log("Fetched room list: ", data.result);
        setRoomList(data.result as IRoom[]); // 確保類型匹配
      } catch (error) {
        console.error('Failed to fetch room list:', error);
      }
    };

    getRoomList(); // 調用獲取房型列表的函數
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
