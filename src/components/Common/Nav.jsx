import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { gsap } from "gsap";

import menuAnimation from './menu.json';


// 🖼️ Images
import menu1 from "../../assets/Images/menu1.jpg";
import menu2 from "../../assets/Images/menu2.jpg";
import menu3 from "../../assets/Images/menu3.jpg";
import menu4 from "../../assets/Images/menu4.jpg";
import menu5 from "../../assets/Images/menu5.jpg";

const Nav = () => {
  const lottieRef = useRef();
  const menuRef = useRef();
  const imageRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentImage, setCurrentImage] = useState(menu5);

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

  const menuItems = [
    { name: "Home", image: menu1, route: "/" },
    { name: "About", image: menu2, route: "/about" },
    { name: "Products", image: menu3, route: "/products" },
    { name: "Contact", image: menu4, route: "/contact" },
  ];

  const handleMouseEnter = (item) => {
    setHoveredItem(item.name);
    const nextImage = item.image;

    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        setCurrentImage(nextImage);
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "power2.inOut" }
        );
      },
    });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      {/* ✅ Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center px-6 py-4">
          <img
            src="https://drinkcarbliss.com/cdn/shop/files/Carbliss_Word_1_1_x60.svg?v=1735666630"
            alt="Carbliss Logo"
            className="h-9"
          />
          <div className="cursor-pointer w-12" onClick={toggleMenu}>
            <Lottie
              lottieRef={lottieRef}
              animationData={menuAnimation}
              loop={false}
              autoplay={false}
            />
          </div>
          <Link to="/login" className="text-black hover:text-gray-700 text-[20px]">
            <i className="ri-user-line"></i>
          </Link>

        </div>
      </div>

      {/* ✅ Slide Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col lg:flex-row"
      >
        {/* Menu items */}
        <div className="flex flex-col gap-5 items-center font-[antonio] justify-center text-[3rem] font-semibold w-full h-full lg:w-1/2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.route}
              onClick={toggleMenu}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              className={`transition-opacity duration-300 ${hoveredItem && hoveredItem !== item.name
                ? "opacity-50"
                : "opacity-100"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Image preview */}
        <div className="hidden lg:flex w-1/2 overflow-hidden items-center justify-center">
          <img
            ref={imageRef}
            src={currentImage}
            alt="Preview"
            className="max-w-full h-auto object-contain transition-transform duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
