import React, { useState, useEffect } from "react";

const SweetQuotes: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showQuote, setShowQuote] = useState(true);

  const quotes = [
    "如果我只能爱你四天",
    "那就是 春天，夏天，秋天，冬天",
    "如果我只能爱你三天",
    "那就是 昨天，今天，明天",
    "如果我只能爱你两天",
    "那就是 白天，黑天",
    "如果我只能爱你一天",
    "那就是 我爱你 每一天",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowQuote(false);

      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setShowQuote(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
  <div
    className={`fixed top-12 left-12 md:top-16 md:left-20 z-[100] transition-all duration-700 pointer-events-none ${
      showQuote 
        ? "opacity-100 translate-y-0 scale-100" 
        : "opacity-0 translate-y-4 scale-95"
    }`}
  >
    <div className="relative group">
      {/* Glow lembut di belakang */}
      <div className="absolute -inset-1 bg-pink-400 rounded-full blur-md opacity-20"></div>
      
      {/* Box Utama dengan padding dan kontras tinggi */}
      <div className="relative bg-white/50 backdrop-blur-xl border border-white/70 rounded-full px-10 py-4 shadow-2xl flex items-center gap-4">
        <p className="text-white font-extrabold text-lg md:text-2xl tracking-wider drop-shadow-[0_2px_4px_rgba(219,39,119,0.9)]">
          {quotes[currentQuote]}
        </p>
        <span className="text-2xl md:text-3xl filter drop-shadow-md animate-bounce">💕</span>
      </div>
    </div>
  </div>
);
};

export default SweetQuotes;