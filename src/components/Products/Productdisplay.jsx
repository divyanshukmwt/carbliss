import React, { useEffect, useRef } from 'react';
import ProductCard from './Productcard';
import drinkFlavors from './DrinkFlavours';
import gsap from 'gsap';
import Footer from '../Common/Footer';

const ProductDisplay = () => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;
      const container = containerRef.current;

      const totalWidth = marquee.scrollWidth / 2;

      gsap.set(marquee, { x: 0 });

      gsap.to(marquee, {
        x: -totalWidth,
        duration: 25,
        ease: "none",
        repeat: -1,
        force3D: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="w-full min-h-screen bg-white px-6 py-16 relative overflow-hidden">
        {/* 🔥 Marquee Section */}
<div className="relative overflow-hidden w-full min-h-fit py-8 lg:py-[5rem] xl:py-[6rem] bg-white">

          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap w-max will-change-transform pointer-events-none"
          >
            {[...Array(2)].map((_, i) => (
              <h1
                key={i}
                className="text-[15vw] font-extrabold uppercase text-black tracking-wider pr-[10vw] font-[antonio]"
              >
                Elevate Your Taste • Elevate Your Taste • Elevate Your Taste •
              </h1>
            ))}
          </div>

          <div className="flex items-center justify-center text-center mt-6 px-4">
            <h1 className="text-lg text-black font-medium max-w-3xl">
              Browse all our bold and delicious flavors, <br /> ready to fuel your next adventure. Discover your favorite today!
            </h1>
          </div>
        </div>

        {/* 🧃 Flavors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {drinkFlavors.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDisplay;
