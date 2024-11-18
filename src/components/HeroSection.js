"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import 'flowbite';

export default function HeroSection() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('flowbite').then((flowbite) => {
      });

      const navbar = document.querySelector('nav');
      if (navbar) {
        setNavbarHeight(navbar.clientHeight);
      }
    }
  }, []);

  return (
    <div
      id="indicators-carousel"
      className="relative w-full"
      data-carousel="static"
      style={{ paddingTop: navbarHeight }}
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {/* Item 1 */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out transform translate-x-0"
          data-carousel-item="active"
        >
          <Image
            src="/image/gedung_crop.png"
            alt="Deskripsi gambar"
            fill
            sizes="(min-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        {/* Item 2 */}
        <div
          className="absolute inset-0 hidden transition-transform duration-700 ease-in-out transform translate-x-full"
          data-carousel-item
        >
          <Image
            src="/image/hero2.jpg"
            alt="Deskripsi gambar"
            fill
            sizes="(min-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* Item 3 */}
        <div
          className="absolute inset-0 hidden transition-transform duration-700 ease-in-out transform -translate-x-full"
          data-carousel-item
        >
          <Image
            src="/image/hero1.jpg"
            alt="Deskripsi gambar"
            fill
            sizes="(min-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* Item 4 */}
        <div
          className="absolute inset-0 hidden transition-transform duration-700 ease-in-out transform translate-x-full"
          data-carousel-item
        >
          <Image
            src="/image/hero2.jpg"
            alt="Deskripsi gambar"
            fill
            sizes="(min-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      
      {/* Carousel indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full bg-white" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
      </div>
      
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
