"use client";

import React, { useRef, useEffect } from "react";

interface InteractiveParticleTextProps {
  text?: string;
  textColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  particleSize?: number;
  cursorRadius?: number;
  shatterForce?: number;
  springTension?: number;
  friction?: number;
  resolution?: number; // 1 (sparse) to 10 (dense)
}

interface Particle {
  originX: number;
  originY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export default function InteractiveParticleText({
  text = "RAVINDER SINGH",
  textColor = "#FFFFFF",
  secondaryColor = "#FF0055",
  accentColor = "#FF5500",
  particleSize = 1.8,
  cursorRadius = 130,
  shatterForce = 8,
  springTension = 0.06,
  friction = 0.85,
  resolution = 8,
}: InteractiveParticleTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    isActive: false,
    clickPulse: false,
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let resizeObserver: ResizeObserver | null = null;

    const initParticles = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      const width = container.offsetWidth;
      const height = container.offsetHeight;
      if (width === 0 || height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Calculate 15% larger responsive font size so "RAVINDER SINGH" is grand and bold
      // Across mobile (360px+) to desktop (1920px+)
      const targetFontSize = Math.min(Math.max(width / 7.8, 46), 200);

      // Note: Must use direct font names (no CSS var() which breaks Canvas 2D ctx.font)
      const fontFamily = "'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

      // Render text onto canvas to sample pixel coordinates
      ctx.fillStyle = textColor;
      ctx.font = `900 ${targetFontSize}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, width / 2, height / 2);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const newParticles: Particle[] = [];
      const step = Math.max(2, Math.floor(11 - resolution));

      for (let y = 0; y < canvas.height; y += step * dpr) {
        for (let x = 0; x < canvas.width; x += step * dpr) {
          const index = (y * canvas.width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 120) {
            const canvasX = x / dpr;
            const canvasY = y / dpr;

            // Pure clean white typography palette
            const rand = Math.random();
            const pColor = rand > 0.15 ? "#FFFFFF" : "#F4F4F5";

            const pSize = particleSize + (Math.random() * 0.6 - 0.3);

            newParticles.push({
              originX: canvasX,
              originY: canvasY,
              x: canvasX + (Math.random() - 0.5) * 4,
              y: canvasY + (Math.random() - 0.5) * 4,
              vx: (Math.random() - 0.5) * 1.5,
              vy: (Math.random() - 0.5) * 1.5,
              size: pSize,
              color: pColor,
            });
          }
        }
      }

      particlesRef.current = newParticles;

      const animate = () => {
        ctx.clearRect(0, 0, width, height);
        const mouse = mouseRef.current;
        const particles = particlesRef.current;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Mouse proximity repulsion
          if (mouse.isActive && distance < cursorRadius && distance > 0) {
            const force = (cursorRadius - distance) / cursorRadius;
            const dirX = dx / distance;
            const dirY = dy / distance;
            p.vx -= dirX * force * shatterForce;
            p.vy -= dirY * force * shatterForce;
          }

          // Click explosion burst
          if (mouse.clickPulse) {
            const clickRadius = cursorRadius * 2.8;
            if (distance < clickRadius && distance > 0) {
              const pulseForce = (clickRadius - distance) / clickRadius;
              p.vx -= (dx / distance) * pulseForce * shatterForce * 12;
              p.vy -= (dy / distance) * pulseForce * shatterForce * 12;
            }
          }

          // Spring tension return to origin
          p.vx += (p.originX - p.x) * springTension;
          p.vy += (p.originY - p.y) * springTension;

          // Physics damping friction
          p.vx *= friction;
          p.vy *= friction;

          p.x += p.vx;
          p.y += p.vy;

          // Draw particle
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        if (mouseRef.current.clickPulse) {
          mouseRef.current.clickPulse = false;
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    // Ensure fonts are ready before initial pixel scan
    document.fonts.ready.then(() => {
      initParticles();
    });

    initParticles();

    resizeObserver = new ResizeObserver(() => {
      initParticles();
    });
    resizeObserver.observe(container);

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [
    text,
    textColor,
    secondaryColor,
    accentColor,
    particleSize,
    cursorRadius,
    shatterForce,
    springTension,
    friction,
    resolution,
  ]);

  const updateMouse = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current.x = clientX - rect.left;
    mouseRef.current.y = clientY - rect.top;
    mouseRef.current.isActive = true;
  };

  return (
    <div className="w-full select-none pt-4 pb-1">
      {/* Top Meta Line with thin border lines */}
      <div className="w-full pt-3 pb-2.5 border-t border-b border-white/15 flex items-center justify-between text-[10px] sm:text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
        <div className="flex items-center gap-2">
          <span>© RAVINDER SINGH {new Date().getFullYear()}, ALL RIGHTS RESERVED</span>
        </div>
        <div className="flex items-center gap-2 text-zinc-300">
          <span className="hidden sm:inline text-zinc-400">SENIOR UI/UX & PRODUCT DESIGNER</span>
          <span className="text-white font-bold tracking-wider">RAVINDER SINGH</span>
        </div>
      </div>

      {/* Interactive Particle Canvas Container - 50% tighter vertical space, 15% larger name */}
      <div
        ref={containerRef}
        onMouseMove={(e) => updateMouse(e.clientX, e.clientY)}
        onMouseLeave={() => {
          mouseRef.current.isActive = false;
          mouseRef.current.x = -9999;
          mouseRef.current.y = -9999;
        }}
        onMouseDown={() => {
          mouseRef.current.clickPulse = true;
        }}
        onTouchMove={(e) => {
          if (e.touches.length > 0) {
            updateMouse(e.touches[0].clientX, e.touches[0].clientY);
          }
        }}
        onTouchEnd={() => {
          mouseRef.current.isActive = false;
        }}
        className="w-full h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center relative cursor-crosshair overflow-hidden rounded-2xl"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block pointer-events-none"
        />
      </div>
    </div>
  );
}
