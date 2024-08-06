import { createContext, useState, useEffect, ReactNode } from 'react';
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

  useEffect(() => {
    const storedRoom = localStorage.getItem('room');
    const storedCheckInDate = localStorage.getItem('checkInDate');
    const storedCheckOutDate = localStorage.getItem('checkOutDate');
    const storedCurrentPeople = localStorage.getItem('currentPeople');

    if (storedRoom) setRoom(JSON.parse(storedRoom));
    if (storedCheckInDate) setCheckInDate(storedCheckInDate);
    if (storedCheckOutDate) setCheckOutDate(storedCheckOutDate);
    if (storedCurrentPeople) setCurrentPeople(parseInt(storedCurrentPeople, 10));
  }, []);

  useEffect(() => {
    if (room) {
      localStorage.setItem('room', JSON.stringify(room));
    }
    if (checkInDate) {
      localStorage.setItem('checkInDate', checkInDate);
    }
    if (checkOutDate) {
      localStorage.setItem('checkOutDate', checkOutDate);
    }
    if (currentPeople) {
      localStorage.setItem('currentPeople', currentPeople.toString());
    }
  }, [room, checkInDate, checkOutDate, currentPeople]);

  return (
    <BookingContext.Provider value={{ room, checkInDate, checkOutDate, currentPeople, setRoom, setCheckInDate, setCheckOutDate, setCurrentPeople }}>
      {children}
    </BookingContext.Provider>
  );
};
