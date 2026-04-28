import { Hero } from "@/components/Hero";
import { SocialProofBar } from "@/components/SocialProof";
import { OurWork } from "@/components/OurWork";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
export default function Home() {
  return (

    <main>
      
    <Hero/>
     <SocialProofBar/>
     <Services/>
     <OurWork/> 
     <Pricing/>
     <Contact/>

     
   </main> 
  );
}
