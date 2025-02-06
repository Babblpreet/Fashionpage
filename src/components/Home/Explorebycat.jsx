import React from 'react'
import maskedarrow from '../../assets/svg/Maskedarrow.svg'
import explorebycat from '../../components/json/explorebycat.json'


const Explorebycat = () => {
    return (
        <>
            <section>
                <div className='padcontain'>
                    <div className='container'>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <h2 className='commonheadname'>Categories</h2>
                                <h2 className='commonheading'>Explore By Categories</h2>
                            </div>
                            <button className='border-none py-[10px] px-4 items-center flex gap-2'><h2 className='text-orange-lightorange'>View All</h2><img src={maskedarrow} alt="maskedarrow " /></button>
                        </div>
                        <div className='mt-[60px] flex gap-[30px]'>
                            {
                                explorebycat.map((item, index) => (
                                    <div className='flex flex-col items-center gap-5 pb-5' key={index} >
                                        <div className='rounded-t-[50px] max-w-[240px] w-full h-[280px] overflow-hidden'>
                                            <img className='transition-all ease-in-out duration-500 hover:scale-105' src={item.image} alt={item.title} />
                                        </div>
                                        <h2 className='font-mulish_medium text-xl leading-[30px] text-gray-medgray'>{item.title}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Explorebycat