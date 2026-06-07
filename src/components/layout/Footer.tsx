import { Logo } from '@/components/ui/Logo'
import { footer } from '@/constants/footer'
import { cn } from '@/utils/cn'

function FooterContactIcon({ type }: { type: 'email' | 'phone' | 'location' }) {
  if (type === 'email') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-slate-500">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'phone') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-slate-500">
        <path
          d="M8 4h2l2 4-2 1.5a11 11 0 0 0 5 5L16.5 12l4 2v2a2 2 0 0 1-2 2A15 15 0 0 1 6 6a2 2 0 0 1 2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-slate-500">
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04080f] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {footer.description}
            </p>
            <ul className="mt-6 space-y-3">
              {footer.contacts.map((contact) => (
                <li key={contact.value}>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      <FooterContactIcon type={contact.type} />
                      {contact.value}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-sm text-slate-400">
                      <FooterContactIcon type={contact.type} />
                      {contact.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-white">{column.title}</h4>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-[#00e5ff]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={cn(
            'mt-10 flex flex-col items-center justify-between gap-3',
            'border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row',
          )}
        >
          <p>{footer.copyright}</p>
          <p>{footer.madeIn}</p>
        </div>
      </div>
    </footer>
  )
}
