import { createContext, useState, useEffect, ReactNode } from 'react';
import { IRoom } from '@/types';

interface BookingContextType {
  room: IRoom | null;
  checkInDate: string;
  checkOutDate: string;
  currentPeople: number;
  orderId: string | null;
  setRoom: (room: IRoom) => void;
  setCheckInDate: (date: string) => void;
  setCheckOutDate: (date: string) => void;
  setCurrentPeople: (people: number) => void;
  setOrderId: (id: string | null) => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [room, setRoom] = useState<IRoom | null>(null);
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [currentPeople, setCurrentPeople] = useState<number>(1);
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    const storedRoom = localStorage.getItem('room');
    const storedCheckInDate = localStorage.getItem('checkInDate');
    const storedCheckOutDate = localStorage.getItem('checkOutDate');
    const storedCurrentPeople = localStorage.getItem('currentPeople');
    const storedOrderId = localStorage.getItem('orderId');

    if (storedRoom) setRoom(JSON.parse(storedRoom));
    if (storedCheckInDate) setCheckInDate(storedCheckInDate);
    if (storedCheckOutDate) setCheckOutDate(storedCheckOutDate);
    if (storedCurrentPeople) setCurrentPeople(parseInt(storedCurrentPeople, 10));
    if (storedOrderId) setOrderId(storedOrderId);
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
    if (orderId) {
      localStorage.setItem('orderId', orderId);
    } else {
      localStorage.removeItem('orderId');
    }
  }, [room, checkInDate, checkOutDate, currentPeople, orderId]);

  return (
    <BookingContext.Provider value={{ room, checkInDate, checkOutDate, currentPeople, orderId, setRoom, setCheckInDate, setCheckOutDate, setCurrentPeople, setOrderId }}>
      {children}
    </BookingContext.Provider>
  );
};
