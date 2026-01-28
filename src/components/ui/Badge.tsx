import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'live' | 'category' | 'default'
  children: ReactNode
}

export default function Badge({
  variant = 'default',
  className,
  children,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full text-xs font-medium'
  
  const variants = {
    live: 'bg-red-500 text-white px-2 py-1',
    category: 'bg-gray-200 text-gray-700 px-2 py-1',
    default: 'bg-gray-100 text-gray-800 px-2 py-1',
  }
  
  return (
    <span
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  )
}
