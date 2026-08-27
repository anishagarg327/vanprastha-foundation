import React from 'react';

export default function CTASection({ t, navigateTo }) {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <h2>{t.supportOurMission}</h2>
        <p>{t.supportMissionText}</p>
        <div className="cta-actions">
          <a
            className="primary-btn"
            href="contribute.html"
            onClick={(e) => {
              e.preventDefault()
              navigateTo('contribute.html', 'contribute')
            }}
          >
            {t.contributeNow}
          </a>
          <a
            className="secondary-btn"
            href="volunteer.html"
            onClick={(e) => {
              e.preventDefault()
              navigateTo('volunteer.html', 'volunteer')
            }}
          >
            {t.becomeVolunteer}
          </a>
        </div>
      </div>
    </section>
  );
}
