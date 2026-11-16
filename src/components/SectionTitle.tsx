import { motion } from 'framer-motion'
import { EASE } from '../lib/motion'

interface SectionTitleProps {
  title: string
  deck?: string
  className?: string
}

/** Section heading. The title rises out of a mask, like a title card, and is the only entrance motion in each section. */
export default function SectionTitle({ title, deck, className = 'mb-8 md:mb-12' }: SectionTitleProps) {
  return (
    <header className={className}>
      <h2 className="overflow-hidden pb-3 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-tight text-paper">
        <motion.span
          className="block"
          initial={{ y: '110%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '0px' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {title}
        </motion.span>
      </h2>
      {deck && <p className="mt-2 max-w-xl text-lg text-fog">{deck}</p>}
    </header>
  )
}
