import Line3 from '@/assets/icons/Line3.svg';
import SuccessedInfo from '@/components/Booking/SuccessedInfo';
import SuccessedBox from '@/components/Booking/SuccessedBox';

function BookingSuccessed() {
  return (
    <>
      <div className="relative bg-[#140F0A] h-[68rem]">
        <div className="flex justify-center py-10 px-60 gap-20">
          <div className="w-[50%]">
            <SuccessedInfo />                     
          </div>
          <div className="w-[40%]">
            <SuccessedBox />                     
          </div>
        </div>
        <img src={Line3} alt="Line2" className='absolute bottom-0 w-full'/>
      </div>
    </>
  )
}

export default BookingSuccessed;