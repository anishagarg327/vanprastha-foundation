import React from 'react';
import { motion } from 'framer-motion';

export default function HeroModal({ t, activeSlide, setIsModalOpen, navigateTo }) {
  const slide = t.heroSlides[activeSlide];

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsModalOpen(false)}
    >
      <motion.div
        className="modal-box"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header">
          <h2>{slide.title}</h2>
          <button
            className="modal-close-btn"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close modal"
          >
            &times;
          </button>
        </header>

        <div className="modal-body">
          {slide.gallery && slide.gallery.length > 0 && (
            <div className="modal-gallery">
              {slide.gallery.map((imgUrl, i) => (
                <img key={i} src={imgUrl} alt={`${slide.title} gallery ${i + 1}`} />
              ))}
            </div>
          )}
          <div className="modal-text">
            <p>{slide.detailedDescription}</p>
          </div>
        </div>

        <footer className="modal-footer">
          <a
            className="modal-support-btn"
            href="contribute.html"
            onClick={(e) => {
              e.preventDefault()
              setIsModalOpen(false)
              navigateTo('contribute.html', 'contribute')
            }}
          >
            {t.supportUs}
          </a>
        </footer>
      </motion.div>
    </motion.div>
  );
}
