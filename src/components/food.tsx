"use client";
import React, { useState } from "react";

const Food = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuPicks = [
    {
      name: "Special Surprise",
      image: "/food/mici.jpeg",
      icon: "✨",
      desc: "Anything You Want, Mici!",
      color: "from-pink-100 to-rose-200",
    },
    {
      name: "Matcha Garden",
      image: "/food/food (2).jpeg",
      icon: "🍵",
      desc: "So Matcha Better With You",
      color: "from-green-100 to-emerald-200",
    },
    {
      name: "ShuShu",
      image: "/food/food (15).jpeg",
      icon: "🍵",
      desc: "Life is Sweet, Just Like Us",
      color: "from-emerald-50 to-teal-100",
    },
    {
      name: "Sushiro Date",
      image: "/food/food (7).jpeg",
      icon: "🍣",
      desc: "Rolling in Deep Love",
      color: "from-red-100 to-rose-200",
    },
    {
      name: "Street Style Takoyaki",
      image: "/food/food (8).jpeg",
      icon: "🐙",
      desc: "You're My Perfect Catch",
      color: "from-orange-100 to-amber-200",
    },
    {
      name: "Sushi Tei-meless Love",
      image: "/food/food (31).jpeg",
      icon: "🍣",
      desc: "Our love story is simply timeless",
      color: "from-emerald-200 to-teal-400",
    },
    {
      name: "Gomachi Buta-Done!",
      image: "/food/food (32).jpeg",
      icon: "🐷",
      desc: "My search for love is 'Done' since I found you",
      color: "from-orange-200 to-red-300",
    },
    {
      name: "Singaporean Delights",
      image: "/food/food (4).jpeg",
      icon: "🍜",
      desc: "Exploring Flavors Together",
      color: "from-blue-100 to-indigo-200",
    },
    {
      name: "Bakmi Bintang Gading",
      image: "/food/food (23).jpeg",
      icon: "🍜",
      desc: "Noodle-ing Around with You",
      color: "from-yellow-100 to-amber-200",
    },
    {
      name: "A Slice of Heaven",
      image: "/food/food (3).jpeg",
      icon: "🍕",
      desc: "You Have a Pizza My Heart",
      color: "from-orange-100 to-red-200",
    },
    {
      name: "Yang's Braised Chicken",
      image: "/food/food (5).jpeg",
      icon: "🥘",
      desc: "Warm and Comforting",
      color: "from-amber-100 to-yellow-200",
    },
    {
      name: "Nasi Samcan Spesial",
      image: "/food/food (35).jpeg",
      icon: "🍛",
      desc: "Crispy Joys of Life",
      color: "from-orange-100 to-red-100",
    },
    {
      name: "Geybok Signature",
      image: "/food/food (37).jpeg",
      icon: "🍗",
      desc: "Spicing Up Our Love",
      color: "from-red-100 to-orange-200",
    },
    {
      name: "Sate Taichan",
      image: "/food/food (38).jpeg",
      icon: "🍢",
      desc: "Small Bites, Big Love",
      color: "from-slate-100 to-gray-200",
    },
    {
      name: "Seafood Feast",
      image: "/food/food (40).jpeg",
      icon: "🦞",
      desc: "Plenty of Fish, But I Pick You",
      color: "from-cyan-100 to-blue-200",
    },
    {
      name: "Munch Club Burger",
      image: "/food/food (34).jpeg",
      icon: "🍔",
      desc: "Always 'Munch-ing' on memories with you",
      color: "from-yellow-200 to-orange-400",
    },
    {
      name: "Waffle Wonderland",
      image: "/food/food (20).jpeg",
      icon: "🧇",
      desc: "Waffle-y Amazing Love",
      color: "from-yellow-50 to-orange-100",
    },
    {
      name: "Acaii Matcha Dream",
      image: "/food/food (27).jpeg",
      icon: "🍦",
      desc: "Cool, Sweet, and Perfect",
      color: "from-green-50 to-teal-100",
    },
    {
      name: "Martabak Manis",
      image: "/food/food (28).jpeg",
      icon: "🥞",
      desc: "Sweeter than Any Dessert",
      color: "from-amber-100 to-orange-200",
    },
    {
      name: "ChaTraMue Thai Tea",
      image: "/food/food (36).jpeg",
      icon: "🧋",
      desc: "My Brew-tiful Valentine",
      color: "from-orange-200 to-amber-300",
    },
  ];

  return (
    <div className="relative py-16 px-6 bg-white/20 backdrop-blur-2xl rounded-[3rem] border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] mx-auto max-w-7xl mt-10 overflow-hidden">
      {/* Animasi Floating Background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-400/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/10 blur-[120px] -z-10" />

      {/* Header - Memory Gallery Version */}
      <div className="text-center mb-16 relative z-30">
        {/* Judul Utama dengan Shadow lebih dalam agar Pop-out */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-4 tracking-tight">
          Our Delicious <span className="text-pink-400">Memory Lane</span>
        </h2>

        {/* Kapsul Sub-header: Background dibuat lebih pekat (bg-black/20) agar teks putih tidak tenggelam */}
        <div className="inline-block px-8 py-2.5 bg-black/25 backdrop-blur-md rounded-full border border-white/30 shadow-xl">
          <p className="text-white font-black tracking-wide text-xs md:text-sm uppercase">
            "Every bite is a sweet memory of us. ✨"
          </p>
        </div>
      </div>

      {/* Grid Menu - 4 Kolom di layar besar agar tidak terlalu panjang */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {menuPicks.map((food, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group relative rounded-[2.5rem] transition-all duration-500 cursor-pointer overflow-hidden border border-white/50
              ${hoveredIndex === index ? "scale-105 -translate-y-2 shadow-2xl" : "scale-100 shadow-lg"}
            `}
            style={{
              background:
                hoveredIndex === index
                  ? "rgba(255, 255, 255, 0.6)"
                  : "rgba(255, 255, 255, 0.35)",
            }}
          >
            {/* Overlay Gradasi */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${food.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
            />

            {/* Container Gambar - Aspek rasio 4:3 agar seragam */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
              />
              {/* Badge Icon Pop-up */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md w-10 h-10 flex items-center justify-center rounded-2xl text-2xl shadow-lg transform group-hover:rotate-12 transition-transform">
                {food.icon}
              </div>
            </div>

            {/* Info Makanan */}
            <div className="relative z-10 p-5 flex flex-col items-center text-center">
              <h3 className="text-lg font-black text-gray-800 mb-1 group-hover:text-pink-600 transition-colors">
                {food.name}
              </h3>
              <p className="text-gray-600 font-bold italic text-xs leading-relaxed px-2">
                "{food.desc}"
              </p>

              {/* Dekorasi Garis Bawah */}
              <div
                className={`h-1.5 bg-pink-500 mt-4 rounded-full transition-all duration-700 ${hoveredIndex === index ? "w-20" : "w-4 opacity-20"}`}
              />
            </div>

            {/* Floating Hearts saat Hover */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 pointer-events-none">
                <span className="absolute top-1/4 left-4 animate-bounce text-pink-500">
                  ❤️
                </span>
                <span className="absolute bottom-1/4 right-4 animate-bounce delay-200 text-pink-400">
                  ✨
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
