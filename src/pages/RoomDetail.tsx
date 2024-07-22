import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import RoomDetailInfo from "../components/Room/RoomDetailInfo";
import RoomDetailBox from "../components/Room/RoomDetailBox";
import { apiGetRoomType } from "@/assets/api";
import { IRoom } from '@/types';

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<IRoom | null>(null);

  useEffect(() => {
    const getRoomDetail = async () => {
      try {
        if (id) {
          const token = localStorage.getItem('authToken') || ''; // 獲取token
          const data = await apiGetRoomType(id, token); // 調用apiGetRoomType函數以獲取房型詳細資料
          console.log('Fetched room detail:', data); // 添加調試信息
          setRoom(data.result as IRoom); // 確保類型匹配
        }
      } catch (error) {
        console.error('Failed to fetch room detail:', error); // 錯誤處理
      }
    };

    getRoomDetail(); // 調用獲取房型詳細資料的函數
  }, [id]);

  if (!room) {
    return <div className='text-3xl'>努力尋找中...</div>;
  }

  console.log('Room List:', room); // 確認數據加載

  return (
    <>
      <Navbar />
      <div className="bg-[#F7F2EE]">
        <div className="p-16">
          <div className="flex gap-2">
            <div className="flex w-[55%]">
              <img
                src={room.imageUrl}
                alt="Room View"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-2 w-[45%]">
              {room.imageUrlList.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Room View ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg col-span-2"
                />
              ))}
            </div>
          </div>

          <div className="flex my-16 py-8 gap-20 justify-center">
            <div className="flex flex-col gap-10 w-[45%]">
              <RoomDetailInfo roomList={room} />
            </div>
            <div className="w-[30%]">
              <RoomDetailBox roomList={room} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoomDetail;
