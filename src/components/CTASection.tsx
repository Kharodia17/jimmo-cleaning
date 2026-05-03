import { Link } from 'react-router-dom'

const WA_LINK = 'https://wa.me/27795745177?text=Hi%20Jimmo!%20I%27d%20like%20to%20get%20a%20quote.'

const WA_ICON = (
  <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current">
    <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.619 4.56 1.7 6.48L2.667 29.333l7.027-1.68A13.275 13.275 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm6.08 16c-.333-.16-1.973-.96-2.28-1.067-.307-.107-.52-.16-.747.16-.213.32-.84 1.067-.987 1.28-.16.213-.32.24-.64.08-.333-.16-1.4-.507-2.667-1.627-.987-.88-1.653-1.973-1.84-2.293-.187-.333-.02-.52.147-.68.147-.133.333-.36.507-.533.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.747-1.84-1.027-2.52-.267-.653-.547-.56-.747-.573-.187-.013-.413-.013-.627-.013-.213 0-.573.08-.88.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.107 1.307 3.32c.16.213 2.253 3.44 5.44 4.827.76.32 1.36.52 1.813.667.76.24 1.453.2 2 .12.613-.08 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.627-.373z"/>
  </svg>
)

interface CTASectionProps {
  heading?: string
  subtext?: string
}

export default function CTASection({
  heading = 'Ready for a Pristine Space?',
  subtext = 'Get a transparent, no-obligation quote — tailored to your facility\'s specific needs and delivered within 24 hours.',
}: CTASectionProps) {
  return (
    <section className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] overflow-hidden relative reveal-scale">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-tertiary opacity-90" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 px-8 md:px-16 py-20 flex flex-col md:flex-row items-center gap-12 md:gap-20 justify-between">
          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-4 tracking-tight">
              {heading}
            </h2>
            <p className="text-primary-fixed text-lg max-w-xl leading-relaxed">
              {subtext}
            </p>
            <p className="mt-4 font-label text-sm text-white/50">
              Join 50+ Gauteng businesses. Response within 24 hours.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 flex-shrink-0 w-full md:w-auto">
            <Link
              to="/contact"
              className="bg-white text-primary px-10 py-4 rounded-2xl font-headline font-bold text-lg hover:bg-primary-fixed transition-colors text-center shadow-xl hover:scale-[1.02] transition-all duration-200 whitespace-nowrap"
            >
              Get a Free Quote
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-10 py-4 rounded-2xl font-headline font-bold text-lg hover:bg-[#1ebe5d] transition-colors whitespace-nowrap"
            >
              {WA_ICON}
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
