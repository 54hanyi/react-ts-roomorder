import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-[#140F0A] z-10">
      <div className="flex justify-between items-center h-[6rem]">
        <NavLink to='/'>
          <img src="/images/web/logo.png" alt="logo" className="h-13 pl-16" />
        </NavLink>
        <div className="hidden sm:flex items-center gap-8 text-body pr-16">
          <NavLink to='/rooms'>
            <button className="text-neutral-0 hover:text-primary-80">客房旅宿</button>
          </NavLink>
          <NavLink to='/login'>
            <button className="text-neutral-0 hover:text-primary-80">會員登入</button>
          </NavLink>
          <NavLink to='/rooms'>
            <button className="text-neutral-0 bg-primary-100 p-4 rounded-lg hover:bg-primary-120">立即訂房</button>
          </NavLink>
        </div>
        <div className="sm:hidden flex items-center pr-4">
          <button
            className="text-neutral-0 hover:text-primary-80 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden absolute top-0 left-0 w-full h-screen bg-[#140F0A] flex justify-center items-center">
          <button
            className="text-neutral-0 hover:text-primary-80 absolute top-4 right-4"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="text-body flex flex-col items-center">
            <NavLink to='/rooms'>
              <button className="text-neutral-0 hover:text-primary-80 p-4 mb-2 w-full">客房旅宿</button>
            </NavLink>
            <NavLink to='/login'>
              <button className="text-neutral-0 hover:text-primary-80 p-4 mb-2 w-full">會員登入</button>
            </NavLink>
            <NavLink to='/rooms'>
              <button className="text-neutral-0 bg-primary-100 p-4 rounded-lg hover:bg-primary-120 w-full">
                立即訂房
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
