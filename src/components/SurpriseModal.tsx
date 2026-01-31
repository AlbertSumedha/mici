import React, { useState, useEffect } from "react";

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const sparklesData = Array.from({ length: 35 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setSparkles(sparklesData);

      // Fade in yang mulus tanpa efek membalul
      const timer = setTimeout(() => setShowLetter(true), 500);
      return () => clearTimeout(timer);
    } else {
      setShowLetter(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-500" 
      onClick={onClose}
    >
      {/* Container utama modal dengan transisi Fade In standar */}
      <div 
        className="relative bg-white rounded-[2rem] p-4 md:p-8 max-w-lg w-[90%] shadow-2xl overflow-hidden animate-in fade-in duration-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Magic Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="absolute text-yellow-400 animate-pulse opacity-40"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                animationDelay: `${sparkle.delay}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Handwritten Love Letter */}
        <div className={`transition-all duration-1000 transform ${showLetter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="bg-[#fff9e6] p-6 md:p-10 rounded-xl shadow-inner border-l-4 border-pink-400 relative">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-pink-600 font-serif">To my dearest mici,</h2>
            </div>
            
            <div className="space-y-4 text-gray-700 font-serif leading-relaxed italic md:text-lg">
              <p>In a world full of temporary things, you are my favorite forever.</p>
              <p>Thank you for being the person who makes my heart feel safe and my soul feel seen. You're the melody that makes my life beautiful.</p>
              <p>I promise to choose you, every single day, through every season and every dream we build together.</p>
              
              <p className="font-bold text-pink-500 mt-6">
                Happy Valentine's Day, mici. I love you more than words can ever hold.
              </p>
              
              <div className="mt-8 pt-4 border-t border-pink-200">
                <p className="text-gray-500 text-sm">Forever and always yours,</p>
                <p className="text-xl md:text-2xl font-bold text-pink-700 mt-1">Your One & Only 矮子 ❤️</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tombol Close */}
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-pink-600 text-3xl font-light transition-colors" 
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default SurpriseModal;