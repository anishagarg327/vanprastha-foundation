import React from 'react';

export default function InitiativesSection({ t, lang, navigateTo }) {
  const [initPrefix, initHighlight] = t.ourInitiatives.split(' ')

  return (
    <section className="initiatives-section">
      <div className="section-title-group">
        <span>{t.groundProgrammes}</span>
        <div className="section-title-row">
          <h2>
            {initPrefix} <span>{initHighlight}</span>
          </h2>
        </div>
      </div>

      <div className="initiatives-grid">
        {t.initiatives.map((item) =>
          item.hero ? (
            <article key={item.title} className="initiative-hero">
              <img src={item.image} alt={item.title} />
              <div className="initiative-hero-overlay">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="initiative-hero-actions">
                  <a
                    className="primary-link"
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo(item.href, 'punarjeevan')
                    }}
                  >
                    {lang === 'en' ? 'Read Full Narrative' : 'पूरी कहानी पढ़ें'}
                  </a>
                  <a
                    className="secondary-link"
                    href={item.ctaHref}
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo(item.ctaHref, 'contribute')
                    }}
                  >
                    {item.cta}
                  </a>
                </div>
              </div>
            </article>
          ) : (
            <article key={item.title} className="initiative-card">
              <div className="initiative-card-copy">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    let viewName = 'medical-camp'
                    if (item.href.includes('punarjeevan')) viewName = 'punarjeevan'
                    else if (item.href.includes('pathshala')) viewName = 'pathshala'
                    else if (item.href.includes('sanitary-drive')) viewName = 'sanitary-drive'
                    else if (item.href.includes('cleanliness-drive') || item.href.includes('cleanliness')) viewName = 'cleanliness-drive'
                    navigateTo(item.href, viewName)
                  }}
                >
                  {lang === 'en' ? 'Read full narrative' : 'पूरी कहानी पढ़ें'}
                </a>
              </div>
              {item.images && (
                <div className="initiative-card-images">
                  {item.images.map((src) => (
                    <img key={src} src={src} alt={item.title} />
                  ))}
                </div>
              )}
            </article>
          )
        )}
      </div>
    </section>
  );
}
