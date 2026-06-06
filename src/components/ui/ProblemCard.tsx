import { CardIcon } from '@/components/ui/icons/CardIcons'
import type { ProblemCardProps } from '@/models/problem'
import { cn } from '@/utils/cn'

export function ProblemCard({
  icon,
  title,
  description,
  note,
  source,
  className,
}: ProblemCardProps) {
  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-2xl bg-white p-6 shadow-lg shadow-black/10',
        className,
      )}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00bcd4] text-white">
        <CardIcon name={icon} />
      </div>

      <h3 className="text-sm font-bold uppercase tracking-wide text-[#e53935]">
        {title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[#26c6da]">
        {description}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-slate-500">{note}</p>

      <p className="mt-6 text-xs text-slate-400">{source}</p>
    </article>
  )
}
