import { useEffect, useRef } from "react";

const IntroScreen = ({ onStart }) => {
  const heartRef = useRef(null);

  useEffect(() => {
    const canvas = heartRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Taille plus nette (retina-safe)
    const size = 140;
    canvas.width = size;
    canvas.height = size;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const s = 45;

    ctx.fillStyle = "#FF6F91";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#FFB6C1";

    ctx.beginPath();

    // ❤️ Cœur mathématique (beaucoup plus propre)
    ctx.moveTo(cx, cy + s / 2);

    ctx.bezierCurveTo(
      cx + s,
      cy - s / 3,
      cx + s * 1.4,
      cy + s / 1.5,
      cx,
      cy + s * 1.8
    );

    ctx.bezierCurveTo(
      cx - s * 1.4,
      cy + s / 1.5,
      cx - s,
      cy - s / 3,
      cx,
      cy + s / 2
    );

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
