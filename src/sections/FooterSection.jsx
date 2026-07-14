import { SOCIAL_LINKS, FOOTER_SECTION } from "../config";

export default function FooterSection() {
  return (
    <footer className="grid-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/RED-Cypher-Colour-Dark.png" alt="Red Cypher Logo" style={{ height: '60px', objectFit: 'contain', marginBottom: '15px' }} />
          <p className="footer-tagline">DECRYPT • DEFEND • PREVAIL</p>
          <p className="footer-desc">The ultimate hackathon experience brought to you by the Faculty of Engineering, University of Ruhuna. Prove your skills on the grid.</p>
        </div>
        
        <div className="footer-links-group">
          <div className="footer-links">
            <h5>Quick Links</h5>
            <a href="#home">Home</a>
            <a href="#about">Rules & Regulations</a>
            <a href="#about">Code of Conduct</a>
            <a href="#prizes">Leaderboard</a>
          </div>
          <div className="footer-contact">
            <h5>Contact Us</h5>
            <p>Email: {FOOTER_SECTION.contactEmail}</p>
            <p>Phone: {FOOTER_SECTION.contactPhone}</p>
          </div>
        </div>

        <div className="footer-org">
          <h5>In Partnership With</h5>
          <div className="sponsor-logos">
            <div className="sponsor-item">
              <span className="sponsor-label">Title Sponsor</span>
              <img src="/logo.png" alt="Coin Ceylon" className="sponsor-img" />
            </div>
            <div className="sponsor-item">
              <span className="sponsor-label">Official Partner</span>
              <img src="/IEEE-CS_LogoTM-orange.webp" alt="IEEE CS Logo" className="sponsor-img" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 Red Cypher 3.0 | Faculty of Engineering, University of Ruhuna. All Rights Reserved.</p>
        <div className="footer-socials">
          {SOCIAL_LINKS.map((s, i) => (
            <a key={i} href={s.link}>{s.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}