import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { ClientsSection } from '@/components/sections/ClientsSection'
import { CompetitorsSection } from '@/components/sections/CompetitorsSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { PlatformFeaturesSection } from '@/components/sections/PlatformFeaturesSection'
import { ProblemsSection } from '@/components/sections/ProblemsSection'
import { TeamSection } from '@/components/sections/TeamSection'
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
      <CompetitorsSection />
      <TeamSection />
      <CtaSection />
    </>
  )
}