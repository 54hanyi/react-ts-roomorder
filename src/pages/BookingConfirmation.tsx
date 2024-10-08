import { useState, useContext } from "react";
import { BookingContext } from "@/contexts/BookingContext";
import BookingInfo from '@/components/Booking/BookingInfo';
import BookingBox from "@/components/Booking/BookingBox";
import LoadingModal from '@/components/Common/LoadingModal';

const BookingConfirmation = () => {
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true); // 用于跟踪表单验证状态
  const bookingContext = useContext(BookingContext);

  if (!bookingContext || !bookingContext.room) {
    console.log('Booking context in BookingConfirmation:', bookingContext);
    return <LoadingModal />;
  }

  return (
    <>
      {loading && <LoadingModal />}
      <div className="bg-[#F7F2EE]">
        <div className="p-16">
          <div className="flex my-16 py-8 gap-20 justify-center">           
            <div className="flex flex-col gap-6 w-[45%]">
              <BookingInfo setIsValid={setIsValid} />
            </div>
            <div className="w-[30%]">
              <BookingBox setLoading={setLoading} isValid={isValid} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingConfirmation;
