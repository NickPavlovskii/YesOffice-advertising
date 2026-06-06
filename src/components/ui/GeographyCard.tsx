import { CardIcon } from '@/components/ui/icons/CardIcons'
import type { GeographyCardProps } from '@/models/geography'
import { cn } from '@/utils/cn'

export function GeographyCard({ title, lines, className }: GeographyCardProps) {
  return (
    <article
      className={cn(
        'rounded-2xl bg-white px-6 py-8 text-center shadow-lg shadow-black/10',
        className,
      )}
    >
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
        <span className="text-[#00bcd4]">
          <CardIcon name="map-pin" />
        </span>
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
          {title}
        </h3>
      </div>

      <div className="mt-4 space-y-1">
        {lines.map((line) => (
          <p key={line.text} className="text-sm text-slate-500">
            {line.text}
            {line.highlight && (
              <span className="font-semibold text-[#00bcd4]">{line.highlight}</span>
            )}
            {line.suffix}
          </p>
        ))}
      </div>
    </article>
  )
}
