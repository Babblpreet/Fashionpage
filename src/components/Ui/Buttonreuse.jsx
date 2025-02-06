import React, { Children } from 'react'

const Buttonreuse = ({Children}) => {
    return (<>
        <button className='py-4 px-6 bg-orange-lightorange text-white font-mulish_semibold leading-7 rounded-lg text-xl hover:scale-105 transition-transform duration-500 ease-in-out'>{Children}</button>
    </>)
}

export default Buttonreuse