import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import type { NearbyLink } from "@/lib/ndisSuburbData"

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

type Props = {
  labelPill: string
  h1: string
  introParagraph: string
  secondaryParagraph: string
  nearbyLinks: NearbyLink[]
  footerNote: string
}

export function NDISSuburbPage({
  labelPill,
  h1,
  introParagraph,
  secondaryParagraph,
  nearbyLinks,
  footerNote,
}: Props) {
  return (
    <main>

      {/* Section 1 — Hero */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <span className="inline-block text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 mb-6">{labelPill}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mt-4 max-w-3xl">{h1}</h1>
          <p className="text-base text-slate-600 leading-relaxed mt-4 max-w-2xl">{introParagraph}</p>
          <p className="text-base text-slate-600 leading-relaxed mt-4 max-w-2xl">{secondaryParagraph}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/ndis-providers#pricing" className="bg-teal-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-teal-700 transition-colors">View pricing</Link>
            <Link href="/#contact" className="border border-slate-200 text-slate-700 rounded-lg px-6 py-3 font-medium hover:border-teal-400 hover:bg-teal-50 transition-colors">Get a free quote</Link>
          </div>
        </div>
      </section>

      {/* Section 2 — Features */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight text-center mb-12">Everything an NDIS provider website needs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <span className="text-sm text-slate-600 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* Browser mockup */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 ml-2 flex-1">
                  <span>example-ndis-provider.com.au</span>
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
              <p className="text-xs text-slate-400 text-center italic py-3 px-4">
                Example of our work — your site will be built around your brand and NDIS services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Pricing CTA */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">Ready to get started?</h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto mb-8">
            See our pricing for NDIS providers — transparent, no lock-in, live in 7 days.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/ndis-providers#pricing" className="bg-teal-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-teal-700 transition-colors">View pricing</Link>
            <Link href="/#contact" className="border border-slate-200 text-slate-700 rounded-lg px-6 py-3 font-medium hover:border-teal-400 hover:bg-teal-50 transition-colors">Get a free quote</Link>
          </div>
        </div>
      </section>

      {/* Section 4 — Nearby suburbs */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-8">Also serving nearby suburbs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nearbyLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 text-sm font-medium text-slate-700 hover:border-teal-400 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200">
                {link.label}
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div className="bg-slate-50 border-t border-slate-100 py-6">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <p className="text-sm text-slate-400 text-center">{footerNote}</p>
        </div>
      </div>

    </main>
  )
}
