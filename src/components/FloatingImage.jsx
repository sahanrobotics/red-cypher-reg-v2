import { useEffect, useRef } from "react";
import "./FloatingImage.css";

export default function FloatingImage({ 
  src, 
  alt = "", 
  radius = 350,     // How close the mouse needs to be to trigger movement
  intensity = 25,   // How far it moves/tilts
  className = "" 
}) {
  const innerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!innerRef.current) return;
      
      const rect = innerRef.current.getBoundingClientRect();
      // Find the exact center of the image on the screen
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from mouse to the center of the image
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < radius) {
        // Mouse is within the proximity radius - calculate pull and tilt
        const pullX = (distX / radius) * intensity;
        const pullY = (distY / radius) * intensity;
        
        // Invert the axes for a natural 3D tilt
        const tiltX = -(distY / radius) * (intensity * 0.6); 
        const tiltY = (distX / radius) * (intensity * 0.6);

        // Apply high-performance CSS variables
        innerRef.current.style.setProperty("--x", `${pullX}px`);
        innerRef.current.style.setProperty("--y", `${pullY}px`);
        innerRef.current.style.setProperty("--tx", `${tiltX}deg`);
        innerRef.current.style.setProperty("--ty", `${tiltY}deg`);
        innerRef.current.classList.add("is-near");
      } else {
        // Mouse is out of range - reset smoothly
        innerRef.current.style.setProperty("--x", "0px");
        innerRef.current.style.setProperty("--y", "0px");
        innerRef.current.style.setProperty("--tx", "0deg");
        innerRef.current.style.setProperty("--ty", "0deg");
        innerRef.current.classList.remove("is-near");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [radius, intensity]);

  return (
    <div className={`floating-outer-wrapper ${className}`}>
      <div ref={innerRef} className="floating-inner-interactive">
        <img src={src} alt={alt} draggable={false} />
      </div>
    </div>
  );
}