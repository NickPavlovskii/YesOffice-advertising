import { ImageLightbox } from '@/components/ui/ImageLightbox'
import type { ImagePlaceholderProps } from '@/models/platformFeature'
import { cn } from '@/utils/cn'
import { useState } from 'react'

const frameClass =
  'w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_48px_rgba(0,229,255,0.12)] ring-1 ring-white/5'

export function ImagePlaceholder({
  src,
  alt,
  className,
  fit = 'contain',
  aspect,
  frameClassName,
}: ImagePlaceholderProps) {
  const [open, setOpen] = useState(false)

  const aspectStyle = aspect
    ? { aspectRatio: aspect.replace('/', ' / ') }
    : undefined

  if (src) {
    if (fit === 'contain') {
      return (
        <>
          <button
            type="button"
            className={cn(
              frameClass,
              'group relative block w-full cursor-zoom-in bg-slate-900/60 p-1 sm:p-2',
              'text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e5ff]',
              frameClassName,
              className,
            )}
            style={aspectStyle}
            onClick={() => setOpen(true)}
            aria-label={`Увеличить: ${alt}`}
          >
            <img
              src={src}
              alt={alt}
              draggable={false}
              className={cn(
                'mx-auto block max-h-full max-w-full object-contain',
                aspect ? 'h-full w-full' : 'h-auto w-full',
              )}
            />
            <span
              className={cn(
                'pointer-events-none absolute inset-0 flex items-end justify-center',
                'rounded-[inherit] bg-gradient-to-t from-black/60 via-transparent to-transparent',
                'opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100',
              )}
            >
              <span className="mb-3 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white">
                Нажмите для просмотра
              </span>
            </span>
          </button>
          <ImageLightbox src={src} alt={alt} open={open} onClose={() => setOpen(false)} />
        </>
      )
    }

    return (
      <>
        <button
          type="button"
          className={cn(
            frameClass,
            'group relative block aspect-[4/3] w-full cursor-zoom-in',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e5ff]',
            className,
          )}
          onClick={() => setOpen(true)}
          aria-label={`Увеличить: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="h-full w-full object-cover object-top"
          />
        </button>
        <ImageLightbox src={src} alt={alt} open={open} onClose={() => setOpen(false)} />
      </>
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        frameClass,
        'aspect-[4/3] border-[#00e5ff]/15 bg-bg-card',
        'shadow-[0_0_48px_rgba(0,229,255,0.08)] shadow-inner shadow-black/30',
        className,
      )}
    />
  )
}
