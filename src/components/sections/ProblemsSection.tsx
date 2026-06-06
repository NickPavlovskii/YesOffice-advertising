import { AnimateIn } from '@/components/ui/AnimateIn'
import { ProblemCard } from '@/components/ui'
import { problems, problemsSection } from '@/constants/problems'

export function ProblemsSection() {
  return (
    <section id="problems" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <div className="text-center">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
              {problemsSection.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base">
              {problemsSection.subtitle}
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-3">
          {problems.map((item, index) => (
            <AnimateIn key={item.title} delay={index * 120} className="h-full">
              <ProblemCard {...item} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
