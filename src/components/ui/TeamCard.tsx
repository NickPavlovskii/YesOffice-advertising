import type { SocialLink, TeamCardProps } from '@/models/team'
import { cn } from '@/utils/cn'

function SocialIcon({ type }: { type: SocialLink['type'] }) {
  if (type === 'linkedin') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M6.5 8.5h3v9h-3v-9zm1.5-5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM10 8.5h2.9v1.2h.04c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.7 2 3.7 4.6v4.75h-3v-4.2c0-1-.02-2.3-1.4-2.3-1.45 0-1.67 1.1-1.67 2.3v4.2H10v-9z" />
      </svg>
    )
  }

  if (type === 'github') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.11 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
      </svg>
    )
  }

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function TeamCard({
  name,
  role,
  photo,
  bio,
  socials,
  className,
}: TeamCardProps) {
  return (
    <article
      className={cn(
        'flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-card/80',
        'shadow-[0_0_32px_rgba(0,229,255,0.04)]',
        className,
      )}
    >
      <div className="p-4 pb-0">
        <img
          src={photo}
          alt={name}
          className="aspect-square w-full rounded-xl object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 pt-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-white">
          {name}
        </h3>
        <p className="mt-1 text-xs text-[#00e5ff]">{role}</p>

        {bio && (
          <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-400">
            {bio}
          </p>
        )}

        <div className={cn('mt-4 flex gap-2', !bio && 'mt-auto')}>
          {socials.map((social) => (
            <a
              key={`${social.type}-${social.href}`}
              href={social.href}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-[#00e5ff]/40 hover:text-[#00e5ff]"
              aria-label={social.type}
            >
              <SocialIcon type={social.type} />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
