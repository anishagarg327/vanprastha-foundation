import React from 'react';

export default function Header({ t, view, navigateTo, menuOpen, setMenuOpen, lang, setLang }) {
  return (
    <header className="topbar">
      <div className="brand">
        <img src="/images/Vanprastha-NGO-logo.png" alt="Vanprastha Foundation logo" />
        <div className="brand-name">{t.brandName}</div>
      </div>

      <button className="mobile-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation menu">
        <span />
        <span />
        <span />
      </button>

      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
        {t.navLinks.map((link) => {
          let isActive = false
          let targetView = 'home'
          if (link.href.includes('initiatives.html')) {
            isActive = view === 'initiatives'
            targetView = 'initiatives'
          } else if (link.href.includes('transparency.html')) {
            isActive = view === 'governance'
            targetView = 'governance'
          } else if (link.href.includes('media.html')) {
            isActive = view === 'media'
            targetView = 'media'
          } else if (link.href.includes('awards.html')) {
            isActive = view === 'awards'
            targetView = 'awards'
          } else if (link.href.includes('faq.html')) {
            isActive = view === 'faq'
            targetView = 'faq'
          } else {
            isActive = view === 'home'
            targetView = 'home'
          }
          return (
            <a
              key={link.label}
              href={link.href}
              className={isActive ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                navigateTo(link.href, targetView)
              }}
            >
              {link.label}
            </a>
          )
        })}
        <button
          className="lang-toggle-btn"
          onClick={() => {
            setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
            setMenuOpen(false);
          }}
          aria-label="Change Language"
        >
          <span className={lang === 'en' ? 'active-lang' : ''}>EN</span>
          <span className="lang-divider">|</span>
          <span className={lang === 'hi' ? 'active-lang' : ''}>हिं</span>
        </button>
      </nav>

      <a 
        href="founder.html" 
        className="mx-4 text-base font-bold text-[#1a2512] hover:text-[#5b6e4b] transition-colors whitespace-nowrap"
        style={{ textDecoration: 'none' }}
        onClick={(e) => {
          e.preventDefault();
          navigateTo('founder.html', 'founder');
        }}
      >
        {lang === 'en' ? 'Our Founder' : 'हमारे संस्थापक'}
      </a>

      <a
        className="donate-btn"
        href="contribute.html"
        onClick={(e) => {
          e.preventDefault()
          navigateTo('contribute.html', 'contribute')
        }}
      >
        {t.donate}
      </a>
    </header>
  );
}
