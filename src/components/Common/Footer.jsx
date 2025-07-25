import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import carblissCan from '../../assets/Images/Footer.mp4';

const Footer = () => {
    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 4; // Set video speed
        }

        gsap.fromTo(
            videoContainerRef.current,
            { x: '-100%', opacity: 0 },
            {
                x: '85%',
                opacity: 1,
                duration: 4,
                ease: 'power3.out',
            }
        );
    }, []);

    return (
        <div className='min-h-screen pt-20 w-full relative overflow-hidden bg-[#222224]'>
            {/* 🔹 Video Wrapper — hidden on mobile, left on small, right on md and up */}
            <div
                ref={videoContainerRef}
                className='hidden sm:block absolute top-[30%] left-0 md:left-auto md:right-[30%] sm:left-auto sm:right-[25%] lg:left-auto lg:right-[65%]
                   w-[60%] sm:w-[30%] md:w-[38%] lg:w-[32%] 
                   p-4 lg:p-5 overflow-hidden z-10'
            >
                <video
                    ref={videoRef}
                    src={carblissCan}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='w-full h-full object-cover md:rotate-15'
                />
            </div>

            {/* 🔹 Main Content */}
            <div className='relative z-20 font-[proxima]'>
                <div className='h-[45%] flex flex-col items-end justify-center w-full gap-18'>
                    <div className='h-fit px-3 w-full flex items-center justify-center'>
                        <h1 className='lg:text-8xl text-4xl md:text-6xl font-[antonio] font-bold text-white text-center'>#DRINKCARBLISS</h1>
                    </div>
                    <div className='w-full h-fit px-5 text-white flex justify-center gap-5'>
                        <div
                            className='h-22 w-22 rounded-full flex justify-center items-center text-2xl border border-white/80 bg-transparent p-5 hover:bg-white/20 duration-300'
                        >
                            <span> <i class="ri-instagram-line"></i></span>
                        </div>
                        <div
                            className='h-22 w-22 rounded-full flex justify-center items-center text-2xl border border-white/80 bg-transparent p-5 hover:bg-white/20 duration-300'
                        >
                            <span><i class="ri-twitter-x-fill"></i></span>
                        </div>

                        <div
                            className='h-22 w-22 rounded-full flex justify-center items-center text-2xl border border-white/80 bg-transparent p-5 hover:bg-white/20 duration-300'
                        >
                            <span><i class="ri-linkedin-box-fill"></i></span>
                        </div>
                    </div>
                </div>

                <div className='h-fit px-10 py-10 w-full flex flex-col lg:flex-row justify-between gap-10'>
                    <div className='w-full lg:w-[40%] flex flex-col sm:flex-row flex-wrap gap-10 text-l  items-center text-white justify-center sm:justify-start'>
                        <div>
                            <h5 className='hover:opacity-25 duration-300'>Carbliss Flavors</h5>
                        </div>
                        <div className='space-y-2'>
                            {['Company', 'bliss Club', 'Dealership'].map((text, i) => (
                                <h5 key={i} className='hover:opacity-25 duration-300'>
                                    {text}
                                </h5>
                            ))}
                        </div>
                        <div className='space-y-2'>
                            {['Franchise', 'Bliss Talks', 'Find Stores'].map((text, i) => (
                                <h5 key={i} className='hover:opacity-25 duration-300'>
                                    {text}
                                </h5>
                            ))}
                        </div>
                    </div>

                    <div className='w-full lg:w-[40%] flex flex-col font-semibold gap-10 text-l justify-end items-end'>
                        <div className='w-full flex items-start'>
                            <p className='text-white'>
                                Get Exclusive Early Access and Stay Informed About Product <br /> Updates, Events, and More!
                            </p>
                        </div>
                        <div className='w-full h-fit flex items-start'>
                            <input
                                className='border-b-2 border-zinc-400 text-zinc-400 font-regular h-fit py-5 text-xl focus:outline-0 w-full sm:w-[60%] lg:w-full focus:border-blue-400 bg-transparent'
                                type='text'
                                placeholder='ENTER YOUR EMAIL'
                            />
                        </div>
                    </div>
                </div>

                <div className='h-fit px-10 text-[0.8rem] font-[proxima] text-zinc-400 font-semibold w-full flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <div className='w-full sm:w-[40%] h-fit py-5 flex items-center justify-center sm:justify-start'>
                        <h5>© 2025 Carbliss - All Rights Reserved</h5>
                    </div>
                    <div className='w-full sm:w-[40%] h-fit py-5 gap-5 flex items-center justify-center sm:justify-end'>
                        <h5>Privacy Policy</h5>
                        <h5>Terms of Service</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;