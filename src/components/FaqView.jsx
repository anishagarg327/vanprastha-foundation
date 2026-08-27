import React from 'react';

export default function FaqView({ t, lang }) {
  return (
    <section className="info-placeholder-section">
      <h2>{t.faqLink}</h2>
      <p className="placeholder-text">
        {lang === 'en'
          ? 'Frequently asked questions about our programs, volunteer opportunities, and operational transparency are being updated.'
          : 'हमारे कार्यक्रमों, स्वयंसेवक अवसरों और परिचालन पारदर्शिता के बारे में अक्सर पूछे जाने वाले प्रश्न अपडेट किए जा रहे हैं।'}
      </p>
    </section>
  );
}
