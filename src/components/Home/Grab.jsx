import React from 'react'
import grabupto from '../../components/json/grabupto.json'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Grab = () => {
    return (
        <>
            <section>
                <div className='padcontain'>
                    <div className='container'>
                        <div className=''>
                            <Swiper
                                slidesPerView={1.5}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                {
                                    grabupto.map((item, index) => (
                                        <SwiperSlide key={index} className=''>
                                            <div

                                                className="max-w-[1185px] w-full h-[440px] bg-no-repeat bg-center rounded-lg shadow-lg"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            >
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Grab