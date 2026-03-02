import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  color: string;
}

export const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const lastMouse = useRef({ x: 0, y: 0 });
  const hue = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.offsetWidth * dpr;
        canvas.height = parent.offsetHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${parent.offsetWidth}px`;
        canvas.style.height = `${parent.offsetHeight}px`;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;

      // Calculate velocity
      const dx = mouse.current.x - lastMouse.current.x;
      const dy = mouse.current.y - lastMouse.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 1) {
        for (let i = 0; i < 5; i++) {
          points.current.push({
            x: mouse.current.x,
            y: mouse.current.y,
            vx: dx * 0.1 + (Math.random() - 0.5) * 2,
            vy: dy * 0.1 + (Math.random() - 0.5) * 2,
            age: 0,
            color: `hsla(${hue.current}, 85%, 60%, `,
          });
        }
        hue.current = (hue.current + 2) % 360;
      }

      lastMouse.current.x = mouse.current.x;
      lastMouse.current.y = mouse.current.y;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
    }

    const animate = () => {
      // Create the trailing effect by not fully clearing
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw points
      for (let i = 0; i < points.current.length; i++) {
        const p = points.current[i];
        
        // Add some fluid-like movement
        p.vx += (Math.random() - 0.5) * 0.2;
        p.vy += (Math.random() - 0.5) * 0.2;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;
        p.age += 0.008;

        if (p.age >= 1) {
          points.current.splice(i, 1);
          i--;
          continue;
        }

        const size = (1 - p.age) * 45;
        const opacity = (1 - p.age) * 0.4;

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
        gradient.addColorStop(0, `${p.color}${opacity})`);
        gradient.addColorStop(1, `${p.color}0)`);
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};
