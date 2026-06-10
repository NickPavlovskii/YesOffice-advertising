import { images } from '@/constants/images'
import type {
  PlatformFeatureItem,
  PlatformFeaturesSectionInfo,
} from '@/models/platformFeature'

export const platformFeaturesSection: PlatformFeaturesSectionInfo = {
  badge: 'Возможности платформы',
  title: 'Всё для управления',
  titleHighlight: 'недвижимостью',
  subtitle:
    'Интуитивный интерфейс и мощная аналитика для принятия решений на основе данных',
}

export const platformFeatures: PlatformFeatureItem[] = [
  {
    id: 'spaces',
    icon: 'grid',
    label: 'Визуальное управление площадями',
    title: 'Загружено или перегружено ?',
    description:
      'Интерактивный план этажей с цветовой индикацией статуса помещений. Мгновенно видите свободные, занятые и забронированные площади.',
    items: [
      'Визуализация загрузки в реальном времени',
      'Интерактивные планы этажей',
      'Быстрый поиск свободных помещений',
    ],
    imageSrc: images.platform.plan,
    imageAlt: 'Интерактивный план этажей',
    imageFit: 'contain',
  },
  {
    id: 'documents',
    icon: 'layers',
    label: 'Централизованное хранение документов',
    title: 'Порядок в документах – порядок в бизнесе',
    description:
      'Все договоры, акты, счета и планы помещений в одном месте. Быстрый поиск, категоризация и привязка к конкретным помещениям.',
    items: [
      'Автоматическая категоризация',
      'Поиск по всем документам',
      'Привязка к помещениям',
    ],
    imageSrc: images.platform.documents,
    imageAlt: 'Централизованное хранение документов',
    imageFit: 'contain',
    imageAspect: '1024/569',
    imageFrameClass: 'bg-transparent p-0 sm:p-0',
    reversed: true,
  },
  {
    id: 'editor',
    icon: 'edit',
    label: 'Редактор поэтажного плана',
    title: 'Разметка помещений за минуты',
    description:
      'Загрузите SVG или изображение плана и разметьте интерактивные зоны: тип, площадь, ставка и статус каждого помещения.',
    items: [
      'Добавление и редактирование помещений',
      'Типы: офис, коворкинг, склад, переговорная',
      'Экспорт плана в PDF и PNG',
    ],
    imageSrc: images.platform.editor,
    imageAlt: 'Редактор плана этажа',
    imageFit: 'contain',
  },
  {
    id: 'analytics',
    icon: 'chart',
    label: 'Аналитика и отчётность',
    title: 'Решения на основе данных',
    description:
      'Дашборды заполняемости, доходности и динамики спроса. Сравнение факта с прогнозом и выгрузка отчётов в один клик.',
    items: [
      'Заполняемость в реальном времени',
      'Доходность: факт vs прогноз',
      'Экспорт в XLSX и PDF',
    ],
    imageSrc: images.platform.analytics,
    imageAlt: 'Аналитика платформы YesOffice',
    imageFit: 'contain',
    reversed: true,
  },
]
