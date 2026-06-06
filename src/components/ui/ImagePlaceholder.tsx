import type { ImagePlaceholderProps } from '@/models/platformFeature'
import { cn } from '@/utils/cn'

export function ImagePlaceholder({ src, alt, className }: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn(
          'aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover',
          className,
        )}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'aspect-[4/3] w-full rounded-2xl border border-[#00e5ff]/15 bg-bg-card',
        'shadow-[0_0_48px_rgba(0,229,255,0.08)] shadow-inner shadow-black/30',
        className,
      )}
    />
  )
}
