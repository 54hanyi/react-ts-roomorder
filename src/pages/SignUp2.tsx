import { useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import SeoHelmet from '@/components/Common/SeoHelmet';
import Input from '@/components/Common/Input';
import UserContext from '@/contexts/UserContext';
import { IUser } from '../types/user';
import cityData from "../data/cityData.json";
import { userRegister } from '@/assets/api'; 

import Line2 from '../assets/icons/Line2.svg';

type FormValues = {
  name?: string;
  phone?: string;
  year: string;
  month: string;
  date: string;
  districts: string;
  address?: string;
  agreement?: boolean;
};

const SignUp2 = () => {
  const { email, password } = useContext(UserContext);
  const navigate = useNavigate();
  const [county, setCounty] = useState<string>('臺北市');
  const countyData = cityData.find((c) => c.name === county)?.districts || [];

  const yearList = Array.from({ length: 80 }, (_, index) => (1944 + index).toString());
  const dateList = Array.from({ length: 31 }, (_, index) => (index + 1).toString());
  const monthList = Array.from({ length: 12 }, (_, index) => (index + 1).toString());

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: { year: '1998', month: '4', date: '1', districts: '100' },
    mode: 'onTouched',
  });

  const getCountyValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCounty(e.target.value);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { address, districts, phone, name, year, month, date } = data;
    const userData: IUser = {
      name: name || '',
      email: email || '',
      password: password || '',
      phone: phone || '',
      birthday: new Date(`${year}-${month}-${date}`),
      address: {
        zipcode: parseInt(districts, 10),
        detail: address || '',
      }
    };

    try {
      const response = await userRegister({
        name: userData.name,
        email: userData.email,
        password: userData?.password as string,
        phone: userData.phone,
        birthday: new Date(userData.birthday || '').toDateString(),
        address: {
          zipcode: userData.address.zipcode,
          detail: userData.address.detail,
        },
      });
      if (response.status) {
        alert('註冊成功，請重新登入');
        navigate('/login', { replace: true });
      } else {
        alert(response.message || '註冊失敗，請重試');
      }
    } catch (error) {
      alert('註冊失敗，請重試');
    }
  };

  return (
    <>
      <SeoHelmet
        title="第二步註冊｜豪華酒店預訂系統"
        description="完成個人資訊填寫以完成帳號建立。"
        canonical="https://54hanyi.github.io/react-ts-roomorder/signup2"
      />
      <div className="flex flex-col">
        <div className="flex bg-[#140F0A]" style={{ height: 'calc(100vh - 6rem)' }}>
          <div className="w-[50%] hidden sm:block bg-cover bg-bottom bg-[url('/images/web/register.png')] h-auto z-10"></div>
          <div className="relative sm:w-[50%] w-full flex items-center justify-center">
            <img src={Line2} alt="Line2" className='absolute top-0 right-0 w-full' loading="lazy" />
            <div className="flex flex-col w-[50%] ">
              <p className='text-h1 text-white'>立即註冊</p>
              <div className='flex gap-1 justify-center items-center pt-8'>
                <img src="./images/web/step1-2.png" alt="" className='h-10 w-20' loading="lazy" />
                <img src="./images/web/stepline.png" alt="" className='h-[2px] w-48' loading="lazy" />
                <img src="/images/web/step2-2.png" alt="" className='h-10 w-20' loading="lazy" />
              </div>
              <form action="" className='text-neutral-60' onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-6'>
                  <Input
                    register={register}
                    errors={errors}
                    id="name"
                    labelText="姓名"
                    type="text"
                    placeholder="請輸入姓名"
                    rules={{
                      required: {
                        value: true,
                        message: '請輸入姓名'
                      },
                      minLength: {
                        value: 2,
                        message: '姓名至少需要 2 個字'
                      }
                    }}
                  />
                  <Input
                    register={register}
                    errors={errors}
                    id="phone"
                    labelText="手機號碼"
                    type="phone"
                    placeholder="請輸入手機號碼"
                    rules={{
                      required: {
                        value: true,
                        message: '請輸入手機號碼'
                      },
                      pattern: {
                        value: /^09\d{8}$/,
                        message: '手機號碼格式不正確'
                      }
                    }}
                  />
                  <div className='my-1'>
                    <p className='text-white'>生日</p>
                    <div className='flex justify-between gap-3'>
                      <div className='w-full'>
                        <select id='year' className='text-neutral-60 w-full mt-1 px-3 py-2 border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100'
                        {...register('year')}
                        >
                          {
                            yearList.map(i => {
                              return (
                                <option key={i} value={i}>{i + ' 年'}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                      <div className='w-full'>
                        <select id='month' className='text-neutral-60 w-full mt-1 px-3 py-2 border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100'
                        {...register('month')}>
                          {
                            monthList.map(i => {
                              return (
                                <option key={i} value={i}>{i + ' 月'}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                      <div className='w-full'>
                        <select id='date' className='text-neutral-60 w-full mt-1 px-3 py-2 border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100'
                        {...register('date')}>
                          {
                            dateList.map(i => {
                              return (
                                <option key={i} value={i}>{i + ' 日'}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                    </div>
                  </div>
                  <p className='text-white'>地址</p>
                  <div className='flex justify-between gap-3'>
                    <div className='w-full'>
                      <select 
                        id='county' 
                        className='text-neutral-60 w-full mt-1 px-3 py-2 border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100' 
                        defaultValue={county} 
                        onChange={getCountyValue}
                      >
                        {
                          cityData.map(i => {
                            return (
                              <option key={i.name} value={i.name}>{i.name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className='w-full'>
                      <select 
                        id='districts' 
                        className='text-neutral-60 w-full mt-1 px-3 py-2 border border-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-primary-100 focus:border-primary-100' 
                        {...register('districts')}
                      >
                        {
                          countyData.map(i => {
                            return (
                              <option key={i.zip} value={i.zip}>{i.name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <Input
                    register={register}
                    errors={errors}
                    id="address"
                    labelText="詳細地址"
                    type="text"
                    placeholder="請輸入詳細地址"
                    rules={{
                      required: {
                        value: true,
                        message: '請輸入詳細地址'
                      }
                    }}
                  />

                  <div className='flex justify-between items-center mt-2'>
                    <label htmlFor="" className='flex items-center space-x-2'>
                      <input 
                        type="checkbox" 
                        required
                        className='h-3.5 w-3.5 pt-0.5'
                      />
                      <span className='text-body'>我已閱讀並同意本網站個資使用規範</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-[3rem] mt-6 px-4 py-2 text-body font-medium text-neutral-60 bg-neutral-40 rounded-md focus:outline-none focus:ring-primary-100 hover:bg-primary-100 hover:text-white"
                >
                  完成註冊
                </button>
                <div className="flex text-body my-2">
                  <p>已經有會員了嗎？</p>
                  <a href="" className='text-primary-100 underline ml-1'>立即登入</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp2;
