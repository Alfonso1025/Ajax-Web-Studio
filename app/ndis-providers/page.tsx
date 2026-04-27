import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Users, ClipboardList, MapPin, Check } from "lucide-react"

export const metadata = {
  title: "Web Design for NDIS Providers in Southwest Sydney | Ajax Web Studio",
  description:
    "Ajax Web Studio builds custom websites for NDIS providers across Southwest Sydney. Based in Campbelltown, we help support workers, coordinators and registered providers get found by participants online.",
}

const whoThisIsFor = [
  {
    icon: ShieldCheck,
    title: "Registered NDIS providers",
    body: "Organisations and sole traders registered with the NDIS Quality and Safeguards Commission. We build websites that reflect your registration status and the support categories you deliver.",
  },
  {
    icon: Users,
    title: "Support workers",
    body: "Independent support workers growing their own participant base. A professional website makes you stand out from other workers listed on the provider finder and builds immediate trust.",
  },
  {
    icon: ClipboardList,
    title: "Support coordinators",
    body: "Coordinators helping participants navigate their plans and connect with providers. Your website is the first thing participants and families check when they receive your referral.",
  },
  {
    icon: MapPin,
    title: "Plan managers",
    body: "Plan managers handling participant funding and budgets. A professional website signals financial accountability and builds confidence with participants and their families.",
  },
]

const features = [
  "Clear service category pages — so participants know exactly what you offer",
  "Suburb and service area page — show the regions you cover",
  "Participant enquiry form — easy contact for participants and coordinators",
  "Mobile-first design — participants and families browse on phones",
  "Google Business Profile setup — get found on Google Maps",
  "Trust signals — registration status, experience, team profiles",
  "Fast loading — accessible for participants with low digital literacy",
  "Plain English copy — no jargon, easy to read for all participants",
]

const baseFeatures = [
  "Professional 4-page custom website",
  "Services page — your NDIS support categories",
  "Service area page — suburbs and regions you cover",
  "Participant enquiry form with email delivery",
  "Google Maps integration",
  "Google Business Profile setup",
  "Mobile-first design",
  "Live within 7 days",
  "1 round of revisions",
]

const chatbotFeatures = [
  "Trained on your services and support categories",
  "Handles participant FAQs automatically",
  "Captures enquiries outside business hours",
  "Powered by Claude AI",
]

const availabilityFeatures = [
  "Suburb availability checker",
  "Support category filter",
  "Instant results — no waiting",
  "Custom logic for your service area",
]

const suburbs = [
  "Campbelltown",
  "Camden",
  "Narellan",
  "Ingleburn",
  "Minto",
  "Leumeah",
  "Gregory Hills",
  "Harrington Park",
  "Macquarie Fields",
]

const suburbLinks = [
  { label: "Web design for NDIS providers in Campbelltown", href: "/ndis-providers/Campbelltown" },
  { label: "Web design for NDIS providers in Camden", href: "/ndis-providers/Camden" },
  { label: "Web design for NDIS providers in Narellan", href: "/ndis-providers/Narellan" },
  { label: "Web design for NDIS providers in Ingleburn", href: "/ndis-providers/Ingleburn" },
  { label: "Web design for NDIS providers in Minto", href: "/ndis-providers/Minto" },
  { label: "Web design for NDIS providers in Gregory Hills", href: "/ndis-providers/Gregory-hills" },
]

export default function NDISProvidersPage() {
  return (
    <main>

      {/* Section 1 — Hero */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <span className="inline-block text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 mb-6">Web Design for NDIS Providers — Southwest Sydney</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Custom websites for NDIS providers in Southwest Sydney</h1>
          <p className="text-slate-500 max-w-2xl mx-auto mt-6 leading-relaxed">
            Ajax Web Studio builds fully custom websites for NDIS registered
            providers, support workers and support coordinators across Southwest
            Sydney. We understand the NDIS landscape — and we build websites that
            help participants find you, trust you and reach out.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link href="/#contact" className="bg-teal-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-teal-700 transition-colors">Get a free quote</Link>
            <Link href="#demo" className="border border-slate-200 text-slate-700 rounded-lg px-6 py-3 font-medium hover:border-teal-400 hover:bg-teal-50 transition-colors">See our work</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <span className="text-sm text-slate-600 flex items-center gap-2"><Check className="w-4 h-4 text-teal-600 shrink-0" />Built for NDIS providers</span>
            <span className="text-sm text-slate-600 flex items-center gap-2"><Check className="w-4 h-4 text-teal-600 shrink-0" />Participant-ready from day one</span>
            <span className="text-sm text-slate-600 flex items-center gap-2"><Check className="w-4 h-4 text-teal-600 shrink-0" />Live in 7 days</span>
          </div>
        </div>
      </section>

      {/* Section 2 — The Problem */}
      <section className="bg-white py-20 md:py-28">
  <div className="max-w-5xl mx-auto px-6 md:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left — text */}
      <div className="text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
          Most NDIS providers are invisible online
        </h2>
        <p className="text-slate-600 leading-relaxed mt-4">
          The NDIS provider finder lists you. But it does not sell you. When a
          participant or their support coordinator is choosing between providers,
          they search Google. They visit websites. They make judgements about
          trust, professionalism and reliability before they ever make contact.
        </p>
        <p className="text-slate-600 leading-relaxed mt-4">
          If you do not have a website — or if your website looks outdated,
          generic or unprofessional — you are losing participants to competitors
          who invested in their online presence.
        </p>
        <p className="text-slate-600 leading-relaxed mt-4">
          Ajax Web Studio builds websites specifically for NDIS providers that
          communicate trust, clearly explain your services and support
          categories, show the suburbs you serve, and make it easy for
          participants and their families to reach out.
        </p>
      </div>

      {/* Right — image */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden hidden lg:block">
        <Image
          src="/images/ndis.png"
          alt="Support worker assisting a participant in Southwest Sydney"
          fill
          className="object-cover"
        />
      </div>

    </div>
  </div>
</section>

      {/* Section 3 — Who This Is For */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight text-center">Built for every type of NDIS provider</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {whoThisIsFor.map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <item.icon className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — What We Build */}
      <section id="demo" className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight text-center mb-12">Everything an NDIS provider website needs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* Browser mockup — reusing Sparkle Clean screenshot */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 ml-2">
                  <span>sparkle-clean.com.au</span>
                </div>
              </div>
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/images/projects/sparkle-clean-dark/hero.png"
                  alt="Example website built by Ajax Web Studio"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="text-xs text-slate-400 text-center mt-3 italic pb-4">
                Example of our work — your site will be built around your brand
                and NDIS services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Pricing */}
      <section id="pricing" className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Simple pricing for NDIS providers</h2>
            <p className="text-slate-600 leading-relaxed mt-4 max-w-2xl mx-auto">
              Everything you need to get found by participants and grow your client
              base — at a price that makes sense for a growing NDIS business.
            </p>
          </div>

          {/* Base package */}
          <div className="bg-white border border-slate-300 rounded-xl p-8 shadow-sm mb-8 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 mb-4">Everything starts here</span>
            <h3 className="text-lg font-semibold text-slate-900">NDIS provider website</h3>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl font-bold text-slate-900">$1,200</span>
              <span className="text-slate-500 text-sm">one-off</span>
            </div>
            <p className="text-slate-500 text-sm mt-1">+ $200/month retainer</p>
            <div className="grid grid-cols-1 gap-2 mt-6">
              {baseFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="text-slate-600 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <Link href="/#contact" className="block w-full text-center bg-teal-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-teal-700 transition-colors mt-8">Get started</Link>
            <p className="text-xs text-slate-400 text-center mt-4">No lock-in contracts. Cancel anytime.</p>
          </div>

          {/* Add-on cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            {/* Chatbot */}
            <div className="bg-white border border-slate-300 rounded-xl p-8 shadow-sm flex flex-col">
              <h4 className="text-base font-semibold text-slate-900">AI chatbot</h4>
              <span className="text-xs text-teal-700 mt-1">Best for high enquiry volume</span>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-2xl font-bold text-slate-900">+$700</span>
                <span className="text-slate-500 text-sm">to build</span>
              </div>
              <p className="text-slate-500 text-sm mt-1">+$120/month to retainer</p>
              <p className="text-slate-600 text-sm leading-relaxed mt-4">
                Answers participant questions 24/7. Handles your most common
                enquiries automatically — what services you offer, which suburbs
                you cover, how to get started with the NDIS. Never miss a
                participant enquiry outside business hours.
              </p>
              <p className="text-xs text-slate-400 mt-3">Best for: NDIS providers, support coordinators, plan managers</p>
              <div className="grid grid-cols-1 gap-2 mt-4">
                {chatbotFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="block w-full text-center border border-slate-200 text-slate-700 rounded-lg px-6 py-3 font-medium hover:border-teal-400 hover:bg-teal-50 transition-colors mt-auto pt-6">Add to my site</Link>
            </div>

            {/* Availability Tool */}
            <div className="bg-white border border-slate-300 rounded-xl p-8 shadow-sm flex flex-col">
              <h4 className="text-base font-semibold text-slate-900">Service area & availability tool</h4>
              <span className="text-xs text-teal-700 mt-1">Best for multi-suburb providers</span>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-2xl font-bold text-slate-900">+$400</span>
                <span className="text-slate-500 text-sm">to build</span>
              </div>
              <p className="text-slate-500 text-sm mt-1">+$20/month to retainer</p>
              <p className="text-slate-600 text-sm leading-relaxed mt-4">
                Let participants instantly check whether you service their suburb
                and whether you have availability. Reduces back-and-forth calls
                and helps participants self-qualify before reaching out.
              </p>
              <p className="text-xs text-slate-400 mt-3">Best for: Registered providers covering multiple suburbs</p>
              <div className="grid grid-cols-1 gap-2 mt-4">
                {availabilityFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="block w-full text-center border border-slate-200 text-slate-700 rounded-lg px-6 py-3 font-medium hover:border-teal-400 hover:bg-teal-50 transition-colors mt-auto pt-6">Add to my site</Link>
            </div>

          </div>

          {/* Full package dark card */}
          <div className="bg-slate-900 rounded-xl p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white">Full package</h3>
            <span className="text-sm text-slate-400 mt-1 block">Best value if you want both</span>
            <div className="mt-6 space-y-2 max-w-xs mx-auto">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Base website</span>
                <span className="text-white font-medium">$1,200</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">+ AI chatbot</span>
                <span className="text-white font-medium">$700</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">+ Availability tool</span>
                <span className="text-white font-medium">$400</span>
              </div>
              <div className="border-t border-white/10 my-3" />
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">Total</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white">$2,300</span>
                  <span className="text-xs text-teal-400">save $200</span>
                </div>
              </div>
            </div>
            <p className="text-slate-300 text-sm mt-4">$350/month retainer <span className="text-teal-400 text-xs ml-1">save $40/month</span></p>
            <Link href="/#contact" className="inline-block bg-amber-400 text-slate-900 font-semibold rounded-lg px-8 py-3 hover:bg-amber-300 transition-colors mt-6">Get the full package</Link>
            <p className="text-xs text-slate-400 mt-4">All features included. One monthly payment. No surprises.</p>
          </div>

        </div>
      </section>

      {/* Section 6 — Internal suburb links */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Find your suburb</h2>
            <p className="text-slate-600 leading-relaxed mt-4">
              We build websites for NDIS providers across Southwest Sydney. Select
              your suburb for local information.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suburbLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block bg-white border border-slate-200 rounded-xl p-5 text-sm font-medium text-slate-700 hover:border-teal-400 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Section 7 — CTA */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight max-w-xl mx-auto">Ready to get found by more participants?</h2>
          <p className="text-slate-600 leading-relaxed mt-4 max-w-xl mx-auto">
            Whether you are a sole trader support worker, a registered provider or
            a support coordinator — Ajax Web Studio will build you a website that
            works as hard as you do. Free quote, no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link href="/#contact" className="bg-teal-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-teal-700 transition-colors">Get a free quote</Link>
            <Link href="/#our-work" className="border border-slate-200 text-slate-700 rounded-lg px-6 py-3 font-medium hover:border-teal-400 hover:bg-teal-50 transition-colors">See our work</Link>
          </div>
          <p className="text-sm text-slate-400 text-center mt-6">
            Ajax Web Studio responds within 24 hours. Based in Campbelltown,
            serving Southwest Sydney.
          </p>
        </div>
      </section>
        {/* Section 6 — Service Area */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Serving NDIS providers across Southwest Sydney</h2>
            <p className="text-slate-600 leading-relaxed mt-4">
              Ajax Web Studio is based in Campbelltown and works with NDIS providers
              across the Southwest Sydney and Macarthur region. We serve providers
              in Campbelltown, Camden, Narellan, Ingleburn, Minto, Leumeah, Gregory
              Hills, Harrington Park and surrounding suburbs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {suburbs.map((suburb) => (
              <span key={suburb} className="inline-block text-sm font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 m-1">{suburb}</span>
            ))}
          </div>
          <p className="text-sm text-slate-400 text-center mt-6">
            Serving an area not listed? Reach out — we work with NDIS providers
            across Greater Sydney.
          </p>
        </div>
      </section>
     

    </main>
  )
}
