import { anchors } from '@/constants/anchors'
import type { FooterInfo } from '@/models/footer'

export const footer: FooterInfo = {
  description:
    'Цифровая платформа для управления коммерческой недвижимостью. Автоматизация, аналитика и контроль в реальном времени.',
  contacts: [
    { type: 'email', value: 'o_oniklado_o@list.ru', href: 'o_oniklado_o@list.ru' },
    { type: 'phone', value: '8 988 362-07-22', href: 'tel:+789883620722' },
    { type: 'location', value: 'Москва, Россия' },
  ],
  columns: [
    {
      title: 'Продукт',
      links: [
        { label: 'Возможности', href: anchors.platformFeatures },
        { label: 'Преимущества', href: anchors.whyUs },
        { label: 'Тарифы', href: anchors.demo },
        { label: 'Интеграции', href: anchors.benefits },
      ],
    },
    {
      title: 'Компания',
      links: [
        { label: 'О нас', href: anchors.team },
        { label: 'Блог', href: anchors.whyUs },
        { label: 'Карьера', href: anchors.careers },
        { label: 'Контакты', href: anchors.demo },
      ],
    },
    {
      title: 'Правовая информация',
      links: [
        { label: 'Политика конфиденциальности', href: '#privacy' },
        { label: 'Условия использования', href: '#terms' },
        { label: 'Лицензии', href: '#licenses' },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} YesOffice. Все права защищены.`,
  madeIn: 'Niklad',
}
