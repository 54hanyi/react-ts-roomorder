import { createContext, useState, useEffect, ReactNode } from 'react';
import { IRoom } from '@/types';

interface RoomContextType {
  roomList: IRoom[];
  setRoomList: (rooms: IRoom[]) => void;
  selectedRoom: IRoom | null;
  setSelectedRoom: (room: IRoom | null) => void;
}

export const RoomContext = createContext<RoomContextType | undefined>(undefined);

export const RoomProvider = ({ children }: { children: ReactNode }) => {
  const [roomList, setRoomList] = useState<IRoom[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<IRoom | null>(null);

  useEffect(() => {
    const storedRoomList = localStorage.getItem('roomList');
    const storedSelectedRoom = localStorage.getItem('selectedRoom');

    if (storedRoomList) {
      setRoomList(JSON.parse(storedRoomList));
    }

    if (storedSelectedRoom) {
      setSelectedRoom(JSON.parse(storedSelectedRoom));
    }
  }, []);

  useEffect(() => {
    if (roomList.length > 0) {
      localStorage.setItem('roomList', JSON.stringify(roomList));
    }

    if (selectedRoom) {
      localStorage.setItem('selectedRoom', JSON.stringify(selectedRoom));
    }
  }, [roomList, selectedRoom]);

  return (
    <RoomContext.Provider value={{ roomList, setRoomList, selectedRoom, setSelectedRoom }}>
      {children}
    </RoomContext.Provider>
  );
};
