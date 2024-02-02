import { useState } from 'react';
import Line from '../assets/icons/Line.svg'

interface HomeButtonProps {
  text: string; 
  width: string; 
}

export default function HomeButton( { text, width }: HomeButtonProps ) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonClass = `flex bg-neutral-0 text-black text-h5 rounded-md hover:bg-primary-120 hover:text-white my-6 p-4 ${width} h-18 justify-end items-center`;
  return (
    
    <>
    <button 
      className={buttonClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
      <img src={Line} alt="Line" className="ml-2" style={{
        width: isHovered ? '20%' : '30%',
        filter: isHovered ? 'brightness(0) invert(1)' : '', 
      }}/>
    </button>
    </>
  )
}
