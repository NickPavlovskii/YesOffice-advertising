import { AnimateIn } from '@/components/ui/AnimateIn'
import { AdvantageCard } from '@/components/ui/AdvantageCard'
import { ComparisonTable } from '@/components/ui/ComparisonTable'
import {
  advantages,
  comparisonRows,
  whyUsSection,
} from '@/constants/whyUs'

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden px-6 py-20 bg-bg"
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 h-[360px] w-[360px] rounded-full bg-[#00e5ff]/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#00e5ff]/8 blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <AnimateIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {whyUsSection.title}{' '}
              <span className="text-[#00e5ff]">{whyUsSection.titleHighlight}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base">
              {whyUsSection.subtitle}
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => (
            <AnimateIn key={item.id} delay={index * 60} className="h-full">
              <AdvantageCard {...item} />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="mt-20">
          <h3 className="mb-8 text-center text-xl font-bold text-white sm:text-2xl">
            {whyUsSection.comparisonTitle}
          </h3>
          <ComparisonTable rows={comparisonRows} />
        </AnimateIn>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px bg-[#00e5ff] shadow-[0_0_14px_rgba(0,229,255,0.65)]"
        aria-hidden
      />
    </section>
  )
}
