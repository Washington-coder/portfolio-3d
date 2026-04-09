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
  bruno,
  luiz,
} from '../assets'

import { FaNodeJs } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import { FaWandMagicSparkles } from 'react-icons/fa6'

import my_photo from '@/assets/my_photo.jpg'


const getNavLinks = (dict) => [
  { id: 'about', title: dict.nav.about },
  { id: 'work', title: dict.nav.work },
  { id: 'contact', title: dict.nav.contact },
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
      'I had the pleasure of working with Washington, and I can say he is an exceptional professional. As a developer, he demonstrated an insatiable thirst for knowledge and a remarkable ability to learn quickly.',
    name: 'Bruno Batalha',
    designation: 'Full Stack Dev',
    company: 'Venturus',
    image: bruno,
    linkedin_link: 'https://www.linkedin.com/in/bruno-batalha-/'
  },
  {
    testimonial:
      'It is with great pleasure that I recommend Washington, with whom I had the pleasure of working on a project. He stood out for his strong technical skills and his dedication to creating intuitive, functional interfaces, always with an exceptional eye for front-end detail.',
    name: 'Luiz Fernando',
    designation: 'Back-end Dev',
    company: 'Venturus',
    image: luiz,
    linkedin_link: 'https://www.linkedin.com/in/luiz-fernando-pinage-coutinho/'
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

export { services, technologies, experiences, testimonials, projects, getNavLinks}