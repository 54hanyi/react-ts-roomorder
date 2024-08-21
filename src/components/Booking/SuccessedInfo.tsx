import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '@/context/UserContext';
import Button from '../Common/Button';


export default function SuccessedInfo() {
  const userContext = useContext(UserContext);
  
  return (
    <>
      <div className='text-white'>
        <p className='text-h4 pb-2'>歡迎，{userContext.userName}</p>
        <p className='text-h4 pb-6'>恭喜您已成功預訂！</p>
        <p className='text-body pb-10'>我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。</p>
      </div>
      
      <hr />

      <div className='text-white my-10'>
        <p className='text-h5 mb-2'>立即查看您的訂單紀錄</p>
        <Link to="/user-profile" >        
          <Button
            title="前往我的訂單"
            buttonStyle="primary"
            defaultClass="w-[30%] h-10 rounded-[0.5rem] mt-2 bg-primary-100 hover:bg-primary-120"
            // onClick={handleBookingClick}
            buttonType="button"
          />
        </Link>
      </div>

      <hr />

      <div className='text-white mt-10'>
        <p className='text-h5'>訂房人資訊</p>
        <div className='mt-6'>
          <p>姓名</p>
          <p className='mb-3'>{userContext.userName}</p>
          <p>手機號碼</p>
          <p className='mb-3'>{userContext.phone}</p>
          <p>電子信箱</p>
          <p className='mb-3'>{userContext.email}</p>
        </div>
      </div>
    </>
  )
}
