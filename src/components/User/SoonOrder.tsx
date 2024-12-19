import { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import IconButton from '../Common/IconButton';
import Deco from "@/assets/icons/ic_Deco.svg";
import Deco_gray from "@/assets/icons/ic_Deco_gray.svg";
import Button from "../Common/Button";
import LoadingModal from '../Common/LoadingModal';
import { deleteOrder, getOrderDetail } from '@/assets/api';
import { IOrder } from '@/types';

interface IFacility {
  title: string;
  isProvide: boolean;
}

interface IAmenity {
  title: string;
  isProvide: boolean;
}

interface SoonOrderProps {
  upcomingOrder: IOrder | null; // 允許 upcomingOrder 為 null
  onOrderDeleted: (orderId: string) => void;
}

export default function SoonOrder({ upcomingOrder, onOrderDeleted }: SoonOrderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
    
  console.log("upcomingOrder in SoonOrder before rendering: ", upcomingOrder);

  if (!upcomingOrder) {
    console.log("即將到來的訂單為空，顯示無訂單信息");
    return (
      <div className="h-[54rem] bg-white rounded-[1.2rem] p-8 flex flex-col justify-center items-center">
        <p className="text-h4 mb-8">您目前沒有即將到來的訂單</p>
        <Link to="/rooms" className="w-[60%] text-center">
          <Button
            title="立即前往預定"
            buttonStyle="primary"
            defaultClass="w-full text-h5 bg-primary-100 hover:bg-primary-120 py-4 px-6 rounded-[0.5rem]"
          />
        </Link>
      </div>
    );
  }
  

  const { roomId: selectedRoom, checkInDate, checkOutDate, peopleNum, _id: orderId } = upcomingOrder;

  const calculateDays = (checkIn: string, checkOut: string): number => {
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  const days = calculateDays(checkInDate, checkOutDate);
  const totalPrice = selectedRoom.price * days;

  const handleCancelOrder = async () => {
    if (!orderId) {
      console.error('Order ID 未定義');
      return;
    }

    setIsLoading(true);
    const token = localStorage.getItem('authToken') || '';
    try {
      const response = await deleteOrder(orderId, token);
      console.log('刪除訂單回應:', response);
      if (response.status) {
        onOrderDeleted(orderId); // 通知父組件訂單已被刪除
      } else {
        alert('取消訂單失敗: ' + response.message);
      }
    } catch (error) {
      console.error('取消訂單失敗:', error);
      alert('發生錯誤，請稍後再試');
    } finally {
      setIsLoading(false);
      setShowConfirm(false);
    }
  };

  const handleViewDetails = async () => {
    if (!orderId) {
      console.error('Order ID 未定義');
      return;
    }

    setIsLoading(true);
    const token = localStorage.getItem('authToken') || '';
    try {
      const response = await getOrderDetail(orderId, token);
      if (response.status) {
        console.log('訂單詳情:', response.result);
      } else {
        alert('無法獲取訂單詳情');
      }
    } catch (error) {
      console.error('獲取訂單詳情失敗:', error);
      alert('發生錯誤，請稍後再試');
    } finally {
      setIsLoading(false);
    }
  };

  const formattedCheckInDate = format(new Date(checkInDate), 'yyyy-MM-dd');
  const formattedCheckOutDate = format(new Date(checkOutDate), 'yyyy-MM-dd');

  return (
    <div className="h-[70rem] lg:h-[66rem] bg-white rounded-[1.2rem] p-8">
      {isLoading && <LoadingModal />}
      {!isLoading && (
        <>
          <div className='mb-4'>
            <p className='text-body'>預訂參考編號： {orderId}</p>
            <p className='text-h4'>即將到來的旅程</p>
          </div>

          <div className="h-[18rem] overflow-hidden">
            {selectedRoom.imageUrlList && (
              <img src={selectedRoom.imageUrlList[0]} alt="Room Image" className='rounded-[1.2rem] w-full h-full object-cover max-h-[18rem]' />
            )}
          </div>

          <div className="flex justify-between py-4 text-h6 font-bold lg:text-h5">
            <p className="">{selectedRoom.name}，{days}晚</p>
            <p>|</p>
            <p>住宿人數：{peopleNum}人</p>
          </div>
          
          <div className="flex">
            <img src={Deco} alt="" />
            <p className="ml-3 text-h6">入住：{formattedCheckInDate}</p>
          </div>
          <div className="flex py-2">
            <img src={Deco_gray} alt="" />
            <p className="ml-3 text-h6">退房：{formattedCheckOutDate}</p>
          </div>

          <p className='text-h6 py-2 lg:py-4'>NT$ {totalPrice}</p>

          <div className="flex flex-col mt-4">
            <div className="flex">
              <img src={Deco} alt="" />
              <p className="ml-3 text-h5">房內設備</p>
            </div>
            <div className="flex flex-wrap items-center gap-10 gap-y-0 border border-neutral-40 rounded-[0.6rem] mt-4 p-2 w-full h-40 lg:h-32">
              {selectedRoom.facilityInfo.filter((item: IFacility) => item.isProvide).map((item: IFacility) => (
                <div key={item.title} className="flex items-baseline w-[5rem]">
                  <IconButton
                    name="ic_check"
                    svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                    className="mb-2"
                    disabled={true}
                  />
                  <p className="text-body">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-4 lg:mt-6">
            <div className="flex">
              <img src={Deco} alt="" />
              <p className="ml-3 text-h5">備品提供</p>
            </div>
            <div className="flex flex-wrap items-center gap-10 gap-y-0 border border-neutral-40 rounded-[0.6rem] mt-4 p-2 w-full h-40 lg:h-32">
              {selectedRoom.amenityInfo.filter((item: IAmenity) => item.isProvide).map((item: IAmenity) => (
                <div key={item.title} className="flex items-baseline w-[5rem]">
                  <IconButton
                    name="ic_check"
                    svgClass="w-[1.2rem] h-[1.2rem] text-primary-100"
                    className="mb-2"
                    disabled={true}
                  />
                  <p className="text-body">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-1">
            <Button
              title="取消預定"
              buttonStyle="ghost"
              defaultClass="text-primary-100 w-[48%] text-h5 hover:text-white hover:bg-primary-100 py-4 px-6 rounded-[0.5rem] my-8 border border-primary-100"
              onClick={() => setShowConfirm(true)}
              disabled={isLoading}
            />
            <Button
              title="查看詳情"
              buttonStyle="ghost"
              defaultClass="bg-primary-100 w-[48%] text-h5 hover:text-primary-100 hover:bg-white py-4 px-6 rounded-[0.5rem] my-8 border border-primary-100"
              onClick={handleViewDetails}
              disabled={isLoading}
            />
          </div>

          {/* 確認視窗 */}
          {showConfirm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white w-[20rem] h-[10rem] p-8 rounded-lg">
                <p className="text-h5 mb-6">確定要取消這個訂單嗎？</p>
                <div className="flex justify-between">
                  <Button
                    title="取消"
                    buttonStyle="ghost"
                    defaultClass="text-primary-100 w-[45%] text-h5 hover:text-white hover:bg-primary-100 p-4 rounded-[0.5rem] border border-primary-100"
                    onClick={() => setShowConfirm(false)}
                  />
                  <Button
                    title="確定"
                    buttonStyle="primary"
                    defaultClass="w-[45%] text-h5 bg-primary-100 hover:bg-primary-120 p-4 rounded-[0.5rem]"
                    onClick={handleCancelOrder}
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
