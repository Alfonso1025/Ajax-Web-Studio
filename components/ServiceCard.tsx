import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Service } from "@/lib/servicesData"

type Props = {
  service: Service
}

export function ServiceCard({ service }: Props) {
  return (
    <Link
      href={service.href}
      className="block bg-white border border-slate-200 border-l-4 border-l-teal-500 rounded-xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-teal-300 transition-all duration-200 group flex flex-col"
    >
      <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors duration-200">
        <service.icon className="w-6 h-6 text-teal-600" />
      </div>
      <span className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 mb-3 inline-block">
        {service.label}
      </span>
      <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">
        {service.heading}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed flex-1">
        {service.description}
      </p>
      <span className="flex items-center gap-1.5 text-sm font-medium text-teal-600 mt-6 group-hover:text-teal-700 transition-colors duration-200">
        Learn more
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </span>
    </Link>
  )
}
