import { createContext, useState, ReactNode } from 'react';
import { IRoom } from '@/types';

interface BookingContextType {
  room: IRoom | null;
  setRoom: (room: IRoom | null) => void;
  checkInDate: string;
  setCheckInDate: (date: string) => void;
  checkOutDate: string;
  setCheckOutDate: (date: string) => void;
  currentPeople: number;
  setCurrentPeople: (people: number) => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [room, setRoom] = useState<IRoom | null>(null);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [currentPeople, setCurrentPeople] = useState(1);

  return (
    <BookingContext.Provider value={{ room, setRoom, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, currentPeople, setCurrentPeople }}>
      {children}
    </BookingContext.Provider>
  );
};
