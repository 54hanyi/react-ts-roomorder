import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import SeoHelmet from '@/components/Common/SeoHelmet';
import LoadingModal from '@/components/Common/LoadingModal';
import Input from '@/components/Common/Input';
import UserContext from '@/contexts/UserContext';
import { MemberEditData } from '@/types';
import Line2 from '../assets/icons/Line2.svg';

const SignUp = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<MemberEditData>({
    defaultValues: { email: '', password: '', confirmPassword: '' },
    mode: 'onTouched',
  });

  if (!userContext) {
    return <LoadingModal />;
  }

  const { setEmail, setPassword } = userContext;

  const onSubmit = async (data: MemberEditData) => {
    const { email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      alert('密碼不一致');
      return;
    }
    if (email && password) {
      setEmail(email);
      setPassword(password);
      navigate('/signup2');
    } else {
      alert('請輸入有效的電子郵件和密碼');
    }
  };

  return (
    <>
      <SeoHelmet
        title="註冊帳號｜豪華酒店預訂系統"
        description="建立新帳號以享受完整訂房體驗。"
        canonical="https://54hanyi.github.io/react-ts-roomorder/signup"
      />
      <div className="flex flex-col">
        <div className="flex bg-[#140F0A]" style={{ height: 'calc(100vh - 6rem)' }}>
          <div className="w-[50%] hidden sm:block bg-cover bg-bottom bg-[url(\'/images/web/register.png\')] h-auto z-10"></div>
          <div className="relative sm:w-[50%] w-full flex items-center justify-center">
            <img src={Line2} alt="Line2" className='absolute top-14 right-0 w-full' loading="lazy" />
            <div className="flex flex-col w-[50%] ">
              <p className='text-title mb-2 text-primary-100'>享樂酒店，誠摯歡迎</p>
              <p className='text-h1 text-white'>立即註冊</p>
              <div className='flex gap-1 justify-center items-center pt-6'>
                <img src="./images/web/step1.png" alt="" className='h-10 w-20' loading="lazy" />
                <img src="./images/web/stepline.png" alt="" className='h-[1px] w-48' loading="lazy" />
                <img src="./images/web/step2.png" alt="" className='h-10 w-20' loading="lazy" />
              </div>
              <form action="" className='text-neutral-60' onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-8'>
                  <Input
                    register={register}
                    errors={errors}
                    id="email"
                    labelText="電子信箱"
                    type="email"
                    placeholder="hello@exsample.com"
                    rules={{
                      required: {
                        value: true,
                        message: '請輸入 Email'
                      },
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Email 格式不正確'
                      }
                    }}
                  />
                  <Input
                    register={register}
                    errors={errors}
                    id="password"
                    labelText="密碼"
                    type="password"
                    placeholder="請輸入密碼"
                    rules={{
                      required: {
                        value: true,
                        message: '請輸入密碼'
                      },
                      minLength: {
                        value: 8,
                        message: '密碼至少需要 8 個字'
                      },
                      pattern: {
                        value: /^(?=.*[a-zA-Z])/,
                        message: '密碼需包含至少 1 個字母'
                      }
                    }}
                  />
                  <Input
                    register={register}
                    errors={errors}
                    id="confirmPassword"
                    labelText="確認密碼"
                    type="password"
                    placeholder="請再次輸入密碼"
                    rules={{
                      required: {
                        value: true,
                        message: '請再次輸入密碼'
                      },
                      minLength: {
                        value: 8,
                        message: '密碼至少需要 8 個字'
                      }
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-[3rem] mt-8 px-4 py-2 text-body font-medium text-neutral-60 bg-neutral-40 rounded-md focus:outline-none focus:ring-primary-100 hover:bg-primary-100 hover:text-white"
                >
                  下一步
                </button>

                <div className="flex text-body mt-4">
                  <p>已經有會員了嗎？</p>
                  <Link to="/login" className='text-primary-100 underline ml-1'>立即登入</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;
