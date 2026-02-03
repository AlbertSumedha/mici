import React, { useState } from "react";

const AnimatedImageGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    { src: "/photo1.jpeg", caption: "You Made My Dreams Come True", delay: 0 },
    { src: "/photo2.jpeg", caption: "Every Moment With You", delay: 0.1 },
    { src: "/photo3.jpeg", caption: "Forever In My Heart", delay: 0.2 },
    { src: "/photo4.jpeg", caption: "You Are My Everything", delay: 0.3 },
    { src: "/photo5.jpeg", caption: "Love Beyond Words", delay: 0.4 },
    { src: "/photo6.jpeg", caption: "Beautiful Like You", delay: 0.5 },
    { src: "/photo7.jpeg", caption: "Our Special Bond", delay: 0.6 },
    { src: "/photo8.jpeg", caption: "Always Together", delay: 0.7 },
    { src: "/photo9.jpeg", caption: "To More Adventures", delay: 0.8 },
    { src: "/photo10.jpeg", caption: "My One and Only", delay: 0.9 },
    { src: "/photo11.jpeg", caption: "Growing Old With You", delay: 1.0 },
    { src: "/photo12.jpeg", caption: "My Greatest Blessing", delay: 1.1 },
  ];

  const decorativeElements = [
    { emoji: "🌸", top: "5%", left: "5%", delay: 0 },
    { emoji: "💕", top: "15%", left: "85%", delay: 0.5 },
    { emoji: "🦋", top: "25%", left: "10%", delay: 1 },
    { emoji: "✨", top: "35%", left: "92%", delay: 1.5 },
    { emoji: "🌺", top: "45%", left: "5%", delay: 2 },
    { emoji: "💖", top: "55%", left: "90%", delay: 2.5 },
    { emoji: "🌹", top: "65%", left: "8%", delay: 3 },
    { emoji: "🎀", top: "75%", left: "88%", delay: 3.5 },
    { emoji: "🍓", top: "85%", left: "12%", delay: 4 },
    { emoji: "🌟", top: "92%", left: "85%", delay: 4.5 },
  ];

  return (
    <div className="animated-image-grid-container relative py-12 px-4 overflow-hidden">
      <div className="grid-background-decoration">
        {decorativeElements.map((element, index) => (
          <div
            key={index}
            className="floating-decoration text-2xl"
            style={{
              position: "absolute",
              top: element.top,
              left: element.left,
              animationDelay: `${element.delay}s`,
              zIndex: 1,
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div>

      <div className="grid-header mb-12 relative z-10 text-center">
        <h2 className="grid-title text-white font-bold tracking-tight">
          <span className="title-line block text-3xl md:text-5xl">
            You Made My World
          </span>
          <span className="title-line block text-3xl md:text-5xl">
            Even More
          </span>
          <span className="title-line block text-3xl md:text-5xl text-pink-600">
            Beautiful
          </span>
        </h2>
      </div>

      <div className="image-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={`grid-item relative rounded-2xl transition-all duration-300 shadow-lg bg-white ${
              hoveredIndex === index ? "scale-105 z-20" : "z-10"
            }`}
            style={{
              animationDelay: `${image.delay}s`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Bagian p-3 memastikan ada padding di semua sisi (atas, kanan, bawah, kiri).
                h-full dan aspect-square memastikan container tetap kotak sempurna.
            */}
            <div className="image-container h-full w-full p-3 flex flex-col">
              <div className="relative flex-grow overflow-hidden rounded-xl aspect-square">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="grid-image w-full h-full object-cover"
                  loading="lazy"
                />

                <div
                  className={`image-overlay absolute inset-0 bg-black/60 flex flex-col items-center justify-center transition-opacity duration-300 p-4 text-center ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="image-hearts flex gap-2 mb-2">
                    <span className="heart-1 animate-bounce">💕</span>
                    <span className="heart-2 animate-bounce delay-100">💖</span>
                    <span className="heart-3 animate-bounce delay-200">💕</span>
                  </div>
                  <p className="image-caption text-white font-medium italic">
                    {image.caption}
                  </p>
                </div>
              </div>
              {/* Spacer kecil di bawah untuk estetika bingkai */}
              <div className="h-2"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid-message mt-16 relative z-10 text-center">
        <p className="romantic-message text-white text-xl md:text-2xl font-semibold italic drop-shadow-lg">
          "Every picture tells our story, every moment is a treasure for mici
          💕"
        </p>
      </div>
    </div>
  );
};

export default AnimatedImageGrid;
