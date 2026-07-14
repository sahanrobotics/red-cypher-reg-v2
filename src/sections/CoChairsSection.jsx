import { CO_CHAIRS } from "../config";
import "./CoChairsSection.css";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import PixelCard from "../components/PixelCard";

export default function CoChairsSection() {
  return (
    <section className="page-section co-chairs-section">
      <div className="section-header-wrap">
        <h2>{CO_CHAIRS.title}</h2>
      </div>
      
      <div className="co-chairs-container">
        {CO_CHAIRS.members.map((member, index) => (
          <PixelCard key={index} className="co-chair-pixel-card" variant="red">
            <div className="co-chair-card-content">
              <div className="co-chair-img-wrapper">
                <img src={member.image} alt={member.name} className="co-chair-img" />
              </div>
              <div className="co-chair-info">
                <h3>{member.name}</h3>
                <div className="co-chair-links">
                  <a href={`mailto:${member.email}`} className="co-chair-link" title="Send Email">
                    <MdEmail size={20} />
                    <span>{member.email}</span>
                  </a>
                  <a href={`https://wa.me/${member.whatsapp.replace('+', '')}`} target="_blank" rel="noreferrer" className="co-chair-link" title="WhatsApp">
                    <FaWhatsapp size={20} />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </PixelCard>
        ))}
      </div>
    </section>
  );
}
