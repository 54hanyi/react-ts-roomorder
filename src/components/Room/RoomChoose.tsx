import { useContext, useEffect } from "react";
import RoomCard from "./RoomCard";
import { RoomContext } from "@/contexts/RoomContext";
import { apiGetRoomType } from "@/api";
import { IRoom } from "@/types";
import LoadingModal from "../Common/LoadingModal";

const RoomChoose = () => {
  const roomContext = useContext(RoomContext);

  useEffect(() => {
    const getRoomList = async () => {
      try {
        const token = localStorage.getItem("authToken") || "";
        const data = await apiGetRoomType(undefined, token);
        if (roomContext) {
          roomContext.setRoomList(data.result as IRoom[]);
        }
      } catch (error) {
        console.error("Failed to fetch room list:", error);
      }
    };

    getRoomList();
  }, [roomContext]);

  if (!roomContext) {
    return <LoadingModal />;
  }

  if (!roomContext.roomList) {
    return <div className="text-h5">房間正在整理中...</div>;
  }

  return (
    <div className="px-4 xl:px-60 py-20 bg-[#F7F2EE]">
      <div className="flex flex-col">
        <div className="text-h3 text-primary-0 mb-6">房型選擇</div>
        <div className="md:text-h1 text-h3 text-primary-100 mb-12">
          各種房型，隨心所欲
        </div>
        {roomContext.roomList.length > 0 ? (
          roomContext.roomList.map((room) => (
            <RoomCard
              key={room._id}
              roomList={room}
              imageList={room.imageUrlList}
            />
          ))
        ) : (
          <div className="text-h5">房間正在整理中...</div>
        )}
      </div>
    </div>
  );
};

export default RoomChoose;
