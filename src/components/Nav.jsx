import React, { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import menuAnimation from "../assets/menu.json";
import { gsap } from "gsap";

const Nav = () => {
  const lottieRef = useRef();
  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

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
    { name: "Home", image: "path/to/home-image.jpg" },
    { name: "About", image: "path/to/about-image.jpg" },
    { name: "Products", image: "path/to/products-image.jpg" },
    { name: "Contact", image: "path/to/contact-image.jpg" },
  ];

  const defaultImage = "path/to/default-image.jpg";

  return (
    <>
      {/* ✅ Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center px-6 py-4">
          <img
            src="https://drinkcarbliss.com/cdn/shop/files/Carbliss_Word_1_1_x60.svg?v=1735666630"
            alt="Carbliss Logo"
            className="h-8"
          />

          <div className="cursor-pointer w-12" onClick={toggleMenu}>
            <Lottie
              lottieRef={lottieRef}
              animationData={menuAnimation}
              loop={false}
              autoplay={false}
            />
          </div>

          <h3 className="font-[antonio] uppercase">find in stores</h3>
        </div>
      </div>

      {/* ✅ Slide Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col lg:flex-row"
      >
        {/* Menu items */}
        <div className="flex flex-col gap-5 items-center justify-center text-2xl font-semibold w-full h-full lg:w-1/2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.name.toLowerCase()}`}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`transition-opacity duration-300 ${
                hoveredItem && hoveredItem !== item.name ? "opacity-50" : "opacity-100"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Image preview: visible only on large screens */}
        <div className="hidden lg:flex w-1/2 items-center justify-center">
          {hoveredItem ? (
            <img
              src={menuItems.find((item) => item.name === hoveredItem).image}
              alt={hoveredItem}
              className="max-w-full h-auto"
            />
          ) : (
            <img src={defaultImage} alt="Default" className="max-w-full h-auto" />
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
