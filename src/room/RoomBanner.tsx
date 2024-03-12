import React from 'react'
import { NavLink } from 'react-router-dom'

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
              <div className='flex gap-1'>
                <img src="./images/web/user.png" alt="user" />
                <button className="text-neutral-0 hover:text-primary-80">J喜卡</button>
              </div>
            </NavLink>
            <NavLink to='/rooms'>
              <button className="text-neutral-0 bg-primary-100 p-4 rounded-lg hover:bg-primary-120">立即訂房</button>
            </NavLink>
          </div>
        </div>

        <div className="relative flex items-center justify-center h-[90%]">
          <div className="hidden sm:block mr-10">
            <div className="text-primary-100 text-h3 space-y-2 border-b border-[#BE9C7C] w-432 h-96">
                <p>享樂酒店</p>
                <p>Enjoyment Luxury Hotel</p>
            </div>
          </div>
          <div className='text-h1 text-white'>客房旅宿</div>

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
