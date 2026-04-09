'use client'
import { useState } from 'react'
import { styles } from '../constants/styles.js'
import { navLinks, getNavLinks } from '../constants'
import { menu, close } from '../assets'
import my_photo from '../assets/my_photo.jpg'
import brazil_flag from '../assets/brazil_flag.png'
import usa_flag from '../assets/usa_flag.png'
import Link from 'next/link.js'
import Image from 'next/image.js'
import { AiFillAliwangwang } from 'react-icons/ai'
import { useLanguage } from '../context/LanguageContext'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select.tsx'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  const { dict } = useLanguage()

  const { locale, changeLocale } = useLanguage()

  const selectValue = locale === 'en' ? 'en-us' : 'pt-br'

  function handleChange(value) {
    changeLocale(value === 'en-us' ? 'en' : 'pt')
  }

  const navLinks = getNavLinks(dict)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-brand-primary`}
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
        <div className='flex gap-4' >
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {
              navLinks.map((link) => (
                <li key={link.id}
                  className={`${active === link.title
                    ? 'text-white'
                    : 'text-brand-secondary'
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

          <Select value={selectValue} onValueChange={handleChange} defaultValue='pt-br' >
            <SelectTrigger className="w-[150px] text-white border-2 border-brand-secondary rounded-md">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="pt-br">
                  <Image
                    src={brazil_flag}
                    alt='Brazil Flag'
                    className='w-7 object-contain'
                  />
                  PT-BR
                </SelectItem>
                <SelectItem value="en-us">
                  <Image
                    src={usa_flag}
                    alt='USA Flag'
                    className='w-7 object-contain'
                  />
                  EN-US
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

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
                      : 'text-brand-secondary'
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