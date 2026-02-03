import React, { useEffect, useState } from "react";
import "./FloatingText.css";

const FloatingText = () => {
  const messages = [
    "You Are My Everything",
    "Forever Yours",
    "My Heart Belongs to You",
    "You Make Me Complete",
    "Endlessly In Love",
  ];

  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [messages.length]);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    /* h-32 dan my-8 menjaga agar tidak menabrak LoveLetter di bawahnya */
    <div className="w-full h-32 flex items-center justify-center relative overflow-visible my-8">
      {show && (
        <div
          className="relative inline-flex items-center justify-center animate-in fade-in zoom-in duration-700"
          style={{ animation: "float 5s ease-in-out infinite" }}
        >
          {/* Efek Cahaya (Glow) di belakang bingkai */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#ff6b9d] via-[#ffa8cc] to-[#9b59b6] rounded-2xl blur-lg opacity-40"></div>

          {/* Bingkai Glassmorphism Utama - w-fit memastikan box hanya selebar teks */}
          <div className="relative w-fit bg-white/20 backdrop-blur-md border border-white/40 px-8 py-4 rounded-2xl shadow-xl flex items-center justify-center">
            {/* Dekorasi Ikon Kecil di Sudut */}
            <span className="absolute -top-3 -left-3 text-2xl animate-pulse">
              ✨
            </span>
            <span className="absolute -bottom-3 -right-3 text-2xl animate-bounce">
              💖
            </span>

            {/* Teks Pesan */}
            <span className="text-white text-xl md:text-3xl font-bold italic tracking-wide drop-shadow-md whitespace-nowrap">
              {messages[current]}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingText;
