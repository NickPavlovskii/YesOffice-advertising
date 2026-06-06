import { CardIcon } from '@/components/ui/icons/CardIcons'
import { useCountUp } from '@/hooks/useCountUp'
import { useInView } from '@/hooks/useInView'
import type { ClientCardProps } from '@/models/client'
import { cn } from '@/utils/cn'

const accentStyles: Record<
  ClientCardProps['accent'],
  { iconBox: string; icon: string; metric: string }
> = {
  cyan: {
    iconBox: 'bg-cyan-50',
    icon: 'text-[#00bcd4]',
    metric: 'text-[#00bcd4]',
  },
  green: {
    iconBox: 'bg-green-50',
    icon: 'text-[#22c55e]',
    metric: 'text-[#22c55e]',
  },
  pink: {
    iconBox: 'bg-pink-50',
    icon: 'text-[#ec4899]',
    metric: 'text-[#ec4899]',
  },
}

export function ClientCard({
  icon,
  title,
  description,
  value,
  label,
  accent,
  className,
}: ClientCardProps) {
  const styles = accentStyles[accent]
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 })
  const animatedValue = useCountUp(value, inView)

  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-2xl bg-white p-6 shadow-lg shadow-black/10',
        className,
      )}
    >
      <div
        className={cn(
          'mb-5 flex h-10 w-10 items-center justify-center rounded-lg',
          styles.iconBox,
          styles.icon,
        )}
      >
        <CardIcon name={icon} />
      </div>

      <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>

      <div ref={ref} className="mt-auto pt-8">
        <p
          className={cn(
            'text-4xl font-bold tabular-nums tracking-tight',
            styles.metric,
          )}
        >
          {animatedValue}
        </p>
        <p className="mt-1 text-sm text-slate-500">{label}</p>
      </div>
    </article>
  )
}
