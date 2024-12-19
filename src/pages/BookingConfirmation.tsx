import { useState, useContext } from "react";
import { BookingContext } from "@/contexts/BookingContext";
import BookingInfo from '@/components/Booking/BookingInfo';
import BookingBox from "@/components/Booking/BookingBox";
import LoadingModal from '@/components/Common/LoadingModal';

const BookingConfirmation = () => {
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const bookingContext = useContext(BookingContext);

  if (!bookingContext || !bookingContext.room) {
    console.log('Booking context in BookingConfirmation:', bookingContext);
    return <LoadingModal />;
  }

  return (
    <>
      {loading && <LoadingModal />}
      <div className="bg-[#F7F2EE]">
        <div className="p-4 lg:p-16">
          <div className="lg:flex my-16 py-8 gap-20 justify-center">           
            <div className="flex flex-col gap-6 w-full lg:w-[45%]">
              <BookingInfo setIsValid={setIsValid} />
            </div>
            <div className="w-full lg:w-[30%]">
              <BookingBox setLoading={setLoading} isValid={isValid} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingConfirmation;
