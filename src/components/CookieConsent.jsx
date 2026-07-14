import { useState, useEffect } from 'react';
import './CookieConsent.css';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      // Delay showing the popup slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-box">
        <div className="cookie-content">
          <h4>We value your privacy</h4>
          <p>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies and agree to our <a href="#about">Terms & Conditions</a>.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="primary cookie-btn" onClick={handleAccept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
