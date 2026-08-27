import React from 'react';

export default function AcronymSection({ t }) {
  return (
    <article className="acronym-card">
      <div className="acronym-header">
        <span>{t.whatWeStandFor}</span>
        <p>{t.acronymSubtitle}</p>
      </div>
      <div className="acronym-grid">
        {t.acronymItems.map((item) => (
          <div key={item.letter} className="acronym-item">
            <div className="acronym-letter">{item.letter}</div>
            <div>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="acronym-footer">{t.leadingPurpose}</div>
    </article>
  );
}
