"use client";

import { useState } from "react";

export type ImageWithFallbackProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  alt: string;
  fallbackSrc?: string;
  src: string;
};

/* eslint-disable @next/next/no-img-element */
export function ImageWithFallback({ alt, fallbackSrc = "/logo.svg", src, ...rest }: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      {...rest}
      alt={alt}
      src={currentSrc}
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
