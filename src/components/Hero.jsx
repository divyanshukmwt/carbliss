import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pineappleImg from "../assets/Images/Pineapple.png";
import cranberryImg from "../assets/Images/Cranberry.png";
import peachImg from "../assets/Images/Peach.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const titleRef = useRef();
  const subheadingRef = useRef();
  const pineappleRef = useRef();
  const cranberryRef = useRef();
  const peachRef = useRef();
  const buttonRef = useRef();
  const sectionRef = useRef();
  const wrapperRef = useRef();
  const aboutTextRef = useRef();

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
        { backgroundColor: "#d4c982" },
        {
          backgroundColor: "#b6484f",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center top",
            end: "center top",
            scrub: true,
          },
        }
      );
      const animateCan = (ref, xVal) => {
        gsap.fromTo(
          ref.current,
          { x: xVal, y: 50, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              scrub: true,
            },
          }
        );
      };

      animateCan(cranberryRef, -200);
      animateCan(peachRef, 200);


      gsap.fromTo(
        aboutTextRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutTextRef.current,
            start: "top 80%", // Adjust as needed
            toggleActions: "play none none none",
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
    <div ref={wrapperRef} className="w-full transition-colors overflow-x-hidden  duration-1000">
      {/* Hero Section */}
      <div ref={sectionRef} className="w-full h-screen">
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="text-center relative -translate-y-[5vh]">
            {/* Pineapple Image */}
            <div
              ref={pineappleRef}
              className="absolute top-[-20%] left-1/2 -translate-x-1/2 z-10 rotate-[25deg]">
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
        <div className="w-[50%]">
          <h2 ref={aboutTextRef}
            className="text-4xl md:text-[2.3rem] font-[antonio] font-light text-white mb-4 leading-snug">
            <span className="font-black text-[2.4rem]">Zero</span> carbs.
            <span className="font-black text-[2.4rem]"> Zero</span> sugar.
            <span className="font-black text-[2.4rem]"> Zero</span> guilt.<br />
            100 crisp calories of unapologetic flavors.<br />
            Flavorful. Flawliss. That’s <span className="font-black text-[2.5rem] uppercase">carbliss</span>
          </h2>
        </div>
        <div className=" w-[50%] h-full flex relative">
          {/* Cranberry Can */}
          <div ref={cranberryRef} className="absolute top-[18%] left-[26%] rotate-10">
            <div className="absolute -z-10 top-1/2 left-1/2 w-[180px] h-[180px] bg-[#00000080] rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2"></div>
            <img src={cranberryImg} alt="Cranberry Drink" className="w-[150px] relative z-10" />
          </div>

          {/* Peach Can */}
          <div ref={peachRef} className="absolute top-[22%] right-[20%] rotate-[-10deg]">
            <div className="absolute -z-10 top-1/2 left-1/2 w-[220px] h-[220px] bg-[#00000080] rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
            <img src={peachImg} alt="Peach Drink" className="w-[155px] relative z-10" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;