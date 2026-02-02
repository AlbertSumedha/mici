import React, { useState, useEffect, useRef } from "react";

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  const [showLetter, setShowLetter] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      const sparklesData = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setSparkles(sparklesData);

      const timer = setTimeout(() => setShowLetter(true), 900);
      return () => clearTimeout(timer);
    } else {
      setShowLetter(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Music */}
      <audio ref={audioRef} loop>
        <source src="/romantic.mp3" type="audio/mp3" />
      </audio>

      {/* Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      {/* Modal */}
      <div
        className="relative bg-white rounded-[2.5rem] p-4 md:p-8 max-w-lg w-[92%] shadow-[0_30px_80px_rgba(255,0,128,0.25)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {sparkles.map((s) => (
            <div
              key={s.id}
              className="absolute text-yellow-300 opacity-40 animate-pulse"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                animationDelay: `${s.delay}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Floating Bouquet */}
        <div className="absolute -top-10 -right-6 w-24 rotate-12 animate-float">
          <img src="/bouquet.png" className="drop-shadow-2xl" />
        </div>

        {/* Tape Stickers */}
        <div className="absolute -top-2 left-8 w-24 h-6 bg-yellow-200/60 rotate-[-12deg] rounded-sm"></div>
        <div className="absolute bottom-8 -right-8 w-24 h-6 bg-yellow-200/60 rotate-[15deg] rounded-sm"></div>

        {/* Letter */}
        <div
          className={`transition-all duration-1000 ${
            showLetter ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <div className="bg-[#fff8f0] p-6 md:p-10 pb-20 rounded-xl shadow-inner border-l-4 border-pink-500 relative font-handwriting">

            {/* Falling Bouquet INSIDE */}
            <div className="absolute left-4 top-0 w-20 bouquet-fall">
              <img src="/bouquet.png" className="drop-shadow-xl" />
            </div>

            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-pink-700">
                To my dearest mici,
              </h2>
              <div className="w-20 h-[2px] bg-pink-400 mx-auto mt-2"></div>
            </div>

            <div className="space-y-4 text-gray-700 italic md:text-lg">
              <p>In a world full of temporary things, you are my favorite forever.</p>
              <p>
                Thank you for being the person who makes my heart feel safe and my soul feel seen.
                You're the melody that makes my life beautiful.
              </p>
              <p>
                I promise to choose you, every single day, through every season and every dream we build together.
              </p>

              <p className="heartbeat text-center font-bold text-pink-600 mt-6 text-lg">
                💐 Happy Valentine's Day, mici. I love you more than words can ever hold. 💐
              </p>

              <div className="mt-8 pt-4 border-t border-pink-200 text-right">
                <p className="text-gray-500 text-sm">Forever and always yours,</p>
                <p className="text-xl md:text-2xl font-bold text-pink-700">
                  Your One & Only 矮子 ❤️
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Close */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-pink-600 text-3xl"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default SurpriseModal;
