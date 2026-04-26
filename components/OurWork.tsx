import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects"

const featureLabels = {
  mobile: {
    label: "Mobile view",
    description: "Designed for phones first — where your customers actually are.",
  },
  chatbot: {
    label: "AI chatbot",
    description: "Answers questions and captures leads automatically, 24/7.",
  },
  quoteTool: {
    label: "Quote calculator",
    description: "Lets customers get an instant price — no phone call needed.",
  },
}

export function OurWork() {
  return (
    <section id="our-work" className="bg-stone-100 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
            Custom websites build for local businesses
          </h2>
          <p className="text-slate-500 text-base max-w-md">
              Every website we build is custom — designed from scratch around your business, your brand colours, and the customers you want to attract. The examples below show the quality and features we deliver. Your site will look nothing like these unless you want it to.
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-6">

              {/* Main project card */}
              <div className="bg-white rounded-xl border border-slate-200 border-l-4  overflow-hidden hover:-translate-y-1 transition-transform duration-200 shadow-none hover:shadow-sm">

                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md border border-slate-200 px-3 py-1 text-xs text-slate-400 max-w-xs">
                      {project.liveUrl.replace("https://", "")}
                    </div>
                  </div>
                </div>

                {/* Hero screenshot */}
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={project.images.hero}
                    alt={`${project.name} website screenshot`}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Card body */}
                <div className="p-6 md:p-8 bg-stone-50 border-t-2 border-teal-100">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span className="text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100 rounded-full px-3 py-1">
                        {project.businessType}
                      </span>
                      <h3 className="text-slate-900 font-semibold text-xl mt-3 mb-1">
                        {project.name}
                      </h3>
                      <p className="text-slate-500 text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-slate-100 text-slate-600 rounded-full px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Live site link */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors px-4 py-2 rounded-full shrink-0 mt-1"
                    >
                      View live site
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Feature strip — 3 mini cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Mobile view */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={project.images.mobile}
                      alt={`${project.name} mobile view`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-2 py-0.5">
                      {featureLabels.mobile.label}
                    </span>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {featureLabels.mobile.description}
                    </p>
                  </div>
                </div>

                {/* AI chatbot */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={project.images.chatbot}
                      alt={`${project.name} AI chatbot`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-2 py-0.5">
                      {featureLabels.chatbot.label}
                    </span>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {featureLabels.chatbot.description}
                    </p>
                  </div>
                </div>

                {/* Quote tool */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={project.images.quoteTool}
                      alt={`${project.name} quote calculator`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-2 py-0.5">
                      {featureLabels.quoteTool.label}
                    </span>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {featureLabels.quoteTool.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}