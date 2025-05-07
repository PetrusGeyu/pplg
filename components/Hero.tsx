"use client";
import React, { useState, useRef, useEffect } from "react";
import GambarKustom from "@/components/GambarKustom";
import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  weight: "700", // Pilih weight yang Anda inginkan (bisa berupa array untuk beberapa weight)
  subsets: ["latin"], // Tentukan subset karakter yang dibutuhkan (latin biasanya cukup)
});



const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/Laskar Pelangi - Nidji (Lirik).mp3"); // Pastikan file lagu ada di public/assets
    audioRef.current.loop = true;
  }, []);

  const handlePlayButtonClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        setTimeout(() => {
          audioRef.current?.play().catch((error) => {
            console.error("Gagal memutar audio setelah penundaan:", error);
            alert(
              "Gagal memutar audio. Pastikan browser Anda mengizinkan pemutaran."
            );
          });
        }, 100); // Penundaan 100 milidetik
      }
      setIsPlaying(!isPlaying);
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative overflow-hidden w-full h-screen flex flex-col justify-center items-center text-center">
      <div className="z-10 flex flex-col items-center justify-center">
        <h1
          className={`text-center text-6xl md:text-7xl font-serif text-white tracking-widest
                    backdrop-filter backdrop-blur-md bg-white/5 rounded-xl py-4 px-6
                    border border-white/10 shadow-lg transition-all duration-303
                    hover:bg-white/10 hover:backdrop-blur-lg  ${merriweather.className}`}
          style={{
            textShadow: `-1px -1px 0 #000, 1px -1px 0 #000,
                         -1px 1px 0 #000, 1px 1px 0 #000`,
          }}
        >
          RPL 48 ARChIVE
        </h1>

        <p className="relative text-center text-white text-sm mt-6 px-8 max-w-xl rounded-lg py-3 shadow-md">
          <span className="absolute inset-0 bg-black/20 rounded-lg backdrop-filter backdrop-blur-sm z-[-1]"></span>
          hello, world. this is not an ordinary web – this is a memory dump of
          stories, events, tugas koding, magang dan begadang ngerjain tugas.
          Click the button below to relive the moments with a soundtrack.
        </p>

        <button
          className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
          onClick={handlePlayButtonClick}
        >
          {isPlaying ? "Pause Nostalgia" : "Play Nostalgia"}
        </button>

        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center animate-fade-in">
            <div className="relative bg-white/80 backdrop-filter backdrop-blur-md rounded-lg shadow-xl p-8 text-center border border-white/20 animate-slide-in">
              <h2 className="text-xl font-bold mb-6 text-blue-600">
                Kenangan Bersama RPL 48
              </h2>
              {/* Tambahkan ikon di sini jika mau */}
              {/* <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg> */}
              <p className="text-gray-700 mb-8">
                Terima kasih telah menjadi bagian dari perjalanan tak terlupakan
                ini.
                <br />
                Setiap tawa, setiap kode, setiap begadang adalah kenangan yang
                akan
                <br />
                selalu kita bawa. Sampai jumpa di lain waktu!
              </p>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 hover:scale-105"
                onClick={handleClosePopup}
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-10 w-full overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-4 w-max">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-4">
              <GambarKustom
                src="/assets/kelasdelapan.jpg"
                alt="Foto Kelas 1"
                width={350}
                height={440}
              />
              <GambarKustom
                src="/assets/kelasdelapan.jpg"
                alt="Foto Kelas 2"
                width={350}
                height={440}
              />
              <GambarKustom
                src="/assets/kelasdelapan.jpg"
                alt="Foto Kelas 3"
                width={350}
                height={440}
              />
              <GambarKustom
                src="/assets/kelasdelapan.jpg"
                alt="Foto Kelas 4"
                width={350}
                height={440}
              />
            </div>
          ))}
        </div>

        <div
          className="flex animate-marquee gap-4 w-max pt-8"
          style={{ animationDirection: "reverse" }}
        >
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-4">
              <GambarKustom
                src="/assets/kelasdelapan.jpg"
                alt="Foto Kelas 1"
                width={350}
                height={440}
              />
              <GambarKustom
                src="/assets/kelasdelapan.jpg"
                alt="Foto Kelas 2"
                width={350}
                height={440}
              />
              <GambarKustom
                src="/assets/kelasdelapan.jpg"
                alt="Foto Kelas 3"
                width={350}
                height={440}
              />
              <GambarKustom
                src="/assets/kelasdelapan.jpg"
                alt="Foto Kelas 4"
                width={350}
                height={440}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
