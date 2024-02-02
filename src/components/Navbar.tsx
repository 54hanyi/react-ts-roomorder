import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className="relative bg-[#140F0A] flex justify-between items-center h-[6rem] z-10">
        <img src="/images/web/logo.png" alt="logo" className="h-13 pl-16" />
        <div className="flex items-center gap-8 text-body pr-16">
          <button className="text-neutral-0 hover:text-primary-80">客房旅宿</button>
          <button className="text-neutral-0 hover:text-primary-80">會員登入</button>
          <button className="text-neutral-0 bg-primary-100 p-4 rounded-lg hover:bg-primary-120">立即訂房</button>
        </div>
      </div>
    </>
  )
}
