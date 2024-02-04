// import React from 'react'
import Navbar from '../components/Navbar';

export default function Rooms() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex bg-[#140F0A]" style={{ height: 'calc(100vh - 6rem)' }}>
          <p className='text-h1 text-white'>room</p>
        </div>
      </div>
    </>
  )
}
