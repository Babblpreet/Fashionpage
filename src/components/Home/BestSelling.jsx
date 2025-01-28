import React from 'react'
import SellingCards from '../json/Selling.json'
import maskedarrow from '../../assets/svg/Maskedarrow.svg'


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
                    {
                        SellingCards.map((item, index) => (
                            <div key={index} to={item.to}>
                                <div>
                                
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BestSelling