import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import BlackCherry from "../../assets/Images/BlackCherry_half.png";
import BlackRaspberry from "../../assets/Images/BlackRaspberry_half.png";
import Lemon from "../../assets/Images/Lemon_half.png";
import Mango from "../../assets/Images/Mango_half.png";
import Watermelon from "../../assets/Images/Watermelon_half.png";
import WatermelonPieces from "../../assets/Images/Watermelonpieces.png";
import LemonPieces from "../../assets/Images/LemonPieces.png";
import BlackCherryPieces from "../../assets/Images/BlackCherryPieces.png";
import BlackRaspberryPieces from "../../assets/Images/BlackRaspberryPiecees.png";
import MangoPieces from "../../assets/Images/MangoPieces.png";

gsap.registerPlugin(ScrollTrigger);

const Flavors = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const panelsRef = useRef([]);

  const handleClick = () => {
    navigate("/Products");
  };

  const flavors = [
    {
      id: 1,
      name: "Black Cherry",
      route: "/product/1",
      image: BlackCherry,
      alt: "Black Cherry flavor with rich dark cherry visuals",
      bgColor: "bg-[#4B1C2F]",
      backgroundImage: BlackCherryPieces,
    },
    {
      id: 2,
      name: "Raspberry",
      route: "/product/2",
      image: BlackRaspberry,
      alt: "Juicy Black Raspberry with a tangy burst",
      bgColor: "bg-[#32174D]",
      backgroundImage: BlackRaspberryPieces,
    },
    {
      id: 3,
      name: "Lemon",
      route: "/product/4",
      image: Lemon,
      alt: "Fresh Lemon with a citrus zing",
      bgColor: "bg-[#FFE135]",
      backgroundImage: LemonPieces,
    },
    {
      id: 4,
      name: "Mango",
      route: "/product/3",
      image: Mango,
      alt: "Tropical Mango with golden sweetness",
      bgColor: "bg-[#FFB347]",
      backgroundImage: MangoPieces,
    },
    {
      id: 5,
      name: "Watermelon",
      route: "/product/5",
      image: Watermelon,
      alt: "Refreshing Watermelon slice flavor",
      bgColor: "bg-[#F2474A]",
      backgroundImage: WatermelonPieces,
    },
  ];


  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth > 768) {
        const scrollWidth = horizontalRef.current.scrollWidth;
        const scrollDistance = scrollWidth - window.innerWidth;

        ScrollTrigger.create({
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: `+=${scrollDistance}`,
          animation: gsap.to(horizontalRef.current, {
            x: `-${scrollDistance}px`,
            ease: "none",
          }),
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToPanelsRef = (el, index) => {
    panelsRef.current[index] = el;
  };

  const handleMouseMove = (e, index) => {
    const panel = panelsRef.current[index];
    const { left, top, width, height } = panel.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    const img = panel.querySelector('.flavor-image');
    const bgImg = panel.querySelector('.background-image');

    // ✅ Smaller translate values = smoother, less jitter
    const imgX = -(xPercent / 20);     // reduced from /10
    const bgX = xPercent / 20;         // reduced from /20
    const bgY = yPercent / 20;         // reduced from /20

    // ✅ Apply with a slight CSS transition for smoothness
    img.style.transition = 'transform 0.2s ease-out';
    bgImg.style.transition = 'transform 0.2s ease-out';

    img.style.transform = `translateX(${imgX}%)`;
    bgImg.style.transform = `translate(${bgX}%, ${bgY}%)`;
  };


  return (
    <div className="overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Desktop Horizontal Scroll */}
      <div ref={containerRef} className="relative h-[100vh] w-screen hidden lg:block">
        <div ref={horizontalRef} className="absolute h-full flex items-center pl-30 gap-35">
          {/* Headline Section */}
          <div ref={el => addToPanelsRef(el, 0)} className="panel w-[45vw] font-[antonio] uppercase flex-shrink-0 pr-8">
            <h2 className="text-6xl font-regular text-gray-800 leading-tight">
              we've got<br />
              <span className="text-8xl font-bold text-[#523122]">more flavours</span><br />
              than <span className="text-black font-extrabold text-8xl">excuses</span>
            </h2>
          </div>
          {/* Flavor Panels */}


          {flavors.map((flavor, index) => (
            <Link to={flavor.route} key={flavor.id}>
              <div
                ref={el => addToPanelsRef(el, index + 1)}
                className={`panel w-[55vw] h-[70vh] flex-shrink-0 relative rounded-3xl shadow-xl ${flavor.bgColor} ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}
                onMouseMove={(e) => handleMouseMove(e, index + 1)}
                onMouseLeave={() => {
                  const img = panelsRef.current[index + 1].querySelector('.flavor-image');
                  const bgImg = panelsRef.current[index + 1].querySelector('.background-image');
                  img.style.transform = 'translate(0, 0)';
                  bgImg.style.transform = 'translate(0, 0)';
                }}
              >
                <div className='relative flex items-center overflow-hidden justify-center w-full h-full'>
                  <div className="w-full h-full absolute bottom-3 left-[65%] -translate-x-1/2 z-0 background-image">
                    <img
                      src={flavor.backgroundImage}
                      alt={`${flavor.name} background`}
                      className="w-[30rem] h-[30rem] object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Can Image */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flavor-image">
                  <img
                    src={flavor.image}
                    alt={flavor.alt}
                    className="w-[260px] object-contain"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-white text-3xl font-[proxima] font-extrabold">{flavor.name}</h3>
                </div>
              </div>
            </Link>
          ))}


          {/* Explore More Section */}
          <div
            onClick={handleClick}
            ref={el => addToPanelsRef(el, flavors.length + 1)}
            className="panel w-[50vw] h-[50vh] flex-shrink-0 flex items-center justify-center">
            <div className="text-center">
              <div className="group relative w-[200px] h-[200px] rounded-full bg-[#523122] flex flex-col items-center justify-center transition-all duration-300 hover:scale-120 cursor-pointer mx-auto overflow-hidden">

                {/* Arrow Icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  className="transition-all duration-300 transform group-hover:-translate-y-6 group-hover:rotate-[50deg]"
                >
                  <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>

                {/* Text fades and slides in on hover */}
                <h3 className="absolute text-base md:text-xl font-[antonio] font-semibold text-white text-center opacity-0 translate-y-4 group-hover:translate-y-10 group-hover:opacity-100 transition-all duration-300">
                  Explore More <br /> Flavors
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden px-8 py-12">
        <h2 className="text-4xl text-center uppercase font-bold font-[antonio] text-gray-800 mb-6">
          we've got <br /> <span className="text-[#523122] text-6xl">more flavours <br /> </span> than <br /> <span className=" text-black font-extrabold text-6xl">excuses</span>
        </h2>

        <div className="space-y-15 pt-10">
          {flavors.map(flavor => (
            <div
              key={flavor.id}
              onClick={() => navigate(flavor.route)}
              className={`cursor-pointer relative h-72 sm:h-80 md:h-[25rem] rounded-xl shadow ${flavor.bgColor}`}
            >
              {/* ✅ Dynamic Background Image */}
              <div className="absolute inset-0 flex items-end justify-center z-0">
                <img
                  src={flavor.backgroundImage}
                  alt={`${flavor.name} Background`}
                  className="w-[20rem] object-contain mb-2"
                />
              </div>

              {/* Can Image */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
                <img
                  src={flavor.image}
                  alt={flavor.alt}
                  className="w-[160px] sm:w-[180px] md:w-[200px] object-contain"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white text-xl font-bold">{flavor.name}</h3>
              </div>
            </div>
          ))}


          <div
            onClick={handleClick}
            className="text-center">
            <div className="w-full h-20 rounded-xl text-white bg-[#523122] flex items-center justify-center gap-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className='rotate-[50deg]'>
                <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <h3 className="text-2xl font-[antonio] text-white font-regular">
                Explore More Flavors
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flavors;

