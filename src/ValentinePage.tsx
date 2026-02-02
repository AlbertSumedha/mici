"use client";
import { useState, useEffect } from "react";

// Import semua komponen pendukung
import IntroScreen from "./components/IntroScreen";
import LoveLetter from "./components/LoveLetter";
import AnimatedImageGrid from "./components/AnimatedImageGrid";
import FloatingText from "./components/FloatingText";
import SweetQuotes from "./components/SweetQuotes";
import SurpriseButton from "./components/SurpriseButton";
import SurpriseModal from "./components/SurpriseModal";
import HeartAnimation from "./components/HeartAnimation";
import ParticleHeart from "./components/ParticleHeart";
import FloatingHeartsBackground from "./components/FloatingHeartsBackground";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    if (showMainContent) {
      const balloonsData = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        delay: Math.random() * 5,
        left: Math.random() * 95
      }));
      setBalloons(balloonsData);
    }
  }, [showMainContent]);

  const yesButtonSize = noCount * 20 + 20;

  useEffect(() => {
    if (yesPressed) {
      const timer = setTimeout(() => {
        setShowIntro(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [yesPressed]);

  // 1. Tampilan Pertanyaan Valentine
  if (!showIntro) {
    const noPhrases = [
      "No", "Are you sure? 🥺", "Pookie please... 😭",
      "Don't do this to me :(", "I'm gonna cry... 💔",
      "You're breaking my heart", "Think again! 🌹",
      "Miciii pleaseee 🙏", "Surely not?", "Last chance! ✨"
    ];

    const getNoButtonText = () => noPhrases[Math.min(noCount, noPhrases.length - 1)];

    return (
      <div 
        className="fixed inset-0 z-[9999] flex h-screen w-screen flex-col items-center justify-center m-0 p-0 overflow-hidden"
        style={{ background: 'radial-gradient(circle at top, #ffe4ec, #ffc1d1, #ff9bb8)' }}
      >
        <div className="relative z-10 flex flex-col items-center">
          {yesPressed ? (
            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
              <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear Kiss" className="h-[250px]" />
              <div className="my-6 text-3xl md:text-5xl font-bold text-[#c44569] px-4 text-center">I knew it 🥰, i love you so much miciii!! ❤️</div>
            </div>
          ) : (
            <div className="flex flex-col items-center px-4 animate-in fade-in">
              <img className="h-[200px] mb-4" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" alt="Cute Bear" />
              <h1 className="my-6 text-4xl md:text-6xl font-black text-[#c44569] text-center drop-shadow-md">
                Will you be my Valentine,  
                <br />
                <span className="text-pink-600 animate-pulse">mici? 💖</span>
              </h1>
              <p className="text-pink-500 italic text-lg mt-2">I promise to love you forever 🌸</p>

              <div className="flex items-center gap-6 mt-4">
                <button 
                  style={{ 
                    fontSize: yesButtonSize,
                    background: 'linear-gradient(to right, #ec4899, #f43f5e)', 
                  }} 
                  className="rounded-full px-10 py-4 font-bold text-white shadow-xl transition-all hover:scale-110 active:scale-95 animate-pulse"
                  onClick={() => setYesPressed(true)}
                >
                  Yes 💕
                </button>

                {/* LOGIKA PERBAIKAN: Tombol hilang setelah klik pesan terakhir */}
                {noCount < noPhrases.length && (
                  <button 
                    onClick={() => setNoCount(noCount + 1)} 
                    style={{ backgroundColor: '#fb7185' }}
                    className="rounded-full px-8 py-3 font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
                  >
                    {getNoButtonText()}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (!showMainContent) {
    return <IntroScreen onEnter={() => setShowMainContent(true)} />;
  }

  // 3. Tampilan Utama
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center m-0 p-0 overflow-x-hidden animate-in fade-in duration-1000">

      <video autoPlay loop muted playsInline className="fixed top-0 left-0 w-full h-full object-cover -z-20">
        <source src="/0131.mp4" type="video/mp4" />
      </video>

      <div className="fixed top-0 left-0 w-full h-full bg-black/20 -z-10"></div>

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="balloon"
            style={{
              left: `${balloon.left}%`,
              animationDelay: `${balloon.delay}s`,
              position: 'absolute',
              fontSize: '2rem',
              bottom: '-50px'
            }}
          >
            💖
          </div>
        ))}
      </div>

      <ParticleHeart />
      <FloatingHeartsBackground />

      <div className="z-20 my-8">
        <HeartAnimation />
      </div>

       <div className="relative z-30 flex flex-col items-center justify-center py-10">

        <div className="bg-white/20 backdrop-blur-md px-10 py-6 rounded-full border border-white/40 shadow-[0_8px_32px_0_rgba(255,107,157,0.4)]">

          <h1 className="text-4xl md:text-7xl font-black italic tracking-tight text-white font-serif">

            矮子 <span className="text-pink-200 animate-pulse">&</span> mici

          </h1>

        </div>

        <div className="mt-6 flex flex-col items-center gap-2">

          <p className="text-white font-bold tracking-[0.4em] uppercase text-sm md:text-base drop-shadow-md animate-bounce">

            Forever & Always

          </p>

        </div>

      </div> 

      <div className="w-full max-w-lg mt-12 z-20"><FloatingText /></div>
      <div className="w-full max-w-7xl px-6 py-5 z-20"><LoveLetter /></div>
      <div className="w-full max-w-4xl px-6 py-10 z-20"><SweetQuotes /></div>
      <div className="w-full max-w-6xl px-4 mt-10 z-20"><AnimatedImageGrid /></div>

      <div className="my-20 flex flex-col items-center gap-4 z-30">
        <p className="text-white font-bold italic drop-shadow-md">Wait, there's one more thing... ✨</p>
        <SurpriseButton onReveal={() => setIsModalOpen(true)} />
      </div>

      <footer className="text-center py-20 text-white/60 italic text-sm z-20">Made with ❤️ for mici</footer>
      <SurpriseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}