import { Link } from 'react-router-dom'

const WA_LINK = 'https://wa.me/27795745177?text=Hi%20Jimmo!'

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-12 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Brand col — spans 4 columns */}
        <div className="md:col-span-4 space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.jpg"
              alt="Jimmo Cleaning Services"
              className="h-24 w-24 rounded-2xl object-contain bg-white p-2 shadow-lg"
            />
            <div>
              <p className="font-headline font-extrabold text-2xl tracking-widest text-white">JIMMO</p>
              <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#009BAA] mt-0.5">
                Cleaning Services
              </p>
            </div>
          </div>

          <p className="text-slate-400 font-label text-sm leading-relaxed max-w-xs">
            Gauteng's premier commercial cleaning partner — raising the bar for hygiene and
            professionalism across Johannesburg, Pretoria and the East Rand since 2015.
          </p>

          {/* Contact snippets */}
          <div className="space-y-2.5 font-label text-sm text-slate-400">
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#009BAA] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              6 Oxford Crescent, Lenasia South, Gauteng
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#009BAA] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              011 211 0452 &nbsp;|&nbsp; 079 574 5177
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#009BAA] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
              info@jimmocleaning.co.za
            </p>
          </div>

          {/* Social / WhatsApp */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl font-label font-semibold text-sm border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-200"
            >
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current">
                <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.619 4.56 1.7 6.48L2.667 29.333l7.027-1.68A13.275 13.275 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm6.08 16c-.333-.16-1.973-.96-2.28-1.067-.307-.107-.52-.16-.747.16-.213.32-.84 1.067-.987 1.28-.16.213-.32.24-.64.08-.333-.16-1.4-.507-2.667-1.627-.987-.88-1.653-1.973-1.84-2.293-.187-.333-.02-.52.147-.68.147-.133.333-.36.507-.533.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.747-1.84-1.027-2.52-.267-.653-.547-.56-.747-.573-.187-.013-.413-.013-.627-.013-.213 0-.573.08-.88.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.107 1.307 3.32c.16.213 2.253 3.44 5.44 4.827.76.32 1.36.52 1.813.667.76.24 1.453.2 2 .12.613-.08 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.627-.373z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:info@jimmocleaning.co.za"
              className="w-9 h-9 rounded-xl border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#009BAA] hover:border-[#009BAA] transition-colors"
            >
              <span className="material-symbols-outlined text-base">mail</span>
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="md:col-span-2 space-y-6">
          <h5 className="font-headline font-bold text-white text-sm uppercase tracking-widest">Company</h5>
          <nav className="flex flex-col space-y-3 font-label text-sm">
            <Link to="/about" className="text-slate-400 hover:text-[#009BAA] transition-colors">About Us</Link>
            <a href="#" className="text-slate-400 hover:text-[#009BAA] transition-colors">Careers</a>
            <a href="#" className="text-slate-400 hover:text-[#009BAA] transition-colors">Partners</a>
            <a href="#" className="text-slate-400 hover:text-[#009BAA] transition-colors">News &amp; Blog</a>
          </nav>
        </div>

        {/* Services */}
        <div className="md:col-span-3 space-y-6">
          <h5 className="font-headline font-bold text-white text-sm uppercase tracking-widest">Services</h5>
          <nav className="flex flex-col space-y-3 font-label text-sm">
            <Link to="/services" className="text-slate-400 hover:text-[#009BAA] transition-colors">Commercial Cleaning</Link>
            <Link to="/services" className="text-slate-400 hover:text-[#009BAA] transition-colors">Industrial Facilities</Link>
            <Link to="/services" className="text-slate-400 hover:text-[#009BAA] transition-colors">Specialised Care</Link>
            <Link to="/contact" className="text-slate-400 hover:text-[#009BAA] transition-colors">Request a Quote</Link>
          </nav>
        </div>

        {/* Legal */}
        <div className="md:col-span-3 space-y-6">
          <h5 className="font-headline font-bold text-white text-sm uppercase tracking-widest">Compliance</h5>
          <nav className="flex flex-col space-y-3 font-label text-sm">
            <a href="#" className="text-slate-400 hover:text-[#009BAA] transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-[#009BAA] transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-[#009BAA] transition-colors">POPIA Compliance</a>
            <a href="#" className="text-slate-400 hover:text-[#009BAA] transition-colors">FAQ</a>
          </nav>

          {/* Trust badges */}
          <div className="pt-4 space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#007A87]/20 text-[#009BAA] font-label text-xs font-bold">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              15+ Yrs Experience
            </span>
            <div className="flex items-center gap-2 font-label text-xs text-slate-500">
              <span className="material-symbols-outlined text-sm">language</span>
              <span>English (South Africa)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="border-t border-slate-800" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-label text-xs text-slate-500">
          © {new Date().getFullYear()} Jimmo Cleaning Services (Pty) Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-3 font-label text-xs text-slate-600">
          <span>P.O. Box 4615, Vanderbijlpark</span>
          <span>·</span>
          <span>
            Developed by{' '}
            <a
              href="https://smarkit.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#009BAA] hover:text-white transition-colors font-semibold"
            >
              SMARKIT
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
