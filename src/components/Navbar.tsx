import { useState, useEffect } from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setDrawerOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-headline font-extrabold text-2xl tracking-widest text-[#007A87] group-hover:text-[#005B66] transition-colors duration-200">
              JIMMO
            </span>
            <span className="flex flex-col font-label text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 leading-tight pt-0.5">
              <span>Cleaning</span>
              <span>Services</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#007A87] font-bold border-b-2 border-[#007A87] pb-1 font-headline'
                    : 'text-slate-600 font-medium hover:text-[#009BAA] transition-colors font-headline'
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* WhatsApp link – desktop */}
            <a
              href="https://wa.me/27651293014?text=Hi%20Jimmo!"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-2xl font-label font-semibold text-sm border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-200"
            >
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current"><path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.619 4.56 1.7 6.48L2.667 29.333l7.027-1.68A13.275 13.275 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm6.08 16c-.333-.16-1.973-.96-2.28-1.067-.307-.107-.52-.16-.747.16-.213.32-.84 1.067-.987 1.28-.16.213-.32.24-.64.08-.333-.16-1.4-.507-2.667-1.627-.987-.88-1.653-1.973-1.84-2.293-.187-.333-.02-.52.147-.68.147-.133.333-.36.507-.533.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.747-1.84-1.027-2.52-.267-.653-.547-.56-.747-.573-.187-.013-.413-.013-.627-.013-.213 0-.573.08-.88.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.107 1.307 3.32c.16.213 2.253 3.44 5.44 4.827.76.32 1.36.52 1.813.667.76.24 1.453.2 2 .12.613-.08 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.627-.373z"/></svg>
              WhatsApp
            </a>

            <Link
              to="/contact"
              className="shimmer-button text-white px-5 py-2.5 rounded-2xl font-headline font-semibold shadow-lg hover:scale-95 transition-all duration-200 text-sm hidden sm:block"
            >
              Get a Quote
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded-xl text-on-surface hover:bg-surface-container-low transition-colors"
              aria-label="Toggle menu"
              onClick={() => setDrawerOpen((o) => !o)}
            >
              <span className="material-symbols-outlined text-2xl">
                {drawerOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Slide-in drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-surface-container-lowest shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-surface-container-high">
          <div className="flex items-center gap-2">
            <span className="font-headline font-extrabold text-xl tracking-widest text-[#007A87]">JIMMO</span>
            <span className="flex flex-col font-label text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 leading-tight pt-0.5">
              <span>Cleaning</span>
              <span>Services</span>
            </span>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-1.5 rounded-xl hover:bg-surface-container-low transition-colors"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-headline font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-fixed text-primary font-bold'
                    : 'text-on-surface hover:bg-surface-container-low'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-6 pb-8 space-y-3">
          <Link
            to="/contact"
            className="shimmer-button text-white w-full py-3 rounded-2xl font-headline font-semibold shadow-lg text-center block"
          >
            Get a Quote
          </Link>
          <a
            href="https://wa.me/27651293014?text=Hi%20Jimmo!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-2xl font-headline font-semibold text-center flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#25D366]"
          >
            <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current"><path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.619 4.56 1.7 6.48L2.667 29.333l7.027-1.68A13.275 13.275 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm6.08 16c-.333-.16-1.973-.96-2.28-1.067-.307-.107-.52-.16-.747.16-.213.32-.84 1.067-.987 1.28-.16.213-.32.24-.64.08-.333-.16-1.4-.507-2.667-1.627-.987-.88-1.653-1.973-1.84-2.293-.187-.333-.02-.52.147-.68.147-.133.333-.36.507-.533.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.747-1.84-1.027-2.52-.267-.653-.547-.56-.747-.573-.187-.013-.413-.013-.627-.013-.213 0-.573.08-.88.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.107 1.307 3.32c.16.213 2.253 3.44 5.44 4.827.76.32 1.36.52 1.813.667.76.24 1.453.2 2 .12.613-.08 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.627-.373z"/></svg>
            WhatsApp Us
          </a>
        </div>
      </aside>
    </>
  )
}
