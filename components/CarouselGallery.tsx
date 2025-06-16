'use client';

import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const images = [
  {
    src: '/gallery/image1.jpg',
    alt: 'Gallery Image 1',
  },
  {
    src: '/gallery/image2.jpg',
    alt: 'Gallery Image 2',
  },
  {
    src: '/gallery/image3.jpg',
    alt: 'Gallery Image 3',
  },
  {
    src: '/gallery/image4.jpg',
    alt: 'Gallery Image 4',
  },
];

const AUTOPLAY_INTERVAL = 3000; // 3 seconds

export default function CarouselGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="w-full py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-10 text-[#0E7EA0]">Our Gallery</h2>
        <div className="relative max-w-[90rem] mx-auto">
          <div className="overflow-hidden rounded-3xl shadow-2xl" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3"
                >
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden m-3">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cove border-1 border-black transition-all duration-500 hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 text-white">
                        <p className="text-lg font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="lg:w-8 lg:h-8 w-3 h-3 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="lg:w-8 lg:h-8 w-3 h-3 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 