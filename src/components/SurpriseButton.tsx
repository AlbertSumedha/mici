import React, { useState } from "react";

interface SurpriseButtonProps {
  onReveal: () => void;
}

const SurpriseButton: React.FC<SurpriseButtonProps> = ({ onReveal }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      onReveal();
    }
  };

  return (
    <div className="flex justify-center items-center py-4">
      <button
        onClick={handleClick}
        disabled={isRevealed}
        className={`
          relative px-10 py-4 rounded-full font-bold text-white shadow-xl 
          transition-all duration-500 ease-out border-none outline-none
          ${
            isRevealed
              ? "bg-pink-400 cursor-default scale-100 opacity-90"
              : "bg-[#c44569] hover:bg-[#ff6b9d] hover:scale-105 active:scale-95 cursor-pointer"
          }
        `}
        /* Style di bawah ini memastikan tidak ada animasi membalul (bouncing) */
        style={{
          transitionTimingFunction: "linear",
          animation: "none",
        }}
      >
        <span className="relative z-10 flex items-center gap-2 tracking-wide">
          {isRevealed ? (
            <>Surprise Revealed! 💕</>
          ) : (
            <>
              Tap to See a Surprise
              <span className="animate-pulse">✨</span>
            </>
          )}
        </span>

        {/* Efek Pendaran (Glow) yang tenang di belakang tombol */}
        {!isRevealed && (
          <div
            className="absolute inset-0 rounded-full blur-md opacity-50 -z-10 bg-gradient-to-r from-[#ff6b9d] via-[#ffa8cc] to-[#9b59b6]"
            style={{ animation: "none" }}
          ></div>
        )}
      </button>
    </div>
  );
};

export default SurpriseButton;
