import React from 'react'
import section1 from '../components/Home/section1.jsx'
import maingirl from '../../src/assets/images/maingirl.png'
import lowshine from '../../src/assets/images/lowshine.png'
import shine from '../../src/assets/images/shine.png'
import play from '../../src/assets/svg/Play(1).svg'

const Home = () => {
  return (
    <>
      <section1>
        <div className='bg-[#02A77D0A]  pt-[60px] pb-10'>
          <div className='container flex gap-[210px]'>
            <div className='relative pl-10'>
              <img src={maingirl} className='max-w-none' alt="maingirl" />
              <img src={lowshine} className="absolute top-[100px] left-[547px] animate-sparkle" style={{ animationDelay: '0.5s' }} alt="Low" />
              <img src={shine} className="absolute top-[295px] left-[2px] animate-sparkle" alt="Shine" />
            </div>
            <div className='pt-[178px]'>
              <h2 className='font-mulish_semibold text-2xl leading-[35px] text-orange-lightorange'>Hurry Up Grab 40% Off</h2>
              <h2 className='relative text-8xl leading-[100px] font-mulish_medium text-gray-darkgray'>New <span>Arrivals</span> For Summer Wear<img src={shine} className="absolute left-[662px] bottom-[-4px] animate-sparkle" alt="Shine" />
              </h2>
              <p className='font-mulish_semibold text-gray-midgray text-2xl leading-[35px] max-w-[732px] w-full pt-[30px]'>We Try Our Best Product For Shipping, Along With Tracking Info.
                We Inform Order Within 24hours In Your Email Address.</p>
              <div className='pt-[80px] flex items-center'>
                <button className='py-4 px-6 bg-orange-lightorange text-white font-mulish_semibold leading-7 rounded-lg text-xl hover:scale-105 transition-transform duration-500 ease-in-out'>SHOP NOW</button>
                <img src={play} className='max-w-none ml-[18px] cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out' alt="play"/>
                <h2 className='text-gray-highgray text-base leading-[25px] font-mulish_regular'>What On Trending?</h2>
              </div>
            </div>
          </div>

        </div>
      </section1>
    </>
  )
}

export default Home