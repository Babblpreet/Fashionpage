import React from 'react'
import arrowsvg from '../../assets/svg/ChevronRightFilled.svg'


const Buttonreuse = ({ children, classname,showarrow}) => {
    return (<>
        <button className={`flex items-center ${classname} gap-2 py-4 px-6 bg-orange-lightorange text-white font-mulish_semibold leading-7 rounded-lg text-xl hover:scale-105 transition-transform duration-500 ease-in-out`}>{children}
           {showarrow && <img src={arrowsvg} alt="" />}
        </button>
    </>)
}

export default Buttonreuse