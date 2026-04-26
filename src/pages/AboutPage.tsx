import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative px-6 md:px-8 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full font-label text-xs font-bold tracking-widest uppercase mb-6">
            Established Johannesburg, 2015
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-8">
            Curating <span className="text-primary italic">Pristine</span> Environments.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Jimmo Cleaning Services was founded in Johannesburg with a simple belief: a clean space is the foundation of a productive, healthy business. Since 2015, we've remained proudly South African and proudly independent — answering to our clients, not shareholders.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl relative z-10">
            <img
              alt="Professional cleaning team"
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/8365182/pexels-photo-8365182.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary-container rounded-3xl -z-10" />
          <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary/20 rounded-full -z-10" />
        </div>
      </section>

      {/* BEE & Compliance Strip */}
      <div className="bg-secondary-container/40 border-y border-secondary-container py-5 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2">
          {[
            { icon: 'workspace_premium', text: '15+ Years Industry Experience' },
            { icon: 'gavel', text: 'OHS Act Compliant' },
            { icon: 'eco', text: 'Eco-Conscious Practices' },
            { icon: 'flag', text: 'Proudly South African' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 font-label text-sm font-semibold text-on-secondary-container">
              <span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <section className="bg-surface-container-low py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'verified_user', color: 'text-primary', fill: false,
                title: 'Proudly Independent',
                desc: 'As a proudly South African independent firm, we answer to our clients — not shareholders or a global franchise. This freedom lets us deliver a personal service that corporate chains simply cannot match.',
              },
              {
                icon: 'eco', color: 'text-secondary', fill: true,
                title: 'Hygiene First',
                desc: "Our commitment to sanitation goes beyond surface shine. We use hospital-grade protocols and SANS-compliant products to protect your team's health, not just the appearance of your space.",
              },
              {
                icon: 'calendar_month', color: 'text-tertiary', fill: false,
                title: 'Reliable Maintenance',
                desc: "Whether weekly upkeep or a specialised deep-clean, our maintenance programmes are built for Gauteng's demanding business environment — consistent, accountable, and always on time.",
              },
            ].map(({ icon, color, fill, title, desc }) => (
              <div key={title} className="bg-surface-container-lowest p-10 rounded-3xl shadow-sm hover:-translate-y-1 transition-transform">
                <span className={`material-symbols-outlined text-4xl ${color} mb-6 block`} style={fill ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                  {icon}
                </span>
                <h3 className="font-headline text-2xl font-bold mb-4">{title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto bg-surface-container-lowest rounded-[3rem] p-10 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-container/10" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-4xl font-extrabold mb-8">A Culture of Meticulous Care</h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                At Jimmo, our culture is defined by "The Pristine Standard." We treat every Gauteng environment we enter — from a Sandton tower to a Germiston warehouse — as if it were our own, ensuring every corner meets our rigorous quality benchmarks.
              </p>
              <ul className="space-y-4">
                {[
                  'Every client receives a signed service level agreement and dedicated account support',
                  'Ongoing training in modern sanitation science and SA regulations',
                  'Commitment to SANS-compliant, non-toxic, sustainable products',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-medium">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img
                alt="Company culture"
                className="rounded-3xl shadow-xl w-full"
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
              <div className="glass-card absolute -bottom-8 -left-8 p-6 rounded-2xl shadow-lg border border-white/20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary-container p-3 rounded-full">
                    <span className="material-symbols-outlined text-on-secondary-container">groups</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold">50+</p>
                    <p className="text-xs text-on-surface-variant font-medium">South African Staff</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-8 text-center max-w-3xl mx-auto">
        <h2 className="font-headline text-4xl font-bold mb-6">Experience Gauteng Excellence</h2>
        <p className="text-on-surface-variant mb-10 text-lg">
          Let us curate a maintenance plan tailored to your specific hygiene needs and your budget.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="shimmer-button text-white px-10 py-4 rounded-2xl font-label font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all">
            Schedule a Consultation
          </Link>
          <Link to="/services" className="bg-surface-container-high text-on-surface px-10 py-4 rounded-2xl font-label font-bold text-lg hover:bg-surface-dim transition-all">
            Our Services
          </Link>
        </div>
      </section>
    </main>
  )
}
