"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Our Work", href: "#our-work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
     <div className="h-16 px-6 md:px-12 flex items-center justify-between md:justify-start">
        
        {/* Logo - fixed width for balance */}
        <a href="#" className="flex items-center gap-2 group md:w-48">
          <span className="w-2 h-2 bg-teal-600 inline-block transition-colors group-hover:bg-teal-700" />
          <span className="font-semibold text-slate-700 tracking-tight text-lg">
            Ajax Web Studio
          </span>
        </a>

        {/* Desktop Navigation - centered */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Phone Number - fixed width for balance */}
        <a 
          href="tel:+61299999999" 
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:border-teal-400 hover:bg-teal-50/50 transition-all duration-200 md:w-48 justify-end"
        >
          <Phone className="w-4 h-4 text-teal-600 transition-colors group-hover:text-teal-700" />
          <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">
            (02) 9999 9999
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block py-4 px-6 text-slate-600 border-b border-slate-100 last:border-b-0 active:bg-slate-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          {/* Phone Number in Mobile Menu */}
          <a 
            href="tel:+61299999999"
            onClick={handleLinkClick}
            className="flex items-center justify-center gap-2 mx-6 my-4 py-3 rounded-full border border-slate-200 active:bg-teal-50/50 transition-colors"
          >
            <Phone className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-slate-600">
              (02) 9999 9999
            </span>
          </a>
        </div>
      )}
    </nav>
  )
}
