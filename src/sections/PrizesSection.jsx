import BorderGlow from "../components/BorderGlow";
import { PRIZES_SECTION } from "../config";

export default function PrizesSection() {
  return (
    <section id="prizes" className="page-section prize-section">
      <div className="section-header-wrap">
        <span className="section-pre">{PRIZES_SECTION.preTitle}</span>
        <h2>{PRIZES_SECTION.title}</h2>
        <p className="section-subtitle">
          {PRIZES_SECTION.subtitle}
        </p>
      </div>

      <div className="tier-cards">
        {PRIZES_SECTION.tiers.map((tier, index) => (
          <BorderGlow
            key={index}
            glowColor={tier.glowColor}
            backgroundColor="#000000"
            borderRadius={60}
            glowRadius={110}
            glowIntensity={tier.intensity}
            colors={tier.colors}
          >
            <div className="tier-card-inner">
              <div className="tier-rank">{tier.rank}</div>
              <div className="tier-title">{tier.title}</div>
              <div className="tier-prize" style={{
                backgroundImage: tier.prizeColor,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                {tier.prize}
              </div>
              <p>{tier.desc}</p>
            </div>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
}