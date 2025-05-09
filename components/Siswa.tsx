// components/SiswaSection.tsx
'use client';

import Image from 'next/image';

interface Siswa {
  name: string;
  desc: string;
  image: string;
}

interface SiswaSectionProps {
  title: string;
  data: Siswa[];
}

const Siswa: React.FC<SiswaSectionProps> = ({ title, data }) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl text-white font-bold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-0">
        {data.map((siswa, idx) => (
          <div
            key={idx}
            className="bg-white/5 rounded-lg shadow-md overflow-hidden backdrop-filter backdrop-blur-sm border border-white/10 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-48 md:h-56">
              <Image
                src={siswa.image}
                alt={siswa.name}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 hover:opacity-90"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-white font-semibold text-lg mb-2 drop-shadow-md">{siswa.name}</h3>
              <p className="text-white text-sm opacity-80 drop-shadow-md">{siswa.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Siswa;