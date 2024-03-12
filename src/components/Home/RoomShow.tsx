// import React from 'react'
import { Link } from 'react-router-dom'

import HomeButton from '../HomeButton'
import Line2 from '../../assets/icons/Line2.svg'
import BG from '../../assets/icons/BG.svg'
import Rectangle1 from '../../assets/icons/Rectangle1.svg'
import Rectangle234 from '../../assets/icons/Rectangle234.svg'

export default function RoomShow() {
  

  return (
    <>
      <div className="flex bg-black h-880 w-full">
        <div className="py-10 w-1/2 ">
          <div className="relative bg-[url('/images/web/room1.png')] bg-cover bg-center h-[45rem] w-[45rem]">
            <div className='absolute inset-x-0 bottom-0 flex justify-center items-end pb-4'>
            <img src={Rectangle1} alt="Rectangle1" className="" />
            <img src={Rectangle234} alt="Rectangle234" className="ml-1" />
            <img src={Rectangle234} alt="Rectangle234" className="ml-1" />
            <img src={Rectangle234} alt="Rectangle234" className="ml-1" />
            <img src={Rectangle234} alt="Rectangle234" className="ml-1" />
          </div>
          </div>
        </div>

        <div className="w-1/2 p-0 relative">
          <img src={Line2} alt="Line2" className='absolute top-20 right-0 max-w-none h-auto'/>
          {/* <img src={BG} alt="BG" className='absolute top-60 right-0 h-full max-h-[44rem] w-auto'/> */}
          <div className="absolute inset-0 left-[-2rem] bg-cotain bg-right-bottom p-12 flex flex-col justify-center" style={{ backgroundImage: `url(${BG})` }}>
            <div className='pt-72'>
              <p className="text-h2 text-white mb-4">尊爵商人房</p>
              <p className="text-body text-white mb-4">台北市中心位置，距离地铁站仅五分钟步行距离。</p>
              <p className="text-h3 text-white font-bold">NT$ 10,000</p>
              <Link to='/rooms'>
                <HomeButton text="查看更多" width="w-[60%]"/>    
              </Link>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
  
}
