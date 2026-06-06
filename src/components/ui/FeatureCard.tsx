import { CardIcon, type CardIconName } from '@/components/ui/icons/CardIcons'
import { cn } from '@/utils/cn'

type FeatureCardProps = {
  icon: CardIconName
  title: string
  description: string
  className?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center rounded-2xl border border-white/10',
        'bg-bg-card px-6 py-8 text-center shadow-lg shadow-black/20',
        className,
      )}
    >
      <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#00e5ff]/40 bg-[#00e5ff]/10 text-[#00e5ff]">
        <CardIcon name={icon} />
      </div>

      <h3 className="shrink-0 text-sm font-bold uppercase tracking-wide text-white">
        {title}
      </h3>

      <p className="mt-3 min-h-[4.5rem] flex-1 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </article>
  )
}
