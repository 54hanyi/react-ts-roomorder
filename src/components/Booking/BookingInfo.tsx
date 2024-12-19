import { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from '@/contexts/UserContext';
import { BookingContext } from '@/contexts/BookingContext';
import cityData from "../../data/cityData.json"; 
import IconButton from "../Common/IconButton";
import Deco from "@/assets/icons/ic_Deco.svg";
import Left from "@/assets/icons/ic_left.svg";
import LoadingModal from "../Common/LoadingModal";

interface BookingInfoProps {
  setIsValid: (valid: boolean) => void;
}

const BookingInfo = ({ setIsValid }: BookingInfoProps) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const bookingContext = useContext(BookingContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');

  useEffect(() => {
    const valid = Boolean(name && phone && email && street && selectedCity && selectedCounty);
    setIsValid(valid);
  }, [name, phone, email, street, selectedCity, selectedCounty, setIsValid]);
  

  const applyMemberData = () => {
    if (userContext && userContext.user) {
      const { name, phone, email, address } = userContext.user;
      setName(name || '');
      setPhone(phone || '');
      setEmail(email || '');
  
      if (address) {
        setSelectedCity(address.city || '');
        // 延遲更新地區以確保城市先更新
        setTimeout(() => {
          setStreet(address.detail || '');
          setSelectedCounty(address.county || '');
        }, 0);
      }
    }
  };

  useEffect(() => {
    setSelectedCounty('');
  }, [selectedCity]);

  if (!bookingContext || !bookingContext.room) {
    console.log('Booking context in BookingInfo:', bookingContext);
    return <LoadingModal />;
  }

  const { room, checkInDate, checkOutDate, currentPeople } = bookingContext;

  const handleBackClick = () => {
    navigate(`/room-detail/${room._id}`, { state: { checkInDate, checkOutDate, currentPeople } });
  };

  return (
    <>
      <div className='flex mb-2 lg:mb-4'>
        <button onClick={handleBackClick}>
          <img src={Left} alt="返回" />
        </button>
        <p className="ml-3 text-h4">確認訂房資訊</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex">
            <img src={Deco} alt="" />
            <p className="ml-3 text-h4">選擇房型</p>
          </div>
          <div className='pt-2'>
            <p className='text-xl'>{room.name}</p>
          </div>
        </div>
        <div>
          <button onClick={handleBackClick} className="underline hover:text-primary-120">編輯</button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex">
            <img src={Deco} alt="" />
            <p className="ml-3 text-h4">訂房日期</p>
          </div>
          <div className='pt-2'>
            <p className='text-xl'>入住： {checkInDate}</p>
            <p className='text-xl'>退房： {checkOutDate}</p>
          </div>
        </div>
        <div>
          <button onClick={handleBackClick} className="underline hover:text-primary-120">編輯</button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex">
            <img src={Deco} alt="" />
            <p className="ml-3 text-h4">入住人數</p>
          </div>
          <div className='pt-2'>
            <p className='text-xl'>{currentPeople} 人</p>
          </div>
        </div>
        <div>
          <button onClick={handleBackClick} className="underline hover:text-primary-120">編輯</button>
        </div>
      </div>
      
      <hr />

      <div className="max-w-4xl rounded-lg ">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-6">訂房人資訊</h1>
          <button onClick={applyMemberData} className="text-primary-100 mb-6 hover:text-primary-120 underline">套用會員資料</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-black">姓名</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">手機號碼</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">電子信箱</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">地址</label>
          <div className="flex space-x-4">
            <select
              className="mt-1 block w-1/3 border border-gray-300 rounded-md shadow-sm p-2"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="" disabled>選擇城市</option>
              {cityData.map((city) => (
                <option key={city.name} value={city.name}>{city.name}</option>
              ))}
            </select>
            <select
              className="mt-1 block w-1/3 border border-gray-300 rounded-md shadow-sm p-2"
              value={selectedCounty}
              onChange={(e) => setSelectedCounty(e.target.value)}
              disabled={!selectedCity}
            >
              <option value="" disabled>選擇地區</option>
              {selectedCity &&
                cityData
                  .find((city) => city.name === selectedCity)
                  ?.districts.map((district) => (
                    <option key={district.zip} value={district.name}>
                      {district.name}
                    </option>
                  ))}
            </select>
          </div>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="街道地址"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>

      <hr />

      <div className="flex flex-col gap-6">
        <div className="flex">
          <img src={Deco} alt="" />
          <p className="ml-3 text-h5">房型基本資訊</p>
        </div>
        <div className="flex gap-5">
          <div className="border-none bg-white rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
            <IconButton
              name="ic_Size"
              svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
              className="mb-2"
              disabled={true}
            />
            <p className="text-body font-bold">{room.areaInfo}</p>
          </div>
          <div className="border-none bg-white rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
            <IconButton
              name="ic_Bed"
              svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
              className="mb-2"
              disabled={true}
            />
            <p className="text-body font-bold">{room.bedInfo}</p>
          </div>
          <div className="border-none bg-white rounded-[0.6rem] w-20 h-20 pl-3 pt-4">
            <IconButton
              name="ic_Person"
              svgClass="w-[1.5rem] h-[1.5rem] text-primary-100"
              className="mb-2"
              disabled={true}
            />
            <p className="text-body font-bold">{room.maxPeople} 人</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex">
          <img src={Deco} alt="" />
          <p className="ml-3 text-h5">房間格局</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 gap-y-0 border-none bg-white rounded-[0.6rem] py-4 pl-4 pr-24 w-full h-22">
          {room.layoutInfo.filter(item => item.isProvide).map(item => (
            <div key={item.title} className="flex items-baseline w-[100px]">
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

      <div className="flex flex-col gap-6">
        <div className="flex">
          <img src={Deco} alt="" />
          <p className="ml-3 text-h5">房內設備</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 gap-y-0 border-none bg-white rounded-[0.6rem] py-4 pl-4 pr-24 w-full h-44 lg:h-28">
          {room.facilityInfo.filter(item => item.isProvide).map(item => (
            <div key={item.title} className="flex items-baseline w-[100px]">
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

      <div className="flex flex-col gap-6 mb-10">
        <div className="flex">
          <img src={Deco} alt="" />
          <p className="ml-3 text-h5">備品提供</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 gap-y-0 border-none bg-white rounded-[0.6rem] py-4 pl-4 pr-24 w-full h-44 lg:h-28">
          {room.amenityInfo.filter(item => item.isProvide).map(item => (
            <div key={item.title} className="flex items-baseline w-[100px]">
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
    </>
  );
};

export default BookingInfo;
