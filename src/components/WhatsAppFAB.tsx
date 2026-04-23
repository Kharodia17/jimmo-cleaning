import { useState } from 'react'

const WA_NUMBER = '27795745177'
const WA_MESSAGE = encodeURIComponent(
  "Hi Jimmo! I'd like to enquire about your cleaning services."
)
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

export default function WhatsAppFAB() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip label */}
      <span
        className={`bg-on-surface text-surface-container-lowest text-sm font-label font-semibold px-4 py-2 rounded-full shadow-lg whitespace-nowrap transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 pointer-events-none'
        }`}
      >
        Chat on WhatsApp
      </span>

      {/* FAB button */}
      <div className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ background: '#25D366' }}>
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.619 4.56 1.7 6.48L2.667 29.333l7.027-1.68A13.275 13.275 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24.267a11.04 11.04 0 01-5.76-1.627l-.413-.24-4.173.987.96-4.013-.267-.427A11.04 11.04 0 014.96 16c0-6.107 4.933-11.04 11.04-11.04 6.107 0 11.04 4.933 11.04 11.04 0 6.107-4.933 11.04-11.04 11.04l.004-.106zm6.08-8.267c-.333-.16-1.973-.96-2.28-1.067-.307-.107-.52-.16-.747.16-.213.32-.84 1.067-.987 1.28-.16.213-.32.24-.64.08-.333-.16-1.4-.507-2.667-1.627-.987-.88-1.653-1.973-1.84-2.293-.187-.333-.02-.52.147-.68.147-.133.333-.36.507-.533.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.747-1.84-1.027-2.52-.267-.653-.547-.56-.747-.573-.187-.013-.413-.013-.627-.013-.213 0-.573.08-.88.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.107 1.307 3.32c.16.213 2.253 3.44 5.44 4.827.76.32 1.36.52 1.813.667.76.24 1.453.2 2 .12.613-.08 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.627-.373z"/>
        </svg>
      </div>
    </a>
  )
}
