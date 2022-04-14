import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import { InfoData, InfoDataTwo } from "../data/InfoData";
import Listings from "../components/Listings";
import Features from "../components/Features";
import { SliderData } from "../data/SliderData";



const HomePage = () => {
    return (
        <>
            <Hero sliderData={SliderData} />
            <InfoSection { ...InfoData } />
            <Listings />
            <Features />
            <InfoSection { ...InfoDataTwo } />
        </>
    );
}

export default HomePage;