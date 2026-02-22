'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart2, Home, TrendingUp, FlaskConical } from 'lucide-react'

const TABS = [
  { href: '/', label: 'Overview', icon: Home },
  { href: '/backtest', label: 'Backtest', icon: FlaskConical },
]

export function BottomNav() {
  const pathname = usePathname()
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border safe-area-pb md:hidden">
      <div className="flex">
        {TABS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href))
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 text-xs font-medium transition-colors ${
                active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className={`w-5 h-5 ${active ? 'stroke-[2.5px]' : ''}`} />
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export function TopNav() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 h-12 md:h-14 flex items-center gap-2.5">
        <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
          <TrendingUp className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary-foreground" />
        </div>
        <div className="flex items-baseline gap-1.5 min-w-0">
          <span className="font-bold text-sm leading-tight">Factor Lens</span>
          <span className="text-xs text-muted-foreground hidden sm:inline">Indian Equities</span>
        </div>

        {/* Desktop nav tabs */}
        <nav className="hidden md:flex items-center gap-0.5 ml-6">
          {TABS.map(({ href, label }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="flex-1" />
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <BarChart2 className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:inline">NSE / BSE</span>
        </div>
      </div>
    </header>
  )
}
