import Line3 from '@/assets/icons/Line3.svg';
import SeoHelmet from '@/components/Common/SeoHelmet';
import SuccessedInfo from '@/components/Booking/SuccessedInfo';
import SuccessedBox from '@/components/Booking/SuccessedBox';

function BookingSuccessed() {
  return (
    <>
      <SeoHelmet
        title="訂房成功｜豪華酒店預訂系統"
        description="您已成功完成訂房，祝您旅途愉快。"
        canonical="https://54hanyi.github.io/react-ts-roomorder/success"
      />
      <div className="relative bg-[#140F0A] lg:h-[68rem] h-[102rem]">
        <div className="lg:flex justify-center px-4 py-10 lg:px-60 lg:gap-20">
          <div className="w-full lg:w-[50%] mb-10">
            <SuccessedInfo />                     
          </div>
          <div className="w-full lg:w-[40%]">
            <SuccessedBox />                     
          </div>
        </div>
        <img src={Line3} alt="Line2" className='absolute bottom-0 w-full' loading="lazy" />
      </div>
    </>
  )
}

export default BookingSuccessed;