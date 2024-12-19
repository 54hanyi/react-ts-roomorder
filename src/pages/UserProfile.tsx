import { useContext, useState } from 'react';
import UserContext from '@/contexts/UserContext';

import Line3 from '@/assets/icons/Line3.svg';
import UserInfo from '@/components/User/UserInfo';
import UserOrder from '@/components/User/UserOrder';

export default function UserProfile() {
  const userContext = useContext(UserContext);
  const [activeTab, setActiveTab] = useState<'profile' | 'orders'>('profile'); // 預設為 "profile"

  const handleTabClick = (tab: 'profile' | 'orders') => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={`relative bg-[#140F0A] ${activeTab === 'profile' ? "lg:h-[70rem]" : "lg:h-[110rem]"} ${activeTab === 'profile' ? "h-[80rem]" : "h-[170rem]"}`}>
        <div className="inset-0 h-[20rem] bg-[url('/images/web/hero.png')] bg-cover bg-center flex items-center justify-center">
          <p className='text-white text-h1'>{userContext.userName}，您好</p>
        </div>
        <div className='lg:px-60 px-8 py-16'>
          <div className="flex text-white gap-6">
            <button
              className={`relative custom-underline ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => handleTabClick('profile')}
            >
              個人資料
            </button>
            <button
              className={`relative custom-underline ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => handleTabClick('orders')}
            >
              我的訂單
            </button>
          </div>
          <div className="mt-8">
            {activeTab === 'profile' && <UserInfo />}
            {activeTab === 'orders' && <UserOrder />}
          </div>
        </div>

        <img src={Line3} alt="Line3" className='absolute bottom-0 w-full'/>
      </div>
    </>
  );
}
