import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    type: "Cleaning business",
    name: "Sparkle Clean",
    description: "A complete website with contact form, Google Maps, and mobile-first design",
    features: ["Contact form", "Google Maps", "Mobile optimised"],
    image: "https://picsum.photos/seed/cleaningsite/800/500",
    link: "#",
  },
  {
    type: "Trade business",
    name: "SydneyPro Plumbing",
    description: "A professional services site with quote request form and service area map.",
    features: ["Quote form", "Service areas", "Mobile optimised"],
    image: "https://picsum.photos/seed/plumbingsite/800/500",
    link: "#",
  },
]

function BrowserFrame({ imageSrc, alt }: { imageSrc: string; alt: string }) {
  return (
    <div className="rounded-t-xl overflow-hidden">
      {/* Browser chrome bar */}
      <div className="bg-slate-100 px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-slate-300" />
        <div className="w-3 h-3 rounded-full bg-slate-300" />
        <div className="w-3 h-3 rounded-full bg-slate-300" />
      </div>
      {/* Screenshot */}
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-auto object-cover"
      />
    </div>
  )
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0]
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:-translate-y-1 transition-transform duration-200 hover:shadow-sm">
      <BrowserFrame imageSrc={project.image} alt={`${project.name} website screenshot`} />
      
      <div className="p-6">
        {/* Business type badge */}
        <span className="inline-block text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100 rounded-full px-3 py-1">
          {project.type}
        </span>
        
        {/* Project name */}
        <h3 className="text-slate-900 font-semibold text-lg mt-3">
          {project.name}
        </h3>
        
        {/* Description */}
        <p className="text-slate-500 text-sm mt-1">
          {project.description}
        </p>
        
        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.features.map((feature) => (
            <span
              key={feature}
              className="text-xs bg-slate-100 text-slate-600 rounded-full px-3 py-1"
            >
              {feature}
            </span>
          ))}
        </div>
        
        {/* View link */}
        <a
          href={project.link}
          className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700 mt-4"
        >
          View live site
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

export function OurWork() {
  return (
    <section id="our-work" className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 mb-4">
            Portfolio
          </span>
          <h2 className="text-slate-900 font-semibold text-[28px] md:text-[36px] tracking-tight">
            What we build
          </h2>
          <p className="text-slate-500 text-base mt-3 max-w-md mx-auto">
            Real websites built for real local businesses
          </p>
        </div>
        
        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
