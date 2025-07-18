import React, { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import menuAnimation from "../assets/menu.json";
import { gsap } from "gsap";

const Nav = () => {
  const lottieRef = useRef();
  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const anim = lottieRef.current;

    if (!isOpen) {
      anim.playSegments([0, 70], true);
      gsap.to(menuRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        pointerEvents: "auto",
      });
    } else {
      anim.playSegments([70, 140], true);
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.5,
        ease: "power3.in",
        pointerEvents: "none",
      });
    }

    setIsOpen(!isOpen);
  };

  useEffect(() => {
    gsap.set(menuRef.current, { y: "-100%" });
  }, []);

  return (
    <>
      {/* ✅ Separate Nav Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <img
              src="https://drinkcarbliss.com/cdn/shop/files/Carbliss_Word_1_1_x60.svg?v=1735666630"
              alt="Carbliss Logo"
              className="h-8"
            />
          </div>

          <div className="cursor-pointer w-12" onClick={toggleMenu}>
            <Lottie
              lottieRef={lottieRef}
              animationData={menuAnimation}
              loop={false}
              autoplay={false}
            />
          </div>

          <div>
            <h3 className="font-[antonio] uppercase">find in stores</h3>
          </div>
        </div>
      </div>

      {/* ✅ Separate Fullscreen Slide Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex items-center justify-center"
      >
        <div className="flex flex-col gap-8 text-2xl font-semibold">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Nav;
