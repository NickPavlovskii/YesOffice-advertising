import { useState } from 'react'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { CompetitorComparisonTable } from '@/components/ui/CompetitorComparisonTable'
import { RegionToggle } from '@/components/ui/RegionToggle'
import { competitorData, competitorsSection } from '@/constants/competitors'
import type { CompetitorRegion } from '@/models/competitors'

export function CompetitorsSection() {
  const [region, setRegion] = useState<CompetitorRegion>('russia')

  return (
    <section id="competitors" className="relative overflow-hidden px-6 py-20">

      <div className="relative mx-auto max-w-6xl">
        <AnimateIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {competitorsSection.title}{' '}
              <span className="text-[#00e5ff]">
                {competitorsSection.titleHighlight}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base">
              {competitorsSection.subtitle}
            </p>

            <div className="mt-8">
              <RegionToggle value={region} onChange={setRegion} />
            </div>
          </div>
        </AnimateIn>

        <AnimateIn className="mt-10">
          <CompetitorComparisonTable data={competitorData[region]} />
        </AnimateIn>
      </div>
    </section>
  )
}
