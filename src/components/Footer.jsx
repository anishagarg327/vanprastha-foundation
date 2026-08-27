import React from 'react';

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left Column: Branding and Motive */}
        <div className="footer-col footer-motive-col">
          <div className="footer-logo-brand">
            <img src="/images/Vanprastha-NGO-logo.png" alt="Vanprastha Foundation logo" />
            <h3>{t.brandName}</h3>
          </div>
          <p className="footer-motive-text">{t.footerMotive}</p>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="footer-col footer-links-col">
          <h4>{t.quickLinks}</h4>
          <div className="footer-links-list">
            <a href="initiatives.html">{t.initiativesLink}</a>
            <a href="media.html">{t.mediaLink}</a>
            <a href="transparency.html">{t.governanceLink}</a>
            <a href="faq.html">{t.faqLink}</a>
          </div>
        </div>

        {/* Right Column: Contact Info */}
        <div className="footer-col footer-contact-col">
          <h4>{t.contactUs}</h4>
          <div className="contact-items">
            <span className="contact-item font-semibold">{t.headOffice}</span>
            <span className="contact-item">{t.branchOffice}</span>
            <span className="contact-item">
              📞 <a href="tel:+919289526777">+91 92895 26777</a>
            </span>
            <span className="contact-item">
              ☎️ <a href="tel:+911145631889">011 4563 1889</a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-note">© {new Date().getFullYear()} {t.brandName}.</div>
      </div>
    </footer>
  );
}
