import React from "react";
import HeroSection from "./componets/Body/HeroSection";
import FeauterProducts from './componets/FeatureProduct/FeatureProduct';
import Services from "./componets/Services/Services";
import Trusted from "./componets/Services/Trusted";


const Home = () =>{
    const data = {
        name: "shopping store"
    }
    return (
    <>
        <HeroSection myData={data}/>
        <FeauterProducts/>
        <Services/>
        <Trusted/>
    </>
    ); 
};

export default Home;