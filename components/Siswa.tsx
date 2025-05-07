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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {data.map((siswa, idx) => (
          <div key={idx} className="text-center">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 overflow-hidden rounded-lg border-2 border-white">
              <Image
                src={siswa.image}
                alt={siswa.name}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-white font-medium drop-shadow-md">{siswa.name}</p>
            <p className="text-white text-sm drop-shadow-md">{siswa.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Siswa;
