"use client"
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';


export default function Loading() {
    const containerRef = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../public/Animation.json'),
        });

        return () => {
            anim.destroy(); // Cleanup animation when component unmounts
        };
    }, []);


    return <div className="h-screen bg-white">
        <div className="flex justify-center items-center h-full">
            <div ref={containerRef}></div>
        </div>
    </div>

}