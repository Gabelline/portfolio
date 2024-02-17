import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-zinc-950">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-500">
        Made with
        <IoMdHeart size={13} className="text-white" />
        by
        <strong className="font-medium">Guilherme Gabelline</strong>
      </span>
    </footer>
  )
}
