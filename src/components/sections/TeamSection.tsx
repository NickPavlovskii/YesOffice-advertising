import { AnimateIn } from '@/components/ui/AnimateIn'
import { TeamCard } from '@/components/ui/TeamCard'
import { teamMembers, teamSection } from '@/constants/team'

export function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden px-6 pb-20 pt-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/60 to-transparent shadow-[0_0_14px_rgba(0,229,255,0.45)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#00e5ff]/8 blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <AnimateIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {teamSection.title}{' '}
              <span className="text-[#00e5ff]">{teamSection.titleHighlight}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
              {teamSection.subtitle}
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <AnimateIn key={member.id} delay={index * 120} className="h-full">
              <TeamCard {...member} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
