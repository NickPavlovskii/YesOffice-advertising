export type AdvantageIcon =
  | 'lightning'
  | 'line-chart'
  | 'trend-up'
  | 'database'
  | 'cloud'
  | 'shield'
  | 'users'
  | 'clock'

export type AdvantageItem = {
  id: string
  icon: AdvantageIcon
  stat: string
  statLabel: string
  title: string
  description: string
}

export type ComparisonRow = {
  parameter: string
  traditional: string
  platform: string
}

export type WhyUsSectionInfo = {
  title: string
  titleHighlight: string
  subtitle: string
  comparisonTitle: string
}

export type AdvantageCardProps = AdvantageItem & {
  className?: string
}

export type ComparisonTableProps = {
  rows: ComparisonRow[]
  className?: string
}
