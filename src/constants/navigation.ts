import { anchors } from '@/constants/anchors'
import type { NavItem } from '@/types'

export const headerNav: NavItem[] = [
  { label: 'Продукты', href: anchors.platformFeatures },
  { label: 'Решения', href: anchors.whyUs },
  { label: 'Цены', href: anchors.demo },
  { label: 'О нас', href: anchors.team },
]
