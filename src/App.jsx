import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from "@studio-freight/lenis";

import Nav from "./components/Common/Nav";
import ProductDisplay from "./components/Products/Productdisplay";
import ProductDetails from "./components/Products/ProductDetails";
import ProductCard from "./components/Products/Productcard";

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
  const [lenisInstance, setLenisInstance] = React.useState(null);

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

  return (
    <Router>
      {lenisInstance && <ScrollToTopWithLenis lenis={lenisInstance} />}
      <Nav />
      <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductDisplay />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
