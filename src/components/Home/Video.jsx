import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import carbliss from "../../assets/Images/Carbliss.mp4";
import Footer from '../Common/Footer';

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        {
          scale: 0.5,
          opacity: 0.4,
        },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: "top top",
            end: "+=1000", // How long the scroll effect should last
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
    }, videoContainerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <>
      <div className='overflow-hidden'>
        <div
          ref={videoContainerRef}
          className="w-full h-screen md:[100vh] lg:h-full flex items-center justify-center overflow-hidden"
        >
          <video
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline
            src={carbliss}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Video;
