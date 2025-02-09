import React from 'react'
import shopmap from '../../components/json/footershopping.json'
import helpmap from '../../components/json/footerhelp.json'
import companymap from '../../components/json/footercompany.json'
import popularmap from '../../components/json/footerpopular.json'
import contactmap from '../../components/json/footercontact.json'


const Footer = () => {
  return (
    <>
      <footer className='bg-[#263238]'>
        <div className='padcontain'>
          <div className='container'>
            <div className='flex gap-[30px]'>
              <div className='max-w-[240px] w-full'>
                <h2 className='mb-5 text-white font-mulish_medium text-xl leading-[30px]'>Shopping</h2>
                <div className='flex flex-col gap-[14px]'>
                  {
                    shopmap.map((item, index) => (
                      <h2 key={index} className='py-[3px] text-[#CFD8DC] font-mulish_regular text-base leading-[25px] cursor-pointer'>{item.name}</h2>
                    ))
                  }
                </div>
              </div>
              <div className='max-w-[240px] w-full'>
                <h2 className='mb-5 text-white font-mulish_medium text-xl leading-[30px]'>Help Desk</h2>
                <div className='flex flex-col gap-[14px]'>
                  {
                    helpmap.map((item, index) => (
                      <h2 key={index} className='py-[3px] text-[#CFD8DC] font-mulish_regular text-base leading-[25px] cursor-pointer'>{item.name}</h2>
                    ))
                  }
                </div>
              </div>
              <div className='max-w-[240px] w-full'>
                <h2 className='mb-5 text-white font-mulish_medium text-xl leading-[30px]'>Company</h2>
                <div className='flex flex-col gap-[14px]'>
                  {
                    companymap.map((item, index) => (
                      <h2 key={index} className='py-[3px] text-[#CFD8DC] font-mulish_regular text-base leading-[25px] cursor-pointer'>{item.name}</h2>
                    ))
                  }
                </div>
              </div>
              <div className='max-w-[375px] w-full'>
                <h2 className='mb-5 text-white font-mulish_medium text-xl leading-[30px]'>Popular Searches</h2>
                <div className="grid grid-cols-2 gap-y-[14px] gap-x-[10px]">
                  {popularmap.map((item, index) => (
                    <h2 key={index} className="py-[3px] text-[#CFD8DC] font-mulish_regular text-base leading-[25px] cursor-pointer" >  {item.name}
                    </h2>
                  ))}
                </div>
              </div>
              <div className='max-w-[375px] w-full'>
                <h2 className='mb-5 text-white font-mulish_medium text-xl leading-[30px]'>Contact Us</h2>
                <div className='flex flex-col gap-[17px]'>
                  {
                    contactmap.map((item, index) => (
                      <div key={index} className='text-[#CFD8DC] font-mulish_regular flex flex-col gap-1'>
                        <div className='flex gap-2'>
                          <img className='py-[3px]' src={item.image} alt={item.name} />
                          <h2 className='text-sm leading-[22px]'>{item.name}</h2>
                        </div>
                        <h2 className='text-base leading-[25px] max-w-[262px] w-full'>{item.title}</h2>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <span className='mt-[60px] mb-[30px] w-full max-w-full border border-gray-lightgray block'></span>
            <div></div>
          </div>
        </div>
      </footer >
    </>
  )
}

export default Footer