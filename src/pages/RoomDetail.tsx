import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import RoomDetailInfo from "../components/Room/RoomDetailInfo";
import RoomDetailBox from "../components/Room/RoomDetailBox";
import { fetchRoomDetail } from "../assets/api";
import { RoomItem } from '../types/room';
import { roomList } from '../data/roomList';

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<RoomItem | null>(null);

  useEffect(() => {
    const getRoomDetail = async () => {
      try {
        if (id) {
          const data = await fetchRoomDetail(id);
          setRoom(data.result);
        }
      } catch (error) {
        console.error('Failed to fetch room detail:', error);
      }
    };

    getRoomDetail();
  }, [id]);

  if (!room) {
    return <div>Loading...</div>;
  }

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
              <RoomDetailBox roomList={roomList[0]} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoomDetail;
