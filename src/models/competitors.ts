export type CompetitorRegion = 'russia' | 'world'

export type CompetitorCellVariant = 'highlight' | 'neutral' | 'negative'

export type CompetitorCell = {
  text: string
  variant?: CompetitorCellVariant
}

export type CompetitorComparisonRow = {
  feature: string
  ourProduct: CompetitorCell
  competitorA: CompetitorCell
  competitorB: CompetitorCell
}

export type CompetitorComparisonData = {
  label: string
  columns: [string, string, string, string]
  rows: CompetitorComparisonRow[]
}

export type CompetitorsSectionInfo = {
  title: string
  titleHighlight: string
  subtitle: string
}

export type RegionToggleProps = {
  value: CompetitorRegion
  onChange: (region: CompetitorRegion) => void
}

export type CompetitorComparisonTableProps = {
  data: CompetitorComparisonData
  className?: string
}
