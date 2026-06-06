export type ProblemIcon = 'clock' | 'pie-chart' | 'document'

export type ProblemItem = {
  icon: ProblemIcon
  title: string
  description: string
  note: string
  source: string
}

export type ProblemCardProps = ProblemItem & {
  className?: string
}
