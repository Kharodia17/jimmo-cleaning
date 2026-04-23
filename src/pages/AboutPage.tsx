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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCog-Xvw-rUk6Emc5A7AroUJX-KD4NICzQhLc2Z76ahqOzeck7TXaSPEkK-8W7mDxR4JDTcd4A_J1vM8hT33bIoE36ZZRfj67mxlf7arYvOGBQh7jMDU2GEQQ7ZtFFgKplVDCLFeaTCP43l9dw4Ji2dTRA10MPe8qzwuUw4mxvuuyX4_oshTz5YRLplnMmqqSLgKoy9gwJoD8uXP2blH0a25qTirpsp0NMeA7OjpVoMmBjFIUCfAiTZ5O3mL-6ioBExEBI65CgQ5LA"
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
            { icon: 'diversity_3', text: 'B-BBEE Level 1 Contributor' },
            { icon: 'workspace_premium', text: 'ISO 9001:2015 Certified' },
            { icon: 'gavel', text: 'OHS Act Compliant' },
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
                desc: "Whether weekly upkeep or a specialised deep-clean, our maintenance programmes are built for South Africa's demanding business environment — consistent, accountable, and always on time.",
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

      {/* Key Personnel */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl font-extrabold mb-4">Key Personnel &amp; Expertise</h2>
            <p className="text-lg text-on-surface-variant">
              Our leadership team brings decades of combined experience in South African facility management and sanitation science.
            </p>
          </div>
          <div className="hidden md:block h-px bg-outline-variant/30 flex-grow mx-12 mb-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-primary-container/10 rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch">
            <div className="md:w-1/2 min-h-[400px]">
              <img
                alt="James Morrison – Founder & CEO"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoj1YC73HUWTj4iWK2tRBMvtckrnNTYoeY3gOHgMjAzbfm3twj5w_sPtGisFZF2D1Qqu4nl3MU2C2OpmR7eWxk1uR8MIJ_iByX7btzScETLk2cJ1Gc3BGF4NZsS7UsDRm5KG3x1Wzsr0wxqEhAY1pecwceswxKsreImhoc06y46NLo-0O7FTn68ZpXWthzZrfHhloUvItxUtPXqRlUfchCp5fRhSqNczPdABEv2NKg_QkhKM0xfsm06owlFUe4AdHaqwDI8iJCJ0k"
              />
            </div>
            <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
              <h4 className="font-headline text-3xl font-bold mb-2">James Morrison</h4>
              <span className="text-primary font-label font-bold tracking-widest uppercase text-sm mb-2">Founder &amp; CEO</span>
              <span className="text-on-surface-variant font-label text-xs mb-6">Johannesburg, Gauteng</span>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                James founded Jimmo in 2015 after identifying a gap in South Africa's commercial cleaning market for a boutique, science-led service that prioritises hygiene as much as aesthetics. Under his leadership, Jimmo has grown to serve three provinces.
              </p>
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-primary" />
                <span className="italic font-medium text-primary">"Details define excellence."</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-rows-2 gap-8">
            {[
              {
                name: 'Naledi Dlamini', role: 'Director of Operations', city: 'Pretoria, Gauteng',
                desc: 'Specialising in large-scale sanitation logistics across Gauteng and Mpumalanga.',
                icon: 'clinical_notes', badge: '15+ Years Exp.',
              },
              {
                name: 'Marcus Thorne', role: 'Hygiene Specialist', city: 'Cape Town, Western Cape',
                desc: 'Overseeing sanitation protocols and eco-friendly chemical compliance for our Western Cape operations.',
                icon: 'biotech', badge: 'MSc Microbiology',
              },
            ].map(({ name, role, city, desc, icon, badge }) => (
              <div key={name} className="bg-surface-container-high p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <h5 className="font-headline text-xl font-bold mb-1">{name}</h5>
                  <p className="text-secondary font-semibold text-sm mb-1">{role}</p>
                  <p className="text-outline font-label text-xs mb-4">{city}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">{icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">{badge}</span>
                </div>
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
                At Jimmo, our culture is defined by "The Pristine Standard." We treat every South African environment we enter — from a Sandton tower to a Durban warehouse — as if it were our own, ensuring every corner meets our rigorous quality benchmarks.
              </p>
              <ul className="space-y-4">
                {[
                  'Rigorous PSIRA-standard background checks for every team member',
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG2MpczvhmW1mb3VGSEBvwi1o7JMWkfEYbfaZ67oP_hdQpSPaucV9xEyR7UiOcYMCQzqjIjpzGZbSBfcxddr4PhuUcUJq8tVAUX6TgW9Yu7otQJ8FriDDP2SEJFoHjjAYaBqgp8shc_-8e4eS3-xgMNqkgqZCfqZoSo_Tkr5UcUweww7v6ZR9UWlRT-Q4eV13NxOF35-WBbnhMRSXjuQ_J1DkaVuymCJVsFBwm3_yredPbAeGJNDryddJExWq_mNHkyt2wIpsgTwE"
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
        <h2 className="font-headline text-4xl font-bold mb-6">Experience South African Excellence</h2>
        <p className="text-on-surface-variant mb-10 text-lg">
          Let us curate a maintenance plan tailored to your specific hygiene needs — and your ZAR budget.
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
