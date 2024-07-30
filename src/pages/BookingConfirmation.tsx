import { useContext } from "react";
import { BookingContext } from "@/context/BookingContext";
import BookingInfo from '@/components/Room/BookingInfo';
import Footer from '@/components/Layout/Footer';
import Navbar from "../components/Layout/Navbar";

const BookingConfirmation = () => {
  const bookingContext = useContext(BookingContext);

  // 确保 bookingContext 不为空，并且房间数据已加载
  if (!bookingContext || !bookingContext.room) {
    console.log('Booking context in BookingConfirmation:', bookingContext);
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#F7F2EE]">
        <div className="p-16">
          <div className="flex my-16 py-8 gap-20 justify-center">           
            <div className="flex flex-col gap-6 w-[45%]">
              <BookingInfo />
            </div>
            <div className="w-[30%]">

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookingConfirmation;
