export type NearbyLink = {
    label: string
    href: string
  }
  
  export type NDISSuburbData = {
    metadata: {
      title: string
      description: string
    }
    labelPill: string
    h1: string
    introParagraph: string
    secondaryParagraph: string
    nearbyLinks: NearbyLink[]
    footerNote: string
  }
  
  export const ndisSuburbs: Record<string, NDISSuburbData> = {
    campbelltown: {
      metadata: {
        title: "Web Design for NDIS Providers in Campbelltown | Ajax Web Studio",
        description:
          "Ajax Web Studio builds custom websites for NDIS providers in Campbelltown NSW. Help participants find you on Google. Based locally in Campbelltown 2560.",
      },
      labelPill: "NDIS Provider Web Design — Campbelltown NSW",
      h1: "Web design for NDIS providers in Campbelltown",
      introParagraph:
        "Campbelltown is the heart of the Macarthur region and one of Southwest Sydney's most active areas for NDIS service delivery. With a large and growing participant population across the 2560 postcode and surrounding suburbs, the demand for quality NDIS providers in Campbelltown is strong — but so is the competition. Ajax Web Studio is based right here in Campbelltown, and we build websites that help local NDIS providers stand out, get found on Google and convert participant enquiries into clients.",
      secondaryParagraph:
        "Whether you operate from a clinic on Queen Street, visit participants across the Campbelltown LGA or work as an independent support worker in the area — a professional website is the most important tool you are not using yet.",
      nearbyLinks: [
        { label: "Web design for NDIS providers in Camden", href: "/ndis-providers/camden" },
        { label: "Web design for NDIS providers in Ingleburn", href: "/ndis-providers/ingleburn" },
        { label: "Web design for NDIS providers in Minto", href: "/ndis-providers/minto" },
        { label: "All NDIS provider locations", href: "/ndis-providers" },
      ],
      footerNote:
        "Ajax Web Studio — based in Campbelltown NSW 2560. Serving NDIS providers across Southwest Sydney.",
    },
  
    camden: {
      metadata: {
        title: "Web Design for NDIS Providers in Camden | Ajax Web Studio",
        description:
          "Custom websites for NDIS providers in Camden NSW. Ajax Web Studio helps support workers and registered providers get found by participants in the Camden area.",
      },
      labelPill: "NDIS Provider Web Design — Camden NSW",
      h1: "Web design for NDIS providers in Camden",
      introParagraph:
        "Camden is one of the fastest growing residential corridors in New South Wales. As thousands of new families move into suburbs like Oran Park, Gregory Hills and Gledswood Hills, the demand for local NDIS providers is growing rapidly — and participants in these new communities are searching online first. Ajax Web Studio builds websites for NDIS providers in the Camden area that are optimised to appear in local Google searches and convert participant enquiries from the moment you go live.",
      secondaryParagraph:
        "Camden's growth means opportunity for NDIS providers who establish their online presence now, before the market becomes saturated. A professional website positions you as an established, trustworthy provider in a community that is still choosing its local services.",
      nearbyLinks: [
        { label: "Web design for NDIS providers in Narellan", href: "/ndis-providers/narellan" },
        { label: "Web design for NDIS providers in Gregory Hills", href: "/ndis-providers/gregory-hills" },
        { label: "Web design for NDIS providers in Campbelltown", href: "/ndis-providers/campbelltown" },
        { label: "All NDIS provider locations", href: "/ndis-providers" },
      ],
      footerNote:
        "Ajax Web Studio — based in Campbelltown NSW 2560. Serving NDIS providers across Southwest Sydney.",
    },
  
    narellan: {
      metadata: {
        title: "Web Design for NDIS Providers in Narellan | Ajax Web Studio",
        description:
          "Custom websites for NDIS providers in Narellan NSW. Ajax Web Studio helps support workers and registered providers get found by participants along the Camden Valley Way corridor.",
      },
      labelPill: "NDIS Provider Web Design — Narellan NSW",
      h1: "Web design for NDIS providers in Narellan",
      introParagraph:
        "Narellan sits at the centre of one of Southwest Sydney's busiest commercial and residential growth corridors. Along Camden Valley Way, a growing number of allied health and disability support businesses have established themselves to serve the expanding Macarthur population. NDIS participants and their families in Narellan, Narellan Vale and surrounding suburbs are actively searching online for local providers — and without a professional website, you are simply not in that search.",
      secondaryParagraph:
        "Ajax Web Studio builds custom websites for NDIS providers in Narellan that communicate professionalism, clearly outline your support categories and service area, and make it easy for participants and coordinators to reach out and engage your services.",
      nearbyLinks: [
        { label: "Web design for NDIS providers in Camden", href: "/ndis-providers/camden" },
        { label: "Web design for NDIS providers in Campbelltown", href: "/ndis-providers/campbelltown" },
        { label: "Web design for NDIS providers in Gregory Hills", href: "/ndis-providers/gregory-hills" },
        { label: "All NDIS provider locations", href: "/ndis-providers" },
      ],
      footerNote:
        "Ajax Web Studio — based in Campbelltown NSW 2560. Serving NDIS providers across Southwest Sydney.",
    },
  
    ingleburn: {
      metadata: {
        title: "Web Design for NDIS Providers in Ingleburn | Ajax Web Studio",
        description:
          "Custom websites for NDIS providers in Ingleburn NSW. Ajax Web Studio helps support workers and registered providers get found by participants in Ingleburn and surrounds.",
      },
      labelPill: "NDIS Provider Web Design — Ingleburn NSW",
      h1: "Web design for NDIS providers in Ingleburn",
      introParagraph:
        "Ingleburn is an established suburb in the Campbelltown LGA with a strong community presence and a significant population of NDIS participants across its residential streets and housing commission areas. Many NDIS providers operating in Ingleburn rely entirely on word of mouth or the NDIS provider finder — leaving a clear gap for those who invest in a professional online presence. When a participant or their family searches for a support worker or registered provider in Ingleburn, the providers with websites win the enquiry.",
      secondaryParagraph:
        "Ajax Web Studio builds websites for NDIS providers in Ingleburn that are locally optimised, professionally designed and built to generate participant enquiries from Google search and Maps.",
      nearbyLinks: [
        { label: "Web design for NDIS providers in Campbelltown", href: "/ndis-providers/campbelltown" },
        { label: "Web design for NDIS providers in Minto", href: "/ndis-providers/minto" },
        { label: "Web design for NDIS providers in Narellan", href: "/ndis-providers/narellan" },
        { label: "All NDIS provider locations", href: "/ndis-providers" },
      ],
      footerNote:
        "Ajax Web Studio — based in Campbelltown NSW 2560. Serving NDIS providers across Southwest Sydney.",
    },
  
    minto: {
      metadata: {
        title: "Web Design for NDIS Providers in Minto | Ajax Web Studio",
        description:
          "Custom websites for NDIS providers in Minto NSW. Ajax Web Studio helps support workers and registered providers get found by participants in Minto and the Campbelltown LGA.",
      },
      labelPill: "NDIS Provider Web Design — Minto NSW",
      h1: "Web design for NDIS providers in Minto",
      introParagraph:
        "Minto is a close-knit suburb in the Campbelltown LGA with a high concentration of families and individuals who rely on NDIS services. The suburb's community centres, accessible housing and established support networks make it an active area for disability service delivery — yet most NDIS providers operating in Minto have no dedicated online presence beyond the provider finder. Ajax Web Studio builds websites for Minto-based NDIS providers that help participants find them on Google before they ever open the provider finder.",
      secondaryParagraph:
        "A professional website for your NDIS business in Minto means participants searching \"NDIS support worker Minto\" or \"disability services Campbelltown\" can find you, trust you and contact you — without you needing to rely on referrals alone.",
      nearbyLinks: [
        { label: "Web design for NDIS providers in Ingleburn", href: "/ndis-providers/ingleburn" },
        { label: "Web design for NDIS providers in Campbelltown", href: "/ndis-providers/campbelltown" },
        { label: "Web design for NDIS providers in Narellan", href: "/ndis-providers/narellan" },
        { label: "All NDIS provider locations", href: "/ndis-providers" },
      ],
      footerNote:
        "Ajax Web Studio — based in Campbelltown NSW 2560. Serving NDIS providers across Southwest Sydney.",
    },
  
    "gregory-hills": {
      metadata: {
        title: "Web Design for NDIS Providers in Gregory Hills | Ajax Web Studio",
        description:
          "Custom websites for NDIS providers in Gregory Hills NSW. Ajax Web Studio helps support workers and registered providers get found by participants in this fast-growing Camden LGA suburb.",
      },
      labelPill: "NDIS Provider Web Design — Gregory Hills NSW",
      h1: "Web design for NDIS providers in Gregory Hills",
      introParagraph:
        "Gregory Hills is one of Southwest Sydney's newest and fastest growing suburbs, with thousands of new residents arriving every year as the Camden LGA expands. The suburb's young family demographic includes a growing number of NDIS participants and carers who are digitally active and search online for every service they need — including disability support. NDIS providers establishing themselves in Gregory Hills right now have a significant first-mover advantage online, because the competition for local search terms in this suburb is still extremely low.",
      secondaryParagraph:
        "Ajax Web Studio builds custom websites for NDIS providers in Gregory Hills that are optimised for local search from day one — helping you capture participant enquiries in a suburb where the population is growing faster than the services available to them.",
      nearbyLinks: [
        { label: "Web design for NDIS providers in Camden", href: "/ndis-providers/camden" },
        { label: "Web design for NDIS providers in Narellan", href: "/ndis-providers/narellan" },
        { label: "Web design for NDIS providers in Campbelltown", href: "/ndis-providers/campbelltown" },
        { label: "All NDIS provider locations", href: "/ndis-providers" },
      ],
      footerNote:
        "Ajax Web Studio — based in Campbelltown NSW 2560. Serving NDIS providers across Southwest Sydney.",
    },
  }