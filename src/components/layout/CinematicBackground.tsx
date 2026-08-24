"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [framesLoaded, setFramesLoaded] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);

  const { scrollYProgress } = useScroll();

  // Scale and opacity transforms based on site-wide scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setScrollRatio(v));
    return () => unsub();
  }, [scrollYProgress]);

  // Preload frame images for canvas scrubbing fallback
  useEffect(() => {
    let loadedCount = 0;
    const totalFrames = 243;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i += 2) {
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

  // Draw canvas frame if video isn't active
  useEffect(() => {
    if (!canvasRef.current || videoLoaded || imagesRef.current.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameIdx = Math.min(
      Math.floor(scrollRatio * (imagesRef.current.length - 1)),
      imagesRef.current.length - 1
    );

    const img = imagesRef.current[frameIdx];
    if (img && img.complete) {
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
  }, [scrollRatio, videoLoaded, framesLoaded]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#0e0a14]">
      {/* HTML5 Video Layer */}
      <motion.video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/hero_poster.jpg"
        onCanPlay={() => setVideoLoaded(true)}
        style={{ scale }}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-85" : "opacity-0"
        }`}
      >
        <source src="/assets/hero_portrait.mp4" type="video/mp4" />
      </motion.video>

      {/* Canvas Fallback Layer */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          !videoLoaded && framesLoaded ? "opacity-85" : "opacity-0"
        }`}
      />

      {/* Soft Brightening Ambient Lighting Overlays (No pitch-black darkening) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#120c18]/20 to-[#120c18]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#120c18]/40 via-transparent to-[#120c18]/40 pointer-events-none" />

      {/* Dynamic Crimson & Amber Warm Radiant Glow */}
      <div
        className="absolute inset-0 transition-all duration-700 mix-blend-screen opacity-80 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + Math.sin(scrollRatio * 6) * 15}% ${
            40 + Math.cos(scrollRatio * 4) * 20
          }%, rgba(255, 60, 110, ${0.25 + Math.min(scrollRatio * 0.2, 0.35)}) 0%, rgba(255, 110, 40, 0.2) 35%, rgba(45, 8, 28, 0.2) 70%, transparent 90%)`,
        }}
      />

      {/* Top Ambient Glow Flare */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#ff3366]/20 via-[#ff7700]/15 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
    </div>
  );
}
