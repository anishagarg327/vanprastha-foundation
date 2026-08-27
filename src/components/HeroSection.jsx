import React from 'react';
import { stats } from '../data/content';

export default function HeroSection({ t, activeSlide, setActiveSlide, setIsModalOpen, statsRef, counterValues }) {
  return (
    <section className="hero-section">
      <div className="hero-background-elements">
        <div className="floating-item stethoscope">🩺</div>
        <div className="floating-item syringe">💉</div>
        <div className="floating-item eco-seed">🌱</div>
        <div className="floating-item spark">✨</div>
      </div>
      <div className="hero-carousel">
        <div className="carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {t.heroSlides.map((slide) => (
            <article className="carousel-slide" key={slide.title}>
              <img src={slide.image} alt={slide.title} />
            </article>
          ))}
        </div>
        <div className="carousel-dots" aria-label="Carousel navigation">
          {t.heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              className={index === activeSlide ? 'dot active' : 'dot'}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="hero-info-card">
          <span>{t.heroSlides[activeSlide].tag}</span>
          <h3>{t.heroSlides[activeSlide].title}</h3>
          <p>{t.heroSlides[activeSlide].text}</p>
          <button onClick={() => setIsModalOpen(true)}>{t.exploreStory}</button>
        </div>
      </div>

      <aside className="hero-panel" ref={statsRef}>
        <div className="stats-grid">
          {t.stats.map((item, index) => {
            const value = counterValues[index]
            const target = item.target || stats[index].target
            const displayValue = item.displaySuffix && value === target ? `${value}${item.displaySuffix}` : value
            return (
              <div key={item.label} className="stat-card" style={{ borderLeftColor: item.color }}>
                <span className="stat-category">{item.category}</span>
                <strong>{displayValue} {item.label.replace(/^\d+\+?\s*/, '')}</strong>
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
      </aside>
    </section>
  );
}
