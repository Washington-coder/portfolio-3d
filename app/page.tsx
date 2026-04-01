import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from '../components'

export default function Home() {
  const GLOBAL_PADDING = '10'

  return (
    <main>
      <div className='relative z-0 bg-primary'>
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
  );
}
