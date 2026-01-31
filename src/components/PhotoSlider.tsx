import React, { useState, useEffect } from 'react';

const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const photos = [
    "/photobooth1.jpeg",
    "/photobooth2.jpeg",
    "/photobooth3.jpeg"
  ];

  // LOGIKA PRELOADING: Memastikan semua gambar dimuat di awal
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
    <div className="photo-slider-container">
      <h2 className="slider-title">Our Beautiful Memories</h2>
      <div className="slider-wrapper">
        <div className="slider-content">
          <div className="photo-frame" style={{ 
            position: 'relative', 
            overflow: 'hidden',
            backgroundColor: 'transparent' // Hindari warna putih saat transisi
          }}>
            
            {photos.map((photo, index) => (
              <img 
                key={index}
                src={photo} 
                alt={`Memory ${index + 1}`}
                className="slider-image"
                style={{
                  position: 'absolute', // Gunakan absolute untuk semua agar tumpukan sempurna
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  // Transisi opacity ditingkatkan
                  transition: 'opacity 2000ms ease-in-out, visibility 2000ms ease-in-out',
                  opacity: currentSlide === index ? 1 : 0,
                  visibility: currentSlide === index ? 'visible' : 'hidden', // Tambahkan visibility
                  zIndex: currentSlide === index ? 2 : 1 // Kelola z-index secara dinamis
                }}
              />
            ))}
            
            {/* Spacer transparan agar frame tetap memiliki tinggi (karena semua img absolute) */}
            <img src={photos[0]} alt="spacer" style={{ visibility: 'hidden', width: '100%' }} />
            
          </div>
        </div>
        
        <div className="slider-dots">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;