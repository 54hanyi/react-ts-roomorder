import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../components/Common/Input';
import Line2 from '../assets/icons/Line2.svg';

const api = import.meta.env.VITE_API_LINK;

interface ResetPasswordFormValues {
  email: string;
  code: string;
  password: string;
}

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email') || '';

  const { register, handleSubmit, setError, formState: { errors } } = useForm<ResetPasswordFormValues>({
    defaultValues: { email, code: '', password: '' },
    mode: 'onTouched',
  });

  const onSubmit = async (data: ResetPasswordFormValues) => {
    try {
      const response = await axios.post(`${api}/api/v1/user/forgot`, { email: data.email, code: data.code, newPassword: data.password });
      if (response.data.status) {
        alert('新密碼設置成功');
        navigate('/login');
      } else {
        setError('password', { type: 'manual', message: response.data.message });
      }
    } catch (error) {
      alert('發生錯誤，請重試');
    }
  };

  return (
    <div className="flex flex-col">
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
                  placeholder="請輸入您的Email"
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
                  id="code"
                  labelText="驗證碼"
                  type="text"
                  placeholder="請輸入驗證碼"
                  rules={{ required: { value: true, message: '請輸入驗證碼' } }}
                />
              </div>
              <div className="mt-4">
                <Input
                  register={register}
                  errors={errors}
                  id="password"
                  labelText="新密碼"
                  type="password"
                  placeholder="請輸入您的新密碼"
                  rules={{ required: { value: true, message: '請輸入新密碼' } }}
                />
              </div>
              <button
                type="submit"
                className="w-full h-[3rem] mt-8 px-4 py-2 text-body font-medium text-neutral-60 bg-neutral-40 rounded-md focus:outline-none focus:ring-primary-100 hover:bg-primary-100 hover:text-white"
              >
                送出
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
