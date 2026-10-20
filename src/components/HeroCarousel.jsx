import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroCarousel.css";

const HeroCarousel = () => {
  const images = [
    "/Images/hero/hero-1.jpg",
    "/Images/hero/hero-2.jpg",
    "/Images/hero/hero-3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const variants = {
    enter: { opacity: 0, scale: 1.02 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  };

  return (
    <div className="hero-carousel">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Hero Slide ${currentIndex + 1}`}
          className="hero-carousel__image"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* دکمه‌های انتخاب عکس */}
      <div className="hero-carousel__dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`hero-carousel__dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;