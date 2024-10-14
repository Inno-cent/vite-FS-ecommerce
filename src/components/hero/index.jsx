import React from "react";
import { Link } from "react-router-dom";    
import "./index.scss";  
import HeroSlider from "../heroslider";

const Hero = () => {
    return (
        <div className="hero-main">
           <div className="hero-wrapper">
            <HeroSlider />
           </div>
        </div>
    );
}

export default Hero;