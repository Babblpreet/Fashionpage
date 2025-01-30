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
                        <Swiper slidesPerView={1}
                            spaceBetween={30}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {
                                grabupto.map((item, index) => (
                                    <SwiperSlide key={index} to={item.to}>
                                        <div className="max-w-[1185px] h-[440px] w-full" style={{ backgroundImage: `url(${item.image})` }}
                                        >

                                        </div>
                                    </SwiperSlide>
                                ))
                            }


                        </Swiper>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Grab