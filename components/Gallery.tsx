import React from 'react';
import Image from 'next/image';

interface GalleryItem {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="flex flex-col items-center py-5 ">
      <h2 className="text-3xl text-white font-bold text-center mb-8 ">Galeri</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-4/5 max-w-6xl">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-md shadow-md">
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={400} // Sesuaikan lebar awal
              height={300} // Sesuaikan tinggi awal
              objectFit="cover"
              className="rounded-md"
            />
            {/* Jika ada label teks di bawah gambar */}
            {/* <p className="text-sm text-gray-600 mt-2 text-center">{image.alt}</p> */}
          </div>
        ))}
      </div>
      <p className="italic  mt-6 text-3xl text-white font-bold text-center mb-8">for remembrance of our school days</p>
    </div>
  );
};

export default Gallery;