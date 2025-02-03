import React from 'react'
import offersec from '../../components/json/offersec.json'

const Offersec = () => {
    return (
        <>
            <section>
                <div className="padcontain">
                    <div className="container">
                        <div className='flex gap-[30px]'>
                            {offersec.map((item, index) => (
                                <div className='max-w-[780px] w-full h-[420px] bg-no-repeat bg-center relative'
                                    style={{ backgroundImage: `url(${item.image})` }}>
                                    <div className='absolute top-20 left-[30px]'>
                                        <h2 className={`font-mulish_bold text-5xl leading-[65px] `}>{item.title}</h2>
                                        <div className='flex gap-[10px] mt-5 items-center'>
                                            <h3 className='font-mulish_medium text-xl leading-[30px]'>{item.start}</h3>
                                            <h3 className='font-mulish_semibold text-[34px] leading-[45px]'>{item.price}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offersec