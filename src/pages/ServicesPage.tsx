import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import { useScrollReveal } from '../hooks/useScrollReveal'

const serviceCategories = [
  {
    icon: 'home',
    label: 'Residential Cleaning',
    accent: 'text-[#007A87]',
    bg: 'bg-primary/8',
    services: [
      'Regular house cleaning (weekly, bi-weekly, monthly)',
      'Deep cleaning',
      'Move-in / move-out cleaning',
      'Post-renovation cleaning',
      'Apartment & townhouse cleaning',
      'Carpet & upholstery cleaning',
      'Window cleaning',
    ],
  },
  {
    icon: 'business',
    label: 'Commercial Cleaning',
    accent: 'text-[#007A87]',
    bg: 'bg-secondary-container/40',
    services: [
      'Office cleaning (daily / after-hours)',
      'Retail store cleaning',
      'Warehouse & factory cleaning',
      'School & daycare cleaning',
      'Medical facility cleaning',
      'Restaurant & kitchen cleaning',
      'Shopping centre cleaning',
    ],
  },
  {
    icon: 'sanitizer',
    label: 'Specialised Cleaning',
    accent: 'text-[#007A87]',
    bg: 'bg-primary/8',
    services: [
      'Carpet & rug cleaning',
      'Upholstery cleaning',
      'Mattress cleaning',
      'Curtain cleaning',
      'Tile & grout cleaning',
      'High-pressure washing (driveways, walls)',
      'Graffiti removal',
    ],
  },
  {
    icon: 'precision_manufacturing',
    label: 'Industrial Cleaning',
    accent: 'text-[#007A87]',
    bg: 'bg-secondary-container/40',
    services: [
      'Heavy-duty machinery cleaning',
      'Factory floor cleaning',
      'Oil & grease removal',
      'High-level cleaning (ceilings, beams)',
      'Post-construction site cleaning',
    ],
  },
  {
    icon: 'cleaning_services',
    label: 'Deep & One-Time Services',
    accent: 'text-[#007A87]',
    bg: 'bg-primary/8',
    services: [
      'Spring cleaning',
      'After-party cleaning',
      'End-of-tenancy cleaning',
      'Disaster cleaning (flood, fire, smoke)',
      'Hoarding cleanup',
    ],
  },
  {
    icon: 'eco',
    label: 'Eco-Friendly Cleaning',
    accent: 'text-[#007A87]',
    bg: 'bg-secondary-container/40',
    services: [
      'Green cleaning (non-toxic products)',
      'Allergy-sensitive cleaning',
      'Pet-safe cleaning options',
    ],
  },
  {
    icon: 'directions_car',
    label: 'Vehicle Cleaning',
    accent: 'text-[#007A87]',
    bg: 'bg-primary/8',
    services: [
      'Car interior cleaning',
      'Fleet cleaning (for companies)',
      'Car detailing (basic packages)',
    ],
  },
  {
    icon: 'vaccines',
    label: 'Sanitization & Disinfection',
    accent: 'text-[#007A87]',
    bg: 'bg-secondary-container/40',
    services: [
      'Fogging / disinfection services',
      'COVID-style sanitizing',
      'Germ control for offices & homes',
    ],
  },
  {
    icon: 'yard',
    label: 'Outdoor Cleaning',
    accent: 'text-[#007A87]',
    bg: 'bg-primary/8',
    services: [
      'Garden cleanups (basic)',
      'Patio & driveway cleaning',
      'Gutter cleaning',
      'Pool area cleaning',
    ],
  },
  {
    icon: 'add_task',
    label: 'Add-On / Support Services',
    accent: 'text-[#007A87]',
    bg: 'bg-secondary-container/40',
    services: [
      'Laundry & ironing',
      'Dishwashing services',
      'Organising & decluttering',
      'Basic prevention cleaning',
    ],
  },
  {
    icon: 'workspace_premium',
    label: 'Premium & Niche Services',
    accent: 'text-[#007A87]',
    bg: 'bg-primary/8',
    services: [
      'Airbnb / short-term rental turnover',
      'Event setup & cleanup',
      'Concierge cleaning services',
      'After-builders cleaning',
    ],
  },
]

export default function ServicesPage() {
  useScrollReveal()
  return (
    <main className="pt-24">

      {/* Hero */}
      <section className="px-6 md:px-8 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 hero-left">
            <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label text-sm font-semibold tracking-wide">
              OUR EXPERTISE
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-tight tracking-tighter">
              Pristine Care for Every Environment.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg font-body leading-relaxed">
              From heavy-duty industrial sites in Germiston to residential homes across Gauteng — we deliver an uncompromising hygiene standard tailored to every space.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Professionally Trained', '15+ Yrs Experience', 'Quality Assured', 'Eco-Friendly'].map((badge) => (
                <span key={badge} className="px-3 py-1.5 rounded-full bg-primary-fixed text-primary font-label text-xs font-bold uppercase tracking-wide">
                  {badge}
                </span>
              ))}
            </div>
            <Link to="/contact" className="shimmer-button inline-flex items-center gap-2 text-white px-8 py-4 rounded-2xl font-headline font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-200">
              Get a Free Quote
            </Link>
          </div>

          <div className="relative hero-right">
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Jimmo floor polishing specialist"
                className="w-full h-full object-cover"
                src="/gallery/WA0504-19.jpg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">verified</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-primary">15+ Years Experience</p>
                  <p className="text-xs text-on-surface-variant font-label">Trusted Gauteng Specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Service Menu */}
      <section className="py-24 px-6 md:px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 reveal">
            <p className="text-sm font-label font-bold text-secondary uppercase tracking-[0.2em] mb-3">Complete Offering</p>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tight mb-4">
              Everything We Clean
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              One call covers it all. Browse our full range of services and request a custom quote for exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.map(({ icon, label, bg, services }, i) => (
              <div
                key={label}
                className={`reveal delay-${Math.min(i % 3, 2) * 100 + 100} rounded-2xl border border-outline-variant/20 overflow-hidden bg-surface hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Card header */}
                <div className={`${bg} px-6 py-4 flex items-center gap-3`}>
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#007A87] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                  </div>
                  <h3 className="font-headline font-bold text-on-surface text-base">{label}</h3>
                </div>

                {/* Service list */}
                <ul className="px-6 py-5 space-y-2.5">
                  {services.map((service) => (
                    <li key={service} className="flex items-start gap-2.5 font-label text-sm text-on-surface-variant">
                      <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[#007A87]" style={{ fontSize: '12px', fontVariationSettings: "'FILL' 1" }}>check</span>
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="px-6 pb-5">
                  <Link to="/contact" className="text-[#007A87] font-label font-semibold text-xs flex items-center gap-1 hover:gap-2 transition-all">
                    Get a quote <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Cleaning */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1 reveal-left">
              <div className="relative">
                <div className="w-full aspect-square bg-surface-container-highest rounded-2xl overflow-hidden">
                  <img
                    alt="Industrial Cleaning Equipment"
                    className="w-full h-full object-contain p-6"
                    src="/gallery/vacuum.jpg"
                  />
                </div>
                <div className="absolute top-8 right-8 bg-primary text-white p-4 rounded-xl font-label font-bold text-center leading-tight">
                  Heavy Duty<br /><span className="text-2xl">24/7</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-8 order-1 md:order-2 reveal-right delay-200">
              <h2 className="text-4xl font-headline font-bold text-tertiary">Industrial Cleaning</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg font-body">
                We tackle the toughest SA industrial environments — manufacturing plants in Germiston, warehouses on the N3 corridor, and construction sites across Gauteng — with specialised machinery and an unwavering hygiene standard.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: 'factory', title: 'Precision Degreasing', desc: 'Removing heavy industrial residue, grease and contaminants safely using professional-grade machinery.' },
                  { icon: 'safety_check', title: 'Health & Safety First', desc: 'Our teams are trained in safe chemical handling and proper PPE use to protect your workforce at all times.' },
                  { icon: 'bolt', title: 'Always Operational', desc: 'We work around your shift schedule — day, night, or weekend — to cause zero disruption to your operations.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest">
                    <span className="material-symbols-outlined text-secondary">{icon}</span>
                    <div>
                      <h4 className="font-bold text-on-surface">{title}</h4>
                      <p className="text-sm text-on-surface-variant">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Cleaning */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-8 reveal-left">
              <h2 className="text-4xl font-headline font-bold text-primary">Commercial Cleaning</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg font-body">
                Elevate your professional image with a workplace that inspires confidence. Tailored for Sandton office parks, Pretoria's business districts, and East Rand commercial hubs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: 'eco', title: 'Eco-Conscious Cleaning', desc: 'Biodegradable, non-toxic agents that are better for your team and the environment.' },
                  { icon: 'schedule', title: 'Flexible Scheduling', desc: 'After-hours or intraday cleaning designed around your business hours and public holidays.' },
                  { icon: 'verified_user', title: 'Screened & Trusted Teams', desc: 'Every team member undergoes background checks and in-house training before entering your premises.' },
                  { icon: 'receipt_long', title: 'Professional Invoicing', desc: 'Detailed invoicing and monthly reporting to keep your records and management team informed.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="p-6 rounded-2xl bg-surface-bright border border-outline-variant/20">
                    <span className="material-symbols-outlined text-primary mb-4 block">{icon}</span>
                    <h4 className="font-bold mb-2">{title}</h4>
                    <p className="text-sm text-on-surface-variant">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 reveal-right delay-200">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
                <img
                  alt="Jimmo carpet cleaning"
                  className="w-full h-full object-cover"
                  src="/gallery/WA0504-21.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialised Services Bento */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4 reveal">
            <h2 className="text-4xl font-headline font-bold text-tertiary">Specialised Services</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Unique challenges demand expert solutions. We offer high-technical cleaning for South Africa's most demanding environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 reveal bg-surface-container-lowest rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden group min-h-[250px]">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img alt="" className="w-full h-full object-cover" src="/gallery/WA0504-23.jpg" />
              </div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">sanitizer</span>
              <h4 className="text-2xl font-bold mb-2">Medical Grade Sanitation</h4>
              <p className="text-on-surface-variant text-sm">
                Clinical sterilisation for private hospitals, dental practices, and medical laboratories across Gauteng.
              </p>
            </div>

            <div className="reveal delay-100 bg-primary text-on-primary rounded-2xl p-8 flex flex-col justify-center text-center min-h-[250px]">
              <span className="material-symbols-outlined text-4xl mb-4">window</span>
              <h4 className="text-xl font-bold mb-2">High-Rise Window Care</h4>
              <p className="text-primary-fixed-dim text-sm">
                Experienced teams equipped for external facade and high-rise window cleaning on Sandton's tallest commercial towers.
              </p>
            </div>

            <div className="reveal delay-200 bg-secondary-container rounded-2xl p-8 flex flex-col justify-end min-h-[250px]">
              <span className="material-symbols-outlined text-on-secondary-container text-4xl mb-4">shutter_speed</span>
              <h4 className="text-xl font-bold text-on-secondary-container mb-2">Rapid Response</h4>
              <p className="text-on-secondary-fixed-variant text-sm">
                Emergency flood recovery and post-event cleanup anywhere in Gauteng within 4 hours of your call.
              </p>
            </div>

            <div className="reveal delay-300 md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8">
              <div className="w-full sm:w-1/3 h-48 sm:h-full rounded-xl overflow-hidden flex-shrink-0">
                <img alt="Carpet Cleaning" className="w-full h-full object-cover" src="/gallery/WA0504-22.jpg" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">Upholstery &amp; Carpet Steam</h4>
                <p className="text-on-surface-variant text-sm mb-4">
                  Deep-fibre extraction and allergen removal for executive boardrooms, hotel lobbies, and high-traffic commercial lounges across Gauteng.
                </p>
                <Link to="/contact" className="text-primary font-bold text-sm flex items-center gap-2 group">
                  Get a Quote <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Ready for a Pristine Transformation?" subtext="Join Gauteng businesses that trust Jimmo for their most critical cleaning needs. Get a custom quote within 24 hours." />
    </main>
  )
}
