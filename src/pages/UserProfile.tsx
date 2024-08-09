import { useContext } from 'react';
import UserContext from '@/context/UserContext';

import Line3 from '@/assets/icons/Line3.svg';
import UserInfo from '@/components/User/UserInfo';
import UserOrder from '@/components/User/UserOrder';

export default function UserProfile() {
  const userContext = useContext(UserContext);

  return (
    <>
      <div className="relative bg-[#140F0A] h-[70rem]">
        <div className="inset-0 h-[20rem] bg-[url('/images/web/hero.png')] bg-cover bg-center flex items-center justify-center">
          <p className='text-white text-h1'>{userContext.userName}，您好</p>
        </div>
        <div className='px-60 py-16'>
          <div className="flex text-white gap-6">
            <button className="relative custom-underline">個人資料</button>
            <button className="relative custom-underline">我的訂單</button>
          </div>
          <UserInfo />
          {/* <UserOrder /> */}
        </div>

        <img src={Line3} alt="Line2" className='absolute bottom-0 w-full'/>
      </div>
    </>
  );
}
