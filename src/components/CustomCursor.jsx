import { useEffect, useRef, useState } from "react";

export default function CustomCursor({ enabled }) {
  const [visible, setVisible] = useState(false);
  const [isMobileOrTouch, setIsMobileOrTouch] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Target mouse coordinates
  const mouseCoords = useRef({ x: 0, y: 0 });
  // Interpolated ring coordinates
  const ringCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkTouchOrMobile = () => {
      const hasTouch = window.matchMedia("(pointer: coarse)").matches;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobileOrTouch(hasTouch || isSmallScreen);
    };

    checkTouchOrMobile();
    window.addEventListener("resize", checkTouchOrMobile);
    return () => window.removeEventListener("resize", checkTouchOrMobile);
  }, []);

  useEffect(() => {
    if (!enabled || isMobileOrTouch) {
      document.body.classList.remove("cursor-hover");
      return;
    }

    const onMouseMove = (e) => {
      mouseCoords.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      // Move the dot instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    // Track hovered interactive elements to scale up the cursor
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.pipeline-node') ||
        target.closest('.interactive-card') ||
        target.classList.contains('interactive');

      if (isInteractive) {
        document.body.classList.add("cursor-hover");
      } else {
        document.body.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    // Dynamic animation loop for the outer ring (elastic tracking)
    let animFrameId;
    const updateRing = () => {
      // Linear interpolation factor (speed of trailing: 0.15 is smooth and responsive)
      const lerpFactor = 0.15;
      
      ringCoords.current.x += (mouseCoords.current.x - ringCoords.current.x) * lerpFactor;
      ringCoords.current.y += (mouseCoords.current.y - ringCoords.current.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringCoords.current.x}px`;
        ringRef.current.style.top = `${ringCoords.current.y}px`;
      }

      animFrameId = requestAnimationFrame(updateRing);
    };

    updateRing();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animFrameId);
      document.body.classList.remove("cursor-hover");
    };
  }, [enabled, isMobileOrTouch]);

  if (!enabled || !visible || isMobileOrTouch) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className="custom-cursor-dot" 
        style={{ left: "-100px", top: "-100px" }}
      />
      <div 
        ref={ringRef} 
        className="custom-cursor-ring" 
        style={{ left: "-100px", top: "-100px" }}
      />
    </>
  );
}
