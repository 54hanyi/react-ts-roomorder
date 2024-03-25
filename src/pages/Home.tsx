// import React from 'react'
import Banner from '../components/Layout/Banner'
import BannerContent from '../components/Home/BannerContent'
import News from '../components/Home/News'
import AboutUs from '../components/Home/AboutUs'
import RoomShow from '../components/Home/RoomShow'
import Food from '../components/Home/Food' 
import Transportation from '../components/Home/Transportation' 
import Footer from '../components/Layout/Footer' 


export default function Home() {
  return (
    <>
      <div>
        <Banner>
          <BannerContent />
        </Banner>
        <News />
        <AboutUs />
        <RoomShow />
        <Food />
        <Transportation />
        <Footer />
      </div>
    </>
  )
}
