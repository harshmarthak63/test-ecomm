import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function PageContainer({
  children,
  className,
  ...props
}: PageContainerProps) {
  return (
    <div
      className={cn(
        'max-w-[1440px] mx-auto px-4 sm:px-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
