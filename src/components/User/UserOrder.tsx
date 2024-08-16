import { useContext, useEffect, useState } from 'react';

import { BookingContext } from '@/context/BookingContext';
import { RoomContext } from '@/context/RoomContext';

import SuccessedBox from "../Booking/SuccessedBox";
import Button from "../Common/Button";
import LoadingModal from '../Common/LoadingModal';

import { getOrders } from '@/assets/api'; // 假设你有这个API函数
import { IOrder } from '@/types'; // 假设你有这个类型定义

import HistoryOrders from './HistoryOrders';

export default function UserOrder() {
  const bookingContext = useContext(BookingContext);
  const roomContext = useContext(RoomContext);
  const [upcomingOrder, setUpcomingOrder] = useState<IOrder | null>(null);
  const [recentOrders, setRecentOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('authToken') || ''; // 确保 token 为 string 类型
      try {
        const response = await getOrders(undefined, token);
        if (response.status && Array.isArray(response.result)) {
          const now = new Date();

          // 筛选即将到来的订单
          const upcoming = response.result
            .filter((order: IOrder) => new Date(order.checkInDate) >= now)
            .sort((a: IOrder, b: IOrder) => new Date(a.checkInDate).getTime() - new Date(b.checkInDate).getTime())[0] || null;

          // 筛选最近的所有历史订单
          const recent = response.result
            .filter((order: IOrder) => new Date(order.checkInDate) < now)
            .sort((a: IOrder, b: IOrder) => new Date(b.checkInDate).getTime() - new Date(a.checkInDate).getTime());

          console.log('Fetched recent orders:', recent); // 添加这个日志

          setUpcomingOrder(upcoming);
          setRecentOrders(recent);
        }
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    fetchOrders();
  }, []);

  if (!bookingContext || !roomContext) {
    return <LoadingModal />;
  }

  return (
    <>
      <div className="flex gap-10 my-14">
        {/* 即将到来的订单 */}
        <div className="bg-white h-[66rem] w-[55%] rounded-[1.5rem] transition-all">
          <SuccessedBox />
          {upcomingOrder && (
            <div className="flex justify-between px-8 pt-16">
              <Button
                title="取消預定"
                buttonStyle="ghost"
                defaultClass="text-primary-100 w-[48%] text-h5 hover:text-white hover:bg-primary-100 py-4 px-6 rounded-[0.5rem] my-8 border border-primary-100"
              />
              <Button
                title="查看詳情"
                buttonStyle="ghost"
                defaultClass="bg-primary-100 w-[48%] text-h5 hover:text-primary-100 hover:bg-white py-4 px-6 rounded-[0.5rem] my-8 border border-primary-100"
              />
            </div>
          )}
        </div>

        <div className="bg-white h-[66rem] w-[45%] rounded-[1.5rem] transition-all px-8">
          <HistoryOrders recentOrders={recentOrders} />
        </div>
      </div>
    </>
  );
}
