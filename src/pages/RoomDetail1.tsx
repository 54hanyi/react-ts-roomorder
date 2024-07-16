import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { roomList } from "../data/roomList";
import RoomDetailInfo from "../components/Room/RoomDetailInfo";
import RoomDetailBox from "../components/Room/RoomDetailBox";


const RoomDetail1 = () => {
  
  return (
    <>
      <Navbar />
      <div className="bg-[#F7F2EE]">
        <div className="p-16">  
          <div className="flex gap-2">
            <div className="flex w-[55%]">
              <img
                src="/images/web/room2-1.png"
                alt="Room View"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-2 w-[45%]">
              <img
                src="/images/web/room2-2.png"
                alt="Room View"
                className="w-full h-full object-cover rounded-lg col-span-2"
              />
              <img
                src="/images/web/room2-3.png"
                alt="Room View"
                className="w-full h-full object-cover rounded-lg col-span-2"
              />
              <img
                src="/images/web/room2-4.png"
                alt="Room View"
                className="w-full h-full object-cover rounded-lg col-span-2"
              />
              <img
                src="/images/web/room2-5.png"
                alt="Room View"
                className="w-full h-full object-cover rounded-lg col-span-2"
              />
            </div>
          </div>

          <div className="flex my-16 py-8 gap-20 justify-center">
            <div className="flex flex-col gap-10 w-[45%]">
              <RoomDetailInfo roomList={roomList[0]}/>
            </div>
            <div className="w-[30%]">
              <RoomDetailBox roomList={roomList[0]}/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
};

export default RoomDetail1;