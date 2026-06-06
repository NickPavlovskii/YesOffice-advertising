import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { ClientsSection } from '@/components/sections/ClientsSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemsSection } from '@/components/sections/ProblemsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <BenefitsSection />
      <ClientsSection />
    </>
  )
}