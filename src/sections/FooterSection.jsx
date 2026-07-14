import { SOCIAL_LINKS } from "../config";

export default function FooterSection() {
  return (
    <footer className="grid-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h4>RED CYPHER 3.0</h4>
          <p>DECRYPT • DEFEND • PREVAIL</p>
        </div>
        <div className="footer-org">
          <h5>Organized By</h5>
          <p>Faculty of Engineering, University of Ruhuna</p>
          <h5 style={{ marginTop: '15px' }}>In Partnership With</h5>
          <p>Title Sponsor: <strong>Coin Ceylon</strong></p>
          <p>Official Partner: <strong>IEEE Computer Society</strong></p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '15px', alignItems: 'center' }}>
            <img src="/logo.png" alt="Coin Ceylon" style={{ height: '45px', objectFit: 'contain', background: 'white', padding: '5px 10px', borderRadius: '8px' }} />
            <img src="/IEEE-CS_LogoTM-orange.webp" alt="IEEE CS Logo" style={{ height: '45px', objectFit: 'contain', background: 'white', padding: '5px 10px', borderRadius: '8px' }} />
          </div>
        </div>
        <div className="footer-links">
          <h5>Quick Links</h5>
          <a href="#home">Home</a>
          <a href="#about">Rules & Regulations</a>
          <a href="#about">Code of Conduct</a>
          <a href="#prizes">Leaderboard</a>
        </div>
        <div className="footer-contact">
          <h5>Contact Us</h5>
          <p>Email: hello@redcypher.lk</p>
          <p>Phone: +94 XX XXX XXXX</p>
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