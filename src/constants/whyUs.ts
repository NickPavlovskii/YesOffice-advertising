import type { AdvantageItem, ComparisonRow, WhyUsSectionInfo } from '@/models/whyUs'

export const whyUsSection: WhyUsSectionInfo = {
  title: 'Почему выбирают',
  titleHighlight: 'нас?',
  subtitle:
    'Конкурентные преимущества, которые делают нашу платформу лидером рынка',
  comparisonTitle: 'Сравнение с традиционными методами',
}

export const advantages: AdvantageItem[] = [
  {
    id: 'time',
    icon: 'lightning',
    stat: '-76%',
    statLabel: 'рутины',
    title: 'Экономия времени',
    description:
      'Сокращение рутинных операций на 76%. Автоматизация отчётности и документооборота.',
  },
  {
    id: 'analytics',
    icon: 'line-chart',
    stat: '24/7',
    statLabel: 'мониторинг',
    title: 'Аналитика в реальном времени',
    description:
      'Мгновенный доступ к данным о загрузке, доходности и эффективности каждого помещения.',
  },
  {
    id: 'revenue',
    icon: 'trend-up',
    stat: '+25%',
    statLabel: 'к доходу',
    title: 'Рост доходности',
    description:
      'Оптимизация использования площадей и выявление скрытых резервов для увеличения прибыли.',
  },
  {
    id: 'bigdata',
    icon: 'database',
    stat: 'AI',
    statLabel: 'powered',
    title: 'Big Data технологии',
    description:
      'Прогнозирование спроса, анализ рынка и рекомендации на основе машинного обучения.',
  },
  {
    id: 'cloud',
    icon: 'cloud',
    stat: '100%',
    statLabel: 'в облаке',
    title: 'Облачное решение',
    description:
      'Доступ из любой точки мира. Автоматические обновления и резервное копирование.',
  },
  {
    id: 'security',
    icon: 'shield',
    stat: '152-ФЗ',
    statLabel: 'compliant',
    title: 'Безопасность данных',
    description:
      'Шифрование, разграничение доступа и соответствие требованиям 152-ФЗ.',
  },
  {
    id: 'team',
    icon: 'users',
    stat: '∞',
    statLabel: 'пользователей',
    title: 'Командная работа',
    description:
      'Совместный доступ для всех сотрудников с гибкой настройкой ролей и прав.',
  },
  {
    id: 'start',
    icon: 'clock',
    stat: '2',
    statLabel: 'недели',
    title: 'Быстрый старт',
    description:
      'Внедрение за 2 недели. Импорт данных из Excel и интеграция с существующими системами.',
  },
]

export const comparisonRows: ComparisonRow[] = [
  {
    parameter: 'Время на отчёт',
    traditional: '2-4 часа',
    platform: '5 минут',
  },
  {
    parameter: 'Поиск документа',
    traditional: '15-30 минут',
    platform: 'Мгновенно',
  },
  {
    parameter: 'Анализ загрузки',
    traditional: 'Вручную',
    platform: 'Автоматически',
  },
  {
    parameter: 'Доступ к данным',
    traditional: 'Только в офисе',
    platform: 'Из любой точки',
  },
  {
    parameter: 'Ошибки в данных',
    traditional: 'Часто',
    platform: 'Исключены',
  },
]
