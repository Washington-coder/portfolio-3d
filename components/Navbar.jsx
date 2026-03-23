'use client';
import React, { useEffect, useState } from 'react'
import { styles } from '../constants/styles.js'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import Link from 'next/link.js';
import Image from 'next/image.js';

const Navbar = () => {
  const [active, setActive] = useState('')

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto' >
        <Link
          href={'/'}
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <Image
            src={logo}
            alt='Logo'
            className='w-40 object-contain'
          />
          <p className='text-white text-[18px] font-bold'>Washington <span className='sm:block hidden' >| Moreno</span></p>
        </Link>
        <p>asdf</p>
      </div>
    </nav>
  )
}

export default Navbar