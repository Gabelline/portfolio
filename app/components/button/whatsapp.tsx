import { cn } from '@/app/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const WhatsAppButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-green-700 py-3 px-4 rounded-md text-green-100 flex justify-center items-center  hover:bg-green-500 gap-2 transition-all disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
      }