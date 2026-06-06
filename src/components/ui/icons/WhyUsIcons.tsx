import type { ReactNode } from 'react'
import type { AdvantageIcon } from '@/models/whyUs'

function LightningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LineChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 18V6M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M7 14l3-4 3 2 4-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TrendUpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M7 14l4-5 3 3 5-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 5h4v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DatabaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function CloudIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 18h11a4 4 0 0 0 .5-8A5.5 5.5 0 0 0 6.5 8.5 4.5 4.5 0 0 0 7 18z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l8 4v6c0 4.4-3.6 7.5-8 8-4.4-.5-8-3.6-8-8V7l8-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 19c0-3 2.7-5 6-5M14 19c0-2.2 1.8-4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const iconMap: Record<AdvantageIcon, () => ReactNode> = {
  lightning: LightningIcon,
  'line-chart': LineChartIcon,
  'trend-up': TrendUpIcon,
  database: DatabaseIcon,
  cloud: CloudIcon,
  shield: ShieldIcon,
  users: UsersIcon,
  clock: ClockIcon,
}

export function WhyUsIcon({ name }: { name: AdvantageIcon }) {
  const Icon = iconMap[name]
  return <Icon />
}
