'use client'
import { useState } from 'react'
import { styles } from '../constants/styles.js'
import { navLinks } from '../constants'
import { menu, close } from '../assets'
import my_photo from '../assets/my_photo.jpg'
import Link from 'next/link.js'
import Image from 'next/image.js'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center' >
        <Link
          href={'/'}
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <Image
            src={my_photo}
            alt='Profile Photo'
            className='w-20 object-contain rounded-full'
          />
          <p className='text-white text-[18px] font-bold'>Washington <span className='sm:block hidden' >| Moreno</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link) => (
              <li key={link.id}
                className={`${active === link.title
                  ? 'text-white'
                  : 'text-secondary'
                }
                  hover:text-white text-[18px] font-medium cursor-pointer
                  `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>

        <div className='sm:hidden flex flex-1  items-center relative justify-end' >
          <Image
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            src={toggle ? close : menu}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? 'hidden' : 'flex'} flex-col gap-4 p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='flex items-start flex-col gap-4'>
              {
                navLinks.map((link) => (
                  <li key={link.id}
                    className={`${active === link.title
                      ? 'text-white'
                      : 'text-secondary'
                    }
                    font-poppins font-medium cursor-pointer text-[16px]
                  `}
                    onClick={() => {
                      setActive(link.title)
                      setToggle(!toggle)
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar