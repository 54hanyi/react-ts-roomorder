import { useContext, useEffect, useState } from 'react';

import { BookingContext } from '@/contexts/BookingContext';
import { RoomContext } from '@/contexts/RoomContext';

import LoadingModal from '../Common/LoadingModal';

import { getOrders } from '@/assets/api'; // 假设你有这个API函数
import { IOrder } from '@/types'; // 假设你有这个类型定义

import HistoryOrders from './HistoryOrders';
import SoonOrder from './SoonOrder';

export default function UserOrder() {
  const bookingContext = useContext(BookingContext);
  const roomContext = useContext(RoomContext);
  const [upcomingOrder, setUpcomingOrder] = useState<IOrder | null>(null);
  const [recentOrders, setRecentOrders] = useState<IOrder[]>([]);

  const fetchOrders = async () => {
    const token = localStorage.getItem('authToken') || ''; // 確保 token 為字串類型
    try {
      const response = await getOrders(undefined, token);
      console.log("API Response: ", response);
      if (response.status && Array.isArray(response.result)) {
        const now = new Date();
        const nowUTC = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        console.log("Current Date (now UTC): ", nowUTC);
        response.result.forEach((order: IOrder) => {
          console.log("Order Check-in Date (Parsed): ", new Date(order.checkInDate));
        });

        // 篩選即將到來的有效訂單
        const upcoming = response.result
          .filter((order: IOrder) => {
            const orderCheckInDate = new Date(order.checkInDate).getTime();
            console.log("Order Check-in Date (getTime): ", orderCheckInDate);
            return orderCheckInDate >= nowUTC.getTime() && order.status !== -1;
          })
          .sort((a: IOrder, b: IOrder) => new Date(a.checkInDate).getTime() - new Date(b.checkInDate).getTime())[0] || null;

        console.log("Upcoming Order: ", upcoming);

        // 篩選最近的所有歷史有效訂單
        const recent = response.result
          .filter((order: IOrder) => new Date(order.checkInDate).getTime() < nowUTC.getTime() && order.status !== -1)
          .sort((a: IOrder, b: IOrder) => new Date(b.checkInDate).getTime() - new Date(a.checkInDate).getTime());

        console.log("Recent Orders: ", recent);

        setUpcomingOrder(upcoming);
        setRecentOrders(recent);
      }
    } catch (error) {
      console.error('獲取訂單失敗:', error);
    }
  };
  

  useEffect(() => {
    fetchOrders(); // 組件一載入就獲取訂單數據
  }, []);

  // 打印 upcomingOrder 以確認它是否有值
  useEffect(() => {
    console.log("upcomingOrder in UserOrder:", upcomingOrder);
  }, [upcomingOrder]);

  // 当订单被删除时调用，重新获取订单数据
  const handleOrderDeleted = () => {
    fetchOrders(); // 重新获取订单数据以更新状态
  };

  if (!bookingContext || !roomContext) {
    return <LoadingModal />;
  }

  return (
    <div className="lg:flex gap-10 my-14">
      <div className="bg-white w-full lg:w-[55%] rounded-[1.5rem] transition-all mb-10">
          <SoonOrder 
            upcomingOrder={upcomingOrder} 
            onOrderDeleted={handleOrderDeleted} 
          />
      </div>

      <div className="bg-white h-[60rem] lg:h-[66rem] w-full lg:w-[45%] rounded-[1.5rem] transition-all px-8">
        <HistoryOrders recentOrders={recentOrders} />
      </div>
    </div>
  );
}
