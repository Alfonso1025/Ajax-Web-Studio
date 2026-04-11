import { Check } from "lucide-react"

function TealUnderline() {
  return (
    <svg
      className="absolute -bottom-2 left-0 w-full h-3"
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M2 8.5C30 4 60 2 100 5C140 8 170 6 198 3"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-teal-600"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Decorative background shape - desktop only */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.03]">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="200" stroke="currentColor" strokeWidth="1" className="text-teal-600" />
          <circle cx="250" cy="250" r="150" stroke="currentColor" strokeWidth="1" className="text-teal-600" />
          <circle cx="250" cy="250" r="100" stroke="currentColor" strokeWidth="1" className="text-teal-600" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-0 w-full">
            {/* Left content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Small label pill */}
              <span className="inline-flex items-center text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 mb-6">
                Southwest Sydney&apos;s boutique web studio
              </span>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Websites that get your business{" "}
                <span className="relative inline-block">
                  <span className="text-teal-600">found</span>
                  <TealUnderline />
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-slate-500 leading-[1.7] max-w-xl mb-8">
                We build fast, professional websites for cleaning businesses and trades in Southwest Sydney. No tech headaches. Just results.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center bg-teal-600 text-white font-medium rounded-lg px-6 py-3 hover:bg-teal-700 transition-colors"
                >
                  See our work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-white text-slate-700 font-medium border border-slate-200 rounded-lg px-6 py-3 hover:border-teal-400 hover:bg-teal-50/50 transition-colors"
                >
                  Get a free quote
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>Mobile-first design</span>
                </div>
                <span className="hidden sm:inline text-slate-300">•</span>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>Live in 7 days</span>
                </div>
                <span className="hidden sm:inline text-slate-300">•</span>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>Local to Southwest Sydney</span>
                </div>
              </div>
            </div>

            {/* Right content - Browser mockup */}
            <div className="hidden lg:block relative">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md border border-slate-200 px-3 py-1.5 text-xs text-slate-400 max-w-xs">
                      yourbusiness.com.au
                    </div>
                  </div>
                </div>
                {/* Browser content */}
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-white p-8 flex flex-col">
                  {/* Mockup header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-24 h-6 bg-slate-200 rounded" />
                    <div className="flex gap-4">
                      <div className="w-12 h-4 bg-slate-100 rounded" />
                      <div className="w-12 h-4 bg-slate-100 rounded" />
                      <div className="w-12 h-4 bg-slate-100 rounded" />
                    </div>
                  </div>
                  {/* Mockup hero */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <div className="w-48 h-8 bg-slate-200 rounded mb-4" />
                    <div className="w-64 h-4 bg-slate-100 rounded mb-2" />
                    <div className="w-56 h-4 bg-slate-100 rounded mb-6" />
                    <div className="flex gap-3">
                      <div className="w-24 h-8 bg-teal-600/20 rounded" />
                      <div className="w-24 h-8 bg-slate-100 rounded" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-50 rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
