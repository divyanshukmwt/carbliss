import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Flavours from "./components/Flavours";
import ProductMacros from "./components/ProductMacros";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <Flavours />
      <ProductMacros/>
    </div>
  );
};

export default App;
