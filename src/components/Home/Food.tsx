import DecoLine2 from '../../assets/icons/DecoLine2.svg'
import SliderList from '../Common/SliderList';
import { foodImgList } from '../../data/foodImgList';
import { foodList } from '../../data/foodList'; 


export default function Food() {
  return (
    <>
      <div className="bg-[#F7F2EE] h-832 lg:h-880 w-full">
        <div className="relative lg:z-20">
          <img src={`${import.meta.env.BASE_URL}images/web/line.png`} alt="" className='absolute top-20 h-880' loading="lazy" />
        </div>
        <div className="relative">
          <img src={`${import.meta.env.BASE_URL}images/web/dot.png`} alt="" className='absolute right-14 top-[-5rem] h-[10rem]' loading="lazy" />
        </div>

        <div className="pt-28 pl-4 xl:pl-48 flex flex-col ">
          <div className='relative flex flex-col text-h1 text-primary-120 md:text-primary-100'>
            <p>佳餚</p>
            <p>美饌</p>
            <img src={DecoLine2} alt="Line" className="absolute top-12 left-28 w-48" loading="lazy" />
          </div>
          <div className='flex py-10 space-x-4 h-[36rem]'>
            <SliderList sliderList={foodList} sliderImgList={foodImgList} />
          </div>
        </div>
      </div>
    </>
  )
}