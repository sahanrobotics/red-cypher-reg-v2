import { useState, useEffect } from "react";
import SpotlightCard from "../components/SpotlightCard";
import LogoLoop from "../components/LogoLoop";
import { STATS_SECTION } from "../config";

export default function StatsSection() {
  const [stats, setStats] = useState({
    participants: 0,
    universities: 0,
    teams: 0,
  });

  useEffect(() => {
    const targetParticipants = STATS_SECTION.participants;
    const targetUniversities = STATS_SECTION.universities;
    const targetTeams = STATS_SECTION.teams;

    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setStats({
        participants: Math.floor(targetParticipants * progress),
        universities: Math.floor(targetUniversities * progress),
        teams: Math.floor(targetTeams * progress),
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
        setStats({
          participants: targetParticipants,
          universities: targetUniversities,
          teams: targetTeams,
        });
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="stats"
      className="stats-section"
      style={{
        padding: "3rem 0", // Reduced padding to decrease height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem" // Gap between cards and logo loop
      }}
    >
      <div className="bento-container" style={{ width: "100%", maxWidth: "1200px", padding: "0 1.5rem" }}>

        {/* Stats Grid using SpotlightCard */}
        <div
          className="bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem"
          }}
        >
          <SpotlightCard className="bento-item main-stat" spotlightColor="rgba(216, 6, 6, 0.2)">
            <span className="bento-label" style={{ fontWeight: 'bold', color: '#888', letterSpacing: '1px' }}>
              {STATS_SECTION.statsLabels.participants}
            </span>
            <div className="bento-counter" style={{ fontSize: '3.5rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#fff' }}>
              {stats.participants}+
            </div>
            <p className="bento-desc" style={{ color: '#aaa', margin: 0, lineHeight: '1.5' }}>
              {STATS_SECTION.statsLabels.participantsDesc}
            </p>
          </SpotlightCard>

          <SpotlightCard className="bento-item sub-stat" spotlightColor="rgba(216, 6, 6, 0.2)">
            <span className="bento-label" style={{ fontWeight: 'bold', color: '#888', letterSpacing: '1px' }}>
              {STATS_SECTION.statsLabels.universities}
            </span>
            <div className="bento-counter small" style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#fff' }}>
              {stats.universities}
            </div>
            <p className="bento-desc" style={{ color: '#aaa', margin: 0, lineHeight: '1.5' }}>
              {STATS_SECTION.statsLabels.universitiesDesc}
            </p>
          </SpotlightCard>

          <SpotlightCard className="bento-item sub-stat" spotlightColor="rgba(216, 6, 6, 0.2)">
            <span className="bento-label" style={{ fontWeight: 'bold', color: '#888', letterSpacing: '1px' }}>
              {STATS_SECTION.statsLabels.teams}
            </span>
            <div className="bento-counter small" style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#fff' }}>
              {stats.teams}
            </div>
            <p className="bento-desc" style={{ color: '#aaa', margin: 0, lineHeight: '1.5' }}>
              {STATS_SECTION.statsLabels.teamsDesc}
            </p>
          </SpotlightCard>
        </div>
      </div>

      {/* Infinite Logo Loop integrated below the stats */}
      <div style={{ width: "100%", maxWidth: "1200px", overflow: "hidden", color: "#666" }}>
        <LogoLoop
          logos={STATS_SECTION.partnerLogos}
          speed={60}
          direction="left"
          logoHeight={32}
          gap={50}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000" // Update this to match your section's background color (e.g. #111 or #000)
          ariaLabel="Participating Tech Stack"
        />
      </div>
    </section>
  );
}