"use client";
import { useState } from "react";
import Image from "next/image";

const timelineData = [
  {
    year: '2022',
    text: 'Gerbang SMK terbuka lebar, langkah pertama di kelas 10 penuh semangat dan rasa ingin tahu.',
    images: {
      rpl1: '/assets/pplg1/2.jpg',
      rpl2: '/assets/pplg2/satu.jpg',
    },
  },
  {
    year: '2023',
    text: 'Menginjak kelas 11, seragam kebanggaan semakin terasa sebagai identitas. Petualangan di dunia RPL pun dimulai, dengan baris kode pertama yang penuh makna.',
    images: {
      rpl1: '/assets/pplg1/9.jpg',
      rpl2: '/assets/pplg2/dua.jpg',
    },
  },
  {
    year: '2024',
    text: 'Tahun terakhir di bangku SMK, kelas 12 menjadi puncak pembelajaran. Pengalaman magang membuka wawasan tentang dunia kerja yang sesungguhnya di bidang RPL.',
    images: {
      rpl1: '/assets/rpl1.jpg',
      rpl2: '/assets/kelas_empat.jpg',
    },
  },
  {
    year: '2025',
    text: 'Momen kelulusan tiba, babak baru kehidupan menanti setelah menimba ilmu dan pengalaman berharga di SMK.',
    images: {
      rpl1: '/assets/rplsatu.jpg',
      rpl2: '/assets/rpl2satu.jpg',
    },
  },
];

const Timeline = () => {
  const [selectedClasses, setSelectedClasses] = useState<('rpl1' | 'rpl2')[]>(timelineData.map(() => 'rpl1'));
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState<string | null>(null);

  const handleClassChange = (index: number, kelas: 'rpl1' | 'rpl2') => {
    const newSelections = [...selectedClasses];
    newSelections[index] = kelas;
    setSelectedClasses(newSelections);
  };

  const openPopup = (src: string) => {
    setPopupImageSrc(src);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setPopupImageSrc(null);
    setIsPopupOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="relative text-white py-20 px-4 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 drop-shadow-md">Jejak Langkah Kita</h2>

      <div className="space-y-20">
        {timelineData.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${
              idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center gap-6 md:gap-12`}
          >
            {/* Konten */}
            <div
              className={`w-full md:w-1/2 p-6 rounded-lg shadow-lg backdrop-blur-md border border-white/10 ${
                idx % 2 === 0 ? 'bg-blue-900/70 text-left' : 'bg-green-900/70 text-right'
              }`}
            >
              <p className="text-xl font-bold mb-2">{item.year}</p>
              <p className="opacity-80">{item.text}</p>
            </div>

            {/* Gambar */}
            <div
              onClick={() => openPopup(item.images[selectedClasses[idx]])}
              className="relative w-full max-w-[400px] aspect-video rounded-md overflow-hidden border-2 border-white shadow-md cursor-pointer"
            >
              <Image
                src={item.images[selectedClasses[idx]]}
                alt={`Timeline ${item.year}`}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 hover:opacity-90"
              />
            </div>

            {/* Tombol Pilihan */}
            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                onClick={() => handleClassChange(idx, 'rpl1')}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                  selectedClasses[idx] === 'rpl1'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                RPL 1
              </button>
              <button
                onClick={() => handleClassChange(idx, 'rpl2')}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                  selectedClasses[idx] === 'rpl2'
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                RPL 2
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Gambar */}
      {isPopupOpen && popupImageSrc && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/80 z-50 flex items-center justify-center"
          onClick={closePopup}
        >
          <Image
            src={popupImageSrc}
            alt="Popup"
            className="object-contain"
            width={1000}
            height={600}
          />
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold opacity-70 hover:opacity-100"
          >
            X
          </button>
        </div>
      )}
    </section>
  );
};

export default Timeline;
