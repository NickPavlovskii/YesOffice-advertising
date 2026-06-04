import { Button } from './Button'
import { Logo } from './Logo'

export { Button, Logo }

export const uiComponents = [
  { name: 'Button', component: Button },
  { name: 'Logo', component: Logo },
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
