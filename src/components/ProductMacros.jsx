import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import productImage from "../assets/Images/LemonLimePoster.png";
import Lemon1 from "../assets/Images/Lemon1.png";
import Lemon2 from "../assets/Images/Lemon2.png";
import Lemon3 from "../assets/Images/Lemon3.png";

gsap.registerPlugin(ScrollTrigger);

const ProductMacros = () => {
  const containerRef = useRef(null);
  const lemonRefs = useRef([]);
  const lemon3Ref = useRef(null); // for rotation

  const headingRef = useRef(null);

  const addToRefs = (el) => {
    if (el && !lemonRefs.current.includes(el)) {
      lemonRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Background color animation
    gsap.fromTo(
      containerRef.current,
      { backgroundColor: "#ffffff" },
      {
        backgroundColor: "#A5DA6F",
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      }
    );

    // Bounce effect on all lemons
    lemonRefs.current.forEach((el, i) => {
      gsap.to(el, {
        y: -10,
        duration: 1.2 + i * 0.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    if (lemon3Ref.current) {
      gsap.to(lemon3Ref.current, {
        rotation: "+=360",
        duration: 8,
        ease: "linear",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    }

    // Text stagger from right
    const lines = headingRef.current.querySelectorAll("span");
    gsap.from(lines, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });

  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen overflow-x-hidden transition-colors duration-1000">
      {/* Mobile Layout (unchanged structure) */}
      <div className="w-full h-full md:hidden px-6 py-8 flex flex-col items-center text-center gap-4 relative">
        <div className='w-full h-[50%] flex items-center justify-center pt-[4rem]'>
          <div className="w-fit h-fit flex items-center relative">
            <img
              src={productImage}
              alt="Carbliss"
              className="w-[300px] h-[300px] rounded-xl object-cover"
            />
            <img src={Lemon1} alt="" className='absolute w-[70px] -top-[3%] -left-[3%]' ref={addToRefs} />
            <img
              src={Lemon3}
              alt=""
              className='absolute w-[70px] -bottom-[5%] -right-[10%]'
              ref={(el) => {
                addToRefs(el);
                lemon3Ref.current = el; // for rotation
              }}
            />
          </div>
        </div>

        {/* Right: Text + Lemons */}
        <div className='w-full h-[50%]'>
          <div className=" w-full h-full flex items-center justify-center text-center relative">
            <div ref={headingRef}>
              <div className=' relative z-10'>
                <h2 className="text-[2.5rem] uppercase font-[antonio] font-bold text-gray-900">Crafted for control.</h2>
                <img src={Lemon2} alt="" className='absolute w-[50px] top-[70%] right-[53%]' ref={addToRefs} />
              </div>
              <div className='relative'>
                <h2 className="text-[2.5rem] uppercase font-[antonio] font-bold text-gray-900 leading-tight">Served with chill.</h2>
                <img src={Lemon1} alt="" className='absolute w-[50px] top-[57%] right-[29%] rotate-25' ref={addToRefs} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout (unchanged structure) */}
      <div className="hidden w-full h-full md:flex lg:hidden px-10 py-10 flex-col items-center relative">
        {/* Left: Image + Lemons */}
        <div className='w-full h-[50%] flex items-center justify-center'>
          <div className="w-fit h-fit flex items-center relative">
            <img
              src={productImage}
              alt="Carbliss"
              className="w-[450px] h-[450px] rounded-xl object-cover"
            />
            <img src={Lemon1} alt="" className='absolute w-[100px] -top-[3%] -left-[3%]' ref={addToRefs} />
            <img
              src={Lemon3}
              alt=""
              className='absolute w-[100px] -bottom-[5%] -right-[10%]'
              ref={(el) => {
                addToRefs(el);
                lemon3Ref.current = el; // for rotation
              }}
            />
          </div>
        </div>

        {/* Right: Text + Lemons */}
        <div className='w-full h-[50%]'>
          <div className=" w-full h-full flex items-center justify-center text-right relative">
            <div ref={headingRef}>
              <div className=' relative z-10'>
                <h2 className="text-[3.8rem] uppercase font-[antonio] font-bold text-gray-900">Crafted for control.</h2>
                <img src={Lemon2} alt="" className='absolute w-[75px] top-[70%] right-[53%]' ref={addToRefs} />
              </div>
              <div className='relative'>
                <h2 className="text-[4rem] uppercase font-[antonio] font-bold text-gray-900 leading-tight">Served with chill.</h2>
                <img src={Lemon1} alt="" className='absolute w-[70px] top-[56%] right-[24%]' ref={addToRefs} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex h-full items-center justify-center gap-12">
        {/* Left: Image + Lemons */}
        <div className='w-1/2 flex items-center justify-center'>
          <div className="w-fit h-fit flex items-center relative">
            <img
              src={productImage}
              alt="Carbliss"
              className="w-[450px] h-[450px] rounded-xl object-cover"
            />
            <img src={Lemon1} alt="" className='absolute w-[100px] -top-[3%] -left-[3%]' ref={addToRefs} />
            <img
              src={Lemon3}
              alt=""
              className='absolute w-[100px] -bottom-[5%] -right-[10%]'
              ref={(el) => {
                addToRefs(el);
                lemon3Ref.current = el; // for rotation
              }}
            />
          </div>
        </div>

        {/* Right: Text + Lemons */}
        <div className='w-[50%] h-full'>
          <div className=" w-full h-full flex items-center justify-center text-right relative">
            <div ref={headingRef}>
              <div className=' relative z-10'>
                <h2 className="text-[3.8rem] uppercase font-[antonio] font-bold text-gray-900">Crafted for control.</h2>
                <img src={Lemon2} alt="" className='absolute w-[75px] top-[70%] right-[53%]' ref={addToRefs} />
              </div>
              <div className='relative'>
                <h2 className="text-[4rem] uppercase font-[antonio] font-bold text-gray-900 leading-tight">Served with chill.</h2>
                <img src={Lemon1} alt="" className='absolute w-[70px] top-[56%] right-[24%]' ref={addToRefs} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductMacros;
