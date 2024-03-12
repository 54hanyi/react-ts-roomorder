// import React from 'react'
import Footer from '../components/common/Footer';
import RoomBanner from '../components/room/RoomBanner';
// import RoomChoose from '../components/RoomChoose';

export default function Rooms() {
  return (
    <>
      <div className="flex flex-col">               
        <RoomBanner />
        {/* <RoomChoose /> */}
        <Footer />
      </div>
    </>
  )
}
