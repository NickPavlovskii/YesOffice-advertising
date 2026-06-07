import { useState, type FormEvent } from 'react'
import type { DemoSectionInfo } from '@/models/cta'
import type { DemoFormData, DemoFormStatus } from '@/models/demoForm'
import { sendDemoEmail } from '@/services/sendDemoEmail'
import { cn } from '@/utils/cn'

type DemoRequestFormProps = Pick<
  DemoSectionInfo,
  'formTitle' | 'submitText' | 'privacyText'
> & {
  className?: string
}

const initialForm: DemoFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
}

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-slate-500">
      <path d="M4 20V8l8-4 8 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-slate-500">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-slate-500">
      <path
        d="M8 4h2l2 4-2 1.5a11 11 0 0 0 5 5L16.5 12l4 2v2a2 2 0 0 1-2 2A15 15 0 0 1 6 6a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const inputClass = cn(
  'w-full rounded-lg border border-white/10 bg-[#0a1018] py-3 pl-11 pr-4',
  'text-sm text-white placeholder:text-slate-500',
  'focus:border-[#00e5ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00e5ff]/20',
  'disabled:cursor-not-allowed disabled:opacity-60',
)

export function DemoRequestForm({
  formTitle,
  submitText,
  privacyText,
  className,
}: DemoRequestFormProps) {
  const [form, setForm] = useState<DemoFormData>(initialForm)
  const [status, setStatus] = useState<DemoFormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const updateField = (field: keyof DemoFormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      await sendDemoEmail(form)
      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Не удалось отправить заявку. Попробуйте позже.',
      )
    }
  }

  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-bg-card/80 p-6 sm:p-8',
        'shadow-[0_0_40px_rgba(0,229,255,0.05)]',
        className,
      )}
    >
      <h3 className="text-xl font-bold text-white">{formTitle}</h3>

      {status === 'success' ? (
        <p className="mt-6 rounded-lg border border-[#4ade80]/30 bg-[#4ade80]/10 px-4 py-3 text-sm text-[#4ade80]">
          Заявка отправлена! Проверьте почту — мы прислали подтверждение.
        </p>
      ) : (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-400">Ваше имя</span>
            <input
              className={cn(inputClass, 'pl-4')}
              type="text"
              name="name"
              value={form.name}
              onChange={(event) => updateField('name', event.target.value)}
              placeholder="Иван Иванов"
              required
              disabled={status === 'loading'}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-slate-400">Компания</span>
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                <BuildingIcon />
              </span>
              <input
                className={inputClass}
                type="text"
                name="company"
                value={form.company}
                onChange={(event) => updateField('company', event.target.value)}
                placeholder="Название компании"
                required
                disabled={status === 'loading'}
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-slate-400">Email</span>
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                <EmailIcon />
              </span>
              <input
                className={inputClass}
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder="ivan@company.ru"
                required
                disabled={status === 'loading'}
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-slate-400">Телефон</span>
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                <PhoneIcon />
              </span>
              <input
                className={inputClass}
                type="tel"
                name="phone"
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                placeholder="+7 (999) 123-45-67"
                required
                disabled={status === 'loading'}
              />
            </div>
          </label>

          {status === 'error' && (
            <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className={cn(
              'flex w-full items-center justify-center gap-2 rounded-lg bg-[#00e5ff]',
              'py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#33ebff]',
              'disabled:cursor-not-allowed disabled:opacity-70',
            )}
          >
            {status === 'loading' ? 'Отправка...' : submitText}
            {status !== 'loading' && <span aria-hidden>→</span>}
          </button>

          <p className="text-center text-xs text-slate-500">{privacyText}</p>
        </form>
      )}
    </div>
  )
}
