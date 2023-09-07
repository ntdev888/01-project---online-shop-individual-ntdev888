import React, { useState, useEffect } from "react";

const heroImgs = [
  "hero_imgs/3SQobyog.jpeg",
  "hero_imgs/7nu0dyps.jpeg",
  "hero_imgs/FyJzXenT.png",
  "hero_imgs/hQT3AiHw.jpeg",
  "hero_imgs/HSm6UHnC.jpeg",
  "hero_imgs/QbvkaRtA.jpeg",
  "hero_imgs/VoH_iD7A.jpeg",
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
