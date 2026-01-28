import { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: 'horizontal' | 'vertical'
}

export default function Divider({
  variant = 'horizontal',
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      className={cn(
        variant === 'horizontal' ? 'w-full border-t' : 'h-full border-l',
        'border-gray-300',
        className
      )}
      {...props}
    />
  )
}
