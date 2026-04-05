'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

import { styles } from '@/constants/styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from './hoc'
import { slideIn } from '@/utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    emailjs.send(
      'service_rzk5t6m',
      'template_y8ov2yw',
      {
        from_name: form.name,
        to_name: 'Washington',
        from_email: form.email,
        to_email: 'was.antonio.xy@gmail.com',
        message: form.message
      },
      'mLXZkhKtJmNMNSi5L'
    )
      .then(() => {
        setIsLoading(false)
        alert('Thank you ! I will get back to you as soon as possible.')

        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setIsLoading(false)
        console.log(error)
        alert('Something went wrong ):')
      })
  }


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden" >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText} >Get in touch</p>
        <h3 className={styles.sectionHeadText} >Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col" >
            <span className="text-white font-medium mb-4" >Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col" >
            <span className="text-white font-medium mb-4" >Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col" >
            <span className="text-white font-medium mb-4" >Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button 
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
          >
            { isLoading ? 'Sending...' : 'Send' }
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] cursor-grab"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')