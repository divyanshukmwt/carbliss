import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Founders from "../../assets/Images/Founders1.png";
import Enterpreneur from "../../assets/Images/Enterpreneur.png";
import Forbes from "../../assets/Images/Forbes.png";
import UsaToday from "../../assets/Images/Usatoday.png";
import Inc5000 from "../../assets/Images/Inc5000.png";

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
                    <div className='w-1/2 h-full flex items-center justify-center flex-col pl-10'>
                        <div className="w-full h-[20%] font-regular font-[antonio] flex items-center justify-center">
                            <h1 className='text-[1.5rem]'>About us</h1>
                        </div>
                        <div className=' flex flex-col gap-[5rem] items-end justify-center'>
                            <div className="w-full h-1/2 flex items-end justify-center">
                                <h1 className=" text-[2.2rem] leading-snug font-[antonio] uppercase font-bold text-black">
                                    In 2019, <span className="text-[2.6rem] font-extrabold">Adam & Amanda Kroener</span> turned <br />
                                    a <span className="text-[2.6rem] font-extrabold">“carb-less”</span> idea into <span className="text-[2.6rem] font-extrabold">Carbliss</span>
                                </h1>
                            </div>

                            <div className='w-full h-1/2 flex justify-start items-center gap-2 flex-col'>
                                <div className='w-fit h-fit font-[antonio] uppercase'>
                                    <h1 className='text-[1.5rem]'>Featured In</h1>
                                </div>
                                <div className='w-full h-fit flex items-center justify-evenly'>
                                    <div>
                                        <img src={Enterpreneur} alt="" className='w-[120px]' />
                                    </div>
                                    <div>
                                        <img src={UsaToday} alt="" className='w-[100px]' />
                                    </div>
                                    <div>
                                        <img src={Inc5000} alt="" className='w-[75px]' />
                                    </div>
                                    <div>
                                        <img src={Forbes} alt="" className='w-[95px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
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
                <div className="w-full h-full flex flex-col items-center gap-[2rem] justify-center">
                    <div className="w-full h-[20%] font-regular font-[antonio] flex items-center justify-center">
                        <h1 className='text-[1.5rem]'>About us</h1>
                    </div>
                    <div className='w-full h-full flex flex-col gap-[3rem] items-center justify-center'>
                        <div className='w-full h-1/2 flex items-center justify-center gap-[1.5rem] flex-col'>
                            <div className="w-full  h-1/2 flex items-center justify-center">
                                <h1 className=" text-[2.2rem] leading-snug font-[antonio] uppercase font-bold text-black">
                                    In 2019, <span className="text-[2.6rem] font-extrabold">Adam & Amanda Kroener</span> turned <br />
                                    a <span className="text-[2.6rem] font-extrabold">“carb-less”</span> idea into <span className="text-[2.6rem] font-extrabold">Carbliss</span>
                                </h1>
                            </div>

                            <div className='w-full h-1/2 flex justify-start items-center gap-1 flex-col'>
                                <div className='w-fit h-fit font-[antonio] uppercase'>
                                    <h1 className='text-[1.5rem]'>Featured In</h1>
                                </div>
                                <div className='w-full h-fit flex items-center justify-evenly'>
                                    <div>
                                        <img src={Enterpreneur} alt="" className='w-[120px]' />
                                    </div>
                                    <div>
                                        <img src={UsaToday} alt="" className='w-[100px]' />
                                    </div>
                                    <div>
                                        <img src={Inc5000} alt="" className='w-[75px]' />
                                    </div>
                                    <div>
                                        <img src={Forbes} alt="" className='w-[80px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
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
                <div className="w-full h-full flex flex-col items-center gap-[2rem] justify-center">
                    <div className='w-full flex flex-col items-center justify-center gap-[2rem]'>
                        <div className="w-full flex items-start justify-center">
                            <h1 className="text-[1.2rem] leading-snug font-[antonio] uppercase font-bold text-black">
                                In 2019, <span className="text-[1.5rem] font-extrabold">Adam & Amanda Kroener</span> turned <br />
                                a <span className="text-[1.5rem] font-extrabold">“carb-less”</span> idea into <span className="text-[2.6rem] font-extrabold">Carbliss</span>
                            </h1>
                        </div>

                        <div className='w-[80%] flex justify-start items-center flex-col'>
                            <div className='w-fit h-fit font-[antonio] uppercase'>
                                <h1 className='text-[1.2rem]'>Featured In</h1>
                            </div>
                            <div className='w-full flex items-center gap-[1rem] justify-evenly'>
                                <div>
                                    <img src={Enterpreneur} alt="" className='w-[90px]' />
                                </div>
                                <div>
                                    <img src={UsaToday} alt="" className='w-[70px]' />
                                </div>
                                <div>
                                    <img src={Inc5000} alt="" className='w-[55px]' />
                                </div>
                                <div>
                                    <img src={Forbes} alt="" className='w-[70px]' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full flex items-center justify-center relative">
                        {/* Fake shadow box */}
                        <div className="absolute w-[450px] h-[450px] bg-[#0000001a] rounded-full blur-2xl z-1"></div>

                        {/* Founders Image */}
                        <img src={Founders} alt="Founders" className="w-[350px] relative z-10" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Intro;
