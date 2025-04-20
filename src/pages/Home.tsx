import SeoHelmet from '@/components/Common/SeoHelmet';
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
      <SeoHelmet
        title="首頁｜豪華酒店預訂系統"
        description="歡迎來到豪華酒店預訂平台，立即查看優惠房型與推薦地點。"
        canonical="https://54hanyi.github.io/react-ts-roomorder/"
      />
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
