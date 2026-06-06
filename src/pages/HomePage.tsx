import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { ClientsSection } from '@/components/sections/ClientsSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { PlatformFeaturesSection } from '@/components/sections/PlatformFeaturesSection'
import { ProblemsSection } from '@/components/sections/ProblemsSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <BenefitsSection />
      <ClientsSection />
      <PlatformFeaturesSection />
      <WhyUsSection />
    </>
  )
}