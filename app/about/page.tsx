import Image from "next/image"
import Link from "next/link"

export default function About() {
  const industries = [
    {
      title: "Cleaning businesses",
      body: "From sole traders to growing cleaning companies across Southwest Sydney. We understand your customers, your pricing model and what makes someone book a clean online.",
    },
    {
      title: "Trades",
      body: "Plumbers, electricians, painters, landscapers and more. We build trade websites that generate enquiries, not just look good on a screen.",
    },
    {
      title: "Local professionals",
      body: "Accountants, lawyers and dental practices across the Campbelltown and Macarthur region. Professional websites that reflect the credibility your clients expect.",
    },
    {
      title: "App entrepreneurs",
      body: "You have the idea. We have the technical capability to build it. From AI chatbots to booking systems, quote calculators and full web applications — we build what you're imagining.",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Discovery call",
      body: "We learn your business, your brand, your target suburbs and the customers you want to attract. No forms, no briefs — just a conversation.",
    },
    {
      number: "02",
      title: "Design & build",
      body: "We design and build your site from scratch. You see progress throughout. One round of revisions included — because we get it right the first time.",
    },
    {
      number: "03",
      title: "Launch in 7 days",
      body: "Your site goes live within 7 days of the initial consultation. Deployed, tested and visible on Google from day one.",
    },
    {
      number: "04",
      title: "Ongoing support",
      body: "Your monthly retainer covers hosting, maintenance, updates and support. We don't disappear after launch.",
    },
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
    "Macarthur",
    "Smeaton Grange",
    "Picton",
    "Bowral",
  ]

  return (
    <main>

      {/* Section 1 — Hero */}
      <section className="bg-slate-50 px-6 py-12 md:px-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1">Web Design Studio — Campbelltown NSW</span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">Built in Campbelltown. Built for Southwest Sydney businesses.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-500 leading-relaxed md:text-lg">
            Ajax Web Studio is a web design and development studio based in
            Campbelltown, NSW. We build fully custom websites and web applications
            for cleaning businesses, trades and local professionals across the
            Southwest Sydney region — from Camden and Narellan to Ingleburn, Minto
            and Gregory Hills.
          </p>
        </div>
      </section>

      {/* Section 2 — Who We Are */}
      <section className="bg-white px-6 py-12 md:px-12 md:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl lg:text-4xl">A different kind of web studio</h2>
          <p className="mt-6 text-base text-slate-600 leading-relaxed">
            Most web agencies in Sydney sell you a template dressed up as a custom
            site. They use WordPress, Wix or Squarespace, swap out the colours and
            logo, and call it done. Ajax Web Studio does not work that way. Every
            website we build is written from scratch — custom code, custom design,
            built around your specific business, your brand and the customers you
            are trying to reach.
          </p>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We founded Ajax Web Studio with one clear focus: local businesses in
            Southwest Sydney were being underserved. Cleaning companies, tradies,
            accountants and lawyers across Campbelltown, Camden and Narellan were
            either paying too much for generic results or settling for DIY
            solutions that did nothing for their growth. We built this studio to
            fix that.
          </p>
        </div>
      </section>

      {/* Section 3 — Who We Serve */}
      <section className="bg-slate-50 px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl lg:text-4xl">Who we build for</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 leading-relaxed">
              Ajax Web Studio specialises in a focused set of industries where we
              know exactly what works and what your customers are looking for.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <div key={industry.title} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{industry.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{industry.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — The Founder */}
      <section className="bg-white px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-12">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl lg:text-4xl">The person behind the studio</h2>
            <p className="mt-6 text-base text-slate-600 leading-relaxed">
              Ajax Web Studio was founded by Alfy, a full-stack developer based in
              Campbelltown with a background in modern web technologies including
              React, Next.js and Node.js. After recognising that local businesses
              in Southwest Sydney were consistently being let down by generic,
              offshore or template-driven agencies, Ajax Web Studio was established
              to bring genuinely custom, locally-accountable web development to the
              Macarthur region.
            </p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Every project that leaves Ajax Web Studio has been built, tested and
              deployed by someone who lives and works in the same community as the
              clients we serve. When you reach out, you are speaking directly with
              the person building your site — not an account manager passing
              messages between you and an offshore team.
            </p>
          </div>
          <div className="hidden flex-1 md:block">
            <Image
              src="/images/alfy.jpg"
              alt="Alfy — founder of Ajax Web Studio, web designer based in Campbelltown NSW"
              width={600}
              height={700}
              className="rounded-xl object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 5 — How We Work */}
      <section className="bg-slate-50 px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl lg:text-4xl">How a project works</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-4xl font-bold text-teal-100">{step.number}</span>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Service Area */}
      <section className="bg-white px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl lg:text-4xl">Serving Southwest Sydney</h2>
          <p className="mt-6 text-base text-slate-600 leading-relaxed">
            Ajax Web Studio is based in Campbelltown and serves businesses across
            the Southwest Sydney and Macarthur region. Our primary service area
            includes Campbelltown, Camden, Narellan, Ingleburn, Minto, Leumeah,
            Gregory Hills, Harrington Park and surrounding suburbs. We work
            remotely so distance is rarely a barrier — but we prioritise local
            businesses because we understand this community.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {suburbs.map((suburb) => (
              <span key={suburb} className="inline-block text-sm font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5">{suburb}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Closing CTA */}
      <section className="bg-slate-50 px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl lg:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-slate-500 leading-relaxed">
            Whether you are a cleaning business looking to get found on Google, a
            tradie wanting a professional online presence, or an entrepreneur with
            an app idea — Ajax Web Studio is ready to build it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/#contact" className="inline-block bg-teal-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-teal-700 transition-colors">Get a free quote</Link>
            <Link href="/#our-work" className="inline-block border border-slate-200 text-slate-700 rounded-lg px-6 py-3 font-medium hover:border-teal-400 hover:bg-teal-50 transition-colors">See our work</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
