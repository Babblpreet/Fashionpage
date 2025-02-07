import React from 'react'
import image from "../../assets/images/livesale.png";
import rectangle from '../../assets/images/Rectangle1.png'
import Buttonreuse from '../Ui/Buttonreuse'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



const Thought = () => {
    return (
        <section>
            <div className="padcontain">
                <div className="container">
                    <Swiper slidesPerView={1}
                                spaceBetween={0} navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className="bg-cover bg-center h-[420px] w-full" style={{ backgroundImage: `url(${image})` }}>
                                <div className="flex flex-col items-center gap-10 pt-[74px]">
                                    <div className="relative">
                                        <img src={rectangle} alt="rectangle" />
                                        <h2 className="absolute top-[5px] left-[47px] text-orange-lightorange font-mulish_medium text-[20px] leading-[30px]">20th - 24th Sep</h2>
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-white font-mulish_bold text-5xl leading-[65px]">Hurry Up ! The Sale is Live Now</h2>
                                        <h3 className="mt-[10px] text-white font-mulish_medium text-xl leading-[30px]">Grab Upto 40% Off on Fashion</h3>
                                    </div>
                                    <Buttonreuse showarrow={true} children={"Shop Now"} />
                                </div>
                            </div>
                        </SwiperSlide> 
                        <SwiperSlide>
                            <div className="bg-cover bg-center h-[420px] w-full" style={{ backgroundImage: `url(${image})` }}>
                                <div className="flex flex-col items-center gap-10 pt-[74px]">
                                    <div className="relative">
                                        <img src={rectangle} alt="rectangle" />
                                        <h2 className="absolute top-[5px] left-[47px] text-orange-lightorange font-mulish_medium text-[20px] leading-[30px]">20th - 24th Sep</h2>
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-white font-mulish_bold text-5xl leading-[65px]">Hurry Up ! The Sale is Live Now</h2>
                                        <h3 className="mt-[10px] text-white font-mulish_medium text-xl leading-[30px]">Grab Upto 40% Off on Fashion</h3>
                                    </div>
                                    <Buttonreuse showarrow={true} children={"Shop Now"} />
                                </div>
                            </div>
                        </SwiperSlide> 
                        <SwiperSlide>
                            <div className="bg-cover bg-center h-[420px] w-full" style={{ backgroundImage: `url(${image})` }}>
                                <div className="flex flex-col items-center gap-10 pt-[74px]">
                                    <div className="relative">
                                        <img src={rectangle} alt="rectangle" />
                                        <h2 className="absolute top-[5px] left-[47px] text-orange-lightorange font-mulish_medium text-[20px] leading-[30px]">20th - 24th Sep</h2>
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-white font-mulish_bold text-5xl leading-[65px]">Hurry Up ! The Sale is Live Now</h2>
                                        <h3 className="mt-[10px] text-white font-mulish_medium text-xl leading-[30px]">Grab Upto 40% Off on Fashion</h3>
                                    </div>
                                    <Buttonreuse showarrow={true} children={"Shop Now"} />
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Thought