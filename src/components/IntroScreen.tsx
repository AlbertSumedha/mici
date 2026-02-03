import React, { useState, useEffect, useRef } from "react";

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  const [balloons, setBalloons] = useState<
    Array<{ id: number; delay: number; left: number }>
  >([]);
  const [isEntering, setIsEntering] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/Edd_Sheeran_-_Perfect_(mp3.pm).mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const balloonsData = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      left: Math.random() * 95,
    }));
    setBalloons(balloonsData);
  }, []);

  const handleStart = async () => {
    if (isEntering) return;
    setIsEntering(true);

    try {
      if (audioRef.current) {
        await audioRef.current.play();
      }
    } catch (err) {
      console.warn("Autoplay block", err);
    } finally {
      setTimeout(() => {
        onEnter();
      }, 500);
    }
  };

  return (
    <div
      className="intro-screen"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
        backgroundColor: "black", // Mencegah kedipan putih saat loading
      }}
    >
      {/* 1. VIDEO BACKGROUND - Diperlebar dengan object-fit: cover */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          transform: "translate(-50%, -50%)", // Memastikan video tepat di tengah
          objectFit: "cover", // Kunci utama untuk menghilangkan garis hitam
          zIndex: 0,
        }}
      >
        <source src="/0131.mp4" type="video/mp4" />
      </video>

      {/* 2. OVERLAY GELAP - Pastikan inset: 0 untuk menutupi seluruh layar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 1,
        }}
      />

      {/* 3. ANIMASI HATI (BALLOONS) */}
      <div
        className="balloons-container"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="balloon"
            style={{
              left: `${balloon.left}%`,
              animationDelay: `${balloon.delay}s`,
              position: "absolute",
              fontSize: "2rem",
            }}
          >
            💖
          </div>
        ))}
      </div>

      {/* 4. KONTEN UTAMA */}
      <div
        className="intro-content"
        style={{
          zIndex: 3,
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1
          className="intro-title"
          style={{
            color: "white",
            marginBottom: "2rem",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          Something Special
          <br />
          <span
            className="intro-subtitle"
            style={{ fontSize: "0.6em", opacity: 0.9 }}
          >
            Awaits You
          </span>
        </h1>

        <button
          onClick={handleStart}
          className={`enter-button ${isEntering ? "opacity-50" : ""}`}
          disabled={isEntering}
          style={{
            padding: "1.2rem 2.5rem",
            fontSize: "1.2rem",
            cursor: isEntering ? "default" : "pointer",
            border: "none",
            borderRadius: "50px",
            backgroundColor: "#ff6b9d",
            color: "white",
            fontWeight: "bold",
            boxShadow: "0 4px 15px rgba(255, 107, 157, 0.4)",
          }}
        >
          <span className="button-text">
            {isEntering ? "Opening..." : "Click to Begin"}
          </span>
          {!isEntering && <div className="button-glow-pulse"></div>}
        </button>
      </div>

      {/* 5. EFEK SPARKLES */}
      <div
        className="intro-sparkles"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`intro-sparkle sparkle-${i + 1}`}>
            ✨
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroScreen;
