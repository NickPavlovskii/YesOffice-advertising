export type GeographyLine = {
  text: string
  highlight?: string
  suffix?: string
}

export type GeographyInfo = {
  title: string
  lines: GeographyLine[]
}

export type GeographyCardProps = GeographyInfo & {
  className?: string
}
