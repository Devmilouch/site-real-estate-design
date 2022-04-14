import React, { useState, useEffect} from "react";
import styled, { css } from "styled-components/macro";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";



const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;
const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg, 
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%
        );
    }
`;
const HeroImage = styled(motion.img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;
const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    h1 {
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
`;

const Arrow = styled(IoMdArrowForward)`
    margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`;

const ArrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${ ArrowButtons };
`;
const NextArrow = styled(IoArrowForward)`
    ${ ArrowButtons };
`;

const Hero = ({ sliderData }) => {
    const [ current, setCurrent ] = useState(0);
    const length = sliderData.length;

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (current + 1 > length - 1) setCurrent(0)
            else setCurrent(current + 1)
        }, 4000);

        return () => {
            clearTimeout(timeout);
        }
    }, [current, length])

    const nextSlide = () => {
        if (current + 1 > length - 1) setCurrent(0)
        else setCurrent(current + 1)
    }

    const prevSlide = () => {
        if (current - 1 < 0) setCurrent(3)
        else setCurrent(current - 1)
    }

    const fadeAnimation = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {duration: 0.8}
        },
        exit: {opacity: 0}
    };

    return (
        <HeroSection>
            <HeroWrapper>
                <AnimatePresence>
                    {sliderData.map((slide, index) => {
                        if (current === index) {
                            return (
                                <HeroSlide key={index}>
                                    <HeroSlider>
                                        <HeroImage 
                                            src={slide.image} 
                                            alt={slide.alt} 
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={fadeAnimation}
                                        />
                                        <HeroContent>
                                            <h1 data-aos="fade-down" data-aos-duration="600">{slide.title}</h1>
                                            <p data-aos="fade-down" data-aos-duration="600" data-aos-delay="200">{slide.price}</p>
                                            <Button 
                                                to={slide.path} 
                                                primary="true" 
                                                css={`max-width: 160px;`}
                                                data-aos="zoom-out" 
                                                data-aos-duration="500" 
                                                data-aos-delay="250"
                                            >
                                                {slide.label}
                                                <Arrow />
                                            </Button>
                                        </HeroContent>
                                    </HeroSlider>
                                </HeroSlide>
                            );
                        } else {
                            return null;
                        }
                    })}
                    <SliderButtons>
                        <PrevArrow onClick={prevSlide} />
                        <NextArrow onClick={nextSlide} />
                    </SliderButtons>
                </AnimatePresence>
            </HeroWrapper>
        </HeroSection>
    );
}

export default Hero;