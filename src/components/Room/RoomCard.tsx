import { useState } from "react";
import { Link } from 'react-router-dom';

import { RoomItem } from "../../types/room";
import Carousel from "../Common/Carousel";
import IconButton from "../Common/IconButton";

interface RoomCardProps {
  imageList: string[];
  roomList: RoomItem;
}

const RoomCard = ({ imageList, roomList }: RoomCardProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  const setRoom = (state:string) => {
    switch(state) {
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

  const setCurrentImgIndexIndex = (index: number) => {
    setCurrentImgIndex(index);
  };

  const nextRoom = () => {
    setCurrentImgIndex(currentImgIndex + 1 === imageList.length ? 0 : currentImgIndex + 1);
  };

  return (
    <>
      <div className="bg-white mb-5 flex h-[23rem] rounded-[1rem] relative">
        <div className="w-[60%] rounded-l-[1rem] overflow-hidden">
          <Carousel imageList={imageList} onNextRoom={nextRoom} onRoomChange={setCurrentImgIndexIndex} currentImgIndex={currentImgIndex} />
        </div>
        <div className="absolute top-0 bottom-0 left-0 flex items-center pl-6">
          <IconButton
            name="ic_ArrowLeft"
            svgClass="w-[2rem] h-[2rem] text-primary-100 rounded-full group-hover:bg-primary-40"
            className="group"
            onClick={() => setRoom("pre")}
          />
        </div>
        <div className="absolute top-0 bottom-0 right-[24rem] flex items-center ">
          <IconButton
            name="ic_ArrowRight"
            svgClass="w-[2rem] h-[2rem] text-primary-100 rounded-full group-hover:bg-primary-40"
            className="group"
            onClick={() => setRoom("next")}
          />
        </div>
        <div className="w-[40%] p-7">
          <p className="text-h2">{roomList.name}</p>
          <p className="text-h6 pt-4">{roomList.description}</p>
          <div className="flex my-5 gap-5">
            <div className="border-primary-100/40 border rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
              <IconButton
                name="ic_Size"
                svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
                className="mb-2"
                disabled={true}
              />
              <p className="text-body font-bold">{roomList.areaInfo}</p>
            </div>
            <div className="border-primary-100/40 border rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
              <IconButton
                name="ic_Bed"
                svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
                className="mb-2"
                disabled={true}
              />
              <p className="text-body font-bold">{roomList.bedInfo}</p>
            </div>
            <div className="border-primary-100/40 border rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
              <IconButton
                name="ic_Person"
                svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
                className="mb-2"
                disabled={true}
              />
              <p className="text-body font-bold">{roomList.maxPeople} 人</p>
            </div>
          </div>
          <div className="w-full h-[2px] mt-8 mb-12 bg-neutral-100" style={{ background: "linear-gradient(90deg, #BE9C7C, #FFFFFF)" }}></div>
          <div className="flex justify-between">
            <p className="text-h5 text-primary-100">NT$ {roomList.price}</p>
            <Link to={`/room-detail/${roomList._id}`}>
              <IconButton
                name="ic_ArrowRight"
                svgClass="w-[1.5rem] h-[1.5rem] text-primary-100 rounded-full"
                className="group hover:scale-[1.8]"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
