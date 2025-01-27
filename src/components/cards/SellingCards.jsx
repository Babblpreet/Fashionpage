import React, { Fragment } from 'react'

const SellingCards = ({image, title}) => {
    return (
        <>
            <div className="flex flex-col">
                <img src={`src/assets/images/${image}`} alt="image" />
                <h4>{title}</h4>
            </div>
        </>
    )
}

export default SellingCards