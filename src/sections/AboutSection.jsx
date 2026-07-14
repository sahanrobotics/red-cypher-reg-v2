import { ABOUT_SECTION } from "../config";

export default function AboutSection() {
  return (
    <section id="about" className="page-section text-block-section">
      <div className="section-header-wrap">
        <span className="section-pre">{ABOUT_SECTION.preTitle}</span>
        <h2>{ABOUT_SECTION.title}</h2>
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

      <div className="eligibility-box">
        <h3>{ABOUT_SECTION.eligibilityTitle}</h3>
        <ul>
          {ABOUT_SECTION.eligibilityList.map((item, index) => (
            <li key={index}><strong>{item.title}:</strong> {item.desc}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}