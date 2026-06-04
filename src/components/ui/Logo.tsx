import { cn } from '@/utils/cn'

type LogoProps = {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <rect width="28" height="28" rx="6" fill="#00e5ff" fillOpacity="0.15" />
        <path
          d="M8 18L14 8L20 18"
          stroke="#00e5ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="20" r="2" fill="#00e5ff" />
      </svg>
      {showText && (
        <span className="text-lg font-semibold tracking-tight text-white">
          W-Space
        </span>
      )}
    </span>
  )
}
