import DecoLine2 from '../../assets/icons/DecoLine2.svg'
import Line3 from '../../assets/icons/Line3.svg'

export default function Transportation() {

  return (
    <>
      <div className="relative bg-[#140F0A] h-1056 w-full z-10">
        <div className="pt-20 px-10 lg:pt-28  lg:pl-48">
          <div className='relative flex flex-col items-start text-h1 text-primary-100'>
            <p>交通</p>
            <p>方式</p>
            <img src={DecoLine2} alt="Line" className="absolute top-12 left-28 w-48" loading="lazy" />
          </div>

          <div className='lg:mt-20 mt-10 w-full lg:w-[70rem]'>
            <p className='text-white text-body pb-3'>台灣高雄市新興區八角壓路87號</p>
            <img src={`${import.meta.env.BASE_URL}images/web/map.webp`} alt="" className='block rounded-sm lg:h-[20rem] h-[12rem] mx-auto' loading="lazy" />
            
            <div className='lg:flex mt-6'>
              <div className='text-white lg:w-1/3 p-2 lg:p-4'>
                <img src={`${import.meta.env.BASE_URL}images/web/car.png`} alt="" className='pb-4'/>
                <p className='text-h5'>自行開車</p>
                <p className='text-body'>如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。</p>
              </div>
              <div className='text-white lg:w-1/3 p-2 lg:p-4'>
                <img src={`${import.meta.env.BASE_URL}images/web/train.png`} alt="" className='pb-4'/>
                <p className='text-h5'>高鐵/火車</p>
                <p className='text-body'>如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。</p>
              </div>
              <div className='text-white lg:w-1/3 p-2 lg:p-4'>
                <img src={`${import.meta.env.BASE_URL}images/web/luxurycar.png`} alt="" className='pb-4'/>
                <p className='text-h5'>禮賓車服務</p>
                <p className='text-body'>享樂酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：</p>
                <p className='text-body'>(07)123-4567</p>
              </div>
            </div>
          </div>
        </div>
        <img src={Line3} alt="Line2" className='absolute bottom-0' loading="lazy" />
      </div>
    </>
  )
}
