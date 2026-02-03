import React, { useState, useEffect } from "react";

const FloatingHeartsBackground = () => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    // Membuat 100 hati (balloons) dengan delay dan posisi acak
    const balloonsData = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10, // Jeda mulai agar tidak muncul bersamaan
      left: Math.random() * 95,
      duration: 12 + Math.random() * 8, // Durasi 12-20 detik agar tidak cepat hilang
    }));
    setBalloons(balloonsData);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-visible">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon"
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`, // Menggunakan durasi acak
            position: "absolute",
            fontSize: "2rem",
            bottom: "-10%", // Mulai sedikit di bawah layar
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
};

export default FloatingHeartsBackground;
