import React from 'react'
import offersec from '../../components/json/offersec.json'

const Offersec = () => {
    return (
        <>
            <section>
                <div className="padcontain">
                    <div className="container">
                        <div>
                            {offersec.map((item,index)=>(
                                <div></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offersec