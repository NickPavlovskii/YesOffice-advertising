export type ClientAccent = 'cyan' | 'green' | 'pink'

export type ClientIcon = 'building' | 'mall' | 'office'

export type ClientItem = {
  icon: ClientIcon
  title: string
  description: string
  value: string
  label: string
  accent: ClientAccent
}

export type ClientCardProps = ClientItem & {
  className?: string
}
