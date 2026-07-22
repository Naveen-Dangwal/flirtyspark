"use client";
import { useRef, useEffect, useState } from "react";

const ParallaxSection = ({ img, children }) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setOffset(rect.top * 0.25);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
     
      className="relative h-[100vh] overflow-hidden flex items-center justify-center" style={{backgroundImage : `url(${img})`, backgroundSize : 'cover', backgroundAttachment : 'fixed'}}
    >
    
        {/* PARALLAX IMAGE */}
     

        {/* CONTENT */}
        {/* <div
          className={`relative z-10 text-center max-w-4xl mx-auto px-4
          transition-all duration-1000 transform`}
        >
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#c49827] to-yellow-400 rounded-full mb-2 mx-auto" />
            <div className="w-12 h-1 bg-gradient-to-r from-[#c49827] to-yellow-400 rounded-full mx-auto" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Crafting
            <span className="block text-[#c49827] mt-2">
              Architectural Excellence That Endures
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
             Where thoughtful design meets uncompromising craftsmanship to create spaces that inspire today and stand strong for generations to come.
           </p>

          <div className="flex justify-center items-center gap-6 mt-10">
         <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
             <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>
        </div> */}
      </section>

  
  );
};

export default ParallaxSection;
