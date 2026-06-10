import type { PropsWithChildren } from 'react'
import { Logo, ScrollMouseIcon } from '@/components/ui'
import { ZoomableImage } from '@/components/ui/ZoomableImage'
import { anchors } from '@/constants/anchors'
import { images } from '@/constants/images'
import { heroStats } from '@/constants/hero'
import { cn } from '@/utils/cn'

const ctaLinkClass = cn(
  'inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]',
)

function ChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="2" y="10" width="3" height="6" rx="0.5" fill="currentColor" />
      <rect x="7.5" y="6" width="3" height="10" rx="0.5" fill="currentColor" />
      <rect x="13" y="2" width="3" height="14" rx="0.5" fill="currentColor" />
    </svg>
  )
}

type FadeInProps = PropsWithChildren<{
  delay?: number
  className?: string
}>

function FadeIn({ delay = 0, className, children }: FadeInProps) {
  return (
    <div
      className={cn(
        'animate-enter animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100',
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4.5rem)] flex-col items-center overflow-hidden px-6 pb-12 pt-10">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#00e5ff]/20 blur-[120px] animate-glow-pulse motion-reduce:animate-none"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-emerald-500/15 blur-[120px] animate-glow-pulse motion-reduce:animate-none"
        style={{ animationDelay: '2s' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center text-center">
        <FadeIn delay={0}>
          <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg shadow-black/20">
            <Logo showText={false} />
            <span className="text-sm font-semibold tracking-wide text-slate-900">
              О проете
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <h1 className="max-w-4xl text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.15]">
            <span className="text-[#00e5ff]">Цифровая платформа</span>
            <span className="text-white">
              , которая автоматизирует управление и анализирует использование
              пространства в{' '}
            </span>
            <span className="text-[#4ade80]">реальном времени</span>
            <span className="text-white">.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={240}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Мы трансформируем коммерческую недвижимость из статичного актива в
            источник растущей стоимости, используя технологии Big Data.
          </p>
        </FadeIn>

        <FadeIn delay={360}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={anchors.demo}
              className={cn(
                ctaLinkClass,
                'bg-[#00e5ff] font-semibold text-slate-950 hover:bg-[#33ebff]',
                'focus-visible:ring-[#00e5ff]',
              )}
            >
              Получить демо
              <span aria-hidden>→</span>
            </a>
            <a
              href={anchors.demo}
              className={cn(
                ctaLinkClass,
                'border border-slate-600/80 bg-transparent text-white',
                'hover:border-slate-500 hover:bg-white/5 focus-visible:ring-slate-500',
              )}
            >
              <ChartIcon />
              Узнать больше
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={420}>
          <div className="relative mt-12 w-full max-w-4xl">
            <div
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-[#00e5ff]/10 blur-2xl"
              aria-hidden
            />
            <ZoomableImage
              src={images.platform.plan}
              alt="Интерфейс платформы YesOffice — интерактивный план этажа"
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-1 shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:p-2"
              imgClassName="mx-auto block h-auto w-full max-w-full object-contain"
            />
          </div>
        </FadeIn>

        <FadeIn delay={480}>
          <div className="mt-16 w-full max-w-3xl border-t border-white/10 pt-12">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {heroStats.map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    'flex flex-col items-center gap-1',
                    'animate-enter animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100',
                  )}
                  style={{ animationDelay: `${560 + index * 80}ms` }}
                >
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
        </FadeIn>

        <FadeIn delay={720} className="mt-auto flex flex-1 flex-col justify-end pt-16">
          <a
            href={anchors.problems}
            className="flex justify-center transition-opacity hover:opacity-80"
            aria-label="Прокрутить вниз"
          >
            <ScrollMouseIcon />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
