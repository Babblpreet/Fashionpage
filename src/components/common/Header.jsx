import React, { useState } from 'react';
import arrow from '../../assets/svg/keyboardarrow.svg'
import search from '../../assets/svg/search.svg'



const Header = () => {
  const [rotate, newrotate] = useState(false);

  return (
    <header>
      <div className='container pt-[30px] pb-[30px]'>
        <div className='flex items-center justify-between'>
          <h1 className='text-orange-lightorange font-bold	text-[28px] leading-[38px]'>FashionCarts<span className='text-[#02A77D]'>.</span></h1>
          <div className='flex max-w-[1090px] w-full'>
            <div className='flex max-w-[152px] w-full gap-[6px] py-[13px] px-3 bg-[#F6F8FA] rounded-l-md'>
              <h2 className='text-base leading-[22px]'>All Categories</h2>
              <button onClick={() => newrotate(!rotate)} className={`h-[18px] w-[18px] flex items-center justify-center pt-[2px] transition-all duration-200 ${rotate && 'rotate-180'}`}><img src={arrow} alt="" /></button>
            </div>
            <input type="text" placeholder='Search Brands...' className='text-gray-lightgray  bg-[#FBFBFB] px-[10px] text-[16px] font-normal leading-[25px] w-full outline-none' />
            <button className='bg-orange-lightorange px-5 rounded-r-md'><img src={search} alt="search" className='max-w-none' /></button>
          </div>
          <div>
            
          </div>
        </div>
        <span></span>
        <div></div>
      </div>
    </header>
  );
};

export default Header