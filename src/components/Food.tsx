import React from 'react'
import DecoLine2 from '../assets/icons/DecoLine2.svg'
import FoodCards from './FoodCards'


export default function Food() {
  return (
    <>
      <div className="bg-[#F7F2EE] h-800 w-full">
        <div className="relative">
          <img src="/images/web/line.png" alt="" className='absolute top-10 h-800' />
        </div>
        <div className="relative">
          <img src="/images/web/dot.png" alt="" className='absolute right-14 top-[-5rem] h-[10rem]' />
        </div>

        <div className="flex justify-start items-start pt-28 pl-48">
          <div className='relative flex flex-col items-start text-h1 text-primary-100 overflow-x-auto'>
            <p>佳餚</p>
            <p>美饌</p>
            <img src={DecoLine2} alt="Line" className="absolute top-12 left-28 w-48" />
            <FoodCards/>
          </div>
        </div>

      </div>
    </>
  )
}
