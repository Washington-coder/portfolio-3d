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
  docker,
  threejs,
  venturus,
  postgresql,
  nestjs,
  smart_redacoes,
  portal,
  ignite,
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
    name: 'Smart Redações',
    description:
    'AI-driven platform designed for students to digitize handwritten essays using OCR and receive real-time pedagogical feedback and scoring via Gemini API integration.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'gemini-api',
        color: 'pink-text-gradient',
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
    image: smart_redacoes,
    website_link: 'https://spa-escreve-ai-next.vercel.app/',
  },
  {
    name: 'Developer Portal',
    description:
    'A public-facing enterprise platform offering documentation, SDKs, and integration tools for developers, focusing on high-quality API references and seamless onboarding workflows.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'swagger',
        color: 'pink-text-gradient',
      },
      {
        name: 'vitest',
        color: 'blue-text-gradient',
      },
      {
        name: 'rest-api',
        color: 'green-text-gradient',
      },
    ],
    image: portal,
    website_link: 'https://developer.gertec.com.br/',
  },
  {
    name: 'Ignite Timer',
    description:
    'A modern task management and pomodoro application featuring cycle history, real-time countdown tracking, and persistent state management using advanced React patterns.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'styled-components',
        color: 'pink-text-gradient',
      },
      {
        name: 'hook-form-zod',
        color: 'blue-text-gradient',
      },
      {
        name: 'reducers-context',
        color: 'green-text-gradient',
      },
    ],
    image: ignite,
    website_link: 'https://washington-coder.github.io/ignite-timer',
  },
]

export { services, technologies, experiences, testimonials, projects }