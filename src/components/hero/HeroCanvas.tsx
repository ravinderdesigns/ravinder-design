"use client";

import { useEffect, useRef, useState } from "react";

interface HeroCanvasProps {
  scrollProgress: number;
}

export default function HeroCanvas({ scrollProgress }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [framesLoaded, setFramesLoaded] = useState(false);

  // Preload frame images for canvas scrubbing fallback
  useEffect(() => {
    let loadedCount = 0;
    const totalFrames = 243;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i += 2) { // Step by 2 for fast initial load
      const img = new Image();
      img.src = `/assets/frame-${i}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= Math.floor(totalFrames / 4)) {
          setFramesLoaded(true);
        }
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  // Draw canvas frame if video isn't active or on scroll scrub
  useEffect(() => {
    if (!canvasRef.current || videoLoaded || imagesRef.current.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameIdx = Math.min(
      Math.floor(scrollProgress * (imagesRef.current.length - 1)),
      imagesRef.current.length - 1
    );

    const img = imagesRef.current[frameIdx];
    if (img && img.complete) {
      // Cover fit calculation
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  }, [scrollProgress, videoLoaded, framesLoaded]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {/* HTML5 Video Layer */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/hero_poster.jpg"
        onCanPlay={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 scale-105 ${
          videoLoaded ? "opacity-75" : "opacity-0"
        }`}
        style={{
          transform: `scale(${1 + scrollProgress * 0.1})`,
        }}
      >
        <source src="/assets/hero_portrait.mp4" type="video/mp4" />
      </video>

      {/* Canvas Frame Fallback / Scroll Sync */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none ${
          !videoLoaded && framesLoaded ? "opacity-75" : "opacity-0"
        }`}
      />

      {/* Cinematic Dark Overlay Vignette & Crimson Atmospheric Smoke Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90 z-10" />
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-60 mix-blend-screen transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 60% 40%, rgba(230, 0, 92, ${0.15 + scrollProgress * 0.25}) 0%, rgba(31, 5, 13, 0.4) 45%, transparent 80%)`,
        }}
      />
    </div>
  );
}
