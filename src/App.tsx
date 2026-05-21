import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Jimmo Cleaning Services',
  description:
    "Gauteng's premier commercial and industrial cleaning company. Serving Johannesburg, Pretoria, East Rand and Vaal Triangle since 2015.",
  url: 'https://jimmo-cleaning.web.app',
  logo: 'https://jimmo-cleaning.web.app/logo.jpg',
  telephone: ['+27112110452', '+27795745177'],
  email: 'info@jimmocleaning.co.za',
  foundingDate: '2015',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6 Oxford Crescent',
    addressLocality: 'Lenasia South',
    addressRegion: 'Gauteng',
    postalCode: '1820',
    addressCountry: 'ZA',
  },
  areaServed: [
    { '@type': 'City', name: 'Johannesburg' },
    { '@type': 'City', name: 'Pretoria' },
    { '@type': 'City', name: 'Germiston' },
    { '@type': 'City', name: 'Vanderbijlpark' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
  ],
  sameAs: ['https://wa.me/27627643270'],
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
          <ScrollToTop />

          {/* Global LocalBusiness structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />

          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          <WhatsAppFAB />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}
