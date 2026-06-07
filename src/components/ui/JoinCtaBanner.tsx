import type { JoinCtaInfo } from '@/models/cta'
import { cn } from '@/utils/cn'

type JoinCtaBannerProps = JoinCtaInfo & {
  className?: string
}

export function JoinCtaBanner({
  title,
  subtitle,
  buttonText,
  buttonHref,
  className,
}: JoinCtaBannerProps) {
  return (
    <div
      id="careers"
      className={cn(
        'rounded-2xl bg-gradient-to-r from-[#00bcd4] to-[#4ade80] px-6 py-10 text-center',
        className,
      )}
    >
      <h3 className="text-2xl font-bold text-white sm:text-3xl">{title}</h3>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90 sm:text-base">
        {subtitle}
      </p>
      <a
        href={buttonHref}
        className={cn(
          'mt-6 inline-flex items-center justify-center rounded-lg',
          'bg-[#00e5ff] px-6 py-3 text-sm font-semibold text-slate-950',
          'transition-colors hover:bg-[#33ebff]',
        )}
      >
        {buttonText}
      </a>
    </div>
  )
}
