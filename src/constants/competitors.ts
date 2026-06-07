import type {
  CompetitorComparisonData,
  CompetitorRegion,
  CompetitorsSectionInfo,
} from '@/models/competitors'

export const competitorsSection: CompetitorsSectionInfo = {
  title: 'Сравнение с',
  titleHighlight: 'конкурентами',
  subtitle: 'Мы превосходим конкурентов по ключевым параметрам',
}

export const competitorData: Record<CompetitorRegion, CompetitorComparisonData> = {
  russia: {
    label: 'Конкуренты: Россия',
    columns: ['Функционал', 'YesOffice', 'ARENDAsoft', 'alarmCRM'],
    rows: [
      {
        feature: 'Интерактивная карта',
        ourProduct: { text: 'Да', variant: 'highlight' },
        competitorA: { text: 'Частично', variant: 'neutral' },
        competitorB: { text: 'Нет', variant: 'negative' },
      },
      {
        feature: 'Документооборот',
        ourProduct: { text: 'Да', variant: 'highlight' },
        competitorA: { text: 'Да', variant: 'neutral' },
        competitorB: { text: 'Нет', variant: 'negative' },
      },
      {
        feature: 'Планирование аренды',
        ourProduct: { text: 'Встроено', variant: 'highlight' },
        competitorA: { text: 'Базовое', variant: 'neutral' },
        competitorB: { text: 'Только CRM', variant: 'neutral' },
      },
      {
        feature: 'Стоимость',
        ourProduct: { text: 'Низкие цены', variant: 'highlight' },
        competitorA: { text: 'Дорогая лицензия', variant: 'neutral' },
        competitorB: { text: 'Высокие тарифы', variant: 'neutral' },
      },
    ],
  },
  world: {
    label: 'Конкуренты: Мир',
    columns: ['Функционал', 'YesOffice', 'VTS', 'MRI Software'],
    rows: [
      {
        feature: 'Интерактивная карта',
        ourProduct: { text: 'Да', variant: 'highlight' },
        competitorA: { text: 'Да', variant: 'neutral' },
        competitorB: { text: 'Частично', variant: 'neutral' },
      },
      {
        feature: 'Документооборот',
        ourProduct: { text: 'Да', variant: 'highlight' },
        competitorA: { text: 'Да', variant: 'neutral' },
        competitorB: { text: 'Да', variant: 'neutral' },
      },
      {
        feature: 'Планирование аренды',
        ourProduct: { text: 'Встроено', variant: 'highlight' },
        competitorA: { text: 'Модуль', variant: 'neutral' },
        competitorB: { text: 'Модуль', variant: 'neutral' },
      },
      {
        feature: 'Стоимость',
        ourProduct: { text: 'Низкие цены', variant: 'highlight' },
        competitorA: { text: 'Enterprise', variant: 'neutral' },
        competitorB: { text: 'Enterprise', variant: 'neutral' },
      },
    ],
  },
}
