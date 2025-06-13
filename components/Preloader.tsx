'use client';

import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Helper to finish loading
        const finishLoading = () => {
            if (!done) {
                done = true;
                setTimeout(() => setLoading(false), 500); // Small delay for smoothness
            }
        };

        let images: (HTMLImageElement | HTMLPictureElement)[] = [];
        let loadedCount = 0;
        let totalCount = 0;
        let done = false;
        let heroLoaded = false;
        let allImagesLoaded = false;

        const timeoutId = setTimeout(finishLoading, 10000);

        // Function to check all images
        const checkImages = () => {
            images = Array.from(document.querySelectorAll('img, picture'));
            totalCount = images.length;
            if (totalCount === 0) {
                allImagesLoaded = true;
                if (heroLoaded) finishLoading();
                return;
            }
            loadedCount = 0;
            images.forEach((img) => {
                // For <img>
                if (img instanceof HTMLImageElement) {
                    if (img.complete && img.naturalHeight !== 0) {
                        loadedCount++;
                    } else {
                        img.addEventListener('load', handleImgLoad, { once: true });
                        img.addEventListener('error', handleImgLoad, { once: true });
                    }
                } else {
                    // For <picture>, check all contained <img>
                    const innerImgs = img.querySelectorAll('img');
                    innerImgs.forEach((innerImg) => {
                        if (innerImg.complete && innerImg.naturalHeight !== 0) {
                            loadedCount++;
                        } else {
                            innerImg.addEventListener('load', handleImgLoad, { once: true });
                            innerImg.addEventListener('error', handleImgLoad, { once: true });
                        }
                    });
                }
            });
            if (loadedCount >= totalCount) {
                allImagesLoaded = true;
                if (heroLoaded) finishLoading();
            }
        };

        // Handler for image load/error
        const handleImgLoad = () => {
            loadedCount++;
            if (loadedCount >= totalCount) {
                allImagesLoaded = true;
                if (heroLoaded) finishLoading();
            }
        };

        // Handler for hero image loaded
        const handleHeroLoaded = () => {
            heroLoaded = true;
            if (allImagesLoaded) finishLoading();
        };

        // On window load, check images
        const handlePageLoad = () => {
            setTimeout(checkImages, 100); // Wait a bit for Next.js to render images
        };

        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        // Listen for hero image loaded event
        window.addEventListener('heroImageLoaded', handleHeroLoaded);

        // Cleanup
        return () => {
            window.removeEventListener('load', handlePageLoad);
            window.removeEventListener('heroImageLoaded', handleHeroLoaded);
            clearTimeout(timeoutId);
        };
    }, []);

    // If not loading, don't render the preloader
    if (!loading) return null;

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
            <div className="w-64 h-64">
                <DotLottieReact
                    src="https://lottie.host/fb51cae9-d99f-4002-b320-3dd636fc59aa/OmgvDtzJyQ.lottie"
                    loop
                    autoplay
                />
            </div>
            <Image src="/logo.webp" alt="Preloader" width={600} height={100} />
        </div>
    );
};

export default Preloader;