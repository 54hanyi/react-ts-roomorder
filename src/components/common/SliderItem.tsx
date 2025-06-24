import React from 'react';
import { SliderItemProps } from '../../types/slider'; 


const SliderItem: React.FC<SliderItemProps> = ({ Item, imgData }) => {
  return (
    <li className="flex-none w-[300px] md:w-[416px] h-[480px] md:h-[600px] relative rounded-[10px] mr-6 overflow-hidden">
      <picture className="inset-0">
        <source media="(max-width: 750px)" srcSet={imgData.mobile} />
        <img
          draggable={false}
          src={imgData.web}
          alt={Item.title}
          className="w-full h-auto object-cover"
          loading="lazy" 
        />
      </picture>
      <div className="absolute bottom-0 w-full h-[10rem] text-neutral-0 backdrop-blur-sm" style={{ background: "linear-gradient(#00000000, #140F0A)" }}>
        <div className="flex items-center justify-between m-[1rem]">
          <h3 className="text-h5">{Item.title}</h3>
          <p className="text-subtitle md:text-title ">{Item.diningTime}</p>
        </div>
        <p className="text-body2 md:text-body m-[1rem]">{Item.description}</p>
      </div>
    </li>
  );
};

export default SliderItem;
