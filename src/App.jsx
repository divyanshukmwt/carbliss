import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Carbliss from "./assets/Images/StampCarbliss.png";

import Nav from "./components/Common/Nav";
import ProductDisplay from "./components/Products/Productdisplay";
import ProductDetails from "./components/Products/ProductDetails";
import ProductCard from "./components/Products/Productcard";
import Contact from "./components/Common/Contact";

// Lazy loaded components
const Hero = lazy(() => import("./components/Home/Hero"));
const Flavours = lazy(() => import("./components/Home/Flavours"));
const ProductMacros = lazy(() => import("./components/Home/ProductMacros"));
const Intro = lazy(() => import("./components/Home/Intro"));
const Video = lazy(() => import("./components/Home/Video"));
const Login = lazy(() => import("./components/Common/Login"));
const About = lazy(() => import("./components/Common/About"));

// ✅ Home Component
const Home = () => (
  <Suspense fallback={null}>
    <Hero />
    <Flavours />
    <ProductMacros />
    <Intro />
    <Video />
  </Suspense>
);

// ✅ ScrollToTop component using Lenis
const ScrollToTopWithLenis = ({ lenis }) => {
  const location = useLocation();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return null;
};

const App = () => {
  const [lenisInstance, setLenisInstance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hideLoader, setHideLoader] = useState(false);

  // Loader progress simulation (~6s)
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setHideLoader(true); // animate upward
              setTimeout(() => setLoading(false), 700); // fully remove after animation
            }, 300);
          }
          return Math.min(prev + 1, 100);
        });
      }, 60); // slower for longer effect (~6s)
      return () => clearInterval(interval);
    }
  }, [loading]);

  // Lenis scroll setup
  useEffect(() => {
    const lenis = new Lenis();
    setLenisInstance(lenis);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  if (loading) {
    return (
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-[9999] transition-transform duration-700 ${
          hideLoader ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Carbliss logo + % */}
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src={Carbliss}
            alt="Carbliss"
            className="w-28 h-auto object-contain mb-4"
          />
          <p className="text-sm text-gray-600 font-[proxima] font-medium">{progress}%</p>
        </div>

        {/* Progress bar at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gray-200">
          <div
            className="h-full bg-amber-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="transition-opacity duration-700 opacity-100">
      <Router>
        {lenisInstance && <ScrollToTopWithLenis lenis={lenisInstance} />}
        <Nav />
        <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductDisplay />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
