import React from 'react'
import Line2 from '../assets/icons/Line2.svg'
import Navbar from '../components/Navbar'

export default function SignUp2() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex bg-[#140F0A]" style={{ height: 'calc(100vh - 6rem)' }}>
          <div className="w-[50%] bg-cover bg-bottom bg-[url('/images/web/register.png')] h-auto z-10"></div>
          <div className="relative w-[50%] flex items-center justify-center">
            <img src={Line2} alt="Line2" className='absolute top-14 right-0 w-full'/>
            <div className="flex flex-col w-[50%] ">
              <p className='text-h1 text-white'>立即註冊</p>
              <div className='flex gap-1 justify-center items-center pt-4'>
                <img src="/images/web/step1-2.png" alt="" className='h-10 w-20'/>
                <img src="/images/web/stepline.png" alt="" className='h-[2px] w-48'/>
                <img src="/images/web/step2-2.png" alt="" className='h-10 w-20'/>
              </div>
              <form action="" className='text-white'>
                <div className='mt-6'>
                  <label htmlFor="name">
                    姓名
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="text-neutral-60 mt-1 w-full px-3 py-2 border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100"
                    placeholder='請輸入姓名'
                  />
                </div>
                <div className='mt-3'>
                  <label htmlFor="phoneNumber">
                    手機號碼
                  </label>
                  <input
                    id="tel"
                    type="phone"
                    className="text-neutral-60 mt-1 w-full px-3 py-2 border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100"
                    placeholder='請輸入手機號碼'
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="birthday">
                    生日
                  </label>
                  <div className="flex gap-3 mt-1 text-neutral-60">
                    <select id="year" className="block py-2 px-3 appearance-none w-full border border-[#ECECEC] rounded shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100">
                      <option>1998</option>
                      <option>1999</option>
                    </select>
                    <select id="month" className="block py-2 px-3 appearance-none w-full border border-[#ECECEC] rounded shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100">
                      <option>04</option>
                      <option>05</option>
                    </select>
                    <select id="day" className="block py-2 px-3 appearance-none w-full border border-[#ECECEC] rounded shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100">
                      <option>01</option>
                      <option>02</option>
                    </select>
                  </div>
                </div>
                <div className='mt-3 mb-1'>
                  <label htmlFor="address">
                    地址
                  </label>
                  <div className="flex gap-3 mt-1 text-neutral-60">
                    <select id="city" className="block py-2 px-3 appearance-none w-full border border-[#ECECEC] rounded shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100">
                      <option>台北市</option>
                      <option>高雄市</option>
                    </select>
                    <select id="" className="block py-2 px-3 appearance-none w-full border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100">
                      <option>內湖區</option>
                      <option>前金區</option>
                    </select>
                  </div>
                  <input
                    id="address"
                    type="text"
                    className="text-neutral-60 mt-3 w-full px-3 py-2 border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100"
                    placeholder='請輸入詳細地址'
                  />
                </div>

                <div className='flex justify-between items-center mt-2'>
                  <label htmlFor="" className='flex items-center space-x-2'>
                    <input 
                      type="checkbox" 
                      className='h-3.5 w-3.5 pt-0.5'
                    />
                    <span className='text-body'>我已閱讀並同意本網站個資使用規範</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full h-[3rem] mt-6 px-4 py-2 text-body font-medium text-neutral-60 bg-neutral-40 rounded-md focus:outline-none focus:ring-primary-100 hover:bg-primary-100 hover:text-white"
                >
                  完成註冊
                </button>
                <div className="flex text-body my-2">
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
