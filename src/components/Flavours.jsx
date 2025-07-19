import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BlackCherry from "../assets/Images/BlackCherry.png";
import BlackRaspberry from "../assets/Images/BlackRaspberry.png";
import Lemon from "../assets/Images/Lemon.png";
import Mango from "../assets/Images/Mango.png";
import Watermelon from "../assets/Images/Watermelon.png";

gsap.registerPlugin(ScrollTrigger);

const Flavors = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const panelsRef = useRef([]);

  const flavors = [
    { id: 1, name: "Black Cherry", image: BlackCherry, alt: "Black Cherry flavor with rich dark cherry visuals" },
    { id: 2, name: "Black Raspberry", image: BlackRaspberry, alt: "Juicy Black Raspberry with a tangy burst" },
    { id: 3, name: "Lemon", image: Lemon, alt: "Fresh Lemon with a citrus zing" },
    { id: 4, name: "Mango", image: Mango, alt: "Tropical Mango with golden sweetness" },
    { id: 5, name: "Watermelon", image: Watermelon, alt: "Refreshing Watermelon slice flavor" }
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

  return (
    <div className="overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Desktop Horizontal Scroll */}
      <div ref={containerRef} className="relative h-[100vh] w-screen hidden md:block">
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
            <div
              key={flavor.id}
              ref={el => addToPanelsRef(el, index + 1)}
              className={`panel w-[55vw] h-[70vh] flex-shrink-0 relative rounded-3xl bg-white shadow-xl transition-transform duration-300  ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                <img
                  src={flavor.image}
                  alt={flavor.alt}
                  className="w-[160px] object-contain drop-shadow-xl "
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-3xl">
                <h3 className="text-white text-3xl font-[proxima] font-bold">{flavor.name}</h3>
                <p className="text-white/80 mt-2">Flavor #{flavor.id}</p>
              </div>
            </div>
          ))}

          {/* Explore More Section */}
          <div
            ref={el => addToPanelsRef(el, flavors.length + 1)}
            className="panel w-[70vw] h-[70vh] flex-shrink-0 flex items-center justify-center"
          >
            <div className="text-center px-8">
              <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-8 animate-bounce">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Explore More Flavors</h3>
              <p className="text-gray-600 text-lg mb-6">Discover our full range of exotic and classic flavors</p>
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          we've got <span className="text-indigo-600">more flavours</span> than <span className="line-through text-gray-400">excuses</span>
        </h2>

        <div className="space-y-8">
          {flavors.map(flavor => (
            <div key={flavor.id} className="relative h-64 rounded-xl overflow-hidden border border-gray-200 shadow">
              <img
                src={flavor.image}
                alt={flavor.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl font-bold">{flavor.name}</h3>
              </div>
            </div>
          ))}

          <div className="text-center py-8">
            <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Explore More Flavors
            </h3>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium text-sm">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flavors;
