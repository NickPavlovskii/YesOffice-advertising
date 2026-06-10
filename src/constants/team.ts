import { images } from '@/constants/images'
import type { TeamMember, TeamSectionInfo } from '@/models/team'

export const teamSection: TeamSectionInfo = {
  title: 'Наша',
  titleHighlight: 'команда',
  subtitle:
    'Эксперты в коммерческой недвижимости и цифровых технологиях, которые создают платформу для управления объектами нового поколения.',
}

export const teamMembers: TeamMember[] = [
  {
    id: 'nikita',
    name: 'Никита Слесарев',
    role: 'CEO & PM & Analyst',
    photo: images.team.member2,
    bio: 'Определяет продуктовую стратегию и аналитику платформы, превращая потребности управляющих компаний в цифровые решения.',
    socials: [
      { type: 'linkedin', href: '#' },
      { type: 'email', href: 'mailto:hello@w-space.ru' },
    ],
  },
  {
    id: 'alexey',
    name: 'Александр Робеко',
    role: 'CTO & Backend Developer',
    photo: images.team.member1,
    bio: 'Проектирует архитектуру и backend платформы, обеспечивая надёжность, интеграции и масштабируемость системы.',
    socials: [
      { type: 'linkedin', href: '#' },
      { type: 'github', href: '#' },
    ],
  },
  {
    id: 'maxim',
    name: 'Никита Павловский',
    role: 'UI/UX & Frontend Developer',
    photo: images.team.member3,
    bio: 'Проектирует интерфейсы и реализует frontend-часть платформы, делая сложную аналитику понятной для пользователей.',
    socials: [
      { type: 'linkedin', href: '#' },
      { type: 'github', href: '#' },
      { type: 'email', href: 'mailto:hello@w-space.ru' },
    ],
  },
]
