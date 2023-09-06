import React, { useState, useEffect } from "react";

const heroImgs = [
  "public/hero_imgs/3SQobyog.jpeg",
  "public/hero_imgs/7nu0dyps.jpeg",
  "public/hero_imgs/FyJzXenT.png",
  "public/hero_imgs/hQT3AiHw.jpeg",
  "public/hero_imgs/HSm6UHnC.jpeg",
  "public/hero_imgs/QbvkaRtA.jpeg",
  "public/hero_imgs/VoH_iD7A.jpeg",
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImgs.length);
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero">
      <img
        className="hero-imgs"
        src={heroImgs[currentIndex]}
        alt="hero images"
      />
    </div>
  );
}

export default Hero;
