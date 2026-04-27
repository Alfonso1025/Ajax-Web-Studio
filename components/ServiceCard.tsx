import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Service } from "@/lib/servicesData"

type Props = {
  service: Service
}

export function ServiceCard({ service }: Props) {
  return (
    <Link href={service.href}>
      <service.icon />
      <span>{service.label}</span>
      <h3>{service.heading}</h3>
      <p>{service.description}</p>
      <span>
        Learn more
        <ArrowUpRight />
      </span>
    </Link>
  )
}