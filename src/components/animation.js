import React, { useEffect, useRef } from "react";

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null); 

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const numParticles = 150;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3,
        speedY: Math.random() * 2 + 1,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particle.y += particle.speedY;

        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        backgroundColor: "transparent",
        pointerEvents: "none",
      }}
    />
  );
};

export default BackgroundAnimation;
