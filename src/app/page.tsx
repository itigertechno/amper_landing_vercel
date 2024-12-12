import { Faqs } from '@/components/Faqs'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import {FooterCopy} from "@/components/FooterCopy";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        {/*<CallToAction />*/}
        <Faqs />
        {/*<Steps />*/}
        <Pricing />
      </main>
      <FooterCopy />
    </>
  )
}
