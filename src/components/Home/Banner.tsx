// import React from 'react'
import { NavLink } from 'react-router-dom'

import HomeButton from '../HomeButton'
import Rectangle1 from '../assets/icons/Rectangle1.svg'
import Rectangle234 from '../assets/icons/Rectangle234.svg'


export default function Banner() {
  return (
    <>
      <div className="relative bg-cover bg-center bg-[url('/images/web/banner.png')] h-screen w-full py-5 px-12">
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative flex justify-between items-center z-100">
          <NavLink to='/'>
            <img src="./images/web/logo.png" alt="logo" className="h-13" />
          </NavLink>
          <div className="flex items-center gap-8 text-body">
            <NavLink to='/rooms'>
              <button className="text-neutral-0 hover:text-primary-80">客房旅宿</button>
            </NavLink>
            <NavLink to='/login'>
              <button className="text-neutral-0 hover:text-primary-80">會員登入</button>
            </NavLink>
            <NavLink to='/rooms'>
              <button className="text-neutral-0 bg-primary-100 p-4 rounded-lg hover:bg-primary-120">立即訂房</button>
            </NavLink>
          </div>
        </div>

        <div className="relative flex items-center justify-center z-10 gap-30 mt-20">
          <div className="flex-1 hidden sm:block">
            <div className="text-primary-100 text-h3 space-y-2 border-b border-[#BE9C7C] w-480 h-96">
                <p>享樂酒店</p>
                <p>Enjoyment Luxury Hotel</p>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative border border-t-0 border-l-0 rounded-80 shadow-sm border-[#F5F7F9] bg-neutral-0 bg-opacity-10 backdrop-blur-md w-648 h-500 ">
              <div className="absolute left-[-2.5rem] text-neutral-0 ">
                <p className="text-display pt-16">高雄</p>
                <p className="text-display my-4">豪華住宿之選</p>
                <p className="text-h3 my-4">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                <NavLink to='/rooms'>
                  <HomeButton text="立即訂房" width="w-full"/>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 flex justify-center items-end pb-4'>
          <img src={Rectangle1} alt="Rectangle1" className="" />
          <img src={Rectangle234} alt="Rectangle234" className="ml-1" />
          <img src={Rectangle234} alt="Rectangle234" className="ml-1" />
          <img src={Rectangle234} alt="Rectangle234" className="ml-1" />
          <img src={Rectangle234} alt="Rectangle234" className="ml-1" />
        </div>
      </div>
    </>
  )
}
