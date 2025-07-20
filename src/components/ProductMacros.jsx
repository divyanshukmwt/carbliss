import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import productImage from "../assets/Images/LemonLimePoster.png";

gsap.registerPlugin(ScrollTrigger);

const ProductMacros = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { backgroundColor: "#ffffff" },
      {
        backgroundColor: "#89C74A",
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",  // when top of component hits 80% viewport
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen transition-colors duration-1000">

      {/* Mobile */}
      <div className="md:hidden px-6 py-8 flex flex-col items-center text-center gap-4">
        <img
          src={productImage}
          alt="Carbliss"
          className="w-[220px] rounded-xl object-cover"
        />
        <h2 className="text-xl font-semibold text-gray-800">
          Crafted for control. <br /> Served with chill.
        </h2>
      </div>

      {/* Tablet */}
      <div className="hidden md:flex lg:hidden px-10 py-10 flex-col items-center gap-6">
        <div className="w-1/2 flex justify-center">
          <img
            src={productImage}
            alt="Carbliss"
            className="w-[280px] rounded-xl object-cover"
          />
        </div>
        <div className="w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">
            Crafted for control. <br /> Served with chill.
          </h2>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex h-full items-center justify-center gap-12 px-20">
        <div className="w-1/2 flex justify-end">
          <img
            src={productImage}
            alt="Carbliss"
            className="w-[350px] rounded-xl object-cover"
          />
        </div>
        <div className="w-1/2 text-left">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Crafted for control. <br /> Served with chill.
          </h2>
        </div>
      </div>

    </div>
  );
};

export default ProductMacros;
