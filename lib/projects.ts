export type Project = {
    id: string
    name: string
    businessType: string
    description: string
    liveUrl: string
    tags: string[]
    images: {
      hero: string
      mobile: string
      chatbot: string
      quoteTool: string
    }
  }
  
  export const projects: Project[] = [
    {
      id: "sparkle-clean",
      name: "Sparkle Clean",
      businessType: "Cleaning business",
      description: "A complete website with contact form, Google Maps, and mobile-first design",
      liveUrl: "https://sparkle-clean-full.vercel.app/",
      tags: ["Contact form", "Google Maps", "Mobile optimised"],
      images: {
        hero: "/images/projects/sparkle-clean-dark/hero-desktop.png",
        mobile: "/images/projects/sparkle-clean-dark/mobile.png",
        chatbot: "/images/projects/sparkle-clean-dark/chatbot.png",
        quoteTool: "/images/projects/sparkle-clean-dark/quote-tool.png",
      },
    },
    {
      id: "sparkle-clean-light",
      name: "Sparkle Clean Light-V",
      businessType: "Cleaning business",
      description: "A professional services site with quote request form and service area map",
      liveUrl: "https:///sparkle-clean-v2-full.vercel.app",
      tags: ["Quote form", "Service areas", "Mobile optimised"],
      images: {
        hero: "/images/projects/sparkle-clean-light/hero.png",
        mobile: "/images/projects/sparkle-clean-light/mobile.png",
        chatbot: "/images/projects/sparkle-clean-light/chatbot.png",
        quoteTool: "/images/projects/sparkle-clean-light/quote-tool.png",
      },
    },
  ]