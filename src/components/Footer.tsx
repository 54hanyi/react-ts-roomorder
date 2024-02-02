import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="relative bg-[#140F0A] h-[25rem] w-full flex">
        <div className="absolute top-20 left-48">
            <img src="/images/web/logo.png" alt="logo" className="h-16" />
            <div className='flex mt-6 gap-5'>
              <img src="/images/web/LineImg.png" alt="logo" className="h-9 " />
              <img src="/images/web/IG.png" alt="logo" className="h-9" />
            </div>
            <p className='text-white text-body pt-16'>806087 台灣高雄市新興區八角壓路87號</p>
        </div>

        <div className="absolute top-[5.4rem] right-48 text-white">
          <div className='flex gap-20'>
            <div className='text-body'>
              <p className=''>TEL</p>
              <p className=''>+886-7-8787877</p>
            </div>
            <div className='text-body'>
              <p className=''>MAIL</p>
              <p className=''>elh6666@hexschool.com</p>
            </div>
          </div>

          <div className='flex gap-20 mt-12'>
            <div className='text-body'>
              <p className=''>FAX</p>
              <p className=''>+886-7-8888777</p>
            </div>
            <div className='text-body'>
              <p className=''>WEB</p>
              <p className=''>www.elhhexschool.com.tw</p>
            </div>
          </div>
          <p className='text-white text-right text-body pt-14'>© 享樂酒店 2023 All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}
