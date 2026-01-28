import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'dark' | 'light' | 'green'
  padding?: boolean
  children: ReactNode
}

export default function Card({
  variant = 'dark',
  padding = true,
  className,
  children,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-[36px]'
  
  const variants = {
    dark: 'bg-faidaa-dark text-white',
    light: 'bg-faidaa-light text-gray-900',
    green: 'bg-lime-200 text-black',
  }
  
  const paddingStyles = padding ? 'p-[28px]' : ''
  
  return (
    <div
      className={cn(baseStyles, variants[variant], paddingStyles, className)}
      {...props}
    >
      {children}
    </div>
  )
}
