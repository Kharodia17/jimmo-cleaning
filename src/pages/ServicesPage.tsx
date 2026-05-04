import CTASection from '../components/CTASection'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ServicesPage() {
  useScrollReveal()
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 md:px-8 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label text-sm font-semibold tracking-wide">
              OUR EXPERTISE
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-tight tracking-tighter">
              Pristine Care for Every Environment.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg font-body leading-relaxed">
              From heavy-duty industrial sites in Germiston to sophisticated corporate headquarters in Sandton — we deliver an uncompromising hygiene standard across South Africa.
            </p>
            <div className="flex flex-wrap gap-3">
              {['OHS Compliant', '15+ Yrs Experience', 'SABS Aligned', 'Eco-Friendly'].map((badge) => (
                <span key={badge} className="px-3 py-1.5 rounded-full bg-primary-fixed text-primary font-label text-xs font-bold uppercase tracking-wide">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
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

      {/* Industrial Cleaning */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="relative">
                <div className="w-full aspect-square bg-surface-container-highest rounded-2xl overflow-hidden">
                  <img
                    alt="Industrial Cleaning"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf7p1WW7rWfceKEcVIB6L0_ej2K-kKdCBVQ3KtyBAHGe5zHgJNBF_PYhQB-mi9_04wteBzIC6pJybNhJz7gScX0yJ8PZHywwrbs5JMizb1chZimNaxBbS4MCgyZWx97JQzVkYHBVmJ0WwViZx7jfpIESgGZPtO36oGduuc--B0_Ki_Dk-XPhNHr5Se0zIcG7IEJD8Y7eDxwiaCZaPKMexhNOApgvPWVQOZC3LJZXcVlnqxjxQwlf7kdRuD7tf0VAbKWvu4JxypHX0"
                  />
                </div>
                <div className="absolute top-8 right-8 bg-primary text-white p-4 rounded-xl font-label font-bold text-center leading-tight">
                  Heavy Duty<br /><span className="text-2xl">24/7</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-8 order-1 md:order-2">
              <h2 className="text-4xl font-headline font-bold text-tertiary">Industrial Cleaning</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg font-body">
                We tackle the toughest SA industrial environments — manufacturing plants in Germiston, warehouses on the N3 corridor, and construction sites across Gauteng — with specialised machinery and full OHS compliance.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: 'factory', title: 'Precision Degreasing', desc: 'Removing VOCs and heavy industrial residue safely, with full MSDS documentation.' },
                  { icon: 'safety_check', title: 'OHS Act Compliance', desc: 'Full adherence to the Occupational Health and Safety Act No. 85 of 1993 at all times.' },
                  { icon: 'bolt', title: 'Load-Shedding Ready', desc: 'Our teams operate with battery-powered and generator-backed equipment — zero downtime.' },
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
            <div className="md:col-span-7 space-y-8">
              <h2 className="text-4xl font-headline font-bold text-primary">Commercial Cleaning</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg font-body">
                Elevate your professional image with a workplace that inspires confidence. Tailored for Sandton office parks, Pretoria's business districts, and East Rand commercial hubs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: 'eco', title: 'SANS-Aligned Cleaning', desc: 'Biodegradable agents compliant with SA environmental standards — better for your team and the planet.' },
                  { icon: 'schedule', title: 'Flexible Scheduling', desc: 'After-hours or intraday cleaning designed around South African business hours and public holidays.' },
                  { icon: 'local_police', title: 'Vetted Teams Only', desc: 'Every cleaner passes a PSIRA-standard background check before entering your premises.' },
                  { icon: 'receipt_long', title: 'Tax-Invoice Ready', desc: 'Full VAT-compliant invoicing and monthly reporting for your finance team.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="p-6 rounded-2xl bg-surface-bright border border-outline-variant/20">
                    <span className="material-symbols-outlined text-primary mb-4 block">{icon}</span>
                    <h4 className="font-bold mb-2">{title}</h4>
                    <p className="text-sm text-on-surface-variant">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
                <img
                  alt="Modern Office"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs_Z4vjcVj3-GqxQoN1lcf2cMnXrYZgTN82Hcgan7t8PbBt2DCwzw84ef9aYr5sDYj3S20803A2gpzYEmGhXrbjNOfGNENGxRHODrZSpEE3C6ZgGqEmh21KUld-cxnOi-aPRA7Hk3rwNSvOfZ_y8vqG-qONU0TL3DguPmpACdtBhZO_95mnq-0kx2a3qGXGVUA9CqFiHeci3tLyqHE1QHyS2QdzCSaqQqp8r5ZSMDaIku0UqJMFH7s9SJ594utjogJiOiHmw2zl3E"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialised Services Bento */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-bold text-tertiary">Specialised Services</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Unique challenges demand expert solutions. We offer high-technical cleaning for South Africa's most demanding environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden group min-h-[250px]">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATwI8xZSSuf0JRH5NbH6yLCYK140zf8DveNrpkXcl1oF3rwQBFxRLFaoACqdyTmM1dj0qY4H9HJ5l9YEaAPckKA-cl6voDNyNhXe7WQwy1gK5sVEA5BBD5hnW_teqAOjglOexGsRcpfFQtn0cQaVIOFPXdlIw7H88KpoV1H8CG5MVtS4h-P0eqM6PvPlLW6JFQ4s_zAlzHPch_Psp41BeygjcsnKnaHLRBGwOoTQV8NxGIOZejWl1rXz80qYMtM8GB-BC-ewaCi3w" />
              </div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">sanitizer</span>
              <h4 className="text-2xl font-bold mb-2">Medical Grade Sanitation</h4>
              <p className="text-on-surface-variant text-sm">
                Clinical sterilisation for private hospitals, dental practices, and NHLS-accredited laboratories across SA.
              </p>
            </div>

            <div className="bg-primary text-on-primary rounded-2xl p-8 flex flex-col justify-center text-center min-h-[250px]">
              <span className="material-symbols-outlined text-4xl mb-4">window</span>
              <h4 className="text-xl font-bold mb-2">High-Rise Window Care</h4>
              <p className="text-primary-fixed-dim text-sm">
                Abseiling teams certified for Sandton's skyscrapers and Johannesburg's high-rise commercial towers.
              </p>
            </div>

            <div className="bg-secondary-container rounded-2xl p-8 flex flex-col justify-end min-h-[250px]">
              <span className="material-symbols-outlined text-on-secondary-container text-4xl mb-4">shutter_speed</span>
              <h4 className="text-xl font-bold text-on-secondary-container mb-2">Rapid Response</h4>
              <p className="text-on-secondary-fixed-variant text-sm">
                Emergency flood recovery and post-event cleanup anywhere in Gauteng within 4 hours of your call.
              </p>
            </div>

            <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8">
              <div className="w-full sm:w-1/3 h-48 sm:h-full rounded-xl overflow-hidden flex-shrink-0">
                <img alt="Carpet Cleaning" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2uGC8MKVuIEKWtayE820eD-6oc9heD6vayqa5SuP64W6T9-aNHMBo9iD9uC40MmHQUzOSg_oE8uB01v3Gpc-n3dLjzlBYFqnBf3eiTAK98jDrtvaJ-j7lrjkGEdULBjo5cV-18EFEgfK6rphJ_tf7KhfTmOkGWSaJ33W6VTrYXTfkFf1dR5OpOGmBHcH8D2WRYBp8FlnWLed60-CpXrns5YmvLqBCcAu0JsuEMmn1n_gUimaSXEOIwfc2VAeSd_ClFgysaTeozX8" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">Upholstery &amp; Carpet Steam</h4>
                <p className="text-on-surface-variant text-sm mb-4">
                  Deep-fibre extraction and allergen removal for executive boardrooms, hotel lobbies, and high-traffic commercial lounges across SA.
                </p>
                <button className="text-primary font-bold text-sm flex items-center gap-2 group">
                  Learn More <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Ready for a Pristine Transformation?" subtext="Join Gauteng businesses that trust Jimmo for their most critical cleaning needs. Get a custom quote within 24 hours." />
    </main>
  )
}
