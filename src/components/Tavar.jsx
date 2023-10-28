import React from 'react';
import tavarsoat from '../assets/img/tavar-soat.png';
import tavarsumka from '../assets/img/tavar-sumka.png';
import tavarzirak from '../assets/img/tavar-ziriak.png';
import tavarzirak1 from '../assets/img/tavar-zirak-1.png';
const Tavar = () => {
  return (
    <div className='w-full max-w-[1440px] px-5 mx-auto pb-20'>
      <h2 className='font-normal text-3xl md:text-5xl text-center mb-6'>Товары в наличии</h2>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        <li className='flex flex-col justify-center items-center text-center bg-[#F5F3F4] py-6 px-14'>
          <h3 className='font-normal text-2xl md:text-3xl leading-normal mb-7'>Часы</h3>
          <img className='w-[288px] h-[154px]' src={tavarsoat} alt="tavar soat" />
        </li>
        <li className='flex flex-col justify-center items-center text-center bg-[#F5F3F4] py-6 px-14'>
          <h3 className='font-normal text-2xl md:text-3xl leading-normal mb-7'>Аксессуары</h3>
          <img className='w-[288px] h-[154px]' src={tavarsumka} alt="tavar soat" />
        </li>
        <li className='bg-[#F5F3F4]'>
          <h3 className='font-normal text-center text-2xl md:text-3xl leading-normal pt-6'>Украшения</h3>
          <div className='flex justify-between'>
            <img src={tavarzirak} alt="tavar soat" />
            <img src={tavarzirak1} alt="tavar soat" />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Tavar