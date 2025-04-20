import SeoHelmet from '@/components/Common/SeoHelmet';
import Footer from '../components/Layouts/Footer';
import BannerContent from '../components/Room/BannerContent';
import RoomChoose from '../components/Room/RoomChoose';
import Banner from '../components/Layouts/Banner'


export default function Rooms() {
  return (
    <>
      <SeoHelmet
        title="房型列表｜豪華酒店預訂系統"
        description="瀏覽我們提供的各式房型，查看價格與設施，立即預訂您理想的住宿。"
        canonical="https://54hanyi.github.io/react-ts-roomorder/rooms"
      />
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
