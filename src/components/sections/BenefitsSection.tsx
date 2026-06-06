import { AnimateIn } from '@/components/ui/AnimateIn'
import { FeatureCard } from '@/components/ui'
import { features, featuresSection } from '@/constants/features'

export function BenefitsSection() {
  return (
    <section id="benefits" className="px-6 pb-12 pt-20">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <h2 className="text-center text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
            {featuresSection.title}
          </h2>
        </AnimateIn>

        <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-3">
          {features.map((item, index) => (
            <AnimateIn key={item.title} delay={index * 120} className="h-full">
              <FeatureCard {...item} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
