import type { RegionToggleProps } from '@/models/competitors'
import { cn } from '@/utils/cn'

const options = [
  { value: 'russia', label: 'Россия' },
  { value: 'world', label: 'Мир' },
] as const

export function RegionToggle({ value, onChange }: RegionToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-bg-card/80 p-1">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            'rounded-full px-5 py-2 text-sm font-medium transition-colors',
            value === option.value
              ? 'bg-[#00e5ff] text-slate-950'
              : 'text-slate-400 hover:text-white',
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
