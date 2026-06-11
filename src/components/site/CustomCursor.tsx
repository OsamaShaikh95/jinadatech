import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ring = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("cursor-none-root");

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      setVisible(true);

      const el = e.target as HTMLElement | null;
      setHovering(!!el?.closest("a, button, [role='button'], input, textarea, select, label"));
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    let raf = 0;
    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      document.documentElement.classList.remove("cursor-none-root");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border transition-[width,height,border-color,opacity] duration-200 ease-out mix-blend-screen"
        style={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          borderColor: "rgba(91, 155, 255, 0.9)",
          boxShadow: "0 0 18px rgba(30, 111, 255, 0.55)",
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full mix-blend-screen"
        style={{
          width: 8,
          height: 8,
          background: "#1e6fff",
          boxShadow: "0 0 14px rgba(30, 111, 255, 0.95), 0 0 28px rgba(91, 155, 255, 0.6)",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
