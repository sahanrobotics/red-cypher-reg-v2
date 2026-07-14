import { useRef } from 'react';
import { ABOUT_SECTION } from "../config";
import VariableProximity from "../components/VariableProximity";

export default function AboutSection() {
  const containerRef = useRef(null);

  return (
    <section id="about" className="page-section text-block-section" ref={containerRef}>
      <div className="section-header-wrap">
        <span className="section-pre">{ABOUT_SECTION.preTitle}</span>
        <h2 style={{ paddingBottom: '10px' }}>
          <VariableProximity
            label={ABOUT_SECTION.title}
            className="variable-proximity-demo"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={120}
            falloff="linear"
          />
        </h2>
      </div>
      <div className="two-column-layout">
        <p className="highlight-p">
          {ABOUT_SECTION.highlight}
        </p>
        <div>
          <h3>{ABOUT_SECTION.legacyTitle}</h3>
          <p>
            {ABOUT_SECTION.legacyText}
          </p>
        </div>
      </div>
    </section>
  );
}