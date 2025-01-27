import React from 'react'
import { NavLink } from 'react-router-dom'
import SellingCards from '../cards/SellingCards'

const BestSelling = ({ data }) => {
    return (
        <div>
            {
                data.map((item, index) => (
                    <div key={index}>
                        <NavLink to={item.to}>
                            {
                                <SellingCards image={item.image} title={item.title} />
                            }
                        </NavLink>
                    </div>
                ))
            }
        </div>
    )
}

export default BestSelling