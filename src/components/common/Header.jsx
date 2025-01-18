import React, { useState } from 'react';
import arrow from '../../assets/svg/keyboardarrow.svg'
import search from '../../assets/svg/search.svg'
import heart from '../../assets/svg/heart.svg'
import bucket from '../../assets/svg/bucket.svg'
import login from '../../assets/svg/login.svg'
import menulinks from '../../components/json/menu.json'



const Header = () => {
  const [rotate, newrotate] = useState(false);

  return (
    <header>
      <div className='container pt-[30px] pb-[30px]'>
        <div className='flex items-center justify-between'>
          <h1 className='text-orange-lightorange font-mulish_bold text-[28px] leading-[38px]'>FashionCarts<span className='text-[#02A77D]'>.</span></h1>
          <div className='flex max-w-[1090px] w-full'>
            <div className='flex max-w-[152px] w-full gap-[6px] py-[13px] px-3 bg-[#F6F8FA] rounded-l-md'>
              <h2 className='text-base leading-[22px] font-mulish_medium'>All Categories</h2>
              <button onClick={() => newrotate(!rotate)} className={`h-[18px] w-[18px] flex items-center justify-center pt-[2px] transition-all duration-200 ${rotate && 'rotate-180'}`}><img src={arrow} alt="" /></button>
            </div>
            <input type="text" placeholder='Search Brands...' className='text-gray-lightgray  bg-[#FBFBFB] px-[10px] text-[16px] font-mulish_regular leading-[25px] w-full outline-none' />
            <button className='bg-orange-lightorange px-5 rounded-r-md'><img src={search} alt="search" className='max-w-none' /></button>
          </div>
          <div className='flex gap-5'>
            <div className='flex flex-col gap-[6px] items-center p-[2px]'>
              <img src={heart} className='max-w-5' alt="heart" />
              <h2 className='font-mulish_medium text-gray-medgray text-sm'>Wishlist</h2>
            </div>
            <div className='flex flex-col gap-[6px] items-center content-center p-[2px]'>
              <img src={bucket} className='max-w-5' alt="heart" />
              <h2 className='font-mulish_medium text-gray-medgray text-sm'>Cart</h2>
            </div>
            <div className='flex flex-col gap-[6px] items-center content-center p-[2px]'>
              <img src={login} className='max-w-5' alt="heart" />
              <h2 className='font-mulish_medium text-gray-medgray text-sm'>Login</h2>
            </div>
          </div>
        </div>
        <span></span>
        <div>
          <ul className='flex gap-2'>
            {menulinks?.length &&
            menulinks &&  
            menulinks?.map((items, index) => ( 
                <li className='' key = {index}>{items.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header