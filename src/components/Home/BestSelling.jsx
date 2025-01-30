import React, { useState } from 'react'
import SellingCards from '../json/Selling.json'
import maskedarrow from '../../assets/svg/Maskedarrow.svg'


const BestSelling = () => {

    const [like, setlike] = useState(false)

    const handlelike = (likeclick) => {
        setlike(!like);
    };


    return (
        <>
            <div className='padcontain bg-[#F57E5D0A]'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                            <h2 className='commonheadname'>Products</h2>
                            <h2 className='commonheading'>Best Selling Products</h2>
                        </div>
                        <button className='border-none py-[10px] px-4 items-center flex gap-2'><h2 className='text-orange-lightorange'>View All</h2><img src={maskedarrow} alt="maskedarrow " /></button>
                    </div>

                    <div className='grid grid-cols-4 gap-[30px] mt-[60px]'>

                        {SellingCards.map((item, index) => (
                            <div key={index} to={item.to} className='p-[14px] bg-white rounded-[14px]'>
                                <div className='relative group max-w-[347px] w-full  h-[364px] bg-[#FBFBFB] flex items-center justify-center rounded-[10px] mb-[14px]' >
                                    <img src={item.image} alt={item.title} />
                                    <button className='absolute bottom-[10px] hidden group-hover:block transition-transform
                                    duration-500 ease-in-out py-4 px-[94px] rounded-lg bg-orange-lightorange'><h2 className='font-mulish_semibold text-xl leading-7 text-white'>Add To Cart</h2></button>
                                    <h2 className='absolute top-[19px] left-[14px] py-1 px-3 bg-red-400 rounded-[18px] font-mulish_regular text-[13px] leading-[18px]'>{item.coloredtag}</h2>
                                    <div className={`absolute p-[9px] rounded-full top-[14px] right-[14px] transition-transform duration-300 ease-in-out    hover:scale-105 cursor-pointer ${like ? 'bg-red-500' : 'bg-white'}`} onClick={handlelike}><img src={item.heartsvg} alt="like" />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[10px]'>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='font-mulish_medium text-xl leading-[30px] text-gray-medgray'>{item.title}</h2>
                                        <div className='flex gap-1'>
                                            <img src={item.star} alt="star" />
                                            <h3 className='font-mulish_regular text-base leading-[25px] text-gray-lightgray'>{item.rated}</h3>
                                        </div>
                                    </div>
                                    <div></div>
                                    <div className='flex gap-[6px] items-center'>
                                        <h2 className='font-mulish_semibold text-2xl leading-[35px] text-gray-darkgray'>{item.price}</h2>
                                        <h3 className='font-mulish_regular line-through text-base leading-[25px] text-[#B0BEC5] '>{item.discountprice}</h3>
                                        <h3 className='font-mulish_regular text-base leading-[25px] text-gray-midgray'>{item.offpercent}</h3>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default BestSelling