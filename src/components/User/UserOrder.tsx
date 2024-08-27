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

  // 将 fetchOrders 函数提取出来，方便在其他地方调用
  const fetchOrders = async () => {
    const token = localStorage.getItem('authToken') || ''; // 确保 token 为 string 类型
    try {
      const response = await getOrders(undefined, token);
      if (response.status && Array.isArray(response.result)) {
        const now = new Date();
  
        // 筛选即将到来的有效订单
        const upcoming = response.result
          .filter((order: IOrder) => new Date(order.checkInDate) >= now && order.status !== -1)
          .sort((a: IOrder, b: IOrder) => new Date(a.checkInDate).getTime() - new Date(b.checkInDate).getTime())[0] || null;
  
        // 筛选最近的所有历史有效订单
        const recent = response.result
          .filter((order: IOrder) => new Date(order.checkInDate) < now && order.status !== -1)
          .sort((a: IOrder, b: IOrder) => new Date(b.checkInDate).getTime() - new Date(a.checkInDate).getTime());
  
        setUpcomingOrder(upcoming);
        setRecentOrders(recent);
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };
  

  useEffect(() => {
    fetchOrders(); // 在组件挂载时，获取订单数据
  }, []);

  // 当订单被删除时调用，重新获取订单数据
  const handleOrderDeleted = () => {
    fetchOrders(); // 重新获取订单数据以更新状态
  };

  if (!bookingContext || !roomContext) {
    return <LoadingModal />;
  }

  return (
    <div className="flex gap-10 my-14">
      {/* 即将到来的订单 */}
      <div className="bg-white h-[66rem] w-[55%] rounded-[1.5rem] transition-all">
        {upcomingOrder && (
          <SoonOrder 
            upcomingOrder={upcomingOrder} 
            onOrderDeleted={handleOrderDeleted} 
          />
        )}
      </div>

      <div className="bg-white h-[66rem] w-[45%] rounded-[1.5rem] transition-all px-8">
        <HistoryOrders recentOrders={recentOrders} />
      </div>
    </div>
  );
}
