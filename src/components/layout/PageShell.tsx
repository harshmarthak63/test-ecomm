import { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import Header from '@/components/sections/Header'
import AppHeader from '@/components/sections/AppHeader'
import Footer from '@/components/sections/Footer'

type BackgroundVariant = 'light' | 'dark'
type HeaderVariant = 'marketing' | 'app'

interface PageShellProps {
  children: ReactNode
  showHeader?: boolean
  showFooter?: boolean
  backgroundVariant?: BackgroundVariant
  headerVariant?: HeaderVariant
  className?: string
}

export default function PageShell({
  children,
  showHeader = true,
  showFooter = true,
  backgroundVariant = 'light',
  headerVariant = 'marketing',
  className,
}: PageShellProps) {
  const backgroundClass =
    backgroundVariant === 'dark' ? 'bg-black text-white' : 'bg-faidaa-light'

  return (
    <div className={cn('min-h-screen font-sans', backgroundClass, className)}>
      {showHeader &&
        (headerVariant === 'app' ? <AppHeader /> :<Header />)}

      {children}

      {showFooter && <Footer />}
    </div>
  )
}

