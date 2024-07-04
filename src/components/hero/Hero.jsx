import React from 'react'
import HeroImage from '../../assets/image_10.png'
const Hero = ({hero_sub_title,hero_title}) => {
    return (
        <section className="section">
            <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <img
                    src={HeroImage}
                    alt="hero image"
                    className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <div className="text-8xl font-bold font-Arabic leading-[102px] mb-10">
                        {hero_title}
                    </div>
                    <div className="text-[15px] font-light font-alexandria leading-none ">
                       {hero_sub_title}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
