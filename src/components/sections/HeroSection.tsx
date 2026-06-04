import { Logo } from '@/components/ui'
import { heroStats } from '@/constants/hero'
import { cn } from '@/utils/cn'

function ChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="2" y="10" width="3" height="6" rx="0.5" fill="currentColor" />
      <rect x="7.5" y="6" width="3" height="10" rx="0.5" fill="currentColor" />
      <rect x="13" y="2" width="3" height="14" rx="0.5" fill="currentColor" />
    </svg>
  )
}

function ScrollMouseIcon() {
  return (
    <svg
      width="24"
      height="38"
      viewBox="0 0 24 38"
      fill="none"
      aria-hidden
      className="text-slate-500"
    >
      <rect
        x="1"
        y="1"
        width="22"
        height="36"
        rx="11"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect x="10" y="8" width="4" height="8" rx="2" fill="currentColor" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4.5rem)] flex-col items-center overflow-hidden px-6 pb-12 pt-10">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#00e5ff]/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-emerald-500/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center text-center">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg shadow-black/20">
          <Logo showText={false} />
          <span className="text-sm font-semibold tracking-wide text-slate-900">
            О проете
          </span>
        </div>

        <h1 className="max-w-4xl text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.15]">
          <span className="text-[#00e5ff]">Цифровая платформа</span>
          <span className="text-white">
            , которая автоматизирует управление и анализирует использование
            пространства в{' '}
          </span>
          <span className="text-[#4ade80]">реальном времени</span>
          <span className="text-white">.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Мы трансформируем коммерческую недвижимость из статичного актива в
          источник растущей стоимости, используя технологии Big Data.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className={cn(
              'inline-flex items-center gap-2 rounded-lg bg-[#00e5ff] px-6 py-3',
              'text-sm font-semibold text-slate-950 transition-colors',
              'hover:bg-[#33ebff] focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-[#00e5ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]',
            )}
          >
            Получить демо
            <span aria-hidden>→</span>
          </button>
          <button
            type="button"
            className={cn(
              'inline-flex items-center gap-2 rounded-lg border border-slate-600/80',
              'bg-transparent px-6 py-3 text-sm font-medium text-white',
              'transition-colors hover:border-slate-500 hover:bg-white/5',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500',
              'focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]',
            )}
          >
            <ChartIcon />
            Узнать больше
          </button>
        </div>

        <div className="mt-16 w-full max-w-3xl border-t border-white/10 pt-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {heroStats.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-[#00e5ff] sm:text-4xl">
                  {item.value}
                </span>
                <span className="text-xs text-slate-400 sm:text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-1 flex-col justify-end pt-16">
          <ScrollMouseIcon />
        </div>
      </div>
    </section>
  )
}
