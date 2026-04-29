import { Check } from "lucide-react"

export function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
          Website pricing for small businesses in Southwest Sydney
          </h2>
          <p className="text-slate-500 text-base max-w-md">
          Everything your local business needs to get found on Google — at a price that makes sense.
          </p>
        </div>

        {/* Zone 1 — Base package */}
        <div className="bg-white border border-slate-300 rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

            {/* Left — title, price, features */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  Starter website
                </h3>
                <span className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1">
                  Everything starts here
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-slate-900">$1,200</span>
                <span className="text-slate-700 text-sm">one-off</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">+ $200/month retainer</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  "Professional 4-page website",
                  "Mobile-first design",
                  "Contact form with email delivery",
                  "Google Maps integration",
                  "Google Business Profile setup",
                  "1 round of revisions",
                  "Deployed and live in 7 days",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="text-slate text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-col justify-center md:items-end gap-4 md:pl-8 md:border-l md:border-slate-100">
              <a
                href="#contact"
                className="bg-teal-600 text-white text-sm font-medium px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors text-center whitespace-nowrap"
              >
                Get started
              </a>
              <p className="text-xs text-slate-400 text-center md:text-right max-w-[160px]">
                No lock-in contracts. Cancel anytime.
              </p>
            </div>

          </div>
        </div>

        {/* Zone 2 — Add-ons heading */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Enhance your site with powerful features
          </h3>
          <p className="text-slate-500 text-sm max-w-sm mx-auto">
            Add only what your business needs. Each feature works independently.
          </p>
        </div>

        {/* Zone 2 — Add-on cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* Add-on Card A — Chatbot */}
          <div className="bg-white border border-slate-300 rounded-xl p-8 shadow-sm">
            <div className="flex items-start justify-between gap-3 mb-4">
              <h4 className="text-lg font-semibold text-slate-900">
                AI chatbot
              </h4>
              <span className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 shrink-0">
                Best for high enquiry volume
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold text-slate-900">+$700</span>
              <span className="text-slate-500 text-sm">to build</span>
            </div>
            <p className="text-sm text-slate-400 mb-1">+$120/month to retainer</p>
            <p className="text-xs text-slate-400 mb-4 italic">
              Includes AI usage costs — no surprise bills
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Answers customer questions 24/7. Handles your most common enquiries
              automatically so you never miss a lead, even outside business hours.
            </p>

            <p className="text-xs text-slate-400 mb-3">
              Best for: NDIS providers,cleaners, plumbers, electricians
            </p>

            <div className="flex flex-col gap-2 mb-6 flex-1">
              {[
                "Trained on your business info",
                "Handles FAQs automatically",
                "Captures leads outside business hours",
                "Powered by Claude AI",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="text-slate text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
            <a
            
              href="#contact"
              className="border border-teal-600 text-teal-600 text-sm font-medium px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors text-center mt-auto"
            >
              Add to my site
            </a>
          </div>

          {/* Add-on Card B — Quote Tool */}
          <div className="bg-white border border-slate-300 rounded-xl p-8 shadow-sm">
            <div className="flex items-start justify-between gap-3 mb-4">
              <h4 className="text-lg font-semibold text-slate-900">
                Instant quote calculator
              </h4>
              <span className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 shrink-0">
                Best for fixed-price services
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold text-slate-900">+$400</span>
              <span className="text-slate-500 text-sm">to build</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">+$20/month to retainer</p>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Give customers an instant price estimate based on their job details.
              Works for any business with predictable pricing — no ongoing AI costs,
              no subscriptions.
            </p>

            <p className="text-xs text-slate-400 mb-3">
              Best for: Cleaners, removalists, window cleaners, carpet cleaners
            </p>

            <div className="flex flex-col gap-2 mb-6 flex-1">
              {[
                "Custom pricing logic for your business",
                "Works by rooms, area, or job type",
                "Instant results, no waiting",
                "No AI costs — runs on your rules",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="text-slate text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="border border-teal-600 text-teal-600 text-sm font-medium px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors text-center mt-auto"
            >
              Add to my site
            
            </a>
          </div>

        </div>

        {/* Zone 3 — Combined package */}
        <div className="bg-slate-900 rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

            {/* Left — breakdown */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-semibold text-white">
                  Full package
                </h3>
                <span className="text-xs font-medium text-slate-300 bg-white/10 border border-white/20 rounded-full px-3 py-1">
                  Best value if you want both
                </span>
              </div>

              {/* Price breakdown */}
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center justify-between max-w-xs">
                  <span className="text-sm text-slate-400">Base website</span>
                  <span className="text-sm text-slate-300">$1,200</span>
                </div>
                <div className="flex items-center justify-between max-w-xs">
                  <span className="text-sm text-slate-400">+ AI chatbot</span>
                  <span className="text-sm text-slate-300">$700</span>
                </div>
                <div className="flex items-center justify-between max-w-xs">
                  <span className="text-sm text-slate-400">+ Quote calculator</span>
                  <span className="text-sm text-slate-300">$400</span>
                </div>
                <div className="border-t border-white/10 my-2 max-w-xs" />
                <div className="flex items-center justify-between max-w-xs">
                  <span className="text-base font-semibold text-white">Total</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-white">$2,300</span>
                    <span className="text-xs text-teal-400">save $200</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-400">
                $350/month retainer
                <span className="text-teal-400 ml-2 text-xs">save $40/month</span>
              </p>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-col justify-center items-start md:items-end gap-3">
              <a
                href="#contact"
                className="bg-amber-400 text-slate-900 text-sm font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors text-center whitespace-nowrap"
              >
                Get the full package
              </a>
              <p className="text-xs text-slate-400 md:text-right max-w-[200px]">
                All features included. One monthly payment. No surprises.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom note */}
      <div className="text-center">
          <p className="text-slate text-slate-500 max-w-lg mx-auto leading-relaxed">
          Every package includes a design consultation where we learn your brand, your colours, and the suburbs you serve. We build from scratch — no templates, no Wix, no WordPress. Just a custom website built for your business.
            
          </p>
        </div>
   </div>
  </section>
  )
}