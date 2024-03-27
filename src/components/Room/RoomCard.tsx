import { useState } from "react";
import { Link } from 'react-router-dom'

import { RoomItem } from "../../data/roomList";
import { ImageItem } from "../../types/image.type";
import Carousel from "../Common/Carousel";
import IconButton from "../Common/IconButton";


interface RoomCardProps {
  imageList: ImageItem[];
  roomList: RoomItem;
}

const RoomCard = ({ imageList, roomList }: RoomCardProps) => {
  const [currentImgIndex, setcurrentImgIndex] = useState(0);
  
  const setRoom = (state:string) => {
    switch(state) {
      case "next":
        setcurrentImgIndex(
          currentImgIndex + 1 === imageList.length ? 0 : currentImgIndex + 1
        );
        // console.log("test123")
        break;
      case "pre":
        setcurrentImgIndex(
          currentImgIndex - 1 < 0 ? imageList.length - 1 : currentImgIndex - 1
        );
        // console.log("test456")
        break;
    }
  };

  const setcurrentImgIndexIndex = (index: number) => {
    setcurrentImgIndex(index);
  };

  const nextRoom = () => {
    setcurrentImgIndex(currentImgIndex + 1 === imageList.length ? 0 : currentImgIndex + 1);
  };

  return (
    <>
      <div className="bg-white mb-5 flex h-[23rem] rounded-[1rem] relative">
        <div className="w-[60%] rounded-l-[1rem] overflow-hidden">
          <Carousel imageList={imageList} onNextRoom={nextRoom} onRoomChange={setcurrentImgIndexIndex} currentImgIndex={currentImgIndex} />
        </div>
        <div className="absolute top-0 bottom-0 left-0 flex items-center pl-6">
          <IconButton
            name="ic_ArrowLeft"
            svgClass="w-[2rem] h-[2rem] text-primary-100 group-hover:text-primary-120"
            className="group"
            onClick={() => setRoom("pre")}
          />
        </div>
        <div className="absolute top-0 bottom-0 right-[26rem] flex items-center pr-6">
          <IconButton
            name="ic_ArrowRight"
            svgClass="w-[2rem] h-[2rem] text-primary-100 group-hover:text-primary-120"
            className="group"
            onClick={() => setRoom("next")}
          />
        </div>
        <div className="w-[40%] p-7">
          <p className="text-h2">{roomList.title}</p>
          <p className="text-h6 pt-4">{roomList.content}</p>
          <div className="flex my-5 gap-5">
            <div className="border-primary-100/40 border rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
              <IconButton
                name="ic_Size"
                svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
                className="mb-2"
                disabled={true}
              />
              <p className="text-body font-bold">{roomList.size} 坪</p>
            </div>
            <div className="border-primary-100/40 border rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
              <IconButton
                name="ic_Bed"
                svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
                className="mb-2"
                disabled={true}
              />
              <p className="text-body font-bold">{roomList.bed} 張大床</p>
            </div>
            <div className="border-primary-100/40 border rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
              <IconButton
                name="ic_Person"
                svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
                className="mb-2"
                disabled={true}
              />
              <p className="text-body font-bold">{roomList.people} 人</p>
            </div>
          </div>
          <div className="w-full h-[2px] mt-8 mb-12 bg-neutral-100" style={{ background: "linear-gradient(90deg, #BE9C7C, #FFFFFF)" }}></div>
          <div className="flex justify-between">
            <p className="text-h5 text-primary-100">{roomList.price}</p>
            <Link to="/rooms">
              <IconButton
                name="ic_ArrowRight"
                svgClass="w-[1.5rem] h-[1.5rem] text-primary-100 group-hover:text-primary-120"
                className="group"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCard;