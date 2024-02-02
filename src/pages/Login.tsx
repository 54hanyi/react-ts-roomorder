import React from 'react'
import Line2 from '../assets/icons/Line2.svg'

export default function Login() {
  return (
    <>
      <div className="flex bg-[#140F0A] h-screen w-full">
        <div className="w-[50%] bg-cover bg-center bg-[url('/images/web/register.png')] h-screen z-10"></div>
        <div className="relative w-[50%] flex items-center justify-center">
          <img src={Line2} alt="Line2" className='absolute top-24 right-0 w-full'/>
          <div className="flex flex-col w-[50%] ">
            <p className='text-title mb-2 text-primary-100'>享樂酒店，誠摯歡迎</p>
            <p className='text-h1 text-white'>立即開始旅程</p>
            <form action="" className='text-white'>
              <div className='mt-8'>
                <label htmlFor="">
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
                <label htmlFor="">
                  密碼
                </label>
                <input
                  id="password"
                  type="password"
                  className="text-neutral-60 mt-1 w-full px-3 py-2 border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100"
                  placeholder='請輸入密碼'
                />
              </div>

              <div className='flex justify-between items-center mt-2'>
                <label htmlFor="" className='flex items-center space-x-2'>
                  <input 
                    type="checkbox" 
                    className='h-3.5 w-3.5 pt-0.5'
                  />
                  <span className='text-body'>記住帳號</span>
                </label>
                <a href="" className='text-body text-primary-100 underline ml-1'>忘記密碼？</a>
              </div>

              <button
                type="submit"
                className="w-full h-[3rem] mt-8 px-4 py-2 text-body font-medium text-neutral-60 bg-neutral-40 rounded-md focus:outline-none focus:ring-primary-100 hover:bg-primary-100"
              >
                會員登入
              </button>
              <div className="flex text-body mt-4">
                <p>沒有會員嗎？</p>
                <a href="" className='text-primary-100 underline ml-1'>前往註冊</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
