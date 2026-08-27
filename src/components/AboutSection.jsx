import React from 'react';

export default function AboutSection({ t }) {
  return (
    <section className="about-section">
      <div className="about-image">
        <img src="/images/kumaoni women.jpg" alt="Rural Women of Kumaon" />
        <div className="about-overlay">
          <h2>{t.holisticTitle}</h2>
        </div>
      </div>
      <div className="about-copy">
        <span className="eyebrow">{t.aboutTitle}</span>
        <h3>
          {t.aboutHeadingPrefix}
          <span>{t.aboutHeadingHighlight}</span>
          {t.aboutHeadingSuffix}
        </h3>
        <p>{t.aboutParagraph1}</p>
        <p>{t.aboutParagraph2}</p>
      </div>
    </section>
  );
}
