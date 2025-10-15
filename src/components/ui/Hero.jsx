import { motion } from 'motion/react'
import { IconArrowDown } from '@tabler/icons-react'

export default function Hero() {
  return (
    <main className='relative min-h-svh p-10 flex flex-col gap-4 justify-center items-center'>
      <h1 className='font-kaisei text-6xl'>Everything you need, one click away.</h1>
      <p className='text-lg'>From daily essentials to unique finds, we&apos;ve got it all.</p>
      <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} className='absolute bottom-10'>
        <IconArrowDown className='size-7' />
      </motion.div>
    </main>
  )
}
