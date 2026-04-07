import Navbar from '../components/Navbar'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Feedbacks from '../components/Feedbacks'
import Hero from '../components/Hero'
import Tech from '../components/Tech'
import Works from '../components/Works'
import StarsCanvas from '../components/canvas/Stars'

export default function Home() {
  const GLOBAL_PADDING = '10'

  return (
    <main>
      <div className='relative z-0 bg-brand-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' >
          <Navbar />
          <Hero />
        </div>
        <div className={`p-${GLOBAL_PADDING}`} >
          <About />
        </div>
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </main>
  )
}
