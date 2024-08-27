import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingContext } from '@/contexts/BookingContext';
import { RoomContext } from '@/contexts/RoomContext';
import UserContext from '@/contexts/UserContext';
import { postOrder } from '@/assets/api';
import { OrderPostData } from '@/types/order';
import Button from '../Common/Button';

interface BookingBoxProps {
  setLoading: (loading: boolean) => void;
  isValid: boolean;
}

const BookingBox = ({ setLoading, isValid }: BookingBoxProps) => {
  const bookingContext = useContext(BookingContext);
  const roomContext = useContext(RoomContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  if (!bookingContext || !roomContext || !roomContext.selectedRoom || !userContext) {
    return <div>Loading...</div>;
  }

  const { selectedRoom } = roomContext;
  const { checkInDate, checkOutDate, currentPeople, setOrderId } = bookingContext;
  const { user } = userContext;

  const calculateDays = (checkIn: string, checkOut: string): number => {
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  const days = calculateDays(checkInDate, checkOutDate);
  const totalPrice = selectedRoom.price * days;

  const handleConfirmBooking = async () => {
    if (!isValid) {
      alert('請完整填寫訂房人資訊！');
      return;
    }

    if (!user) {
      console.error('請先登入會員');
      return;
    }

    setLoading(true);

    const orderData: OrderPostData = {
      roomId: selectedRoom._id,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      peopleNum: currentPeople,
      userInfo: {
        name: user.name,
        phone: user.phone,
        email: user.email,
        address: {
          zipcode: user.address.zipcode,
          detail: user.address.detail,
        },
      },
    };

    try {
      const token = localStorage.getItem('authToken') || '';
      const response = await postOrder(orderData, token);
      setLoading(false);
      if (response.status && response.result) {
        console.log('Order confirmed:', response.result);
        setOrderId(response.result._id); // 儲存返回的 _id 到 BookingContext 中
        navigate('/successed-booking');
      } else {
        console.error('Order confirmation failed:', response);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error confirming order:', error);
    }
  };

  return (
    <div className="h-[34rem] bg-white rounded-[1.2rem] p-8">
      {selectedRoom.imageUrlList && (
        <img src={selectedRoom.imageUrlList[0]} alt="Room Image" className='rounded-[1.2rem]' />
      )}
      <p className="text-h3 pt-4">價格詳情</p>
      <div className="flex justify-between pt-4 text-h6">
        <p>NT$ {selectedRoom.price} x {days} 天</p>
        <p>NT$ {totalPrice}</p>
      </div>
      <div className="flex justify-between pt-2 text-h6 mb-4">
        <p>住宿折扣</p>
        <p className="text-primary-100">-NT$ 0</p>
      </div>

      <hr />

      <div className="flex justify-between pt-2 text-h5 font-medium mt-4">
        <p>總價</p>
        <p>NT$ {totalPrice}</p>
      </div>
      
      <Button
        title="確認訂房"
        buttonStyle="primary"
        defaultClass="w-full h-10 rounded-[0.5rem] mt-6 bg-primary-100 hover:bg-primary-120"
        onClick={handleConfirmBooking}
        buttonType="button"
      />
    </div>
  );
}

export default BookingBox;
