"use client"
import { useState } from "react";
import Image from "next/image";

// Setiap entri punya 2 gambar: untuk RPL 1 dan RPL 2
const timelineData = [
  {
    year: '2022',
    date: 'June 15',
    text: 'Masuk Sekolah lorem ipsum dolor sit amet',
    images: {
      rpl1: '/img1_rpl1.png',
      rpl2: '/img1_rpl2.png',
    },
  },
  {
    date: 'August 30',
    text: 'Akhirnya dapat baju, sekarang resmi jadi murid SMK!',
    images: {
      rpl1: '/img2_rpl1.png',
      rpl2: '/img2_rpl2.png',
    },
  },
  {
    date: 'September 12',
    text: 'Lorem ipsum dolor sit amet...',
    images: {
      rpl1: '/img3_rpl1.png',
      rpl2: '/img3_rpl2.png',
    },
  },
  {
    year: '2023',
    date: 'Januari 20',
    text: 'Hilal dan tim juara Mobile Legend...',
    images: {
      rpl1: '/img4_rpl1.png',
      rpl2: '/img4_rpl2.png',
    },
  },
];

const Timeline = () => {
  const [selectedClasses, setSelectedClasses] = useState<('rpl1' | 'rpl2')[]>(
    timelineData.map(() => 'rpl1') // default semua RPL 1
  );

  const handleClassChange = (index: number, kelas: 'rpl1' | 'rpl2') => {
    const newSelections = [...selectedClasses];
    newSelections[index] = kelas;
    setSelectedClasses(newSelections);
  };

  return (
    <section className="relative text-white py-20 px-6 md:px-20">
      <h2 className="text-5xl font-bold text-center mb-20">Linimasa</h2>

      <div className="relative border-l-2 border-dashed border-white ml-4 md:ml-1">
        {timelineData.map((item, idx) => (
          <div
            key={idx}
            className={`mb-20 flex flex-col md:flex-row items-center md:items-start ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Titik di garis timeline */}
            <div className="w-6 h-6 bg-white rounded-full absolute left-[-12px] md:left-1 top-2" />

            {/* Konten */}
            <div className="md:w-1/2 px-6">
              {item.year && <p className="text-2xl font-bold mb-2">{item.year}</p>}
              <p className="text-lg font-semibold">{item.date}</p>
              <p className="mt-1">{item.text}</p>
            </div>

            {/* Gambar dan tombol */}
            <div className="flex flex-col items-center gap-2 mt-4 md:mt-0 md:w-64">
              <div className="w-64 h-36 bg-white/30 rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={item.images[selectedClasses[idx]]}
                  alt={`Timeline ${item.date}`}
                  className="object-cover w-full h-full"
                  width={450}
                  height={450}
                />
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleClassChange(idx, 'rpl1')}
                  className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
                    selectedClasses[idx] === 'rpl1'
                      ? 'bg-white text-black'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                >
                  RPL 1
                </button>
                <button
                  onClick={() => handleClassChange(idx, 'rpl2')}
                  className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
                    selectedClasses[idx] === 'rpl2'
                      ? 'bg-white text-black'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                >
                  RPL 2
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
