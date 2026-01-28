import { useEffect, useRef } from "react";

const HeartCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const heartsRef = useRef([]);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    startTimeRef.current = performance.now();

    /* --------- PALETTE DE COULEURS ---------- */
    const palette = [
      "#ffb3c6",
      "#ff8fab",
      "#ff5d8f",
      "#f72585",
      "#ffd6a5",
      "#fff1a8",
      "#ffc8dd",
      "#fde2e4",
      "#ffcad4",
      "#ffd166",
    ];

    /* --------- GÉNÉRER PLUSIEURS CŒURS DISPERSÉS SUR TOUT L'ÉCRAN ---------- */
    const generateHearts = () => {
      const hearts = [];
      const numHearts = 300; // Nombre réduit de cœurs

      for (let i = 0; i < numHearts; i++) {
        // Générer des positions aléatoires sur tout l'écran (y compris derrière le texte)
        const x = 30 + Math.random() * (canvas.width - 60);
        const y = 30 + Math.random() * (canvas.height - 60);

        // Tailles très variées : petits (6-12), moyens (12-20), grands (20-35)
        const sizeType = Math.random();
        let size;
        if (sizeType < 0.5) {
          // 50% petits cœurs
          size = 6 + Math.random() * 6;
        } else if (sizeType < 0.85) {
          // 35% moyens cœurs
          size = 12 + Math.random() * 8;
        } else {
          // 15% grands cœurs
          size = 20 + Math.random() * 15;
        }

        hearts.push({
          x,
          y,
          size,
          color: palette[Math.floor(Math.random() * palette.length)],
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.7,
          rotation: Math.random() * Math.PI * 2,
          scale: 0.7 + Math.random() * 0.5,
          opacity: 0.3 + Math.random() * 0.5, // Opacité réduite pour ne pas masquer le texte
        });
      }
      return hearts;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Régénérer les cœurs lors du redimensionnement
      heartsRef.current = generateHearts();
      startTimeRef.current = performance.now(); // Réinitialiser le temps
    };
    
    resize();
    window.addEventListener("resize", resize);

    heartsRef.current = generateHearts();

    /* --------- DESSINER CHAQUE CŒUR ---------- */
    const drawHeart = (x, y, s, color, rotation, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = color;

      ctx.beginPath();
      ctx.moveTo(0, s * 0.3);
      ctx.bezierCurveTo(0, 0, -s / 2, 0, -s / 2, s * 0.3);
      ctx.bezierCurveTo(-s / 2, s * 0.7, 0, s * 0.7, 0, s);
      ctx.bezierCurveTo(0, s * 0.7, s / 2, s * 0.7, s / 2, s * 0.3);
      ctx.bezierCurveTo(s / 2, 0, 0, 0, 0, s * 0.3);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    /* --------- ANIMATION (FLOTTEMENT ET APPARITION PROGRESSIVE ❤️) ---------- */
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const elapsed = time - startTimeRef.current;

      // Apparition progressive avec délai pour chaque cœur
      heartsRef.current.forEach((h, index) => {
        const delay = index * 8; // Délai encore plus réduit pour apparition rapide
        const heartProgress = Math.min(1, Math.max(0, (elapsed - delay) / 500));
        
        if (heartProgress > 0) {
          // Flottement doux
          const floatX = Math.sin(time * 0.001 + h.phase) * 3;
          const floatY = Math.cos(time * 0.0015 + h.phase) * 3;
          
          // Scale d'apparition
          const currentScale = h.scale * (0.3 + heartProgress * 0.7);
          const currentOpacity = h.opacity * heartProgress;
          
          drawHeart(
            h.x + floatX,
            h.y + floatY,
            h.size * currentScale,
            h.color,
            h.rotation + time * 0.0005,
            currentOpacity
          );
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100vw",
        height: "100vh",
        background: "#000",
      }}
    />
  );
};

export default HeartCanvas;

