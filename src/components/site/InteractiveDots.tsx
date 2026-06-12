import { useEffect, useRef } from "react";

export function InteractiveDots({
  className = "",
  src = "/jinada-mark.png",
  size = 480,
  step = 9,
  threshold = 80,
}: {
  className?: string;
  src?: string;
  /** Rendered logo size in CSS px */
  size?: number;
  /** Sample every N pixels of the source image — smaller = denser */
  step?: number;
  /** Alpha cutoff (0-255) for which pixels become dots */
  threshold?: number;
}) {
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
    const radius = 90;
    const force = 26;

    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      repositionDots();
    };

    const repositionDots = () => {
      if (!dots.length) return;
      // Re-center the rest-positions around the current canvas
      // (dots are built once from image; we shift their origin to center)
      const cx = width / 2;
      const cy = height / 2;
      const off = (canvas as any)._centerOffset as { x: number; y: number } | undefined;
      if (!off) return;
      const dx = cx - off.x;
      const dy = cy - off.y;
      for (const d of dots) {
        d.ox += dx;
        d.oy += dy;
        d.x += dx;
        d.y += dy;
      }
      (canvas as any)._centerOffset = { x: cx, y: cy };
    };

    const buildDotsFromImage = (img: HTMLImageElement) => {
      // Draw image at `size` into an offscreen canvas, then sample alpha
      const off = document.createElement("canvas");
      const scale = size / Math.max(img.width, img.height);
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      off.width = w;
      off.height = h;
      const octx = off.getContext("2d")!;
      octx.drawImage(img, 0, 0, w, h);
      const data = octx.getImageData(0, 0, w, h).data;

      const cx = width / 2 - w / 2;
      const cy = height / 2 - h / 2;
      const built: Dot[] = [];
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const a = data[(y * w + x) * 4 + 3];
          if (a > threshold) {
            // tiny jitter so it feels like dust, not a grid
            const jx = (Math.random() - 0.5) * step * 0.6;
            const jy = (Math.random() - 0.5) * step * 0.6;
            const px = cx + x + jx;
            const py = cy + y + jy;
            built.push({ x: px, y: py, ox: px, oy: py, vx: 0, vy: 0 });
          }
        }
      }
      dots = built;
      (canvas as any)._centerOffset = { x: width / 2, y: height / 2 };
    };

    resize();

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => buildDotsFromImage(img);
    img.src = src;

    const ro = new ResizeObserver(resize);
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
    let visible = true;
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;

      ctx.clearRect(0, 0, width, height);

      // Batch all "far" dots into a single path for one fill call
      ctx.fillStyle = "rgba(91, 155, 255, 0.55)";
      ctx.beginPath();
      const nearDots: { d: Dot; t: number }[] = [];

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        let near = false;
        let t = 0;
        if (mouse.active) {
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < radius * radius) {
            const dist = Math.sqrt(distSq) || 0.0001;
            t = 1 - dist / radius;
            const f = t * force * 0.08;
            const inv = 1 / dist;
            d.vx += dx * inv * f;
            d.vy += dy * inv * f;
            near = true;
          }
        }
        d.vx += (d.ox - d.x) * 0.06;
        d.vy += (d.oy - d.y) * 0.06;
        d.vx *= 0.82;
        d.vy *= 0.82;
        d.x += d.vx;
        d.y += d.vy;

        if (near) {
          nearDots.push({ d, t });
        } else {
          ctx.moveTo(d.x + 0.95, d.y);
          ctx.arc(d.x, d.y, 0.95, 0, Math.PI * 2);
        }
      }
      ctx.fill();

      for (const { d, t } of nearDots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 200, 255, ${0.65 + t * 0.35})`;
        ctx.fill();
      }
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [src, size, step, threshold]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
