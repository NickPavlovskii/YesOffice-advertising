import type { ClientItem, GeographyInfo } from '@/models'

export const clients: ClientItem[] = [
  {
    icon: 'building',
    title: 'УК и девелоперы',
    description: 'Управляющие компании и застройщики коммерческой недвижимости',
    value: '150-500',
    label: 'компаний',
    accent: 'cyan',
  },
  {
    icon: 'mall',
    title: 'ТРЦ и ритейл',
    description: 'Торгово-развлекательные центры и retail-объекты',
    value: '50-150',
    label: 'компаний',
    accent: 'green',
  },
  {
    icon: 'office',
    title: 'Бизнес-центры',
    description: 'Офисные комплексы класса A и B+',
    value: '10-40',
    label: 'компаний',
    accent: 'pink',
  },
]

export const geography: GeographyInfo = {
  title: 'География',
  lines: [
    { text: 'Крупные города РФ' },
    { text: 'Население > ', highlight: '250 тыс.', suffix: ' человек' },
  ],
}

export const clientsSection = {
  title: 'Кто наш идеальный клиент ?',
}
