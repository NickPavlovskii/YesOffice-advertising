import { anchors } from '@/constants/anchors'
import type { DemoSectionInfo, JoinCtaInfo } from '@/models/cta'

export const joinCta: JoinCtaInfo = {
  title: 'Хотите присоединиться?',
  subtitle:
    'Мы всегда ищем талантливых специалистов, готовых менять индустрию вместе с нами.',
  buttonText: 'Открытые вакансии',
  buttonHref: anchors.careers,
}

export const demoSection: DemoSectionInfo = {
  title: 'Готовы',
  titleHighlight: 'трансформировать управление недвижимостью?',
  description:
    'Получите персональную демонстрацию платформы и узнайте, как она поможет оптимизировать ваш бизнес.',
  benefits: [
    { text: 'Бесплатная демонстрация за 30 минут' },
    { text: 'Персональный расчёт ROI для вашего объекта' },
    { text: 'Пробный период 14 дней без обязательств' },
    { text: 'Помощь с импортом данных из Excel' },
  ],
  contacts: [
    { type: 'email', value: 'info@YesOffice.ru', href: 'mailto:info@YesOffice.ru' },
    { type: 'phone', value: '8 800 123-45-67', href: 'tel:+78001234567' },
  ],
  formTitle: 'Запросить демонстрацию',
  submitText: 'Получить демо',
  privacyText:
    'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности',
}
