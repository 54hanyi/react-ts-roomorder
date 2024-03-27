// import React from 'react'
import Footer from '../components/Layout/Footer';
import BannerContent from '../components/Room/BannerContent';
import RoomChoose from '../components/Room/RoomChoose';
import Banner from '../components/Layout/Banner'


export default function Rooms() {
  return (
    <>
      <div className="flex flex-col">               
        <Banner>
          <BannerContent />
        </Banner>
        <RoomChoose />
        <Footer />
      </div>
    </>
  )
}
