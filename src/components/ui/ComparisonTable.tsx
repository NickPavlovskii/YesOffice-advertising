import type { ComparisonTableProps } from '@/models/whyUs'
import { cn } from '@/utils/cn'

export function ComparisonTable({ rows, className }: ComparisonTableProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-white/10 bg-bg-card/60',
        'shadow-[0_0_40px_rgba(0,229,255,0.05)]',
        className,
      )}
    >
      <div className="hidden grid-cols-[1.2fr_1fr_1fr] gap-4 border-b border-white/10 px-6 py-4 text-sm sm:grid">
        <span className="text-slate-400">Параметр</span>
        <span className="text-center text-slate-400">Excel / Бумага</span>
        <span className="text-right text-[#00e5ff]">Наша платформа</span>
      </div>

      <div className="divide-y divide-white/10">
        {rows.map((row) => (
          <div
            key={row.parameter}
            className="grid gap-2 px-6 py-4 sm:grid-cols-[1.2fr_1fr_1fr] sm:items-center sm:gap-4"
          >
            <span className="text-sm text-slate-300">{row.parameter}</span>
            <span className="text-sm text-slate-500 sm:text-center">
              {row.traditional}
            </span>
            <span className="text-sm font-medium text-[#00e5ff] sm:text-right">
              {row.platform}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
