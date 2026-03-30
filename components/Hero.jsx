'use client';
import { motion } from 'framer-motion'
import { styles } from '@/constants/styles'
import herobg from '@/assets/herobg.png'
import dynamic from 'next/dynamic'

const ComputersCanvas = dynamic(() => import('@/components/canvas/Computers'), {
  ssr: false
})

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${herobg.src})` }}
      className='relative w-full h-screen mx-auto bg-no-repeat bg-center'
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5 ml-10' >
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} text-white `}
          >
            Hi, I&apos;m <span className='text-[#915eff]' >Washington</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
          <div className='w-full h-100 ' >
            <ComputersCanvas />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero