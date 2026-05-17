import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'

const WA_LINK = 'https://wa.me/27795745177?text=Hi%20Jimmo!%20I%27d%20like%20to%20get%20a%20quote.'

const EJS_SERVICE  = 'service_bz6xtip'
const EJS_TEMPLATE = 'template_dyjxxvn'
const EJS_KEY      = 'ngdAHDRhvfZzFbgDj'

const SERVICE_OPTIONS = [
  'Commercial Cleaning',
  'Residential Cleaning',
  'Industrial Cleaning',
  'Specialised / Deep Cleaning',
  'Sanitization & Disinfection',
  'Upholstery & Carpet Steam',
  'Post-Construction Clean',
  'Eco-Friendly Cleaning',
  'Vehicle Cleaning',
  'Outdoor Cleaning',
  'Rapid Response / Emergency',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', service: 'Commercial Cleaning', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      await emailjs.send(
        EJS_SERVICE,
        EJS_TEMPLATE,
        {
          from_name:  form.name,
          from_email: form.email,
          service:    form.service,
          message:    form.message,
          time:       new Date().toLocaleString('en-ZA', { dateStyle: 'medium', timeStyle: 'short' }),
        },
        { publicKey: EJS_KEY }
      )
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try WhatsApp instead.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <Helmet>
        <title>Get a Free Quote | Jimmo Cleaning Services</title>
        <meta name="description" content="Contact Jimmo Cleaning Services for a free, no-obligation quote. Serving all of Gauteng — Johannesburg, Pretoria, East Rand &amp; Vaal Triangle. Respond within 24 hours." />
        <link rel="canonical" href="https://jimmo-cleaning.web.app/contact" />
        <meta property="og:title" content="Get a Free Quote | Jimmo Cleaning Services" />
        <meta property="og:description" content="Contact Jimmo for a free quote. Johannesburg, Pretoria, East Rand &amp; Vaal Triangle. We respond within 24 hours." />
        <meta property="og:url" content="https://jimmo-cleaning.web.app/contact" />
      </Helmet>

      {/* Editorial Header */}
      <header className="mb-20 max-w-3xl">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-none mb-6">
          Let's curate your <span className="text-primary">perfect space.</span>
        </h1>
        <p className="font-body text-lg text-on-surface-variant leading-relaxed">
          Serving Johannesburg, Pretoria, the East Rand and the Vaal Triangle — our team responds within 24 hours with a custom quote. No obligation, no hidden costs.
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Contact Form */}
        <section className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline text-3xl font-bold mb-8">Send a Message</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-on-surface">Message Sent!</h3>
                <p className="text-on-surface-variant max-w-sm">
                  Thanks {form.name.split(' ')[0]}! We'll be in touch within 24 hours. For urgent queries, WhatsApp us directly.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 font-label font-bold text-white px-6 py-3 rounded-xl"
                  style={{ background: '#25D366' }}>
                  <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white"><path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.619 4.56 1.7 6.48L2.667 29.333l7.027-1.68A13.275 13.275 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm6.08 16c-.333-.16-1.973-.96-2.28-1.067-.307-.107-.52-.16-.747.16-.213.32-.84 1.067-.987 1.28-.16.213-.32.24-.64.08-.333-.16-1.4-.507-2.667-1.627-.987-.88-1.653-1.973-1.84-2.293-.187-.333-.02-.52.147-.68.147-.133.333-.36.507-.533.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.747-1.84-1.027-2.52-.267-.653-.547-.56-.747-.573-.187-.013-.413-.013-.627-.013-.213 0-.573.08-.88.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.107 1.307 3.32c.16.213 2.253 3.44 5.44 4.827.76.32 1.36.52 1.813.667.76.24 1.453.2 2 .12.613-.08 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.627-.373z"/></svg>
                  WhatsApp Us Now
                </a>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-sm font-semibold text-on-surface-variant px-1 block">Full Name</label>
                    <input name="name" required className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline outline-none" placeholder="Sipho Ndlovu" type="text" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-sm font-semibold text-on-surface-variant px-1 block">Email Address</label>
                    <input name="email" required className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline outline-none" placeholder="sipho@yourcompany.co.za" type="email" value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-sm font-semibold text-on-surface-variant px-1 block">Service Interest</label>
                  <select name="service" className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all appearance-none text-on-surface outline-none" value={form.service} onChange={handleChange}>
                    {SERVICE_OPTIONS.map(opt => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-sm font-semibold text-on-surface-variant px-1 block">Message</label>
                  <textarea name="message" required className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline outline-none resize-none" placeholder="Tell us about your space, frequency, and any special requirements…" rows={4} value={form.message} onChange={handleChange} />
                </div>

                {error && (
                  <p className="text-red-500 font-label text-sm">{error}</p>
                )}

                <button type="submit" disabled={submitting} className="w-full shimmer-button text-white py-4 rounded-2xl font-label font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-primary/10 disabled:opacity-70 flex items-center justify-center gap-2">
                  {submitting ? (
                    <><span className="material-symbols-outlined animate-spin text-lg">progress_activity</span> Sending…</>
                  ) : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </section>

        {/* Sidebar */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* WhatsApp Card – prominent */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-6 rounded-2xl text-white shadow-2xl hover:scale-[1.02] transition-transform"
            style={{ background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)' }}
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white"><path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.619 4.56 1.7 6.48L2.667 29.333l7.027-1.68A13.275 13.275 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm6.08 16c-.333-.16-1.973-.96-2.28-1.067-.307-.107-.52-.16-.747.16-.213.32-.84 1.067-.987 1.28-.16.213-.32.24-.64.08-.333-.16-1.4-.507-2.667-1.627-.987-.88-1.653-1.973-1.84-2.293-.187-.333-.02-.52.147-.68.147-.133.333-.36.507-.533.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.747-1.84-1.027-2.52-.267-.653-.547-.56-.747-.573-.187-.013-.413-.013-.627-.013-.213 0-.573.08-.88.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.107 1.307 3.32c.16.213 2.253 3.44 5.44 4.827.76.32 1.36.52 1.813.667.76.24 1.453.2 2 .12.613-.08 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.627-.373z"/></svg>
            </div>
            <div>
              <p className="font-headline font-bold text-lg">Chat on WhatsApp</p>
              <p className="text-white/80 font-label text-sm">+27 79 574 5177 · Typically replies within minutes</p>
            </div>
            <span className="material-symbols-outlined ml-auto">arrow_forward</span>
          </a>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {[
              {
                icon: 'location_on', iconBg: 'bg-primary-container/20 text-primary', label: 'Head Office',
                content: <p className="font-body text-on-surface font-medium leading-tight">6 Oxford Crescent, Lenasia South<br />Gauteng, South Africa<br /><span className="text-on-surface-variant text-xs">P.O. Box 4615, Vanderbijlpark</span></p>,
              },
              {
                icon: 'call', iconBg: 'bg-secondary-container/30 text-secondary', label: 'Direct Line',
                content: <div className="space-y-0.5"><p className="font-body text-on-surface font-medium text-lg">011 211 0452</p><p className="font-body text-on-surface-variant text-sm">079 574 5177 &nbsp;·&nbsp; 086 512 7677</p></div>,
              },
              {
                icon: 'mail', iconBg: 'bg-tertiary-container/20 text-tertiary', label: 'Email Us',
                content: <div className="space-y-0.5"><p className="font-body text-on-surface font-medium">info@jimmocleaning.co.za</p><p className="font-body text-on-surface-variant text-sm">jimmy@jimmocleaning.co.za</p></div>,
              },
              {
                icon: 'schedule', iconBg: 'bg-surface-container-high text-on-surface-variant', label: 'Office Hours',
                content: <p className="font-body text-on-surface font-medium text-sm">Mon–Fri 07:00–17:00<br /><span className="text-on-surface-variant">Emergency line: 24/7</span></p>,
              },
            ].map(({ icon, iconBg, label, content }) => (
              <div key={label} className="bg-surface-container-low rounded-2xl p-5 flex items-start gap-4 hover:bg-surface-container-high transition-colors">
                <div className={`p-3 rounded-xl ${iconBg} flex-shrink-0`}>
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </div>
                <div>
                  <p className="font-label text-xs font-bold uppercase tracking-wider text-outline mb-1">{label}</p>
                  {content}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-primary text-on-primary rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="relative z-10">
              <h3 className="font-headline text-2xl font-bold mb-4">Free Quote in 24 Hours</h3>
              <p className="font-body text-primary-fixed leading-relaxed mb-6">
                Receive a personalised care plan and VAT-inclusive quote for your South African premises — no obligation.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-label font-bold text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-all">
                Start on WhatsApp <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-9xl">auto_awesome</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <section className="lg:col-span-12 mt-4">
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="Jimmo Cleaning Services — Lenasia South"
              src="https://maps.google.com/maps?q=6+Oxford+Crescent,+Lenasia+South,+Gauteng,+South+Africa&output=embed&z=15"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 glass-card p-5 rounded-2xl max-w-xs border border-white/30 hidden md:block shadow-lg">
              <h4 className="font-headline font-bold text-on-surface mb-0.5">Lenasia South Office</h4>
              <p className="text-on-surface-variant text-sm mb-3">6 Oxford Crescent, Lenasia South, Gauteng</p>
              <a href="https://maps.google.com/?q=6+Oxford+Crescent+Lenasia+South+Gauteng" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-bold font-label text-sm hover:underline">
                Open in Google Maps <span className="material-symbols-outlined text-xs">open_in_new</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
