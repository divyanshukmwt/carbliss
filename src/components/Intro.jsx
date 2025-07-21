import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Founders from "../assets/Images/Founders1.png";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
    const introRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            introRef.current,
            { backgroundColor: '#a5da6f' },
            {
                backgroundColor: '#b0dcd4',
                duration: 0.7,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: introRef.current,
                    start: 'top 5%',
                    end: 'top 0%',
                    scrub: 0.2,
                },
            }
        );
    }, []);

    return (
        <div ref={introRef} className="w-full h-screen transition-colors duration-500 flex items-center justify-center overflow-x-hidden">
            {/* Desktop View (lg and up) */}
            <div className="hidden lg:block text-center w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                    {/* Left Text Section */}
                    <div className="w-1/2 h-full flex items-center justify-center pl-10">
                        <h1 className=" text-[2.2rem] leading-snug font-[antonio] uppercase font-bold text-black">
                            In 2019, <span className="text-[2.6rem] font-extrabold">Adam & Amanda Kroener</span> turned <br />
                            a <span className="text-[2.6rem] font-extrabold">“carb-less”</span> idea into <span className="text-[2.6rem] font-extrabold">Carbliss</span>
                        </h1>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-1/2 pt-[4rem] h-full flex items-center justify-center relative">
                        {/* Fake shadow box */}
                        <div className="absolute w-[550px] h-[550px] bg-[#0000001a] rounded-full blur-2xl z-1"></div>

                        {/* Founders Image */}
                        <img src={Founders} alt="Founders" className="w-[550px] relative z-10" />
                    </div>

                </div>
            </div>


            {/* Tablet View (md only) */}
            <div className="hidden md:block lg:hidden text-center">
                <div className="w-full h-full flex flex-col items-center gap-[6rem] justify-center">
                    {/* Left Text Section */}
                    <div className="w-full h-1/2 flex items-center justify-center">
                        <h1 className=" text-[2.2rem] leading-snug font-[antonio] uppercase font-bold text-black">
                            In 2019, <span className="text-[2.6rem] font-extrabold">Adam & Amanda Kroener</span> turned <br />
                            a <span className="text-[2.6rem] font-extrabold">“carb-less”</span> idea into <span className="text-[2.6rem] font-extrabold">Carbliss</span>
                        </h1>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full h-1/2 flex items-center justify-center relative">
                        {/* Fake shadow box */}
                        <div className="absolute w-[550px] h-[550px] bg-[#0000001a] rounded-full blur-2xl z-1"></div>

                        {/* Founders Image */}
                        <img src={Founders} alt="Founders" className="w-[550px] relative z-10" />
                    </div>

                </div>
            </div>

            {/* Mobile View (below md) */}
            <div className="block md:hidden text-center pt-[6rem]">
                <div className="w-full h-full flex flex-col items-center gap-[4rem] justify-center">
                    {/* Left Text Section */}
                    <div className="w-full h-1/2 flex items-center justify-center">
                        <h1 className=" text-[1.5rem] leading-snug font-[antonio] uppercase font-bold text-black">
                            In 2019, <span className="text-[1.7rem] font-extrabold">Adam & Amanda Kroener</span> turned <br />
                            a <span className="text-[1.7rem] font-extrabold">“carb-less”</span> idea into <span className="text-[1.7rem] font-extrabold">Carbliss</span>
                        </h1>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full h-1/2 flex items-center justify-center relative">
                        {/* Fake shadow box */}
                        <div className="absolute w-[550px] h-[550px] bg-[#0000001a] rounded-full blur-2xl z-1"></div>

                        {/* Founders Image */}
                        <img src={Founders} alt="Founders" className="w-[550px] relative z-10" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Intro;
