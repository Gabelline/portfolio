'use client'

import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type TechBadgeProps = {
  name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <motion.span
      className="text-zinc-900 bg-white/80 text-sm font-medium py-1 px-3 rounded-md">
         {name}
   
    </motion.span>
  )
}