import { useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { BookingContext } from '@/context/BookingContext';
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import RoomDetailInfo from "../components/Room/RoomDetailInfo";
import RoomDetailBox from "../components/Room/RoomDetailBox";
import { apiGetRoomType } from "@/assets/api";
import { IRoom } from '@/types';
import LoadingModal from '@/components/Common/LoadingModal';

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const bookingContext = useContext(BookingContext);
  const location = useLocation(); // 移除类型参数

  useEffect(() => {
    const getRoomDetail = async () => {
      try {
        if (id) {
          const token = localStorage.getItem('authToken') || ''; // 获取 token
          const data = await apiGetRoomType(id, token); // 调用 apiGetRoomType 函数以获取房型详细资料

          // 检查数据格式是否正确
          if (data && data.status === true && data.result) {
            bookingContext?.setRoom(data.result as IRoom); // 确保类型匹配
          } else {
            console.error('Invalid data structure', data);
          }
        }
      } catch (error) {
        console.error('Failed to fetch room detail:', error); 
      }
    };

    getRoomDetail(); // 调用获取房型详细资料的函数
  }, [id, bookingContext]);

  useEffect(() => {
    if (location.state) {
      const { checkInDate, checkOutDate, currentPeople } = location.state as {
        checkInDate: string;
        checkOutDate: string;
        currentPeople: number;
      };
      if (bookingContext) {
        bookingContext.setCheckInDate(checkInDate);
        bookingContext.setCheckOutDate(checkOutDate);
        bookingContext.setCurrentPeople(currentPeople);
      }
    }
  }, [location.state, bookingContext]);

  if (!bookingContext?.room) {
    return <LoadingModal />;
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#F7F2EE]">
        <div className="p-16">
          <div className="flex gap-2">
            <div className="flex w-[55%]">
              <img
                src={bookingContext.room.imageUrl}
                alt="Room View"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-2 w-[45%]">
              {bookingContext.room.imageUrlList.map((url, index) => (
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
              <RoomDetailInfo roomList={bookingContext.room} />
            </div>
            <div className="w-[30%]">
              <RoomDetailBox roomList={bookingContext.room} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoomDetail;
