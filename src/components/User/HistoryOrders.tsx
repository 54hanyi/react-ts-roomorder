import { useState, useRef, useEffect } from 'react';
import { IOrder } from '@/types';
import Deco from "@/assets/icons/ic_Deco.svg";
import Deco_gray from "@/assets/icons/ic_Deco_gray.svg";
import Button from "../Common/Button";

interface HistoryOrdersProps {
  recentOrders: IOrder[];
}

const calculateDays = (checkIn: string, checkOut: string): number => {
  const date1 = new Date(checkIn);
  const date2 = new Date(checkOut);
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 转换为天数
};

export default function HistoryOrders({ recentOrders }: HistoryOrdersProps) {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 根据 showAll 状态决定显示的订单数量
  const ordersToShow = showAll ? recentOrders : recentOrders.slice(0, 3);

  const handleToggleShowAll = () => {
    if (showAll && containerRef.current) {
      // 在切换为“收起”状态时，平滑地滚动到容器的顶端
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setShowAll(prev => !prev);
  };

  // 确保组件重新渲染时的滚动位置
  useEffect(() => {
    if (!showAll && containerRef.current) {
      containerRef.current.scrollTo({ top: 0 });
    }
  }, [showAll]);

  return (
    <>
      <p className='text-h4 py-8'>歷史訂單</p>
      <div
        ref={containerRef}
        className={`flex flex-col gap-4 transition-all duration-300 ${showAll ? 'max-h-[50rem] overflow-y-auto' : 'max-h-[none]'}`}
        style={{ maxHeight: showAll ? '50rem' : 'auto', overflowY: showAll ? 'auto' : 'hidden' }}
      >
        {ordersToShow.map((order) => {
          const orderDays = calculateDays(order.checkInDate, order.checkOutDate);
          const orderTotalPrice = order.roomId.price * orderDays;
          return (
            <div key={order._id}>
              <div className="flex py-8 bg-white rounded-[1.2rem]">
                <div className='mr-4'>
                  {order.roomId.imageUrlList && order.roomId.imageUrlList.length > 0 && (
                    <img src={order.roomId.imageUrlList[0]} alt="Room Image" className='h-[5rem] w-[5rem] object-cover rounded-[0.8rem]' />
                  )}
                </div>
                <div>
                  <p className='text-body'>預訂參考編號： {order._id || 'N/A'}</p>
                  <div className="text-h6">
                    <p className="text-h5 py-2">{order.roomId.name}</p>
                    <p className='text-body py-1'>住宿天數：{orderDays}晚</p>
                    <p className='text-body pb-2'>住宿人數：{order.peopleNum}人</p>
                  </div>

                  <div className="flex py-2">
                    <img src={Deco} alt="" />
                    <p className="ml-3 text-h6">入住：{order.checkInDate}</p>
                  </div>
                  <div className="flex pb-4">
                    <img src={Deco_gray} alt="" />
                    <p className="ml-3 text-h6">退房：{order.checkOutDate}</p>
                  </div>

                  <p className='text-h6 py-4'>NT$ {orderTotalPrice}</p>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      {/* 当历史订单数量超过3个时，显示“查看更多”按钮 */}
      {recentOrders.length > 3 && (
        <div className="mt-16">
          <Button
            title={showAll ? "收起" : "查看更多"}
            buttonStyle="ghost"
            defaultClass="text-primary-100 w-full text-h5 hover:text-white hover:bg-primary-100 py-4 px-6 rounded-[0.5rem] border border-primary-100"
            onClick={handleToggleShowAll}
          />
        </div>
      )}
    </>
  );
}
