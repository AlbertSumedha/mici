import React, { useState, useEffect } from 'react';
import SurpriseModal from './SurpriseModal';

const LoveLetter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const photos = [
    "/photobooth1.jpeg",
    "/photobooth2.jpeg",
    "/photobooth3.jpeg"
  ];

  useEffect(() => {
    photos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [photos]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-10 px-6 relative py-10">
      
      {/* SEKSI KIRI: SURAT CINTA */}
      <div className="w-full lg:w-[55%] z-10 animate-in slide-in-from-left-10 duration-1000">
        <div className="love-letter p-8 md:p-12 shadow-2xl rounded-[24px]" style={{ 
          background: 'rgba(255, 255, 255, 0.75)', 
          backdropFilter: 'blur(12px)', 
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}>
          <h2 className="text-3xl font-bold mb-6 text-pink-800">A Letter From My Heart</h2>
          
          <div className="letter-content space-y-4">
            <p className="italic text-xl text-pink-700">My Dearest mici,</p>
            <p className="leading-relaxed text-gray-800 text-lg">
              Every day with you feels like a beautiful dream that I never want to wake up from. 
              You are the sunshine that brightens my darkest days.
            </p>
            <p className="leading-relaxed text-gray-800 text-lg">
              I promise to love you through every season of life and to create beautiful memories together. 
              You are my forever person.
            </p>
            
            <div className="letter-signature mt-8 pt-4 border-t border-pink-200">
              <p className="text-sm uppercase tracking-widest text-pink-500">With all my love,</p>
              <p className="text-2xl font-serif italic text-pink-700 mt-2">Your devoted partner 矮子 💕</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEKSI KANAN: PHOTO SLIDER (REVISI UKURAN & TRANSISI) */}
      <div className="w-full lg:w-[40%] flex flex-col items-center z-10 animate-in slide-in-from-right-10 duration-1000">
        {/* Container Putih (Frame Polarid) */}
        <div className="bg-white p-4 pb-10 rounded-lg shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-[400px]">
          
          {/* Frame Foto dengan Ukuran Pasti */}
          <div className="relative overflow-hidden rounded-sm bg-gray-100 w-full shadow-inner" style={{ aspectRatio: '3/4' }}>
            {photos.map((photo, index) => (
              <img 
                key={index}
                src={photo} 
                alt={`Memory ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{
                  transition: 'opacity 1.5s ease-in-out',
                  opacity: currentSlide === index ? 1 : 0,
                  zIndex: currentSlide === index ? 10 : 1
                }}
              />
            ))}
          </div>

          {/* Dots Indikator */}
          <div className="mt-6 flex justify-center gap-3">
            {photos.map((_, index) => (
              <div 
                key={index}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${currentSlide === index ? 'bg-pink-500 w-6' : 'bg-pink-200'}`}
              />
            ))}
          </div>
        </div>
        
        <p className="mt-8 text-white font-bold italic drop-shadow-lg text-xl text-center animate-pulse">
          Our Beautiful Memories ✨
        </p>
      </div>

      <SurpriseModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default LoveLetter;