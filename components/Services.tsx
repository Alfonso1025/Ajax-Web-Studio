import { services } from "@/lib/servicesData"
import { ServiceCard } from "@/components/ServiceCard"

export function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 mb-4">
            What we do
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
            Industries we serve
          </h2>
          <p className="text-slate-500 text-base max-w-md">
            We specialise in a focused set of industries where we know exactly
            what works and what your customers are looking for.
          </p>
        </div>

        {/* Cards grid — agnostic of card count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  )
}