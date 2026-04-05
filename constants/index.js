import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  venturus,
  postgresql,
  nestjs
} from '../assets'

import { FaNodeJs } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import { FaWandMagicSparkles } from 'react-icons/fa6'

import my_photo from '@/assets/my_photo.jpg'


export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: BiWorld,
  },
  {
    title: 'React Engineer',
    icon: FaReact,
  },
  {
    title: 'Node.js Engineer',
    icon: FaNodeJs,
  },
  {
    title: 'AI Powered Workflow',
    icon: FaWandMagicSparkles,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'Nest.js',
    icon: nestjs,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Full Stack Developer Jr.',
    company_name: 'Venturus(Itriad)',
    icon: venturus,
    iconBg: '#383E56',
    date: '2022 - 2024',
    points: [
      'Developing and maintaining internal web applications using React.js, Next.js, and Node.js to improve operational management and performance.',
      'Collaborating with cross-functional teams to build responsive, accessible UIs with Chakra UI and implementing typed data flows using TypeScript and Zod.',
      'Optimizing code maintainability through component reuse, SOLID principles, and comprehensive unit testing with Jest and Vitest.',
      'Participating in code reviews and contributing to Developer Experience (DX) by improving API documentation and integration tools.',
    ],
  },
  {
    title: 'Full Stack Freelancer',
    company_name: 'Me (:',
    icon: my_photo,
    iconBg: '#E6DEDD',
    date: '2024 - Present',
    points: [
      'Developing custom end-to-end web solutions, including high-conversion landing pages and AI-powered applications.',
      'Architecting an AI-driven platform for students, integrating OCR technology and the Gemini API for real-time automated feedback.',
      'Building rapid MVP solutions using the TypeScript/Node.js stack, focusing on scalability and user-centric features.',
      'Implementing efficient backend structures with MongoDB and Docker to ensure robust performance for growing user bases.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'I\'ve never met a web developer who truly cares about their clients\' success like Rick does.',
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'After Rick optimized our website, our traffic increased by 50%. We can\'t thank them enough!',
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }