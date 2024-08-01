import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react'; 
import { userLogin } from '../assets/api';
import { UserLoginData, UserResponse } from '../types/user';
import Input from '../components/Common/Input';
import Line2 from '../assets/icons/Line2.svg';
import Navbar from '../components/Layout/Navbar';
import UserContext from '@/context/UserContext';

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<UserLoginData>({
    defaultValues: { email: '', password: '' },
    mode: 'onTouched',
  });

  const userContext = useContext(UserContext); 

  const onSubmit = async (data: UserLoginData) => {
    try {
      const response: UserResponse = await userLogin(data);
      if (response.status && response.result) {
        // 登入成功，更新UserContext
        if (userContext) {
          userContext.setUser(response.result);
          userContext.setIsLoggedIn(true);
          userContext.setUserName(response.result.name);
          // 保存 token 到本地存储
          if (response.token) {
            localStorage.setItem('authToken', response.token);
          }
        }
        alert(`歡迎 ${response.result.name}～`);
        navigate('/');
      } else {
        alert('登入失敗: ' + response.message);
      }
    } catch (error) {
      alert('發生未知錯誤');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex bg-[#140F0A]" style={{ height: 'calc(100vh - 6rem)' }}>
        <div className="w-[50%] hidden sm:block bg-cover bg-bottom bg-[url('/images/web/register.png')] h-auto z-10"></div>
        <div className="relative sm:w-[50%] w-full flex items-center justify-center">
          <img src={Line2} alt="Line2" className='absolute top-14 right-0 w-full'/>
          <div className="flex flex-col w-[50%]">
            <p className='text-title mb-2 text-primary-100'>享樂酒店，誠摯歡迎</p>
            <p className='sm:text-h1 text-h2 text-white'>立即開始旅程</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mt-8'>
                <Input
                  register={register}
                  errors={errors}
                  id="email"
                  labelText="電子信箱"
                  type="email"
                  placeholder="hello@example.com"
                  rules={{
                    required: { value: true, message: '請輸入 Email' },
                    pattern: { value: /^\S+@\S+$/i, message: 'Email 格式不正確' }
                  }}
                />
              </div>
              <div className="mt-4">
                <Input
                  register={register}
                  errors={errors}
                  id="password"
                  labelText="密碼"
                  type="password"
                  placeholder="請輸入密碼"
                  rules={{ required: { value: true, message: '請輸入密碼' } }}
                />
              </div>

              <div className='flex justify-between items-center mt-2'>
                <label htmlFor="" className='flex items-center space-x-2'>
                  <input type="checkbox" className='h-3.5 w-3.5 pt-0.5'/>
                  <span className='text-body text-white'>記住帳號</span>
                </label>
                <Link to="/get-code" className='text-body text-primary-100 underline ml-1 pb-[-1px]'>忘記密碼？</Link>
              </div>

              <button
                type="submit"
                className="w-full h-[3rem] mt-8 px-4 py-2 text-body font-medium text-neutral-60 bg-neutral-40 rounded-md focus:outline-none focus:ring-primary-100 hover:bg-primary-100 hover:text-white"
              >
                會員登入
              </button>
              <div className="flex text-white text-body mt-4">
                <p>沒有會員嗎？</p>
                <Link to="/signup" className='text-primary-100 underline ml-1'>前往註冊</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
