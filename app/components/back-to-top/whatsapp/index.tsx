'use client'

import { TbArrowNarrowUp, TbBrandWhatsapp } from 'react-icons/tb'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { WhatsAppButton } from '../../button/whatsapp'

export const WhatsAppTo = () => {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 200) setShow(true)
    if (show && window.scrollY <= 200) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed right-4 bottom-5 z-20"
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <WhatsAppButton
            onClick={scrollToTop}
            
          >
            <TbBrandWhatsapp size={20} />
          </WhatsAppButton>
        </motion.div>
      )}
    </AnimatePresence>
  )
}