import React from 'react';

export default function GovernanceView({ t, lang }) {
  return (
    <section className="info-placeholder-section">
      <h2>{t.governanceLink}</h2>
      <p className="placeholder-text">
        {lang === 'en'
          ? 'Information about our transparency, governance structures, and financial reports will be published here soon.'
          : 'हमारी पारदर्शिता, शासन संरचना और वित्तीय रिपोर्टों के बारे में जानकारी जल्द ही यहाँ प्रकाशित की जाएगी।'}
      </p>
    </section>
  );
}
