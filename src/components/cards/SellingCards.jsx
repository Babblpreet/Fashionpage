import React, { Fragment, useState } from 'react'

const SellingCards = ({ image, title, heartsvg, coloredtag, star, rated, price, discountprice, offpercent }) => {

    const [like, setlike] = useState(false)

    const handlelike = (likeclick) => {
        setlike(!like);
    };
    return (
        <>
            <div className='p-[14px] bg-white rounded-[14px]'>
                <div className='relative group max-w-[347px] w-full  h-[364px] bg-[#FBFBFB] flex items-center justify-center rounded-[10px] mb-[14px]' >
                    <img src={image} alt={title} />
                    <button className='absolute bottom-[10px] opacity-0 group-hover:opacity-100 transition-opacity
                                    duration-500 ease-in-out py-4 px-[94px] rounded-lg bg-orange-lightorange'><h2 className='font-mulish_semibold text-xl leading-7 text-white'>Add To Cart</h2></button>
                    {
                        coloredtag &&
                        <h2 className='absolute top-[19px] left-[14px] py-1 px-3 bg-red-400 rounded-[18px] font-mulish_regular text-[13px] leading-[18px]'>{coloredtag}</h2>
                    }
                    <div className={`absolute p-[9px] rounded-full top-[14px] right-[14px] transition-transform duration-300 ease-in-out    hover:scale-105 cursor-pointer ${like ? 'bg-red-500' : 'bg-white'}`} onClick={handlelike}><img src={heartsvg} alt="like" />
                    </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-mulish_medium text-xl leading-[30px] text-gray-medgray'>{title}</h2>
                        <div className='flex gap-1'>
                            <img src={star} alt="star" />
                            <h3 className='font-mulish_regular text-base leading-[25px] text-gray-lightgray'>{rated}</h3>
                        </div>
                    </div>
                    <div></div>
                    <div className='flex gap-[6px] items-center'>
                        <h2 className='font-mulish_semibold text-2xl leading-[35px] text-gray-darkgray'>{price}</h2>
                        <h3 className='font-mulish_regular line-through text-base leading-[25px] text-[#B0BEC5] '>{discountprice}</h3>
                        <h3 className='font-mulish_regular text-base leading-[25px] text-gray-midgray'>{offpercent}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellingCards