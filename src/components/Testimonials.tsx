const testimonials = [
  {
    quote:
      "I will recommend that anyone in need of cleaning services to use Jimmo. They really keep and uphold standards of cleaning at our boarding school.",
    name: "Bilal Combined School",
    title: "",
    company: "Bilal Combined School",
    city: "Lenasia, Gauteng",
    initials: "BC",
    color: "bg-primary-fixed text-primary",
  },
  {
    quote:
      "Excellent work done to maintain the masjid.",
    name: "Masjid Bilal",
    title: "",
    company: "Masjid Bilal Lenasia South",
    city: "Lenasia South, Gauteng",
    initials: "MB",
    color: "bg-secondary-container text-on-secondary-container",
  },
  {
    quote:
      "5 star service from Jimmo Cleaning — as a strategic partner they make project endings a breeze.",
    name: "BuilditBros",
    title: "",
    company: "BuilditBros",
    city: "Gauteng",
    initials: "BB",
    color: "bg-tertiary-fixed text-tertiary",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-left max-w-2xl">
          <h2 className="text-sm font-label font-bold text-secondary uppercase tracking-[0.2em] mb-4">
            Client Stories
          </h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tight">
            Trusted by SA's Best
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, title, company, city, initials, color }) => (
            <div
              key={name}
              className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-secondary text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>

              <p className="text-on-surface-variant leading-relaxed font-body text-base flex-1 mb-8">
                "{quote}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-headline font-bold text-sm flex-shrink-0 ${color}`}
                >
                  {initials}
                </div>
                <div>
                  <p className="font-headline font-bold text-on-surface text-sm">{name}</p>
                  <p className="font-label text-xs text-on-surface-variant">{title ? `${title}, ` : ''}{company}</p>
                  <p className="font-label text-xs text-outline mt-0.5">{city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
