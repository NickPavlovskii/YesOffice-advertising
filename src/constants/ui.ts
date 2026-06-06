import { Button } from '@/components/ui/Button'
import { ClientCard } from '@/components/ui/ClientCard'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { GeographyCard } from '@/components/ui/GeographyCard'
import { Logo } from '@/components/ui/Logo'
import { ProblemCard } from '@/components/ui/ProblemCard'
import { ScrollMouseIcon } from '@/components/ui/ScrollMouseIcon'

export const uiComponents = [
  { name: 'Button', component: Button },
  { name: 'ClientCard', component: ClientCard },
  { name: 'FeatureCard', component: FeatureCard },
  { name: 'GeographyCard', component: GeographyCard },
  { name: 'Logo', component: Logo },
  { name: 'ProblemCard', component: ProblemCard },
  { name: 'ScrollMouseIcon', component: ScrollMouseIcon },
] as const

export type UiComponentName = (typeof uiComponents)[number]['name']

export type UiComponentsMap = {
  [K in UiComponentName]: Extract<
    (typeof uiComponents)[number],
    { name: K }
  >['component']
}

export const uiRegistry = Object.fromEntries(
  uiComponents.map(({ name, component }) => [name, component]),
) as UiComponentsMap
