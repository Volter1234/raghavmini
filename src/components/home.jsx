import React from "react";
import Nav from "./nav";
import Intro from "./intro";
import AboutIntro from "./introabout";
import IntroNumbers from "./intronumbers";
import IntroServices from "./introservices";
import Footer from "./footer";
function Home(){
    return(
        <div>
            <Nav/>
            <Intro/>
            <AboutIntro/>
            <IntroNumbers/>
            <IntroServices/>
            <Footer/>
        </div>
    )
}
export default Home;