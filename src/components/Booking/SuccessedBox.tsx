import { useContext, useEffect } from 'react';
import { BookingContext } from '@/contexts/BookingContext';
import { RoomContext } from '@/contexts/RoomContext';
import IconButton from '../Common/IconButton';
import Deco from "@/assets/icons/ic_Deco.svg";
import Deco_gray from "@/assets/icons/ic_Deco_gray.svg";
import LoadingModal from '../Common/LoadingModal';

const SuccessedBox = () => {
  const bookingContext = useContext(BookingContext);
  const roomContext = useContext(RoomContext);

  useEffect(() => {
    console.log("BookingContext:", bookingContext);
    console.log("RoomContext:", roomContext);
  }, [bookingContext, roomContext]);

  if (!bookingContext || !roomContext || !roomContext.selectedRoom) {
    return <LoadingModal />;
  }

  const { selectedRoom } = roomContext;
  const { checkInDate, checkOutDate, currentPeople } = bookingContext;

  const calculateDays = (checkIn: string, checkOut: string): number => {
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
  };

  const days = calculateDays(checkInDate, checkOutDate);
  const totalPrice = selectedRoom.price * days;

  return (
    <div className="h-[56rem] lg:h-[54rem] bg-white rounded-[1.2rem] p-4 lg:p-8">
      <div className='mb-4'>
        <p className='text-body'>預訂參考編號： HH2302183151222</p>
        <p className='text-h4'>即將到來的旅程</p>
      </div>

      {selectedRoom.imageUrlList && (
        <img src={selectedRoom.imageUrlList[0]} alt="Room Image" className='rounded-[1.2rem]' />
      )}

      <div className="flex justify-between py-4 text-h5">
        <p className="">{selectedRoom.name}，{days}晚</p>
        <p>|</p>
        <p>住宿人數：{currentPeople}人</p>
      </div>
      
      <div className="flex">
        <img src={Deco} alt="" />
        <p className="ml-3 text-h6">入住：{checkInDate}</p>
      </div>
      <div className="flex py-2">
        <img src={Deco_gray} alt="" />
        <p className="ml-3 text-h6">退房：{checkOutDate}</p>
      </div>

      <p className='text-h6 py-4'>NT$ {totalPrice}</p>

      <hr />
      
      <div className="flex flex-col mt-4">
        <div className="flex">
          <img src={Deco} alt="" />
          <p className="ml-3 text-h5">房內設備</p>
        </div>
        <div className="flex flex-wrap items-center gap-10 gap-y-0 border border-neutral-40 rounded-[0.6rem] mt-4 p-2 w-full h-40 lg:h-24">
          {selectedRoom.facilityInfo.filter(item => item.isProvide).map(item => (
            <div key={item.title} className="flex items-baseline w-[5rem]">
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

      <div className="flex flex-col mt-6">
        <div className="flex">
          <img src={Deco} alt="" />
          <p className="ml-3 text-h5">備品提供</p>
        </div>
        <div className="flex flex-wrap items-center gap-10 gap-y-0 border border-neutral-40 rounded-[0.6rem] mt-4 p-2 w-full h-40 lg:h-32">
          {selectedRoom.amenityInfo.filter(item => item.isProvide).map(item => (
            <div key={item.title} className="flex items-baseline w-[5rem]">
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
    </div>
  );
}

export default SuccessedBox;
