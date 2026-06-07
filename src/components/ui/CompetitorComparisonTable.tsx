import type {
  CompetitorCell,
  CompetitorComparisonTableProps,
} from '@/models/competitors'
import { cn } from '@/utils/cn'

function cellClass(variant: CompetitorCell['variant'] = 'neutral') {
  return cn(
    'text-sm',
    variant === 'highlight' && 'font-medium text-[#00e5ff]',
    variant === 'neutral' && 'text-slate-400',
    variant === 'negative' && 'font-medium text-red-400',
  )
}

export function CompetitorComparisonTable({
  data,
  className,
}: CompetitorComparisonTableProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-white/10 bg-bg-card/60',
        'shadow-[0_0_40px_rgba(0,229,255,0.05)]',
        className,
      )}
    >
      <div className="border-b border-white/10 px-6 py-4">
        <p className="text-xs font-bold uppercase tracking-wider text-white">
          {data.label}
        </p>
      </div>

      <div className="hidden grid-cols-[1.2fr_1fr_1fr_1fr] gap-4 border-b border-white/10 px-6 py-4 sm:grid">
        {data.columns.map((column, index) => (
          <span
            key={column}
            className={cn(
              'text-sm',
              index === 0 && 'text-slate-400',
              index === 1 && 'font-medium text-[#00e5ff]',
              index > 1 && 'text-slate-400',
            )}
          >
            {column}
          </span>
        ))}
      </div>

      <div className="divide-y divide-white/10">
        {data.rows.map((row) => (
          <div
            key={row.feature}
            className="grid gap-2 px-6 py-4 sm:grid-cols-[1.2fr_1fr_1fr_1fr] sm:items-center sm:gap-4"
          >
            <span className="text-sm text-slate-300">{row.feature}</span>
            <span className={cellClass(row.ourProduct.variant)}>
              {row.ourProduct.text}
            </span>
            <span className={cn(cellClass(row.competitorA.variant), 'sm:text-center')}>
              {row.competitorA.text}
            </span>
            <span className={cn(cellClass(row.competitorB.variant), 'sm:text-right')}>
              {row.competitorB.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
