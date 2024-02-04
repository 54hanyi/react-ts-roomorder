// import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useContext, createContext } from 'react'
import { useNavigate } from "react-router-dom"
import Input from '../components/Input'

import { RegisterForm1 } from '../interface/UserInfo'
import Line2 from '../assets/icons/Line2.svg'
import Navbar from '../components/Navbar'

const api = import.meta.env.VITE_API_LINK

export const UserContext = createContext({
  email: '',
  password: ''
});

export default function SignUp() {
  const Context = useContext(UserContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm1>({
    defaultValues: {
      email: '',
    },
    mode: 'onTouched',
  })
  const onSubmit = async (data: RegisterForm1) => {
    const { email, password, confirmPassword } = data
    const emailVerify = await axios.post(
      `${api}api/v1/verify/email`, {email}
    )
    if (emailVerify.data.result.isEmailExists) {
      alert('此信箱已註冊過')
      return
    }
    if (password !== confirmPassword) {
      alert('密碼不一致')
      return
    }
    Context.email = email
    Context.password = password
    navigate('/signup2')
  }
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex bg-[#140F0A]" style={{ height: 'calc(100vh - 6rem)' }}>
          <div className="w-[50%] hidden sm:block bg-cover bg-bottom bg-[url('/images/web/register.png')] h-auto z-10"></div>
          <div className="relative sm:w-[50%] w-full flex items-center justify-center">
            <img src={Line2} alt="Line2" className='absolute top-14 right-0 w-full'/>
            <div className="flex flex-col w-[50%] ">
              <p className='text-title mb-2 text-primary-100'>享樂酒店，誠摯歡迎</p>
              <p className='text-h1 text-white'>立即註冊</p>
              <div className='flex gap-1 justify-center items-center pt-6'>
                <img src="/images/web/step1.png" alt="" className='h-10 w-20'/>
                <img src="/images/web/stepline.png" alt="" className='h-[1px] w-48'/>
                <img src="/images/web/step2.png" alt="" className='h-10 w-20'/>
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
