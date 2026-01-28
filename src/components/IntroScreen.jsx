import { useEffect, useRef } from "react";

const IntroScreen = ({ onStart }) => {
  const heartRef = useRef(null);

  useEffect(() => {
    const canvas = heartRef.current;
    if (!canvas) return;
  
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    // Taille du canvas
    const size = 160;
    canvas.width = size;
    canvas.height = size;
  
    ctx.clearRect(0, 0, size, size);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
  
    const cx = size / 2;
    const cy = size / 2;
    const s = 50;
  
    // Couleur rose vibrante
    ctx.fillStyle = "#FF6F91";
    
    // Lueur douce
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#FFB6C1";
  
    ctx.beginPath();
  
    // Forme de cœur classique et simple (coordonnées relatives au centre)
    ctx.moveTo(cx, cy + s * 0.3);
    
    // Côté gauche
    ctx.bezierCurveTo(cx, cy, cx - s / 2, cy, cx - s / 2, cy + s * 0.3);
    ctx.bezierCurveTo(cx - s / 2, cy + s * 0.7, cx, cy + s * 0.7, cx, cy + s);
    
    // Côté droit
    ctx.bezierCurveTo(cx, cy + s * 0.7, cx + s / 2, cy + s * 0.7, cx + s / 2, cy + s * 0.3);
    ctx.bezierCurveTo(cx + s / 2, cy, cx, cy, cx, cy + s * 0.3);
  
    ctx.closePath();
    ctx.fill();
  }, []);
  
  

  return (
    <div className="intro-screen">
      <div
        className="intro-content"
        onClick={onStart}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onStart();
        }}
        role="button"
        tabIndex={0}
      >
        <canvas
          ref={heartRef}
          className="intro-heart"
        />

        <div className="intro-text">
          <div className="click-me">Click Me 💖</div>
          <div className="birthday-queen">Birthday Queen</div>
          <div className="underline"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
