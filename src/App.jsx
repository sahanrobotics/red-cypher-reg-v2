import { useState, useEffect } from "react";
import LineSidebar from "./components/LineSidebar";
import StaggeredMenu from "./components/StaggeredMenu";
import { NAVIGATION, SOCIAL_LINKS } from "./config";
import "./App.css";

// Import all separated sections
import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection"; 
import AboutSection from "./sections/AboutSection";
import ChallengesSection from "./sections/ChallengesSection";
import PrizesSection from "./sections/PrizesSection";
import TimelineSection from "./sections/TimelineSection";
import FaqSection from "./sections/FaqSection";
import FooterSection from "./sections/FooterSection";
import CookieConsent from "./components/CookieConsent";
import RegistrationPage from "./pages/RegistrationPage"; // <-- Import the new page

const staggeredMenuItems = NAVIGATION.map((sec) => ({
  label: sec,
  ariaLabel: `Maps to ${sec}`,
  link: `#${sec.toLowerCase()}`,
}));

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  // Listen to hash changes for simple routing
  useEffect(() => {
    const handleHashChange = () => setCurrentRoute(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowSidebar(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tracks which section is currently on screen to update the sidebar
  useEffect(() => {
    if (currentRoute === '#register') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const index = NAVIGATION.findIndex((sec) => sec.toLowerCase() === id);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.2 }
    );

    NAVIGATION.forEach((sec) => {
      const el = document.getElementById(sec.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentRoute]);

  // If the user navigates to the registration route
  if (currentRoute === '#register') {
    return <RegistrationPage />;
  }

  return (
    <>
      <StaggeredMenu
        isFixed={true}
        position="right"
        items={staggeredMenuItems}
        socialItems={SOCIAL_LINKS}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        colors={["#000000", "#4B0101", "#820303", "#D80606"]}
        accentColor="#D80606"
        logoUrl="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png"
      />
      <div className="sidebar" style={{ opacity: showSidebar ? 1 : 0, pointerEvents: showSidebar ? 'auto' : 'none', transition: 'opacity 0.3s ease' }}>
        <LineSidebar
          items={NAVIGATION}
          activeIndex={activeIndex}
          accentColor="#D80606"
          textColor="#d1d5db"
          markerColor="#4B0101"
          showIndex
          showMarker
          proximityRadius={140}
          maxShift={35}
          falloff="smooth"
          markerLength={70}
          markerGap={0}
          tickScale={0.5}
          scaleTick
          itemGap={22}
          fontSize={1}
          smoothing={120}
          onItemClick={(index, label) => {
            setActiveIndex(index);
            document.getElementById(label.toLowerCase())?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        />
      </div>

      <HeroSection />

      <main className="content">
        <StatsSection /> 
        <AboutSection />
        <ChallengesSection />
        <PrizesSection />
        <TimelineSection />
        <FaqSection />
        <FooterSection />
      </main>
      <CookieConsent />
    </>
  );
}