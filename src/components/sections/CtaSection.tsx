import { AnimateIn } from '@/components/ui/AnimateIn'
import { DemoRequestForm } from '@/components/ui/DemoRequestForm'
import { JoinCtaBanner } from '@/components/ui/JoinCtaBanner'
import { demoSection, joinCta } from '@/constants/cta'
import { cn } from '@/utils/cn'

function ContactEmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-[#00e5ff]">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ContactPhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-[#00e5ff]">
      <path
        d="M8 4h2l2 4-2 1.5a11 11 0 0 0 5 5L16.5 12l4 2v2a2 2 0 0 1-2 2A15 15 0 0 1 6 6a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CtaSection() {
  return (
    <section id="demo" className="relative overflow-hidden px-6 py-20">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00e5ff]/10 blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl space-y-12">
        <AnimateIn>
          <JoinCtaBanner {...joinCta} />
        </AnimateIn>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <AnimateIn>
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                {demoSection.title}{' '}
                <span className="text-[#00e5ff]">{demoSection.titleHighlight}</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                {demoSection.description}
              </p>

              <ul className="mt-8 space-y-3">
                {demoSection.benefits.map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-slate-300">
                    <span
                      className={cn(
                        'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center',
                        'rounded-full bg-[#4ade80]/15 text-xs text-[#4ade80]',
                      )}
                      aria-hidden
                    >
                      ✓
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6 space-y-3">
                {demoSection.contacts.map((contact) => (
                  <a
                    key={contact.value}
                    href={contact.href}
                    className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-[#00e5ff]"
                  >
                    {contact.type === 'email' ? <ContactEmailIcon /> : <ContactPhoneIcon />}
                    {contact.value}
                  </a>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={120}>
            <DemoRequestForm
              formTitle={demoSection.formTitle}
              submitText={demoSection.submitText}
              privacyText={demoSection.privacyText}
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
