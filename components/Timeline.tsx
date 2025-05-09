"use client";
import { useState } from "react";
import Image from "next/image";

const timelineData = [
  {
    year: '2022',
    date: 'June 15',
    text: 'Awal langkah di SMK, gerbang pengetahuan baru terbuka lebar.',
    images: {
      rpl1: '/assets/pplg1/2.jpg',
      rpl2: '/assets/pplg2/satu.jpg',
    },
  },
  {
    date: 'August 30',
    text: 'Seragam kebanggaan dikenakan, identitas sebagai siswa SMK semakin terasa.',
    images: {
      rpl1: '/assets/timeline/seragam_rpl1.jpg',
      rpl2: '/assets/timeline/seragam_rpl2.jpg',
    },
  },
  {
    date: 'September 12',
    text: 'Mulai menyelami dunia RPL, baris kode pertama terukir dalam memori.',
    images: {
      rpl1: '/assets/timeline/belajar_rpl1.jpg',
      rpl2: '/assets/timeline/belajar_rpl2.jpg',
    },
  },
  {
    year: '2023',
    date: 'Januari 20',
    text: 'Semangat kompetisi membara, tim ML kelas meraih kemenangan gemilang.',
    images: {
      rpl1: '/assets/timeline/juara_ml_rpl1.jpg',
      rpl2: '/assets/timeline/juara_ml_rpl2.jpg',
    },
  },
];

const Timeline = () => {
  const [selectedClasses, setSelectedClasses] = useState<('rpl1' | 'rpl2')[]>(
    timelineData.map(() => 'rpl1')
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState<string | null>(null);

  const handleClassChange = (index: number, kelas: 'rpl1' | 'rpl2') => {
    const newSelections = [...selectedClasses];
    newSelections[index] = kelas;
    setSelectedClasses(newSelections);
  };

  const openPopup = (imageSrc: string) => {
    setPopupImageSrc(imageSrc);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden'; // Mencegah scroll di background saat popup terbuka
  };

  const closePopup = () => {
    setPopupImageSrc(null);
    setIsPopupOpen(false);
    document.body.style.overflow = 'auto'; // Mengembalikan scroll di background
  };

  return (
    <section className="relative text-white py-20 px-6 md:px-20">
      <h2 className="text-5xl font-bold text-center mb-20 drop-shadow-md">Jejak Langkah Kita</h2>

      <div className="relative">
        {timelineData.map((item, idx) => (
          <div
            key={idx}
            className={`relative mb-16 md:mb-24 flex items-center ${
              idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}
          >
            {/* Garis penghubung */}
            {idx < timelineData.length - 1 && (
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-white/20 z-0 ${
                  idx % 2 === 0 ? 'left-24 md:left-48' : 'right-24 md:right-48'
                }`}
              />
            )}

            {/* Konten */}
            <div
              className={`relative z-10 w-full md:w-1/2 p-6 rounded-lg shadow-lg ${
                idx % 2 === 0 ? 'bg-blue-900/70 text-left md:mr-8' : 'bg-green-900/70 text-right md:ml-8'
              } backdrop-filter backdrop-blur-md border border-white/10`}
            >
              {item.year && <p className="text-xl font-bold mb-2 drop-shadow-md">{item.year}</p>}
              <p className="text-lg font-semibold mb-1 drop-shadow-md">{item.date}</p>
              <p className="opacity-80 drop-shadow-md">{item.text}</p>
            </div>

            {/* Gambar dan Tombol */}
            <div
              className={`relative z-10 w-48 h-32 md:w-64 md:h-40 rounded-md overflow-hidden border-2 border-white shadow-md flex-shrink-0 cursor-pointer ${
                idx % 2 === 0 ? 'ml-4 md:ml-8' : 'mr-4 md:mr-8'
              }`}
              onClick={() => openPopup(item.images[selectedClasses[idx]])}
            >
              <Image
                src={item.images[selectedClasses[idx]]}
                alt={`Timeline ${item.date}`}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 hover:opacity-90"
              />
            </div>

            {/* Tombol Pilihan */}
            <div
              className={`absolute bottom-[-40px] ${
                idx % 2 === 0 ? 'left-24 md:left-48' : 'right-24 md:right-48'
              } flex gap-2`}
            >
              <button
                onClick={() => handleClassChange(idx, 'rpl1')}
                className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold transition ${
                  selectedClasses[idx] === 'rpl1'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                RPL 1
              </button>
              <button
                onClick={() => handleClassChange(idx, 'rpl2')}
                className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold transition ${
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
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 z-50 flex items-center justify-center cursor-pointer" onClick={closePopup}>
          <Image
            src={popupImageSrc}
            alt="Gambar Popup"
            className="max-w-full max-h-full object-contain"
            style={{ maxHeight: '90vh', maxWidth: '90vw' }}
            width={1920} // Atur ukuran sesuai kebutuhan, atau biarkan otomatis
            height={1080}
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