import {  HeartHandshake } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type Service = {
    id: string
    icon : LucideIcon
    label: string
    heading: string
    description: string
    href: string
    available: boolean
  }
  
  export const services: Service[] = [
    {
      id: "ndis",
      icon : HeartHandshake,
      label: "Compliant NDIS websites",
      heading: "NDIS providers",
      description:
        "Custom websites for registered and not-registered NDIS providers, support workers and support coordinators across Southwest Sydney.",
      href: "/ndis-providers",
      available: true,
    },
    
    
   
  ]