import React from 'react'
import Line2 from '../assets/icons/Line2.svg'
import Navbar from '../components/Navbar'

export default function SignUp() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex bg-[#140F0A]" style={{ height: 'calc(100vh - 6rem)' }}>
          <div className="w-[50%] bg-cover bg-bottom bg-[url('/images/web/register.png')] h-auto z-10"></div>
          <div className="relative w-[50%] flex items-center justify-center">
            <img src={Line2} alt="Line2" className='absolute top-14 right-0 w-full'/>
            <div className="flex flex-col w-[50%] ">
              <p className='text-title mb-2 text-primary-100'>享樂酒店，誠摯歡迎</p>
              <p className='text-h1 text-white'>立即註冊</p>
              <div className='flex gap-1 justify-center items-center pt-6'>
                <img src="/images/web/step1.png" alt="" className='h-10 w-20'/>
                <img src="/images/web/stepline.png" alt="" className='h-[1px] w-48'/>
                <img src="/images/web/step2.png" alt="" className='h-10 w-20'/>
              </div>
              <form action="" className='text-white'>
                <div className='mt-8'>
                  <label htmlFor="email">
                    電子信箱
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="text-neutral-60 mt-1 w-full px-3 py-2 border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100"
                    placeholder='hello@exsample.com'
                  />
                </div>
                <div className='mt-4'>
                  <label htmlFor="password">
                    密碼
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="text-neutral-60 mt-1 w-full px-3 py-2 border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100"
                    placeholder='請輸入密碼'
                  />
                </div>
                <div className='mt-4'>
                  <label htmlFor="confirm">
                    確認密碼
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    className="text-neutral-60 mt-1 w-full px-3 py-2 border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100"
                    placeholder='請再次輸入密碼'
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-[3rem] mt-8 px-4 py-2 text-body font-medium text-neutral-60 bg-neutral-40 rounded-md focus:outline-none focus:ring-primary-100 hover:bg-primary-100 hover:text-white"
                >
                  下一步
                </button>
                <div className="flex text-body mt-4">
                  <p>已經有會員了嗎？</p>
                  <a href="" className='text-primary-100 underline ml-1'>立即登入</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
