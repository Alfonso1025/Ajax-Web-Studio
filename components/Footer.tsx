import { Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* Three column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
          {/* Left column — Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Image
              src="/images/logo2.png"
              alt="Ajax Web Studio logo"
              width={42}
              height={42}
              className="object-contain rounded-full"
              />
              <span className="font-semibold text-slate-800 tracking-tight text-base">
                Ajax Web Studio
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-2">Campbelltown, NSW</p>
            <p className="text-sm text-slate-400 mt-1 max-w-xs">
              Building the web, one local business at a time.
            </p>
          </div>

          {/* Centre column — Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Navigation
            </span>
            <nav className="flex flex-col items-center md:items-start">
              <a
                href="#work"
                className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-2 block"
              >
                Our Work
              </a>
              <a
                href="#services"
                className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-2 block"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-2 block"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-2 block"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Right column — Contact */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Get in touch
            </span>
            <a
              href="mailto:team@ajaxwebstudio.com"
              className="text-sm text-slate-500 hover:text-teal-600 transition-colors flex items-center gap-2 mb-2"
            >
              <Mail className="w-4 h-4" />
              team@ajaxwebstudio.com
            </a>
            <span className="text-sm text-slate-500 flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4" />
              Campbelltown, NSW
            </span>
            <a
              href="#contact"
              className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 mt-4 inline-block hover:bg-teal-100 transition-colors"
            >
              Get a free quote →
            </a>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-slate-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center">
            <p className="text-xs text-slate-400">
              © 2026 Ajax Web Studio. All rights reserved.
            </p>
            <p className="text-xs text-slate-400">
              Made with care in Campbelltown, NSW
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
