"use client";
import React, { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className="flex flex-col items-center py-5 w-full">
      <h2 className="text-3xl text-white font-bold text-center mb-8">Galeri</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-6xl px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 aspect-[4/3] relative"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill 
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      <p className="italic mt-6 text-3xl text-white font-bold text-center">
        for remembrance of our school days
      </p>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-2xl font-bold text-gray-700 hover:text-red-500"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-md"
            />
            <p className="text-center text-gray-700 mt-2">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
