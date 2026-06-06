export type PlatformFeatureIcon = 'grid' | 'layers'

export type PlatformFeatureItem = {
  id: string
  icon: PlatformFeatureIcon
  label: string
  title: string
  description: string
  items: string[]
  imageSrc?: string
  imageAlt: string
  reversed?: boolean
}

export type PlatformFeaturesSectionInfo = {
  badge: string
  title: string
  titleHighlight: string
  subtitle: string
}

export type PlatformFeatureBlockProps = PlatformFeatureItem

export type ImagePlaceholderProps = {
  src?: string
  alt: string
  className?: string
}
