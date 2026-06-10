import { useState, type CSSProperties, type ReactNode } from 'react'
import { ImageLightbox } from '@/components/ui/ImageLightbox'
import { cn } from '@/utils/cn'

type ZoomableImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  style?: CSSProperties
  hint?: string
  children?: ReactNode
}

export function ZoomableImage({
  src,
  alt,
  className,
  imgClassName,
  style,
  hint = 'Нажмите для просмотра',
  children,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className={cn(
          'group relative block w-full cursor-zoom-in text-left',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e5ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]',
          className,
        )}
        style={style}
        onClick={() => setOpen(true)}
        aria-label={`Увеличить: ${alt}`}
      >
        {children ?? (
          <img src={src} alt={alt} className={imgClassName} draggable={false} />
        )}
        <span
          className={cn(
            'pointer-events-none absolute inset-0 flex items-end justify-center',
            'rounded-[inherit] bg-gradient-to-t from-black/60 via-black/10 to-transparent',
            'opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100',
          )}
        >
          <span className="mb-3 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white">
            {hint}
          </span>
        </span>
      </button>

      <ImageLightbox
        src={src}
        alt={alt}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
