import { WhyUsIcon } from '@/components/ui/icons/WhyUsIcons'
import type { AdvantageCardProps } from '@/models/whyUs'
import { cn } from '@/utils/cn'

export function AdvantageCard({
  icon,
  stat,
  statLabel,
  title,
  description,
  className,
}: AdvantageCardProps) {
  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-2xl border border-white/10 bg-bg-card/80 p-5',
        'shadow-[0_0_32px_rgba(0,229,255,0.04)] transition-colors hover:border-[#00e5ff]/25',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00e5ff]/30 bg-[#00e5ff]/10 text-[#00e5ff]">
          <WhyUsIcon name={icon} />
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold leading-none text-[#00e5ff]">{stat}</p>
          <p className="mt-1 text-[10px] uppercase tracking-wide text-slate-500">
            {statLabel}
          </p>
        </div>
      </div>

      <h3 className="mt-5 text-sm font-bold text-white">{title}</h3>

      <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-400 sm:text-sm">
        {description}
      </p>
    </article>
  )
}
