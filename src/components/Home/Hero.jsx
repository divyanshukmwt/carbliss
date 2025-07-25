import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Pineapple from "../../assets/Images/Pineapple.png";
import PineappleFruit from "../../assets/Images/PineappleFruit.png";
import Pineapplepiece from "../../assets/Images/Pineapplepiece.webp";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const gapRef = useRef(null);
  const pineapplePieceRef = useRef(null);
  const pineappleFruitRef = useRef(null);

  const pineappleDesktopRef = useRef(null);
  const pineappleTabletRef = useRef(null);
  const pineappleMobileRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(gapRef.current, { gap: "0.5rem" });

      const tl = gsap.timeline();
      tl.to(gapRef.current, {
        gap: "8rem",
        duration: 1,
        ease: "power3.out"
      }, "+=1");

      tl.fromTo(
        pineappleDesktopRef.current,
        { y: -300, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out"
        },
        "-=1"
      );

      gsap.to(pineappleFruitRef.current, {
        y: 10,
        duration: 0.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      gsap.to(pineapplePieceRef.current, {
        x: -10,
        duration: 1.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",            // Mobile: up to 767px
          isTablet: "(min-width: 768px) and (max-width: 1023px)",  // Tablet: 768px–1023px (excludes Nest Hub & iPad Pro)
          isDesktop: "(min-width: 1024px)",          // Desktop: 1024px and above (includes iPad Pro)

        },
        (context) => {
          const { isDesktop, isTablet, isMobile } = context.conditions;

          if (isDesktop) {
            gsap.fromTo(
              pineappleDesktopRef.current,
              { bottom: "20%", right: "44%", rotation: 23, scale: 1 },
              {
                bottom: "-80%",
                right:"15%",
                rotation: 0,
                scale: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "35% center",
                  end: "70% center",
                  scrub: 1.5,
                  invalidateOnRefresh: true,
                },
              }
            );
          }

          if (isTablet) {
            gsap.fromTo(
              pineappleTabletRef.current,
              { bottom : "4%", rotation: 23 },
              {
                bottom: "-90%",
                rotation: 0,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "35% center",
                  end: "70% center",
                  scrub: 1.2,
                  invalidateOnRefresh: true,
                },
              }
            );
          }

          if (isMobile) {
            gsap.fromTo(
              pineappleMobileRef.current,
              { bottom: "7%", rotation: 23 },
              {
                bottom: "-85%",
                rotation: 0,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "35% center",
                  end: "70% center",
                  scrub: 1.3,
                  invalidateOnRefresh: true,
                },
              }
            );
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full h-[200vh] bg-[#dad07c] transition-colors duration-1000">
      {/* Desktop View */}
      <div className="w-full h-full hidden lg:flex flex-col items-center justify-center">
        <div ref={gapRef} className="w-full h-full flex flex-row items-center justify-center relative gap-[0.5rem]">
          <div className="w-fit h-fit z-4">
            <div className="pl-[1rem] relative">
              <h2 className="text-[5rem] font-extrabold font-[antonio] uppercase leading-tight text-[#523122]">
                Full Flavour
              </h2>
              <div className="absolute left-30 -bottom-10 -rotate-80">
                <img ref={pineapplePieceRef} src={Pineapplepiece} alt="" className="w-[80px]" />
              </div>
            </div>
            <h1 className="text-[7rem] font-extrabold font-[antonio] uppercase leading-tight text-[#111]">
              Carbliss
            </h1>
          </div>

          <div ref={pineappleDesktopRef} className="w-fit h-fit absolute">
            <img src={Pineapple} alt="" className="w-[140px]" />
          </div>

          <div className="w-fit h-fit z-4">
            <div className="w-full h-1/2 pl-[3rem] relative">
              <h2 className="text-[5rem] font-extrabold font-[antonio] uppercase leading-tight text-[#523122]">
                No filler
              </h2>
              <div className="absolute right-0 top-1/2 -translate-y-1/2" ref={pineappleFruitRef}>
                <img src={PineappleFruit} alt="" className="w-[120px] -rotate-[23deg]" />
              </div>
            </div>
            <h1 className="text-[7rem] font-extrabold font-[antonio] uppercase leading-tight text-[#111]">
              Cocktails
            </h1>
          </div>
        </div>

        <div className="w-full h-full">
          <div className="w-1/2 h-full flex items-center justify-center relative pl-10">
            <h2 className="text-2xl md:text-[2.3rem] font-[antonio] font-light leading-snug text-[#111] text-center">
              <span className="font-black text-[1.7rem] md:text-[2.4rem]">Zero</span> carbs.
              <span className="font-black text-[1.7rem] md:text-[2.4rem]"> Zero</span> sugar.
              <span className="font-black text-[1.7rem] md:text-[2.4rem]"> Zero</span> guilt.<br />
              100 crisp calories of unapologetic flavors.<br />
              Flavorful. Flawliss. That’s <span className="font-black uppercase">carbliss</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Tablet View */}
      <div className="w-full h-full hidden md:block lg:hidden overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <div className='w-full h-full gap-[5rem] flex flex-col items-center relative justify-start'>
              <div className=' w-full h-[50%] flex items-center justify-center gap-4'>
                <div className='w-fit h-fit'>
                  <div>
                    <h2 className='text-[4rem] font-extrabold font-[antonio] uppercase leading-tight text-[#523122]'>Full Flavours</h2>
                  </div>
                  <div>
                    <h1 className='text-[6rem] font-extrabold font-[antonio] uppercase leading-tight text-[#111]'>Carbliss</h1>
                  </div>
                </div>
                <div className='w-fit h-fit'>
                  <div className='pl-9'>
                    <h2 className='text-[4rem] font-extrabold font-[antonio] uppercase leading-tight text-[#523122]'>No fillers</h2>
                  </div>
                  <div>
                    <h1 className='text-[6rem] font-extrabold font-[antonio] uppercase leading-tight text-[#111]'>Cocktails</h1>
                  </div>
                </div>
              </div>
              <div ref={pineappleTabletRef} className='w-fit absolute h-fit rotate-20'>
                <img src={Pineapple} alt="" className='w-[200px]' />
              </div>
            </div>
          </div>
          <div className='w-full h-full'>
            <div className="w-full h-1/2 flex items-center justify-center pb-40">
              <h2 className="text-2xl md:text-[2.3rem] font-[antonio] font-light text-center text-black leading-snug">
                <span className="font-black text-[1.7rem] md:text-[2.4rem]">Zero</span> carbs.
                <span className="font-black text-[1.7rem] md:text-[2.4rem]"> Zero</span> sugar.
                <span className="font-black text-[1.7rem] md:text-[2.4rem]"> Zero</span> guilt.<br />
                100 crisp calories of unapologetic flavors.<br />
                Flavorful. Flawliss. That’s <span className="font-black text-[1.7rem] uppercase">carbliss</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="w-full h-full block md:hidden overflow-hidden ">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <div className='w-full h-full gap-[5rem] flex flex-col items-center relative justify-start'>
              <div className=' w-full h-[50%] flex items-center justify-center gap-4'>
                <div className='w-fit h-fit'>
                  <div>
                    <h2 className='text-[2rem] font-extrabold font-[antonio] uppercase leading-tight text-[#523122]'>Full Flavours</h2>
                  </div>
                  <div>
                    <h1 className='text-[3rem] font-extrabold font-[antonio] uppercase leading-tight text-[#111]'>Carbliss</h1>
                  </div>
                </div>
                <div className='w-fit h-fit'>
                  <div className='pl-5'>
                    <h2 className='text-[2rem] font-extrabold font-[antonio] uppercase leading-tight text-[#523122]'>No fillers</h2>
                  </div>
                  <div>
                    <h1 className='text-[3rem] font-extrabold font-[antonio] uppercase leading-tight text-[#111]'>Cocktails</h1>
                  </div>
                </div>
              </div>
              <div ref={pineappleMobileRef} className='w-fit h-fit rotate-20 absolute'>
                <img src={Pineapple} alt="" className='w-[140px]' />
              </div>
            </div>
          </div>
          <div className='w-full h-full'>
            <div className="w-full h-1/2 flex items-center justify-center pb-40">
              <h2 className="text-2xl md:text-[2.3rem] font-[antonio] font-light text-center text-black leading-snug">
                <span className="font-black text-[1.7rem] md:text-[2.4rem]">Zero</span> carbs.
                <span className="font-black text-[1.7rem] md:text-[2.4rem]"> Zero</span> sugar.
                <span className="font-black text-[1.7rem] md:text-[2.4rem]"> Zero</span> guilt.<br />
                100 crisp calories of unapologetic flavors.<br />
                Flavorful. Flawliss. That’s <span className="font-black text-[1.7rem] uppercase">carbliss</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
