import type { ReactNode } from 'react'
import { Header } from './Header'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      {/* <Header /> */}
      <main className="flex-1">{children}</main>
    </div>
  )
}
