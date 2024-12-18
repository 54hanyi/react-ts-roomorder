import Line3 from '@/assets/icons/Line3.svg';
import SuccessedInfo from '@/components/Booking/SuccessedInfo';
import SuccessedBox from '@/components/Booking/SuccessedBox';

function BookingSuccessed() {
  return (
    <>
      <div className="relative bg-[#140F0A] lg:h-[68rem] h-[102rem]">
        <div className="lg:flex justify-center px-4 py-10 lg:px-60 lg:gap-20">
          <div className="w-full lg:w-[50%] mb-10">
            <SuccessedInfo />                     
          </div>
          <div className="w-full lg:w-[40%]">
            <SuccessedBox />                     
          </div>
        </div>
        <img src={Line3} alt="Line2" className='absolute bottom-0 w-full'/>
      </div>
    </>
  )
}

export default BookingSuccessed;