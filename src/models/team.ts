export type SocialLinkType = 'linkedin' | 'github' | 'email'

export type SocialLink = {
  type: SocialLinkType
  href: string
}

export type TeamMember = {
  id: string
  name: string
  role: string
  photo: string
  bio?: string
  socials: SocialLink[]
}

export type TeamSectionInfo = {
  title: string
  titleHighlight: string
  subtitle: string
}

export type TeamCardProps = TeamMember & {
  className?: string
}
