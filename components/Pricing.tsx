import { Check } from "lucide-react"

const starterFeatures = [
  "Professional 4-page website",
  "Mobile-first design",
  "Contact form with email delivery",
  "Google Maps integration",
  "Google Business Profile setup",
  "1 round of revisions",
  "Deployed and live in 7 days",
]

const premiumFeatures = [
  "AI-powered chatbot",
  "Instant quote calculator",
  "Custom pricing logic",
  "Priority support",
]

export function Pricing() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
            Pricing
          </span>
          <h2 className="mb-4 text-[28px] font-semibold text-slate-900 md:text-[36px]">
            Simple, honest pricing
          </h2>
          <p className="text-base text-slate-500">
            Everything your business needs to get found online
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Starter Card */}
          <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-8">
            <span className="mb-6 inline-block w-fit rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
              Most popular
            </span>
            <div className="mb-1 text-4xl font-bold text-slate-900">$1,200</div>
            <p className="text-sm text-slate-500">+ $200/month retainer</p>
            <div className="my-6 border-t border-slate-100" />
            <ul className="mb-8 flex-1 space-y-3">
              {starterFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block w-full rounded-lg bg-teal-600 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-teal-700"
            >
              Get started
            </a>
          </div>

          {/* Premium Card */}
          <div className="flex flex-col rounded-xl bg-slate-900 p-8">
            <span className="mb-6 inline-block w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white">
              Full package
            </span>
            <div className="mb-1 text-4xl font-bold text-white">$2,500</div>
            <p className="text-sm text-slate-400">+ $350/month retainer</p>
            <div className="my-6 border-t border-white/10" />
            <p className="mb-4 text-sm text-slate-400">Everything in Starter, plus:</p>
            <ul className="mb-8 flex-1 space-y-3">
              {premiumFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block w-full rounded-lg bg-white px-6 py-3 text-center font-medium text-slate-900 transition-colors hover:bg-slate-100"
            >
              Get started
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="mt-12 text-center text-sm text-slate-500">
          Not sure which plan is right for you?{" "}
          <a
            href="#contact"
            className="text-teal-600 transition-colors hover:text-teal-700"
          >
            Send us a message
          </a>{" "}
          and we&apos;ll help you decide.
        </p>
      </div>
    </section>
  )
}
