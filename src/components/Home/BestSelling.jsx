import React, { useState } from 'react'
// import SellingCards from '../json/Selling.json'
import maskedarrow from '../../assets/svg/Maskedarrow.svg'
import Selling from '../cards/SellingCards'
// import CountdownTimer from '../Ui/CountdownTimer'

const BestSelling = ({ heading, data, headname, bgNone , view}) => {
    return (
        <>
            <section className={bgNone ? "" : "bg-[#F57E5D0A]"}>
                <div className='padcontain'>
                    <div className='container'>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <h2 className='commonheadname'>{headname}</h2>
                                <h2 className='commonheading'>{heading}</h2>
                            </div>
                            <button className={`border-none py-[10px] px-4 items-center flex gap-2 ${view ? "hidden" : "block"}`}><h2 className='text-orange-lightorange'>View All</h2><img src={maskedarrow} alt="maskedarrow " /></button>
                        </div>
                        {/* <CountdownTimer targetDate="2025-03-01" /> */}

                        <div className='grid grid-cols-4 gap-[30px] mt-[60px]'>

                            {data.map((item, index) => (
                                <Selling
                                    key={index}
                                    image={item.image}
                                    title={item.title}
                                    heartsvg={item.heartsvg}
                                    coloredtag={item.coloredtag}
                                    coloroftag={item.coloroftag}
                                    star={item.star}
                                    selectcolors={item.selectcolors}
                                    colors={item.colors}
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
            </section>
        </>
    )
}

export default BestSelling