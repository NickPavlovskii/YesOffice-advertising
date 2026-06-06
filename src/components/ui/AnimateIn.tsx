import type { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/utils/cn'

type AnimateInProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li'
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: AnimateInProps) {
  const { ref, inView } = useInView()

  return (
    <Tag
      ref={ref as never}
      className={cn('animate-on-scroll', inView && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
