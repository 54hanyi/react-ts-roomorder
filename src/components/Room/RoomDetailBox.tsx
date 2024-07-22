import { useState } from "react";
import IconButton from "../../components/Common/IconButton";
import { IRoom } from "../../types/room";

interface RoomDetailBoxProps {
  roomList: IRoom;
}

export default function RoomDetailBox({ roomList }: RoomDetailBoxProps) {
  const [currentPeople, setCurrentPeople] = useState(1);

  const setPeople = (state: string) => {
    switch (state) {
      case "plus":
        setCurrentPeople(
          currentPeople + 1 === 10 ? 10 : currentPeople + 1
        );
        break;
      case "minus":
        setCurrentPeople(
          currentPeople - 1 < 0 ? 1 : currentPeople - 1
        );
        break;
    }
  };

  return (
    <>
      <div className="h-[30rem] bg-white rounded-[1.2rem] px-8 py-10">
        <div className="border-b border-[#ECECEC] pb-3">
          <p className="text-h5">預訂房型</p>
        </div>
        <div className="mt-6 text-neutral-80">
          <p className="text-h2 mb-2">{roomList.name}</p>
          <p className="text-body">{roomList.description}</p>
        </div>
        <div className="mt-6">
          <div className="flex gap-2">
            <div className="border border-black w-[50%] rounded-[0.5rem] px-2 py-3 h-16">
              <label htmlFor="check-in" className="block text-body font-medium text-neutral-80">
                入住
              </label>
              <input
                type="date"
                id="check-in"
                name="check-in"
                className="mt-1 block w-full border-0 p-0 text-black placeholder-neutral-80 focus:ring-0 sm:text-sm rounded-lg"
              />
            </div>
            <div className="border border-black w-[50%] rounded-[0.5rem] px-2 py-3 h-16">
              <label htmlFor="check-out" className="block text-body font-medium text-neutral-80">
                退房
              </label>
              <input
                type="date"
                id="check-out"
                name="check-out"
                className="mt-1 block w-full border-0 p-0 text-black placeholder-neutral-80 focus:ring-0 sm:text-sm rounded-md"
              />
            </div>
          </div>
          <div className="w-full flex mt-6 justify-between items-center">
            <p className="text-body font-bold">人數</p>
            <div className="flex justify-between w-[40%]">
              <IconButton
                name="ic_minus"
                svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                className="mb-2"
                onClick={() => setPeople("minus")}
              />
              <p className="text-h6">{currentPeople}</p>
              <IconButton
                name="ic_plus"
                svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                className="mb-2"
                onClick={() => setPeople("plus")}
              />
            </div>
          </div>
          <div className="my-6">
            <p className="text-h5 text-primary-100">NT ${roomList.price}</p>
          </div>
          <button className="bg-primary-100 w-full h-10 rounded-[0.5rem] mt-2">
            <p className="text-white text-body">立即預訂</p>
          </button>
        </div>
      </div>
    </>
  )
}
