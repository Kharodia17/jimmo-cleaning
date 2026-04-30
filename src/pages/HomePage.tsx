import { useState } from 'react'
import { Link } from 'react-router-dom'
import Testimonials from '../components/Testimonials'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SA_CITIES = ['Johannesburg', 'Pretoria', 'East Rand', 'Vaal Triangle']

const galleryImages = [
  '/gallery/IMG-20260409-WA0045.jpg',
  '/gallery/IMG-20260409-WA0046.jpg',
  '/gallery/IMG-20260409-WA0050.jpg',
  '/gallery/IMG-20260409-WA0051.jpg',
  '/gallery/IMG-20260409-WA0052.jpg',
  '/gallery/IMG-20260409-WA0054.jpg',
]

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '100%', label: 'Gauteng Coverage' },
  { value: '500+', label: 'Businesses Served' },
  { value: '50+', label: 'Team Members' },
]

const trustBadges = [
  { icon: 'verified', text: '15+ Years Industry Experience' },
  { icon: 'schedule', text: '24/7 Emergency Response' },
  { icon: 'eco', text: 'Eco-Conscious' },
]

export default function HomePage() {
  const [email, setEmail] = useState('')
  useScrollReveal()

  return (
    <main className="pt-20">

      {/* Trust bar */}
      <div className="bg-primary text-on-primary py-2.5 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-1">
          {trustBadges.map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-xs font-label font-semibold tracking-wide whitespace-nowrap">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-surface-bright">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUswawe3hnUtGAbvmgv5SUsTdEgP841yhwcFpekb4yoOnt5l_hATyeAtTzXxZrcolfxa7E14zuPrKkmRAJS-yu04guywTTw9WBuLTxVmwmscsWewampW0vKPIlE5yyNh5UxWTtyNKRV9fYofGXj5FAN33RF65E1vKT3uGd1nEY8zlP97d2zgdAhaVCB8HjVPVHv0lmmqDxAmtnKposcQI0DHaqVUp0wAFM1o8U7dofLRYM5Rc3FZbIo9r2nJj8YKr3qzARAXW-ooU"
            alt="Modern office lobby"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          <div className="space-y-8 hero-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container font-label text-sm font-semibold tracking-wide uppercase">
              <span className="material-symbols-outlined text-sm mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              Proudly South African
            </div>

            <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-primary tracking-tight leading-[1.1]">
              Pristine Spaces,{' '}
              <br />
              <span className="text-tertiary">Professional Care.</span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl font-body leading-relaxed">
              Gauteng's premier commercial cleaning partner — serving Johannesburg, Pretoria and the East Rand with hospitality-grade standards your clients will notice.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="shimmer-button text-white px-8 py-4 rounded-2xl font-headline font-bold text-lg shadow-xl hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-200"
              >
                Get a Free Quote
              </Link>
              <a
                href="https://wa.me/27795745177?text=Hi%20Jimmo!%20I%27d%20like%20to%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-headline font-bold text-lg border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current"><path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.619 4.56 1.7 6.48L2.667 29.333l7.027-1.68A13.275 13.275 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm6.08 16c-.333-.16-1.973-.96-2.28-1.067-.307-.107-.52-.16-.747.16-.213.32-.84 1.067-.987 1.28-.16.213-.32.24-.64.08-.333-.16-1.4-.507-2.667-1.627-.987-.88-1.653-1.973-1.84-2.293-.187-.333-.02-.52.147-.68.147-.133.333-.36.507-.533.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.747-1.84-1.027-2.52-.267-.653-.547-.56-.747-.573-.187-.013-.413-.013-.627-.013-.213 0-.573.08-.88.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.107 1.307 3.32c.16.213 2.253 3.44 5.44 4.827.76.32 1.36.52 1.813.667.76.24 1.453.2 2 .12.613-.08 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.627-.373z"/></svg>
                WhatsApp Us
              </a>
            </div>

            {/* City chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {SA_CITIES.map((city) => (
                <span key={city} className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label text-xs font-medium">
                  📍 {city}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative hero-right">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transform translate-x-4 -translate-y-4">
              <img
                className="w-full aspect-[4/5] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKB4-nq2oShjIki6_lG3ODEVT8l0wlcjwSQeYsCO0SMFDp-8pA_KO9_6SctATPxKmFrfuuQXygODQcy4mACZ2S4O-27V3oatwtAgpY7vqbpCxjFmYd8gAM-WA0dm3BTKTsKYaZcPKlnNpN2V4lKtJxvegdOj51X2DW88fk9GfPeN-H6oi7SmxUD2THtbZBklfuTGWxRJok5IzpKgmmsjGrvcSXk2vRcLU91SoblRGPu5Zh396jBMj-KZSPXJyM9SYFtvAKGf1tHn0"
                alt="Professional cleaning equipment"
              />
            </div>
            <div className="absolute top-1/2 -left-12 z-20 glass-card p-8 rounded-2xl shadow-xl max-w-[240px]">
              <p className="text-primary font-headline font-extrabold text-4xl mb-1">99%</p>
              <p className="text-on-surface-variant font-label text-sm uppercase tracking-wider font-semibold">Client Retention Rate</p>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-surface-container-lowest border-y border-surface-container-high">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }, i) => (
            <div key={label} className={`text-center reveal delay-${i * 100 + 100}`}>
              <p className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-1">{value}</p>
              <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="mb-16 text-left max-w-2xl reveal">
          <h2 className="text-sm font-label font-bold text-secondary uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tight">
            Specialised Cleaning Solutions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 reveal delay-100 bg-surface-container-low rounded-2xl p-8 md:p-10 flex flex-col justify-between group hover:bg-surface-container-highest transition-colors duration-500 overflow-hidden relative min-h-[300px]">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">corporate_fare</span>
              <h4 className="text-3xl font-headline font-bold mb-4">Commercial Excellence</h4>
              <p className="text-on-surface-variant max-w-md mb-6">
                Premium janitorial services for corporate parks, high-end retail, and luxury offices across Sandton, Rosebank, and Midrand.
              </p>
              <ul className="space-y-3 font-label text-sm text-on-surface font-medium">
                {['After-Hours Discreet Maintenance', 'Eco-Conscious Disinfection', 'High-Traffic Surface Care'].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="material-symbols-outlined text-secondary mr-2 text-lg">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-2/3 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              <img className="w-full h-full object-cover rounded-tl-3xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlnpnN29JZAYWN9bw6jBHHFUWNj4o2_8Bh7wrbp8E34vXs4EzoyzSboJbhx-B3bz3rccLSg4ZaQbziTHWrd51ZVincj-7H-lYNYfiS2dcK-VbTrrWMeyj0rWOSf5bT5cehqfXI10sZ-9lcuqmWY6aZxmORZDjLU6h1Xzp5yS5ERbA6gGKetgrgjrvNuuAzeh38aE3ZIWSlLKwe4vUcCd95v8ybxqHkq5TeATqy_TnHPPKW8VdyxGd7sv8F4xUGLhnyWr_EeTBXCZA" alt="" />
            </div>
          </div>

          <div className="md:col-span-4 reveal delay-200 bg-primary text-on-primary rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[280px]">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6 block">factory</span>
              <h4 className="text-2xl font-headline font-bold mb-4 text-white">Industrial Precision</h4>
              <p className="text-primary-fixed font-body text-sm leading-relaxed">
                Handling warehouses, manufacturing plants, and mines across Germiston, Midrand, and the East Rand with full OHS compliance.
              </p>
            </div>
            <div className="mt-8 relative z-10">
              <Link to="/services" className="inline-flex items-center text-sm font-label font-bold uppercase tracking-widest text-primary-container hover:text-white transition-colors">
                Learn More <span className="material-symbols-outlined ml-2">arrow_right_alt</span>
              </Link>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-tertiary-container/20 rounded-full blur-2xl" />
          </div>

          <div className="md:col-span-4 reveal delay-300 bg-secondary-container rounded-2xl p-8 flex flex-col">
            <span className="material-symbols-outlined text-on-secondary-container text-3xl mb-4">sanitizer</span>
            <h4 className="text-xl font-headline font-bold text-on-secondary-container mb-2">Specialised Care</h4>
            <p className="text-on-secondary-fixed-variant text-sm font-body">
              Medical-grade sanitation, post-construction cleans, and high-rise window care — SABS compliant throughout.
            </p>
          </div>

          <div className="md:col-span-8 reveal delay-400 bg-surface-container-high rounded-2xl p-8 flex items-center justify-between group overflow-hidden">
            <div className="max-w-md">
              <h4 className="text-xl font-headline font-bold mb-2">Sustainable Practices</h4>
              <p className="text-on-surface-variant text-sm">
                We use non-toxic, biodegradable products compliant with South African environmental regulations — better for your team, better for our planet.
              </p>
            </div>
            <div className="flex-shrink-0 ml-6 transform group-hover:rotate-12 transition-transform duration-500">
              <span className="material-symbols-outlined text-6xl text-secondary opacity-40">eco</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Gallery */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl reveal">
          <h2 className="text-sm font-label font-bold text-secondary uppercase tracking-[0.2em] mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tight mb-4">
            See the Jimmo Difference
          </h3>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Real spaces. Real results. Every photo is from an actual Jimmo job site across Gauteng.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((src, i) => (
            <a
              key={i}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal-scale delay-${Math.min(i * 100, 500)} block rounded-2xl overflow-hidden aspect-square group shadow-sm hover:shadow-xl transition-shadow duration-300`}
            >
              <img
                src={src}
                alt={`Jimmo cleaning work ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Service Cities Strip — Gauteng only */}
      <section className="bg-on-surface py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center font-label text-xs font-bold uppercase tracking-[0.3em] text-inverse-on-surface/60 mb-10">
            Serving All of Gauteng
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: 'Johannesburg', areas: 'Sandton · Rosebank · Midrand · Fourways', icon: 'location_city' },
              { city: 'Pretoria', areas: 'Menlyn · Brooklyn · Centurion · Hatfield', icon: 'account_balance' },
              { city: 'East Rand', areas: 'Germiston · Boksburg · Ekurhuleni · Brakpan', icon: 'factory' },
              { city: 'Vaal Triangle', areas: 'Vanderbijlpark · Vereeniging · Sasolburg', icon: 'water' },
            ].map(({ city, areas, icon }, i) => (
              <div key={city} className={`text-center space-y-3 reveal delay-${i * 100 + 100}`}>
                <div className="w-12 h-12 rounded-xl bg-inverse-on-surface/10 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-inverse-on-surface/70 text-2xl">{icon}</span>
                </div>
                <h4 className="font-headline font-bold text-inverse-on-surface text-lg">{city}</h4>
                <p className="font-label text-xs text-inverse-on-surface/50 leading-relaxed">{areas}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — The Jimmo Standard */}
      <section className="bg-surface-container-lowest py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 reveal-left">
            <img
              className="rounded-2xl w-full aspect-square object-cover mt-8"
              src="https://images.pexels.com/photos/6195950/pexels-photo-6195950.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Professional cleaner"
            />
            <img
              className="rounded-2xl w-full aspect-square object-cover"
              src="https://images.pexels.com/photos/4108731/pexels-photo-4108731.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Detail cleaning"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-10 reveal-right delay-200">
            <div>
              <h2 className="text-sm font-label font-bold text-primary uppercase tracking-[0.2em] mb-4">The Jimmo Standard</h2>
              <h3 className="text-4xl font-headline font-bold text-on-surface mb-6">Why Gauteng's Top Businesses Trust Us</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Over 15 years serving Gauteng's commercial landscape has made us the preferred partner for organisations that treat cleanliness as a core part of their brand.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: 'groups', bg: 'bg-primary-fixed', color: 'text-primary', title: 'Trained & Competent Teams', desc: 'Every team member is rigorously trained, background-checked, and equipped with professional-grade cleaning equipment.' },
                { icon: 'update', bg: 'bg-secondary-fixed', color: 'text-secondary', title: 'Unmatched Reliability', desc: 'Real-time reporting and quality assurance checks after every single service visit, no exceptions.' },
                { icon: 'verified_user', bg: 'bg-tertiary-fixed', color: 'text-tertiary', title: '15 Years of Proven Excellence', desc: 'Over a decade and a half serving Gauteng\'s most demanding commercial environments — our track record speaks for itself.' },
              ].map(({ icon, bg, color, title, desc }) => (
                <div key={title} className="flex gap-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined ${color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-xl mb-1 text-on-surface">{title}</h4>
                    <p className="text-on-surface-variant font-body">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] overflow-hidden relative reveal-scale">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-tertiary opacity-90" />
          <div className="relative z-10 px-8 md:px-12 py-20 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white mb-6 tracking-tight">
              Ready for a Pristine Space?
            </h2>
            <p className="text-primary-fixed text-lg md:text-xl max-w-2xl mb-10">
              Get a transparent, no-obligation quote — tailored to your facility's specific needs and delivered within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-lg">
              <input
                className="flex-grow rounded-2xl border-none bg-white/10 text-white placeholder-white/60 focus:ring-2 focus:ring-white/30 px-6 py-4 outline-none"
                placeholder="Your Business Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-white text-primary px-8 py-4 rounded-2xl font-headline font-bold hover:bg-primary-fixed transition-colors whitespace-nowrap">
                Get My Quote
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 text-white/60 font-label text-sm">
              <span>Join 500+ SA businesses today.</span>
              <a
                href="https://wa.me/27795745177"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current"><path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.619 4.56 1.7 6.48L2.667 29.333l7.027-1.68A13.275 13.275 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm6.08 16c-.333-.16-1.973-.96-2.28-1.067-.307-.107-.52-.16-.747.16-.213.32-.84 1.067-.987 1.28-.16.213-.32.24-.64.08-.333-.16-1.4-.507-2.667-1.627-.987-.88-1.653-1.973-1.84-2.293-.187-.333-.02-.52.147-.68.147-.133.333-.36.507-.533.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.747-1.84-1.027-2.52-.267-.653-.547-.56-.747-.573-.187-.013-.413-.013-.627-.013-.213 0-.573.08-.88.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.107 1.307 3.32c.16.213 2.253 3.44 5.44 4.827.76.32 1.36.52 1.813.667.76.24 1.453.2 2 .12.613-.08 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.627-.373z"/></svg>
                Or WhatsApp us directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
