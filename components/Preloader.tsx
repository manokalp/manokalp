'use client';

import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to handle when the page is fully loaded
        const handlePageLoad = () => {
            // Keep the preloader visible for 1 second after page load
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };

        // Check if document is already loaded
        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            // Add event listener for when the page loads
            window.addEventListener('load', handlePageLoad);
        }

        // Cleanup function
        return () => {
            window.removeEventListener('load', handlePageLoad);
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