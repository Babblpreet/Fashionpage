import React from "react";
import image from "../../assets/images/livesale.png";

const LiveSale = () => {
    return (
        <section>
            <div className="padcontain">
                <div className="container">
                    <div className="bg-cover bg-center h-[420px] w-full relative" style={{ backgroundImage: `url(${image})` }}>
                        <div className="absolute">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveSale;
