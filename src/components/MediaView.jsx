import React from 'react';

export default function MediaView({ lang }) {
  return (
    <article className="narrative-page media-view-page">
      <header className="contribute-header-banner">
        <span className="narrative-badge" style={{ backgroundColor: '#154212' }}>
          {lang === 'en' ? 'PRESS & COVERAGE' : 'प्रेस और मीडिया कवरेज'}
        </span>
        <h1 className="narrative-title">
          {lang === 'en' ? (
            <>Media & <span className="highlight-italic">Resource Centre</span></>
          ) : (
            <>मीडिया और <span className="highlight-italic">संसाधन केंद्र</span></>
          )}
        </h1>
        <p className="narrative-subtitle">
          {lang === 'en'
            ? 'Tracking our journey, impact stories, and press coverage as we work towards restoring the Himalayan ecological balance and community healthcare.'
            : 'हिमालयी पर्यावरण संतुलन और सामुदायिक स्वास्थ्य सेवा को बहाल करने के हमारे प्रयासों की समाचार कवरेज और प्रभाव कहानियां।'}
        </p>
      </header>

      <div className="media-grid-container">
        <div className="media-card">
          <div className="media-card-badge">
            <span>{lang === 'en' ? 'Newspaper Feature · Health Camp' : 'समाचार पत्र विशेष · स्वास्थ्य शिविर'}</span>
          </div>
          <div className="media-card-image-wrapper">
            <a href="/images/media_dr_rajeev_exercise.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/media_dr_rajeev_exercise.png" alt="Dr Rajeev Exercise essential for health newspaper feature" className="media-clipping-img" />
            </a>
          </div>
          <div className="media-card-content">
            <h3>
              {lang === 'en'
                ? 'Exercise is Essential for Good Health : Dr. Rajeev'
                : 'स्वस्थ रहने के लिए व्यायाम जरूरी : डा. राजीव'}
            </h3>
            <p className="media-card-summary">
              {lang === 'en'
                ? 'Coverage of Vanprastha Foundation’s Free Medical & Dental Camp held at Village Ratkhal, Dunagiri. Esteemed doctors including Dr. Rajeev Seth, Dr. Tulika Seth (AIIMS), and Dr. Aalok Tiwari conducted comprehensive health checkups and emphasized daily exercise alongside balanced nutrition for over 100 rural beneficiaries.'
                : 'दूनागिरी के रत्व्वाल गांव में वनप्रस्थ फाउंडेशन द्वारा आयोजित निशुल्क स्वास्थ्य शिविर की विशेष कवरेज। शिविर में एम्स दिल्ली के डा. राजीव सेठ, डा. तूलिका और वरिष्ठ दंत चिकित्सक डा. आलोक तिवारी ने ग्रामीणों के स्वास्थ्य की जांच की और स्वस्थ रहने के लिए नियमित व्यायाम व संतुलित भोजन चक्र को जरूरी बताया।'}
            </p>
            <div className="media-card-footer">
              <span className="media-date">📍 {lang === 'en' ? 'Ratkhal, Dwarahat (Almora)' : 'रत्व्वाल, द्वाराहाट (अल्मोड़ा)'}</span>
              <a
                href="/images/media_dr_rajeev_exercise.png"
                target="_blank"
                rel="noopener noreferrer"
                className="view-clipping-btn"
              >
                {lang === 'en' ? 'View Full Clipping ↗' : 'पूरी कटिंग देखें ↗'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
