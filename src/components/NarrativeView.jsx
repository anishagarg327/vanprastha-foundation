import React from 'react';

export default function NarrativeView({ t, view }) {
  const details = t.narrativeDetails[view];
  if (!details) return null;

  return (
    <article className="narrative-page">
      <header className="narrative-hero-banner" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${details.image})` }}>
        <div className="narrative-hero-content">
          <span className="narrative-badge" style={{ backgroundColor: details.badgeColor }}>{details.label}</span>
          <h1 className="narrative-title">{details.title}</h1>
          <p className="narrative-subtitle">{details.subtitle}</p>
        </div>
      </header>

      <div className="narrative-blocks-container">
        {details.blocks.map((block, bIdx) => {
          if (block.type === 'intro') {
            return (
              <div key={bIdx} className="narrative-intro-block">
                <div className="narrative-intro-main">
                  <h2 className="narrative-section-heading">{block.heading}</h2>
                  {block.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="narrative-paragraph">{p}</p>
                  ))}
                </div>
                <div className="narrative-info-card">
                  <h3>{block.cardTitle}</h3>
                  <ul>
                    {block.cardItems.map((item, cIdx) => (
                      <li key={cIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          }

          if (block.type === 'two-column') {
            return (
              <div key={bIdx} className={block.theme === 'green' ? 'narrative-two-column-block green-theme' : 'narrative-two-column-block'}>
                <div className="narrative-column-left">
                  {block.leftType === 'text' && (
                    <>
                      {block.leftContent.heading && <h3 className="narrative-column-heading">{block.leftContent.heading}</h3>}
                      {block.leftContent.text && <p className="narrative-paragraph">{block.leftContent.text}</p>}
                      {block.leftContent.listItems && (
                        <ul className="narrative-bullet-list">
                          {block.leftContent.listItems.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                  {block.leftType === 'image' && (
                    <div className="narrative-image-wrapper">
                      <img src={block.leftContent.src} alt={block.leftContent.alt} />
                    </div>
                  )}
                </div>
                <div className="narrative-column-right">
                  {block.rightType === 'text' && (
                    <>
                      {block.rightContent.heading && <h3 className="narrative-column-heading">{block.rightContent.heading}</h3>}
                      {block.rightContent.text && <p className="narrative-paragraph">{block.rightContent.text}</p>}
                      {block.rightContent.listItems && (
                        <ul className="narrative-bullet-list">
                          {block.rightContent.listItems.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                  {block.rightType === 'image' && (
                    <div className="narrative-image-wrapper">
                      <img src={block.rightContent.src} alt={block.rightContent.alt} />
                    </div>
                  )}
                  {block.rightType === 'quote' && (
                    <blockquote className="narrative-quote-box">
                      <p>“{block.rightContent.text}”</p>
                    </blockquote>
                  )}
                </div>
              </div>
            )
          }

          if (block.type === 'breakout-image') {
            return (
              <div key={bIdx} className="narrative-breakout-block">
                <div className="narrative-breakout-image">
                  <img src={block.src} alt={block.alt} />
                </div>
                {block.caption && <p className="narrative-image-caption">{block.caption}</p>}
              </div>
            )
          }

          return null
        })}
      </div>
    </article>
  );
}
