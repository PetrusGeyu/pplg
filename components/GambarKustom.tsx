"use client"
import React from 'react';
import NextImage, { ImageProps } from 'next/image';

interface Props extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  className?: string;
}

const GambarKustom: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  className,
  placeholder,
  ...rest
}) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      placeholder={placeholder}
      {...rest} // Meneruskan properti lain yang mungkin ada
    />
  );
};

export default GambarKustom;