import SeoHelmet from '@/components/Common/SeoHelmet';
import { useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { BookingContext } from '@/contexts/BookingContext';
import RoomDetailInfo from "../components/Room/RoomDetailInfo";
import RoomDetailBox from "../components/Room/RoomDetailBox";
import { apiGetRoomType } from "@/assets/api";
import { IRoom } from '@/types';
import LoadingModal from '@/components/Common/LoadingModal';

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  // console.log('Room ID:', id); // 確認 id 是否正確
  const bookingContext = useContext(BookingContext);
  const location = useLocation(); 

  useEffect(() => {
    const getRoomDetail = async () => {
      try {
        if (id) {
          const token = localStorage.getItem('authToken') || ''; 
          const data = await apiGetRoomType(id, token); 

          if (data && data.status === true && data.result) {
            bookingContext?.setRoom(data.result as IRoom); 
          } else {
            console.error('Invalid data structure', data);
          }
        }
      } catch (error) {
        console.error('Failed to fetch room detail:', error); 
      }
    };

    getRoomDetail();
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
      <SeoHelmet
        title="房型詳情｜豪華酒店預訂系統"
        description="查看房型照片、設備與詳細資訊，立即完成預約。"
      />
      <div className="bg-[#F7F2EE]">
        <div className="p-4 lg:p-16">
          <div className="flex gap-1 lg:gap-2">
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

          <div className="lg:flex my-6 lg:my-16 py-6 gap-20 justify-center">
            <div className="flex flex-col gap-10 w-full lg:w-[45%]">
              <RoomDetailInfo roomList={bookingContext.room} />
            </div>
            <div className="w-full lg:w-[30%]">
              <RoomDetailBox roomList={bookingContext.room} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
