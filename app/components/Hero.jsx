"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = ["/hero/banner2.png", "/hero/banner1.png","/hero/banner3.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Hero ${index + 1}`}
          className={`w-full h-auto transition-opacity duration-1000 ${
            currentSlide === index
              ? "opacity-100 relative"
              : "opacity-0 absolute inset-0"
          }`}
        />
      ))}
    </section>
  );
}