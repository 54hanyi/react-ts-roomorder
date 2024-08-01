import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import IconButton from "../../components/Common/IconButton";
import { IRoom } from "../../types/room";
import { BookingContext } from "@/context/BookingContext";
import { RoomContext } from "@/context/RoomContext";

interface RoomDetailBoxProps {
  roomList: IRoom;
}

export default function RoomDetailBox({ roomList }: RoomDetailBoxProps) {
  const [currentPeople, setCurrentPeople] = useState(1);
  const navigate = useNavigate();
  const bookingContext = useContext(BookingContext);
  const roomContext = useContext(RoomContext);

  // 初始化日期状态
  const [checkInDate, setCheckInDate] = useState<string>(bookingContext?.checkInDate || '');
  const [checkOutDate, setCheckOutDate] = useState<string>(bookingContext?.checkOutDate || '');

  // 获取selectedRoom的maxPeople
  const maxPeople = roomContext?.selectedRoom?.maxPeople || 1;

  const setPeople = (state: string) => {
    if (state === "plus") {
      setCurrentPeople((prev) => Math.min(prev + 1, maxPeople));
    } else if (state === "minus") {
      setCurrentPeople((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleDateChange = (setDate: React.Dispatch<React.SetStateAction<string>>, date: string) => {
    setDate(date);

    // 验证日期顺序
    if (setDate === setCheckInDate && checkOutDate && new Date(date) >= new Date(checkOutDate)) {
      setCheckOutDate(''); // 清空退房日期
      alert('入住日期不能晚于或等于退房日期');
    }
  };

  const handleBookingClick = () => {
    if (!roomList || !checkInDate || !checkOutDate || currentPeople <= 0) {
      console.error('Incomplete booking information');
      return;
    }

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (checkOut <= checkIn) {
      console.error('Check-out date must be after check-in date');
      alert('退房日期必須晚於入住日期');
      return;
    }

    // 更新 BookingContext 中的状态
    if (bookingContext) {
      console.log("Setting room to booking context:", roomList);
      bookingContext.setRoom(roomList);
      bookingContext.setCheckInDate(checkInDate);
      bookingContext.setCheckOutDate(checkOutDate);
      bookingContext.setCurrentPeople(currentPeople);
      console.log("Booking context after set:", bookingContext);
    } else {
      console.error('BookingContext is not defined');
    }
    navigate('/confirm-booking');
  };

  return (
    <div className="h-[30rem] bg-white rounded-[1.2rem] px-8 py-10">
      <div className="border-b border-[#ECECEC] pb-3">
        <p className="text-h5">預訂房型</p>
      </div>
      <div className="mt-6 text-neutral-80">
        <p className="text-h2 mb-2">{roomList.name}</p>
        <p className="text-body">{roomList.description}</p>
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
              value={checkInDate}
              onChange={(e) => handleDateChange(setCheckInDate, e.target.value)}
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
              value={checkOutDate}
              onChange={(e) => handleDateChange(setCheckOutDate, e.target.value)}
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
          <p className="text-h5 text-primary-100">NT ${roomList.price}</p>
        </div>
        <button
          className="bg-primary-100 w-full h-10 rounded-[0.5rem] mt-2 hover:bg-primary-120"
          onClick={handleBookingClick}
        >
          <span className="text-white text-body">立即預訂</span>
        </button>
      </div>
    </div>
  );
}
