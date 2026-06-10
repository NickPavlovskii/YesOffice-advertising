import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { PlatformFeatureIcon } from '@/components/ui/icons/PlatformIcons'
import type { PlatformFeatureBlockProps } from '@/models/platformFeature'
import { cn } from '@/utils/cn'

function FeatureCheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
          <span
            className={cn(
              'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center',
              'rounded-full bg-[#4ade80]/15 text-xs text-[#4ade80]',
            )}
            aria-hidden
          >
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function PlatformFeatureBlock({
  icon,
  label,
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  imageFit,
  imageAspect,
  imageFrameClass,
  reversed = false,
}: PlatformFeatureBlockProps) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2">
      <div className={cn('space-y-5', reversed ? 'lg:order-2' : 'lg:order-1')}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#00e5ff]/30 bg-[#00e5ff]/10 text-[#00e5ff]">
            <PlatformFeatureIcon name={icon} />
          </div>
          <span className="text-sm text-slate-400">{label}</span>
        </div>

        <h3 className="text-xl font-bold uppercase leading-tight tracking-tight text-white sm:text-2xl">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
          {description}
        </p>

        <FeatureCheckList items={items} />
      </div>

      <div className={cn(reversed ? 'lg:order-1' : 'lg:order-2')}>
        <ImagePlaceholder
          src={imageSrc}
          alt={imageAlt}
          fit={imageFit}
          aspect={imageAspect}
          frameClassName={imageFrameClass}
        />
      </div>
    </article>
  )
}
