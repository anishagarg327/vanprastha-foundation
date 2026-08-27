import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Founder from './components/Founder'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import AcronymSection from './components/AcronymSection'
import InitiativesSection from './components/InitiativesSection'
import NarrativeView from './components/NarrativeView'
import HeroModal from './components/HeroModal'
import GovernanceView from './components/GovernanceView'
import MediaView from './components/MediaView'
import AwardsView from './components/AwardsView'
import FaqView from './components/FaqView'
import ContributeView from './components/ContributeView'
import VolunteerView from './components/VolunteerView'
import CTASection from './components/CTASection'

import './App.css'
import { content, stats } from './data/content'

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [counterValues, setCounterValues] = useState([0, 0, 0])
  const [menuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [lang, setLang] = useState('en')
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false)
  const [volunteerSubmitting, setVolunteerSubmitting] = useState(false)
  const statsRef = useRef(null)

  const getInitialView = () => {
    const path = window.location.pathname
    if (path.includes('initiatives.html')) return 'initiatives'
    if (path.includes('transparency.html')) return 'governance'
    if (path.includes('media.html')) return 'media'
    if (path.includes('awards.html')) return 'awards'
    if (path.includes('faq.html')) return 'faq'
    if (path.includes('medical-camp.html') || path.includes('medical-camp')) return 'medical-camp'
    if (path.includes('punarjeevan.html') || path.includes('punarjeevan')) return 'punarjeevan'
    if (path.includes('pathshala.html') || path.includes('pathshala')) return 'pathshala'
    if (path.includes('sanitary-drive.html') || path.includes('sanitary-drive')) return 'sanitary-drive'
    if (path.includes('cleanliness-drive.html') || path.includes('cleanliness-drive') || path.includes('cleanliness')) return 'cleanliness-drive'
    if (path.includes('contribute.html') || path.includes('contribute') || path.includes('donate')) return 'contribute'
    if (path.includes('volunteer.html') || path.includes('volunteer')) return 'volunteer'
    if (path.includes('founder.html') || path.includes('founder')) return 'founder'
    return 'home'
  }
  const [view, setView] = useState(getInitialView)

  useEffect(() => {
    const handlePopState = () => {
      setView(getInitialView())
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateTo = (path, viewName) => {
    window.history.pushState({}, '', path)
    setView(viewName)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const t = content[lang]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 5)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (view !== 'home' || !statsRef.current) return
    setCounterValues([0, 0, 0])
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
      { threshold: 0.1 }
    )
    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [view])

  return (
    <div className="app-shell">
      <Header
        t={t}
        view={view}
        navigateTo={navigateTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        lang={lang}
        setLang={setLang}
      />

      <main className="main-content">
        {view === 'home' && (
          <>
            <HeroSection
              t={t}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
              setIsModalOpen={setIsModalOpen}
              statsRef={statsRef}
              counterValues={counterValues}
            />
            <AboutSection t={t} />
            <AcronymSection t={t} />
          </>
        )}

        {view === 'founder' && <Founder />}

        {view === 'initiatives' && (
          <InitiativesSection t={t} lang={lang} navigateTo={navigateTo} />
        )}

        {['medical-camp', 'punarjeevan', 'pathshala', 'sanitary-drive', 'cleanliness-drive'].includes(view) && (
          <NarrativeView t={t} view={view} />
        )}

        {view === 'governance' && <GovernanceView t={t} lang={lang} />}

        {view === 'media' && <MediaView lang={lang} />}

        {view === 'awards' && <AwardsView lang={lang} />}

        {view === 'faq' && <FaqView t={t} lang={lang} />}

        {view === 'contribute' && <ContributeView lang={lang} />}

        {view === 'volunteer' && (
          <VolunteerView
            lang={lang}
            volunteerSubmitted={volunteerSubmitted}
            setVolunteerSubmitted={setVolunteerSubmitted}
            volunteerSubmitting={volunteerSubmitting}
            setVolunteerSubmitting={setVolunteerSubmitting}
          />
        )}

        {!['contribute', 'volunteer'].includes(view) && (
          <CTASection t={t} navigateTo={navigateTo} />
        )}
      </main>

      <Footer t={t} />

      <AnimatePresence>
        {isModalOpen && (
          <HeroModal
            t={t}
            activeSlide={activeSlide}
            setIsModalOpen={setIsModalOpen}
            navigateTo={navigateTo}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
