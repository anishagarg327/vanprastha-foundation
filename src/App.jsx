import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

const navLinks = [
  { label: 'Home', href: 'index.html' },
  { label: 'Initiatives', href: 'initiatives.html' },
  { label: 'Governance', href: 'transparency.html' },
  { label: 'Media', href: 'media.html' },
  { label: 'Awards', href: 'awards.html' },
  { label: 'FAQ', href: 'faq.html' },
]

const heroSlides = [
  {
    title: 'Project Punarjeevan: Forest Restoration',
    text: 'Reviving the Himalayan forests near Kukuchhina by planting native endemic species.',
    image: '/images/punarjeevan1.jpg',
    tag: 'Environment',
    link: 'punarjeevan.html',
    detailedDescription: 'Project Punarjeevan is a dedicated forest restoration initiative aiming to reclaim degraded forest lands in the Kumaon region of the Himalayas. By partnering with local community groups and forestry experts, we plant native, fire-resistant, and soil-enriching broadleaf tree species such as Oak, Rhododendron, and Alder. These efforts prevent devastating wildfires, improve local water catchment basins, restore wildlife habitats, and create sustainable forest-based livelihoods for local mountain communities.',
    gallery: ['/images/kumaoni women.jpg', '/images/punarjeevan1.jpg']
  },
  {
    title: 'Masti Ki Pathshala for Rural Children',
    text: 'Inspiring young minds through interactive weekend schooling led by dedicated mentors.',
    image: '/images/education.jpg',
    tag: 'Education',
    link: 'pathshala.html',
    detailedDescription: 'Masti Ki Pathshala provides a dynamic, non-formal learning ecosystem for underprivileged children in remote mountain villages. Our weekend curriculum focuses on project-based learning, basic science experiments, conversational English, creative arts, and environmental awareness. Through interactive storytelling, games, and mentorship by dedicated volunteers, we aim to bridge the educational gap, instilling curiosity, confidence, and a lifelong love for learning in young rural minds.',
    gallery: ['/images/klkhatterclass1.jpg', '/images/klkhatterclass2.jpg']
  },
  {
    title: 'Community Cleanliness Drives',
    text: 'Local women leading the restoration of forest health and village sanitation through collective action.',
    image: '/images/cleanliness_1.jpg',
    tag: 'Health',
    link: 'cleanliness-drive.html',
    detailedDescription: 'Our community cleanliness campaigns focus on waste management, plastic reduction, and public sanitation in local Kumaon villages. Run entirely by passionate local women collectives (Mahila Mangal Dals), the drives focus on cleaning up critical water springs, forest pathways, and village surroundings. We distribute color-coded waste bins, set up decentralized composting units, and organize workshops on waste segregation to build long-term environmental hygiene habits.',
    gallery: ['/images/cleanliness_2.jpg', '/images/kumaoni women.jpg']
  },
  {
    title: 'Sanitary Pads Distribution',
    text: 'Empowering rural women with hygiene awareness and dignity through interactive sessions.',
    image: '/images/menstrual_hygiene_2.jpg',
    tag: "Women's Health",
    link: 'sanitary-drive.html',
    detailedDescription: 'This menstrual hygiene drive goes beyond product distribution. We run comprehensive educational sessions in rural high schools and village health centers to break age-old taboos surrounding menstruation. By distributing high-quality, biodegradable sanitary pads and eco-friendly disposal bags, we ensure safety and dignity. We also conduct health check-ups and distribute iron supplements to address prevalent adolescent anemia in Himalayan communities.',
    gallery: ['/images/menstrual_hygiene_1.jpg', '/images/menstrual_hygiene_4.jpg']
  },
  {
    title: 'Free Medical & Dental Camp',
    text: 'Bringing essential, free healthcare, dental check-ups, and medicines to remote Himalayan communities.',
    image: '/images/medical_camp_5.jpg',
    tag: 'Health Outreach',
    link: 'medical-camp.html',
    detailedDescription: 'In remote mountain regions, access to professional healthcare is extremely limited. Our medical camps bring general physicians, dentists, pediatricians, and gynecologists directly to villages. We provide free consultations, perform basic diagnostic tests (blood glucose, blood pressure, ECG), and distribute essential medicines. We also carry out dental hygiene workshops for local children, ensuring health equity and preventative medical support for all.',
    gallery: ['/images/medical_camp_1.jpg', '/images/medical_camp_2.jpg']
  }
]

const stats = [
  {
    category: 'Ecosystem Restoration',
    label: '500+ trees planted',
    target: 500,
    displaySuffix: '+',
    description: 'Reviving forests ravaged by summer wildfires near Kukuchhina and Dunagiri by planting native, endemic tree varieties.',
    color: '#7c2d12',
  },
  {
    category: 'Women Empowerment',
    label: '1000+ women benefited',
    target: 1000,
    displaySuffix: '+',
    description: 'Empowered and employed with livelihood opportunities and comprehensive hygiene awareness.',
    color: '#0f766e',
  },
  {
    category: 'Rural Rejuvenation',
    label: '10 villages adopted',
    target: 10,
    description: 'Transforming lives through holistic development, inclusive progress, and dedicated infrastructure support.',
    color: '#0f766e',
  },
]

const initiatives = [
  {
    title: 'Free Medical & Dental Camp',
    category: 'Health Outreach · Completed',
    description: 'A landmark collaboration bringing essential primary healthcare, dental services, and free medicines to over 1,000 patients in remote Himalayan communities.',
    href: 'medical-camp.html',
    image: '/images/medical_camp_5.jpg',
    prominent: true,
  },
  {
    title: 'Project Punarjeevan',
    category: 'Ecosystem Restoration',
    description: 'Reviving forests ravaged by summer wildfires near Kukuchhina and Dunagiri through systematic plantation of native, endemic tree species.',
    href: 'punarjeevan.html',
    image: '/images/punarjeevan1.jpg',
    cta: 'Support Afforestation',
    ctaHref: 'contribute.html',
    hero: true,
  },
  {
    title: 'Masti Ki Pathshala',
    category: 'Education',
    description: 'Inspiring village children through holistic growth, engaging weekend schooling, and school supply distribution led by dedicated volunteer mentors.',
    href: 'pathshala.html',
    images: ['/images/klkhatterclass1.jpg', '/images/klkhatterclass2.jpg'],
  },
  {
    title: 'Sanitary Pads Distribution',
    category: "Women's Health",
    description: 'Empowering over 100 rural women with menstrual hygiene awareness, dignity, and essential sanitary products through interactive community sessions.',
    href: 'sanitary-drive.html',
    images: ['/images/menstrual_hygiene_2.jpg', '/images/menstrual_hygiene_1.jpg'],
  },
]

const acronymItems = [
  { letter: 'V', title: 'Village Awareness', description: 'Cultivating civic consciousness and health literacy in rural communities.' },
  { letter: 'A', title: 'Afforestation', description: 'Restoring forest cover through systematic plantation of native endemic species.' },
  { letter: 'N', title: 'Nature Protection', description: 'Safeguarding biodiversity and natural ecosystems for future generations.' },
  { letter: 'P', title: 'Protection of Resources', description: 'Advocating for sustainable use of water, land, and natural heritage.' },
  { letter: 'R', title: 'Rural Rejuvenation', description: 'Transforming underserved villages through integrated development initiatives.' },
  { letter: 'A', title: 'Action-Oriented', description: 'Delivering measurable, ground-level impact over rhetoric.' },
  { letter: 'S', title: 'Sustainability', description: 'Embedding long-term ecological and social resilience into every programme.' },
  { letter: 'T', title: 'Tradition', description: 'Honouring indigenous knowledge and Kumaoni cultural heritage as foundations of change.' },
  { letter: 'H', title: 'Harmony', description: 'Fostering peaceful coexistence between human communities and the natural world.' },
  { letter: 'A', title: 'Accountability', description: 'Upholding the highest standards of transparency, governance, and fiduciary responsibility.' },
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [counterValues, setCounterValues] = useState([0, 0, 0])
  const [menuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!statsRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const duration = 1200
          const startTime = performance.now()
          const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1)
            setCounterValues(stats.map((stat) => Math.round(stat.target * progress)))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
          observer.disconnect()
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <img src="/images/Vanprastha-NGO-logo.png" alt="Vanprastha Foundation logo" />
          <div className="brand-name">Vanprastha Foundation</div>
        </div>

        <button className="mobile-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation menu">
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="donate-btn" href="contribute.html">
          Donate
        </a>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-background-elements">
            <div className="floating-item stethoscope">🩺</div>
            <div className="floating-item syringe">💉</div>
            <div className="floating-item eco-seed">🌱</div>
            <div className="floating-item spark">✨</div>
          </div>
          <div className="hero-carousel">
            <div className="carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {heroSlides.map((slide) => (
                <article className="carousel-slide" key={slide.title}>
                  <img src={slide.image} alt={slide.title} />
                </article>
              ))}
            </div>
            <div className="carousel-dots" aria-label="Carousel navigation">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  className={index === activeSlide ? 'dot active' : 'dot'}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="hero-info-card">
              <span>{heroSlides[activeSlide].tag}</span>
              <h3>{heroSlides[activeSlide].title}</h3>
              <p>{heroSlides[activeSlide].text}</p>
              <button onClick={() => setIsModalOpen(true)}>Explore this story</button>
            </div>
          </div>

          <aside className="hero-panel" ref={statsRef}>
            <span className="panel-eyebrow">Our mission</span>
            <h2>Holistic development, rooted in nature.</h2>
            <p>
              Vanprastha Foundation works at the intersection of ecology, education, and rural livelihoods to
              uplift Himalayan communities through sustainable, community-led programs.
            </p>
            <div className="stats-grid">
              {stats.map((item, index) => {
                const value = counterValues[index]
                const displayValue = item.displaySuffix && value === item.target ? `${value}${item.displaySuffix}` : value
                return (
                  <div key={item.label} className="stat-card" style={{ borderLeftColor: item.color }}>
                    <span className="stat-category">{item.category}</span>
                    <strong>{item.label}</strong>
                    <p>{item.description}</p>
                  </div>
                )
              })}
            </div>
          </aside>
        </section>

        <section className="about-section">
          <div className="about-image">
            <img src="/images/kumaoni women.jpg" alt="Rural Women of Kumaon" />
            <div className="about-overlay">
              <h2>Holistic Development, Rooted in Nature.</h2>
            </div>
          </div>
          <div className="about-copy">
            <span className="eyebrow">About the Foundation</span>
            <h3>
              Vanprastha Foundation is a registered non-profit organisation committed to the{' '}
              <span>holistic and sustainable development</span> of the Garhwal and Kumaon regions of Uttarakhand.
            </h3>
            <p>
              Established with the conviction that environmental stewardship and community empowerment are
              inseparable, we work at the intersection of ecology, education, and rural livelihoods. Our programmes
              address forest degradation, healthcare access, women's rights, and children's education.
            </p>
            <p>
              Guided by a deep respect for indigenous Kumaoni traditions and ecological responsibility, the
              Foundation bridges the wisdom of ancient mountain communities with the inclusive frameworks of modern
              development practice.
            </p>
          </div>
        </section>

        <article className="acronym-card">
          <div className="acronym-header">
            <span>What We Stand For</span>
            <p>V·A·N·P·R·A·S·T·H·A</p>
          </div>
          <div className="acronym-grid">
            {acronymItems.map((item) => (
              <div key={item.letter} className="acronym-item">
                <div className="acronym-letter">{item.letter}</div>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="acronym-footer">Leading with purpose in the heart of the Himalayas</div>
        </article>

        <section className="initiatives-section">
          <div className="section-title-group">
            <span>Ground Programmes</span>
            <div className="section-title-row">
              <h2>
                Our <span>Initiatives</span>
              </h2>
              <a href="initiatives.html">View All Initiatives</a>
            </div>
          </div>

          <div className="initiatives-grid">
            {initiatives.map((item) =>
              item.hero ? (
                <article key={item.title} className="initiative-hero">
                  <img src={item.image} alt={item.title} />
                  <div className="initiative-hero-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="initiative-hero-actions">
                      <a className="primary-link" href={item.href}>
                        Read Full Narrative
                      </a>
                      <a className="secondary-link" href={item.ctaHref}>
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
                    <a href={item.href}>Read full narrative</a>
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

        <section className="cta-section">
          <div className="cta-card">
            <h2>Support Our Mission</h2>
            <p>
              Your support helps us move closer to a sustainable, inclusive, and empowered future. Get your hands in the
              soil and your heart in the cause.
            </p>
            <div className="cta-actions">
              <a className="primary-btn" href="contribute.html">
                Contribute Now
              </a>
              <a className="secondary-btn" href="volunteer.html">
                Become a Volunteer
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-branding">
            <div>Vanprastha Foundation</div>
            <p>
              <span>Head Office: Village Ratkhal, PO Dunagiri, Dwarahat, Dist. Almora, Uttarakhand – 263653</span>
              <span>Branch Office: AD-13, LGF, Tagore Garden, New Delhi – 110027</span>
              <span>
                <a href="tel:+919289526777">+91 92895 26777</a>
              </span>
              <span>
                <a href="tel:+911145631889">011 4563 1889</a>
              </span>
            </p>
          </div>
          <div className="footer-links">
            <a href="transparency.html">Governance</a>
            <a href="faq.html">FAQ</a>
            <a href="media.html">Media</a>
          </div>
        </div>
        <div className="footer-note">© {new Date().getFullYear()} Vanprastha Foundation.</div>
      </footer>

      <AnimatePresence>
        {isModalOpen && (
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
                <h2>{heroSlides[activeSlide].title}</h2>
                <button
                  className="modal-close-btn"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </header>

              <div className="modal-body">
                {heroSlides[activeSlide].gallery && heroSlides[activeSlide].gallery.length > 0 && (
                  <div className="modal-gallery">
                    {heroSlides[activeSlide].gallery.map((imgUrl, i) => (
                      <img key={i} src={imgUrl} alt={`${heroSlides[activeSlide].title} gallery ${i + 1}`} />
                    ))}
                  </div>
                )}
                <div className="modal-text">
                  <p>{heroSlides[activeSlide].detailedDescription}</p>
                </div>
              </div>

              <footer className="modal-footer">
                <a className="modal-support-btn" href="contribute.html">
                  Support Us
                </a>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
