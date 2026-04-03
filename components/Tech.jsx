'use client';

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "./hoc"
import { technologies } from "@/constants"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => {
        return(
          <div key={technology.name} className="flex flex-col items-center gap-2 cursor-grab">
            <div className="w-28 h-28" key={technology.name} >
              <BallCanvas icon={technology.icon.src} />
            </div>
            <p className="text-white text-sm font-medium">{technology.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SectionWrapper(Tech, "")