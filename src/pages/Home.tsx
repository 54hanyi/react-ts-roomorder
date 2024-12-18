import Banner from '../components/Layouts/Banner';
import BannerContent from '../components/Home/BannerContent';
import News from '../components/Home/News';
import AboutUs from '../components/Home/AboutUs';
import RoomShow from '../components/Home/RoomShow';
import Food from '../components/Home/Food'; 
import Transportation from '../components/Home/Transportation'; 
import Footer from '@/components/Layouts/Footer';


export default function Home() {
  return (
    <>
      <Banner>
        <BannerContent />
      </Banner>
      <News />
      <AboutUs />
      <RoomShow />
      <Food />
      <Transportation />
      <Footer />
    </>
  )
}
