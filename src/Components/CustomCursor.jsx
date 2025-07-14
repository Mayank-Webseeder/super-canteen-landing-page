'use client';
import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    let animationFrame;
    const followMouse = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mousePosition.x - 16}px, ${mousePosition.y - 16}px, 0)`;
      }
      animationFrame = requestAnimationFrame(followMouse);
    };
    followMouse();

    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 w-4 h-4 rounded-full bg-orange-500 opacity-30 mix-blend-difference z-[9999]"
      style={{
        transition: 'transform 0.5s ease-out',
      }}
    />
  );
}
