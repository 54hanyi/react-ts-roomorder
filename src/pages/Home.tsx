// import React from 'react'
import Banner from '../components/Home/Banner'
import News from '../components/Home/News'
import AboutUs from '../components/Home/AboutUs'
import RoomShow from '../components/Home/RoomShow'
import Food from '../components/Home/Food' 
import Transportation from '../components/Home/Transportation' 
import Footer from '../components/Common/Footer' 




export default function Home() {
  return (
    <>
      <Banner />
      <News />
      <AboutUs />
      <RoomShow />
      <Food />
      <Transportation />
      <Footer />
    </>
  )
}
