import GradientText from "../components/GradientText";
import ScrambledText from "../components/ScrambledText";
import GradualBlur from "../components/GradualBlur";
import PixelBlast from '../components/PixelBlast';
import { motion, useScroll, useTransform } from "motion/react";
import { HERO_SECTION } from "../config";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="hero" style={styles.section}>
      {/* Main Content */}
      <motion.div className="hero-content" style={{ ...styles.content, y, opacity }}>
        {/* Logo */}
        <div className="hero-logo-placeholder" style={styles.logoContainer}>
          <img
            src={HERO_SECTION.logoPath}
            alt={HERO_SECTION.logoAlt}
            style={styles.logo}
          />
        </div>

        {/* Title */}
        <GradientText
          className="hero-title"
          colors={["#D80606", "#820303", "#ffffff", "#D80606"]}
          animationSpeed={6}
          showBorder={false}
        >
          {HERO_SECTION.title}
        </GradientText>

        {/* Call to Action */}
        <div className="buttons" style={{ ...styles.buttonGroup, margin: '1rem 0' }}>
          <button 
            className="primary"
            onClick={() => window.location.hash = '#register'} 
          >
            {HERO_SECTION.registerText}
          </button>
          <button 
            className="secondary"
            onClick={() => document.getElementById('challenges')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {HERO_SECTION.exploreText}
          </button>
        </div>

        {/* Description */}
        <div style={styles.descriptionContainer}>
          <ScrambledText
            className="hero-text"
            radius={120}
            duration={1.5}
            speed={0.4}
            scrambleChars="01!<>-_\\/[]{}—=+*^?#"
          >
            {HERO_SECTION.description}
          </ScrambledText>
        </div>

        {/* Tagline */}
        <div className="hero-tagline" style={styles.tagline}>
          <span>{HERO_SECTION.tagline[0]}</span>
          <span style={styles.dot}>•</span>
          <span>{HERO_SECTION.tagline[1]}</span>
          <span style={styles.dot}>•</span>
          <span>{HERO_SECTION.tagline[2]}</span>
        </div>

      </motion.div>

      {/* Background Effect */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color="#ff3131"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples={true}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={true}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0}
          transparent={true}
        />
        {/* Black Gradient Fade Overlay (Vignette) */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(circle at center, rgba(9,9,9,0.1) 0%, rgba(9,9,9,0.4) 70%, rgba(9,9,9,0.7) 100%)',
          pointerEvents: 'none' 
        }} />
      </div>
      {/* Optimized Gradual Blur (Lower divCount to 3 for 60FPS scrolling) */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '8rem', zIndex: 5 }}>
        <GradualBlur
          target="page"
          position="bottom"
          height="8rem"
          strength={5}
          divCount={3}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </div>
    </section>
  );
}

// --- Standardized Styles Object ---
const styles = {
  section: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",    // Ensures horizontal centering of the content div
    justifyContent: "center",
    padding: "2rem 1.5rem",  // Added standard padding top/bottom for smaller screens
    overflow: "hidden",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",    // Forces all child elements to center align perfectly
    justifyContent: "center",
    width: "100%",
    maxWidth: "1200px",
    textAlign: "center",
    position: "relative",
    zIndex: 10,
  },
  logoContainer: {
    marginBottom: "1rem",
  },
  logo: {
    height: "80px",
    objectFit: "contain",
  },
  descriptionContainer: {
    maxWidth: "650px",
    margin: "1rem 0 1.5rem 0", // Standard Top & Bottom margins (Vertical Rhythm)
    fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
    lineHeight: "1.6",
    color: "#a1a1aa",
    wordWrap: "break-word",
  },
  tagline: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",          // Replaces inline margins on dots. Much cleaner!
    marginBottom: "1.5rem",
    fontWeight: "600",
    letterSpacing: "2px",
  },
  dot: {
    color: "#D80606",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.25rem",          // Standardized gap between buttons
    flexWrap: "wrap",
  },
};