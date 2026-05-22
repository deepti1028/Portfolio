import { useEffect, useRef, useState } from "react";

// Particle representation for high-performance canvas sparkles
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // Slight random initial velocity, leaning upwards and spreading laterally
    this.vx = (Math.random() - 0.5) * 1.8;
    this.vy = (Math.random() - 0.5) * 1.8 - 0.8;
    this.gravity = 0.04;
    
    // Increased particle size for a richer, more prominent sparkle trail
    this.startSize = 4 + Math.random() * 4; // 4px to 8px
    this.size = this.startSize;
    
    // Core portfolio neon theme colors
    const colors = [
      "#8b5cf6", // Primary (Violet)
      "#06b6d4", // Secondary (Cyan)
      "#10b981", // Success (Emerald Green)
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    
    this.alpha = 1.0;
    this.decay = 0.015 + Math.random() * 0.015; // decays in 35-65 frames
    
    this.angle = Math.random() * Math.PI * 2;
    this.spin = (Math.random() - 0.5) * 0.08;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    this.alpha -= this.decay;
    this.angle += this.spin;
    this.size = Math.max(0, this.startSize * this.alpha);
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    
    // Draw an elegant 4-pointed glowing sparkle star (using quadratic curve paths)
    ctx.beginPath();
    ctx.moveTo(0, -this.size);
    ctx.quadraticCurveTo(0, 0, this.size, 0);
    ctx.quadraticCurveTo(0, 0, 0, this.size);
    ctx.quadraticCurveTo(0, 0, -this.size, 0);
    ctx.quadraticCurveTo(0, 0, 0, -this.size);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

export default function CustomCursor({ enabled }) {
  const [visible, setVisible] = useState(false);
  const [isMobileOrTouch, setIsMobileOrTouch] = useState(false);
  const dotRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  // Target mouse coordinates
  const mouseCoords = useRef({ x: 0, y: 0 });

  // 1. Detect touch screens or small viewports to disable all cursor tracking
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

  // 2. Maintain high-fidelity canvas size responsive to DPR
  useEffect(() => {
    if (!enabled || isMobileOrTouch) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [enabled, isMobileOrTouch]);

  // 3. Primary tracking and rendering effect
  useEffect(() => {
    if (!enabled || isMobileOrTouch) {
      document.body.classList.remove("cursor-hover");
      // Clear all active sparkles and flush canvas immediately on disable
      particlesRef.current = [];
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
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

      // Add dynamic sparkle particles if under the safety limit
      if (particlesRef.current.length < 150) {
        // Spawn 2 particles per mousemove event for gorgeous trail density
        for (let i = 0; i < 2; i++) {
          particlesRef.current.push(new Particle(e.clientX, e.clientY));
        }
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

    // Integrated high-performance loop: canvas glitter update
    let animFrameId;
    const tick = () => {
      // Canvas glitter particles
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
          ctx.globalCompositeOperation = "screen";

          const activeParticles = particlesRef.current;
          for (let i = activeParticles.length - 1; i >= 0; i--) {
            const p = activeParticles[i];
            p.update();

            if (p.alpha <= 0) {
              activeParticles.splice(i, 1);
            } else {
              p.draw(ctx);
            }
          }
        }
      }

      animFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animFrameId);
      document.body.classList.remove("cursor-hover");
    };
  }, [enabled, isMobileOrTouch]);

  if (!enabled || isMobileOrTouch) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className="custom-cursor-dot" 
        style={{ 
          left: "-100px", 
          top: "-100px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.25s ease, width 0.2s, height 0.2s, background-color 0.2s"
        }}
      />
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]"
      />
    </>
  );
}
