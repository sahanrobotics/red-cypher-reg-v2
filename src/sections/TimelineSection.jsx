import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "./TimelineSection.css";
import PixelCard from "../components/PixelCard";
import { TIMELINE_SECTION } from "../config";

export default function TimelineSection() {
  const containerRef = useRef(null);

  // Track the scroll progress of the entire timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // SVG Parallax Animations
  const parallaxUp = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const parallaxDown = useTransform(scrollYProgress, [0, 1], [-100, 300]);
  const parallaxSlow = useTransform(scrollYProgress, [0, 1], [50, -150]);

  // The glowing stroke that draws down
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.section 
      id="timeline" 
      className="page-section timeline-section" 
      style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      
      {/* Background Parallax Elements */}
      <motion.div className="parallax-bg-shape shape-1" style={{ y: parallaxUp }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" stroke="rgba(255,49,49,0.15)" strokeWidth="2" />
        </svg>
      </motion.div>

      <motion.div className="parallax-bg-shape shape-2" style={{ y: parallaxDown }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="5 5" />
        </svg>
      </motion.div>

      <motion.div className="parallax-bg-shape shape-3" style={{ y: parallaxSlow }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="60" stroke="rgba(255,49,49,0.1)" strokeWidth="2" transform="rotate(45 50 50)" />
        </svg>
      </motion.div>


      <motion.div 
        className="section-header-wrap" 
        style={{ position: 'relative', zIndex: 10 }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="section-pre">{TIMELINE_SECTION.preTitle}</span>
        <h2>{TIMELINE_SECTION.title}</h2>
      </motion.div>

      <div className="advanced-timeline-wrap" ref={containerRef}>
        
        {/* Timeline Top Logo */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', marginBottom: '-50px' }}>
          <img 
            src={TIMELINE_SECTION.logoPath}
            alt="Red Cypher Logo" 
            style={{ 
              width: '80px', 
              opacity: 0.9, 
              filter: 'drop-shadow(0 0 15px rgba(255, 49, 49, 0.6))' 
            }} 
          />
        </div>

        {/* Dynamic SVG Winding Path Background */}
        <div className="timeline-svg-container">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="timeline-svg">
            {/* Faded Background Track */}
            <path 
              d="M 50,0 C 20,12.5 20,12.5 50,25 C 80,37.5 80,37.5 50,50 C 20,62.5 20,62.5 50,75 C 80,87.5 80,87.5 50,100" 
              className="svg-track"
              vectorEffect="non-scaling-stroke"
            />
            {/* Bright Red Animated Draw Line */}
            <motion.path 
              d="M 50,0 C 20,12.5 20,12.5 50,25 C 80,37.5 80,37.5 50,50 C 20,62.5 20,62.5 50,75 C 80,87.5 80,87.5 50,100" 
              className="svg-fill"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
            />
          </svg>
        </div>

        {TIMELINE_SECTION.events.map((item, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div className="timeline-row" key={idx}>
              {/* Left Side Content */}
              <div className="timeline-half left">
                {isEven && (
                  <TimelineCard item={item} direction={-50} />
                )}
              </div>

              {/* Center Dot */}
              <motion.div 
                className="timeline-dot"
                initial={{ scale: 0, opacity: 0, rotate: 180 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1, type: "spring", bounce: 0.5 }}
              >
                <div className="dot-inner"></div>
              </motion.div>

              {/* Right Side Content */}
              <div className="timeline-half right">
                {!isEven && (
                  <TimelineCard item={item} direction={50} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

function TimelineCard({ item, direction }) {
  return (
    <motion.div 
      initial={{ x: direction, opacity: 0, rotateY: direction > 0 ? 15 : -15 }}
      whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      style={{ width: '100%', maxWidth: '450px' }}
    >
      <PixelCard variant="red" className="timeline-content-card">
        <span className="timeline-phase">PHASE {item.phase}</span>
        <h3>{item.title}</h3>
        <span className="timeline-date">Date: {item.date}</span>
        <p>{item.description}</p>
      </PixelCard>
    </motion.div>
  );
}