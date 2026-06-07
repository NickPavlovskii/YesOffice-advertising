import { AnimateIn } from '@/components/ui/AnimateIn'
import { PlatformFeatureBlock } from '@/components/ui/PlatformFeatureBlock'
import { ChartBadgeIcon } from '@/components/ui/icons/PlatformIcons'
import {
  platformFeatures,
  platformFeaturesSection,
} from '@/constants/platformFeatures'

export function PlatformFeaturesSection() {
  return (
    <section
      id="platform-features"
      className="relative overflow-hidden px-6 pb-20 pt-20"
    >
      <div
        className="pointer-events-none absolute -left-40 top-24 h-[360px] w-[360px] rounded-full bg-[#00e5ff]/12 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-[18%] h-[420px] w-[420px] rounded-full bg-[#00e5ff]/10 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-[28%] h-[320px] w-[320px] rounded-full bg-[#00e5ff]/10 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-32 right-[10%] h-[280px] w-[280px] rounded-full bg-[#00e5ff]/8 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <AnimateIn>
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00e5ff]/40 bg-[#00e5ff]/10 px-4 py-2 text-sm text-[#00e5ff]">
              <ChartBadgeIcon />
              {platformFeaturesSection.badge}
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {platformFeaturesSection.title}{' '}
              <span className="text-[#00e5ff]">
                {platformFeaturesSection.titleHighlight}
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base">
              {platformFeaturesSection.subtitle}
            </p>
          </div>
        </AnimateIn>

        <div className="mt-16 space-y-24">
          {platformFeatures.map((feature, index) => (
            <AnimateIn key={feature.id} delay={index * 120}>
              <PlatformFeatureBlock {...feature} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
