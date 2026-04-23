import { Link } from 'react-router-dom'

const WA_LINK = 'https://wa.me/27795745177?text=Hi%20Jimmo!'

export default function Footer() {
  return (
    <footer className="w-full rounded-t-3xl mt-20 bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">

        {/* Brand col */}
        <div className="space-y-6 md:col-span-1">
          <div className="text-lg font-bold text-cyan-800 font-headline">Jimmo Cleaning Services</div>
          <p className="text-slate-500 font-label text-sm leading-relaxed">
            South Africa's premier commercial cleaning partner — raising the bar for hygiene and professionalism across Johannesburg, Pretoria, Cape Town and Durban since 2015.
          </p>

          {/* Contact snippets */}
          <div className="space-y-2 font-label text-xs text-slate-500">
            <p>📍 6 Oxford Crescent, Lenasia South, Gauteng</p>
            <p>📞 011 211 0452 &nbsp;|&nbsp; 079 574 5177</p>
            <p>✉️ info@jimmocleaning.co.za</p>
          </div>

          {/* Social + WhatsApp */}
          <div className="flex items-center space-x-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity" style={{ background: '#25D366' }}>
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-white"><path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.619 4.56 1.7 6.48L2.667 29.333l7.027-1.68A13.275 13.275 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm6.08 16c-.333-.16-1.973-.96-2.28-1.067-.307-.107-.52-.16-.747.16-.213.32-.84 1.067-.987 1.28-.16.213-.32.24-.64.08-.333-.16-1.4-.507-2.667-1.627-.987-.88-1.653-1.973-1.84-2.293-.187-.333-.02-.52.147-.68.147-.133.333-.36.507-.533.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.747-1.84-1.027-2.52-.267-.653-.547-.56-.747-.573-.187-.013-.413-.013-.627-.013-.213 0-.573.08-.88.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.107 1.307 3.32c.16.213 2.253 3.44 5.44 4.827.76.32 1.36.52 1.813.667.76.24 1.453.2 2 .12.613-.08 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.627-.373z"/></svg>
            </a>
            <span className="material-symbols-outlined text-cyan-700 cursor-pointer hover:opacity-80">public</span>
            <a href="mailto:info@jimmocleaning.co.za" className="material-symbols-outlined text-cyan-700 hover:opacity-80">mail</a>
          </div>
        </div>

        {/* Company */}
        <div className="space-y-6">
          <h5 className="font-headline font-bold text-on-surface">Company</h5>
          <nav className="flex flex-col space-y-3 font-label text-sm">
            <Link to="/about" className="text-slate-500 hover:text-cyan-600 transition-colors">About Us</Link>
            <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors">Careers</a>
            <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors">Partners</a>
            <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors">News &amp; Blog</a>
          </nav>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h5 className="font-headline font-bold text-on-surface">Services</h5>
          <nav className="flex flex-col space-y-3 font-label text-sm">
            <Link to="/services" className="text-slate-500 hover:text-cyan-600 transition-colors">Commercial Cleaning</Link>
            <Link to="/services" className="text-slate-500 hover:text-cyan-600 transition-colors">Industrial Facilities</Link>
            <Link to="/services" className="text-slate-500 hover:text-cyan-600 transition-colors">Specialised Care</Link>
            <Link to="/contact" className="text-slate-500 hover:text-cyan-600 transition-colors">Request a Quote</Link>
          </nav>
        </div>

        {/* Legal / Contact */}
        <div className="space-y-6">
          <h5 className="font-headline font-bold text-on-surface">Legal</h5>
          <nav className="flex flex-col space-y-3 font-label text-sm">
            <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors">POPIA Compliance</a>
            <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors">FAQ</a>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-8 pb-8 flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-8 gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-500 font-label text-xs">
          <p>© 2025 Jimmo Cleaning Services (Pty) Ltd. All rights reserved.</p>
          <span className="hidden sm:block">·</span>
          <p>P.O. Box 4615, Vanderbijlpark · Gauteng, South Africa</p>
        </div>
        <div className="flex items-center gap-2 font-label text-xs font-semibold">
          <span className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container font-bold">B-BBEE Level 1</span>
          <span className="text-slate-400">·</span>
          <div className="flex items-center gap-1 text-cyan-700">
            <span className="material-symbols-outlined text-sm">language</span>
            <span>English (South Africa)</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
