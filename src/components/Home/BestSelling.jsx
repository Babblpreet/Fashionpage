import React, { useState } from 'react'
import SellingCards from '../json/Selling.json'
import maskedarrow from '../../assets/svg/Maskedarrow.svg'
import Selling from '../cards/SellingCards'


const BestSelling = () => {



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
                            <Selling
                            key={index}
                            image={item.image}
                            title={item.title}
                            heartsvg={item.heartsvg}
                            coloredtag={item.coloredtag}
                            star={item.star}
                            rated={item.rated}
                            price={item.price}
                            discountprice={item.discountprice}
                            offpercent={item.offpercent}
                            />
                            
                        ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default BestSelling