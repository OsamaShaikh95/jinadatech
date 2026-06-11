import { useEffect, useRef } from "react";

export function InteractiveDots({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const parent = canvas.parentElement!;
    let width = 0;
    let height = 0;

    type Dot = { x: number; y: number; ox: number; oy: number; vx: number; vy: number };
    let dots: Dot[] = [];
    const spacing = 26;
    const radius = 130;
    const force = 38;

    const mouse = { x: -9999, y: -9999, active: false };

    const build = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.scale(dpr, dpr);

      dots = [];
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);
      const offX = (width - (cols - 1) * spacing) / 2;
      const offY = (height - (rows - 1) * spacing) / 2;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offX + i * spacing;
          const y = offY + j * spacing;
          dots.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
        }
      }
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(parent);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (mouse.active && dist < radius) {
          const f = (1 - dist / radius) * force;
          const ang = Math.atan2(dy, dx);
          d.vx += Math.cos(ang) * f * 0.08;
          d.vy += Math.sin(ang) * f * 0.08;
        }
        // spring back
        d.vx += (d.ox - d.x) * 0.06;
        d.vy += (d.oy - d.y) * 0.06;
        d.vx *= 0.82;
        d.vy *= 0.82;
        d.x += d.vx;
        d.y += d.vy;

        const near = mouse.active && dist < radius;
        ctx.beginPath();
        ctx.arc(d.x, d.y, near ? 1.8 : 1.2, 0, Math.PI * 2);
        ctx.fillStyle = near
          ? `rgba(91, 155, 255, ${0.55 + (1 - dist / radius) * 0.45})`
          : "rgba(140, 170, 230, 0.28)";
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
