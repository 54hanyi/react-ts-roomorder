import { createContext, useState, ReactNode } from 'react';
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

  return (
    <RoomContext.Provider value={{ roomList, setRoomList, selectedRoom, setSelectedRoom }}>
      {children}
    </RoomContext.Provider>
  );
};
