import { Logo } from '@/components/ui'
import { headerNav } from '@/constants/navigation'
import { cn } from '@/utils/cn'

export function Header() {
  return (
    <header className="relative z-20 border-b border-white/5 bg-[#050a14]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#" className="transition-opacity hover:opacity-90">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {headerNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#login"
          className={cn(
            'shrink-0 rounded-lg border border-[#00e5ff]/60 px-4 py-2',
            'text-sm font-medium text-[#00e5ff] transition-colors',
            'hover:border-[#00e5ff] hover:bg-[#00e5ff]/10',
          )}
        >
          Вход
        </a>
      </div>
    </header>
  )
}
