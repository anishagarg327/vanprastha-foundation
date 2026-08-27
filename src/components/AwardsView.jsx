import React from 'react';

export default function AwardsView({ lang }) {
  return (
    <article className="narrative-page awards-view-page">
      <header className="contribute-header-banner">
        <span className="narrative-badge" style={{ backgroundColor: '#b45309' }}>
          {lang === 'en' ? 'HONOURS & ACCOLADES' : 'सम्मान और पुरस्कार'}
        </span>
        <h1 className="narrative-title">
          {lang === 'en' ? (
            <>Awards & <span className="highlight-italic">Recognition</span></>
          ) : (
            <>पुरस्कार और <span className="highlight-italic">मान्यता</span></>
          )}
        </h1>
        <p className="narrative-subtitle">
          {lang === 'en'
            ? 'Celebrating national recognition and community trust earned through sincere service, ecological stewardship, and rural empowerment in Uttarakhand.'
            : 'उत्तराखंड में सेवा, पर्यावरण संरक्षण और ग्रामीण सशक्तिकरण के माध्यम से अर्जित राष्ट्रीय सम्मान और सामुदायिक विश्वास का उत्सव।'}
        </p>
      </header>

      <div className="media-grid-container">
        <div className="media-card award-card">
          <div className="media-card-badge award-card-badge">
            <span>{lang === 'en' ? 'Sardar Patel Unity Award · National Honour' : 'सरदार पटेल एकता पुरस्कार · राष्ट्रीय सम्मान'}</span>
          </div>
          <div className="media-card-image-wrapper award-image-wrapper">
            <a href="/images/award_sardar_patel.jpg" target="_blank" rel="noopener noreferrer">
              <img src="/images/award_sardar_patel.jpg" alt="CA Dr Alok Misra receiving Sardar Patel Unity Award" className="media-clipping-img award-showcase-img" />
            </a>
          </div>
          <div className="media-card-content">
            <h3>
              {lang === 'en'
                ? 'Sardar Patel Unity Award Presented to CA (Dr.) Alok Misra'
                : 'सीए (डॉ.) आलोक मिश्रा को प्रदान किया गया सरदार पटेल एकता सम्मान'}
            </h3>
            <p className="media-card-summary">
              {lang === 'en'
                ? 'CA (Dr.) Alok Misra, Founder & Promoter of Vanprastha Foundation (Uttarakhand), was honored with the prestigious Sardar Patel Unity Award for outstanding contribution as the Best Spiritual Retreat & Community Welfare Leader in India. This national accolade celebrates the foundation’s relentless commitment to restoring Himalayan forests, uplifting rural health, and empowering grassroots communities.'
                : 'वनप्रस्थ फाउंडेशन (उत्तराखंड) के संस्थापक और प्रवर्तक सीए (डॉ.) आलोक मिश्रा को भारत में सर्वश्रेष्ठ आध्यात्मिक रिट्रीट और सामाजिक कल्याण के लिए प्रतिष्ठित सरदार पटेल एकता सम्मान से सम्मानित किया गया। यह राष्ट्रीय सम्मान हिमालयी वनों की बहाली, ग्रामीण स्वास्थ्य सुधार और सामुदायिक सशक्तिकरण के प्रति फाउंडेशन की अटूट निष्ठा का प्रतीक है।'}
            </p>
            <div className="media-card-footer">
              <span className="media-date">🏆 {lang === 'en' ? 'National Recognition · Annual Retreat India' : 'राष्ट्रीय सम्मान · वार्षिक समारोह'}</span>
              <a
                href="/images/award_sardar_patel.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="view-clipping-btn award-btn"
              >
                {lang === 'en' ? 'View Award Photo ↗' : 'पुरस्कार फोटो देखें ↗'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
