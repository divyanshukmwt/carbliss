import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

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
    </div>
  );
};

export default App;
