import Footer from '../components/Layouts/Footer';
import BannerContent from '../components/Room/BannerContent';
import RoomChoose from '../components/Room/RoomChoose';
import Banner from '../components/Layouts/Banner'


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
