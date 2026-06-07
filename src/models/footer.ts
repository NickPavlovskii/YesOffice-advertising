export type FooterLink = {
  label: string
  href: string
}

export type FooterLinkGroup = {
  title: string
  links: FooterLink[]
}

export type FooterContact = {
  type: 'email' | 'phone' | 'location'
  value: string
  href?: string
}

export type FooterInfo = {
  description: string
  contacts: FooterContact[]
  columns: FooterLinkGroup[]
  copyright: string
  madeIn: string
}
