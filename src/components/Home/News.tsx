// import React from 'react'
import NewsCard from './NewsCard'


export default function News() {
  return (
    <>
      <div className='relative grid grid-cols-12 gap-4 p-14 w-full h-960 bg-[#F7F2EE]'>
        <img
          src="./images/web/dot.png"
          alt="Top Right Dots"
          className="absolute top-10 right-28 h-36"
        />
        <div className="flex flex-col items-end pr-14 col-span-3 ">
          <div className="border-b border-[#BE9C7C] pb-6">
            <p className="text-primary-100 text-h1">
              最新
            </p>
            <p className="text-primary-100 text-h1">
              消息
            </p>
          </div>
        </div>
        <div className="col-span-9">
          <NewsCard />
        </div>
        <img
          src="./images/web/dot.png"
          alt="Dots Bottom Left"
          className="absolute bottom-[-4.5rem] left-32 h-36"
        />
      </div>
    </>
  )
}
