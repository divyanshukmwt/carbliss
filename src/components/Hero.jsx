import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pineappleImg from "../assets/Images/Pineapple.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const titleRef = useRef();
  const subheadingRef = useRef();
  const pineappleRef = useRef();
  const buttonRef = useRef();
  const sectionRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Title
      const titleSpans = titleRef.current.querySelectorAll("span");
      gsap.from(titleSpans, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.04,
      });

      // Animate Subheading
      gsap.from(subheadingRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.4,
      });

      // Spacing Animation
      gsap.fromTo(
        titleRef.current,
        { gap: "2rem" },
        { gap: "12rem", duration: 0.8, ease: "power2.out", delay: 1.2 }
      );

      gsap.fromTo(
        subheadingRef.current,
        { gap: "3rem" },
        { gap: "10rem", duration: 0.8, ease: "power2.out", delay: 1.4 }
      );

      // Pineapple Bounce + Button
      gsap.fromTo(
        pineappleRef.current,
        { yPercent: -100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          delay: 1,
          ease: "power4.out",
          onComplete: () => {
            gsap.to(pineappleRef.current, {
              y: 10,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });

            gsap.fromTo(
              buttonRef.current,
              { x: 100, opacity: 0 },
              { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );
          },
        }
      );

      // Background Color Scroll Transition
      gsap.fromTo(
        wrapperRef.current,
        { backgroundColor: "#ffffff" },
        {
          backgroundColor: "#fffbe6",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <div ref={wrapperRef} className="w-full transition-colors duration-1000">
      {/* Hero Section */}
      <div ref={sectionRef} className="w-full h-screen">
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="text-center relative -translate-y-[5vh]">
            {/* Pineapple Image */}
            <div
              ref={pineappleRef}
              className="absolute top-[-20%] left-1/2 -translate-x-1/2 z-10 rotate-[25deg]"
            >
              <img src={pineappleImg} alt="Pineapple Drink" className="w-[150px]" />
            </div>

            {/* Title */}
            <div
              ref={titleRef}
              className="text-2xl md:text-[5rem] font-[antonio] font-semibold tracking-wider uppercase text-[#523122] flex flex-wrap justify-center overflow-hidden gap-[2rem]"
            >
              <div>
                <span>{renderText("FULL")}</span>&nbsp;
                <span>{renderText("FLAVOR")}</span>
              </div>
              <div>
                <span>{renderText("NO")}</span>&nbsp;
                <span>{renderText("FILLER")}</span>
              </div>
            </div>

            {/* Subheading */}
            <div
              ref={subheadingRef}
              className="relative flex justify-center gap-[3rem] z-20"
            >
              {["carbliss", "cocktails"].map((word, i) => (
                <h1
                  key={i}
                  className="text-xl md:text-[7rem] font-extrabold mix-blend-difference font-[antonio] uppercase leading-tight text-[#111]"
                >
                  {word}
                </h1>
              ))}
            </div>

            {/* Button */}
            <div
              ref={buttonRef}
              className="absolute right-50 font-[antonio] uppercase mt-8 px-6 py-3 bg-[#523122] text-white text-lg md:text-xl rounded-full shadow-lg opacity-0"
            >
              Ready to Sip?
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full h-screen flex items-center justify-center px-10 text-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-[antonio] font-bold text-[#523122] mb-4">
            About Carbliss
          </h2>
          <p className="text-lg md:text-2xl text-[#523122] max-w-3xl mx-auto">
            Carbliss is a handcrafted, ready-to-drink cocktail that’s bold in flavor yet refreshingly light. No sugar. No carbs. Just premium taste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
  