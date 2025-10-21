import { IconLoader2 } from '@tabler/icons-react'

export default function LoadingSection() {
  return (
    <section className='flex flex-col justify-center items-center h-48'>
      <IconLoader2 className='animate-spin' size={48} />
    </section>
  )
};
