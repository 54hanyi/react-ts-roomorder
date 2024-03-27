import { useState } from "react";
import { Link } from 'react-router-dom'

import { roomImgList } from "../../data/roomImgList";
import { roomList } from "../../data/roomList";

import Carousel from "../Common/Carousel";
import IconButton from "../Common/IconButton";

export default function RoomShow() {
  const [currentRoom, setCurrentRoom] = useState(0);
  
  const setRoom = (state:string) => {
    switch(state) {
      case "next":
        setCurrentRoom(
          currentRoom + 1 === roomList.length ? 0 : currentRoom + 1
        );
        break;
      case "pre":
        setCurrentRoom(
          currentRoom - 1 < 0 ? roomList.length - 1 : currentRoom - 1
        );
        break;
    }
  };

  const setCurrentRoomIndex = (index: number) => {
    setCurrentRoom(index);
  };

  const nextRoom = () => {
    setCurrentRoom(currentRoom + 1 === roomList.length ? 0 : currentRoom + 1);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end gap-[2rem] md:gap-[5rem] py-[5rem] px-[0.75rem] sm:px-[5rem] bg-neutral-100">
        <div className="w-full md:w-[37.5rem] lg:w-[50rem] h-[18.75rem] sm:h-[30rem] lg:h-[43rem] rounded-r-[0.5rem] overflow-hidden">
          <Carousel imageList={roomImgList[roomList[currentRoom].imgListName]} onNextRoom={nextRoom} onRoomChange={setCurrentRoomIndex} />
        </div>
        <div className="text-neutral-0 pr-[5rem] md:w-[40rem]">
          <h2 className="text-h4 sm:h2 mb-[1rem]">{roomList[currentRoom].title}</h2>
          <p className="text-6 my-2">{roomList[currentRoom].content}</p>
          <p className="text-h5 sm:text-h3 mb-[2.5rem]">{roomList[currentRoom].price}</p>
          <button
            type="button"
            className="w-full h-[4rem] lg:h-[5rem] flex justify-end items-center bg-neutral-0 text-title md:text-[1.5rem] font-bold p-[2.5rem] rounded-[0.5rem] hover:bg-primary-100 group mb-[2.5rem]"
          >
            <Link to='/rooms' className="mr-[1rem] text-neutral-100 group-hover:text-neutral-0">
              查看更多
            </Link>
            <div className="w-[5rem] md:w-[9rem] h-[1px] bg-neutral-100 group-hover:bg-neutral-0 group-hover:w-[30%]"></div>
          </button>
          <div className="flex justify-end">
            <IconButton
              name="ic_ArrowLeft"
              svgClass="w-[1.5rem] h-[1.5rem] text-primary-100 group-hover:text-primary-120"
              className="group w-[3.5rem] h-[3.5rem]"
              onClick={() => setRoom("pre")}
            />
            <IconButton
              name="ic_ArrowRight"
              svgClass="w-[1.5rem] h-[1.5rem] text-primary-100 group-hover:text-primary-120"
              className="group w-[3.5rem] h-[3.5rem]"
              onClick={() => setRoom("next")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
