export type DemoBenefit = {
  text: string
}

export type DemoContact = {
  type: 'email' | 'phone'
  value: string
  href: string
}

export type JoinCtaInfo = {
  title: string
  subtitle: string
  buttonText: string
  buttonHref: string
}

export type DemoSectionInfo = {
  title: string
  titleHighlight: string
  description: string
  benefits: DemoBenefit[]
  contacts: DemoContact[]
  formTitle: string
  privacyText: string
  submitText: string
  successTitle: string
  successMessage: string
}
