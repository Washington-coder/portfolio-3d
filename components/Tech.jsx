'use client'

import { textVariant } from '@/utils/motion'
import { BallCanvas } from './canvas'
import { SectionWrapper } from './hoc'
import { technologies } from '@/constants'
import { motion } from 'framer-motion'
import { styles } from '@/constants/styles'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText} >
          My daily tools
        </p>
        <h2 className={styles.sectionHeadText} >
          Tech stack.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => {
          return(
            <div key={technology.name} className="flex flex-col items-center gap-2 cursor-grab">
              <div className="w-28 h-28" >
                <BallCanvas icon={technology.icon} />
              </div>
              <p className="text-white text-sm font-medium">{technology.name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '')