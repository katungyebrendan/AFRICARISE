"use client";

import { useEffect, useState } from "react";

const slides = [
  "/home/slide-1.jpg",
  "/home/slide-2.jpg",
  "/home/slide-3.jpg",
  "/home/slide-4.jpg",
];

export function HomeHeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(231,161,21,0.16),rgba(234,107,15,0.12),rgba(31,122,73,0.14),rgba(110,28,125,0.16))]" />
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-out ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,28,20,0.72)_0%,rgba(8,28,20,0.48)_46%,rgba(8,28,20,0.14)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_48%,rgba(255,255,255,0.08),transparent_34%)]" />
    </div>
  );
}
