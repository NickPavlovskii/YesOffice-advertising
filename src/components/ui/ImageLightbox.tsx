import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { ImageLightboxProps } from '@/models/imageLightbox'
import { cn } from '@/utils/cn'

export function ImageLightbox({ src, alt, open, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        className={cn(
          'absolute right-4 top-4 z-10 rounded-full border border-white/20',
          'bg-white/10 px-4 py-2 text-sm font-medium text-white',
          'transition-colors hover:bg-white/20',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e5ff]',
        )}
        onClick={onClose}
      >
        Закрыть
      </button>

      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[min(96vw,1280px)] rounded-lg object-contain shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />

      <p className="pointer-events-none absolute bottom-4 left-1/2 max-w-lg -translate-x-1/2 truncate px-4 text-center text-sm text-slate-300">
        {alt}
      </p>
    </div>,
    document.body,
  )
}
