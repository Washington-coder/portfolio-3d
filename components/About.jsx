'use client';
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '@/constants/styles'
import { services } from '@/constants'
import { fadeIn, textVariant } from '@/utils/motion'
import Image from 'next/image';
import { SectionWrapper } from '../components/hoc'

const ServiceCard = ({index, title, icon}) => {
  console.log(title)
  return (
    <Tilt className="xs:w-[250px] w-50">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <Image 
            src={icon} 
            alt={title} 
            width={64}      
            height={64}
            className='object-contain' 
          />
          <h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText} >Introduction</p>
        <h1 className={styles.sectionHeadText} >Overview.</h1>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to life!
      </motion.p>

      <div className='w-full mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => {
          return(
            <ServiceCard key={service.title} index={index} {...service} />
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")