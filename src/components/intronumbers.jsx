import React from "react";
import CountUp from 'react-countup';

function IntroNumbers(){
    return(
        <div className="Numbers row">
            <div className="stats col-lg-4">
            <h2>
            <CountUp start={0} end={200} duration={10}></CountUp>
            +</h2>
            <h3>Students Empowered</h3>
            </div>
            <div className="stats col-lg-4">
            <h2>
            <CountUp start={0} end={10} duration={10}></CountUp>
            +</h2>
            <h3>Live Projects</h3>
            </div>
            <div className="stats col-lg-4">
            <h2>
            <CountUp start={0} end={6} duration={10}></CountUp>
            +</h2>
            <h3>Years of Experience</h3>
            </div>
        </div>
    )
}

export default IntroNumbers;