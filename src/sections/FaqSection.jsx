import { useState } from "react";
import { FAQ_DATA } from "../config";
import FlowingMenu from "../components/FlowingMenu";

const demoItems = [
  { link: '#about', text: 'Event Details', image: '/RED-Cypher-Colour-Dark.png' },
  { link: '#challenges', text: 'Competition Details', image: '/RED-Cypher-Colour-Dark.png' },
  { link: '#prizes', text: 'Prize Details', image: '/RED-Cypher-Colour-Dark.png' },
  { link: '#home', text: 'Registration Details', image: '/RED-Cypher-Colour-Dark.png' }
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="page-section faq-section">
      <div className="section-header-wrap">
        <span className="section-pre">05 / INTEL</span>
        <h2>Got Questions? We’ve Got Answers.</h2>
      </div>

      <div className="faq-accordion">
        {FAQ_DATA.map((item, idx) => (
          <div key={idx} className={`faq-row ${openFaq === idx ? 'open' : ''}`} onClick={() => toggleFaq(idx)}>
            <div className="faq-question">
              <span>{item.q}</span>
              <span className="faq-icon">{openFaq === idx ? "−" : "+"}</span>
            </div>
            {openFaq === idx && <div className="faq-answer"><p>{item.a}</p></div>}
          </div>
        ))}
      </div>

      {/* Added FlowingMenu below FAQ */}
      <div style={{ height: '400px', width: '100%', position: 'relative', marginTop: '80px', borderRadius: '16px', overflow: 'hidden' }}>
        <FlowingMenu 
          items={demoItems} 
          textColor="#ffffff"
          bgColor="#090909"
          marqueeBgColor="#D80606"
          marqueeTextColor="#ffffff"
          borderColor="#330000"
        />
      </div>
    </section>
  );
}