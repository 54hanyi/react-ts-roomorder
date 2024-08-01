import { createContext, useState, ReactNode } from 'react';
import { IRoom } from '@/types';

interface BookingContextType {
  room: IRoom | null;
  checkInDate: string;
  checkOutDate: string;
  currentPeople: number;
  setRoom: (room: IRoom) => void;
  setCheckInDate: (date: string) => void;
  setCheckOutDate: (date: string) => void;
  setCurrentPeople: (people: number) => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [room, setRoom] = useState<IRoom | null>(null);
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [currentPeople, setCurrentPeople] = useState<number>(1);

  return (
    <BookingContext.Provider value={{ room, checkInDate, checkOutDate, currentPeople, setRoom, setCheckInDate, setCheckOutDate, setCurrentPeople }}>
      {children}
    </BookingContext.Provider>
  );
};
