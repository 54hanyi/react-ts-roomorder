import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { RoomContext } from '@/contexts/RoomContext';
import { IRoom } from "../../types/room";
import Carousel from "../Common/Carousel";
import IconButton from "../Common/IconButton";

interface RoomCardProps {
  imageList: string[];
  roomList: IRoom;
}

const RoomCard = ({ imageList, roomList }: RoomCardProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const roomContext = useContext(RoomContext);

  if (!roomContext) {
    console.error("RoomContext is undefined");
    return null;
  }

  const { setSelectedRoom } = roomContext;


  const handleRoomClick = () => {
    setSelectedRoom(roomList);
  };
  
  const setRoom = (state: string) => {
    switch (state) {
      case "next":
        setCurrentImgIndex(
          currentImgIndex + 1 === imageList.length ? 0 : currentImgIndex + 1
        );
        break;
      case "pre":
        setCurrentImgIndex(
          currentImgIndex - 1 < 0 ? imageList.length - 1 : currentImgIndex - 1
        );
        break;
    }
  };

  const nextRoom = () => {
    setCurrentImgIndex(currentImgIndex + 1 === imageList.length ? 0 : currentImgIndex + 1);
  };

  return (
    <div className="bg-white mb-5 flex h-[12rem] lg:h-[23rem] rounded-[1rem] relative">
      <div className="lg:w-[60%] w-[50%] rounded-l-[1rem] overflow-hidden">
        <Carousel imageList={imageList} onNextRoom={nextRoom} currentImgIndex={currentImgIndex} />
      </div>
      <div className="absolute top-0 bottom-0 lg:left-0 flex items-center pl-1 lg:pl-6">
        <IconButton
          name="ic_ArrowLeft"
          svgClass="w-[2rem] h-[2rem] text-primary-100 rounded-full group-hover:bg-primary-40"
          className="group"
          onClick={() => setRoom("pre")}
        />
      </div>
      <div className="absolute top-0 bottom-0 flex items-center ml-36 md:ml-[17rem] lg:ml-[26rem] xl:ml-[16rem] xxl:ml-[26rem] xxxl:ml-[36rem]">
        <IconButton
          name="ic_ArrowRight"
          svgClass="w-[2rem] h-[2rem] text-primary-100 rounded-full group-hover:bg-primary-40"
          className="group"
          onClick={() => setRoom("next")}
        />
      </div>
      <div className="lg:w-[40%] w-[50%] lg:p-7 p-4">
        <p className="lg:text-h2 text-h6 font-bold">{roomList.name}</p>
        <p className="lg:text-h6 text-body2 lg:pt-4 pt-2">{roomList.description}</p>
        <div className="flex lg:my-5 my-1 lg:gap-5 gap-1">
          <div className="border-primary-100/40 border lg:rounded-[0.6rem] rounded-[0.3rem] lg:w-20 lg:h-20 w-10 h-10 lg:pl-3 lg:pt-4 pl-2 pt-1">
            <IconButton
              name="ic_Size"
              svgClass="w-[1.5rem] h-[1.5rem] text-primary-100 lg:block hidden"
              className="mb-2"
              disabled={true}
            />
            <p className="lg:text-body text-tiny font-bold">{roomList.areaInfo}</p>
          </div>
          <div className="border-primary-100/40 border lg:rounded-[0.6rem] rounded-[0.3rem] lg:w-20 lg:h-20 w-10 h-10 lg:pl-3 lg:pt-4 px-2">
            <IconButton
              name="ic_Bed"
              svgClass="w-[1.5rem] h-[1.5rem] text-primary-100 lg:block hidden"
              className="mb-2"
              disabled={true}
            />
            <p className="lg:text-body text-tiny font-bold">{roomList.bedInfo}</p>
          </div>
          <div className="border-primary-100/40 border lg:rounded-[0.6rem] rounded-[0.3rem] lg:w-20 lg:h-20 w-10 h-10 lg:pl-3 lg:pt-4 pl-2 pt-1">
            <IconButton
              name="ic_Person"
              svgClass="w-[1.5rem] h-[1.5rem] text-primary-100 lg:block hidden"
              className="mb-2"
              disabled={true}
            />
            <p className="lg:text-body text-tiny font-bold">{roomList.maxPeople} 人</p>
          </div>
        </div>
        <div className="w-full h-[2px] lg:mt-8 mt-2 lg:mb-12 mb-2 bg-neutral-100" style={{ background: "linear-gradient(90deg, #BE9C7C, #FFFFFF)" }}></div>
        <div className="flex justify-between">
          <p className="lg:text-h5 text-h6 font-bold text-primary-100">NT$ {roomList.price}</p>
          <Link to={`/room-detail/${roomList._id}`} onClick={handleRoomClick}>
            <IconButton
              name="ic_ArrowRight"
              svgClass="lg:w-[1.5rem] lg:h-[1.5rem] w-[1.2rem] h-[1.2rem] text-primary-100 rounded-full"
              className="group lg:hover:scale-[1.8] hover:scale-[1.5]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
