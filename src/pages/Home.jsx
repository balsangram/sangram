import { lazy, Suspense } from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'

const Skills = lazy(() => import('../components/Skills/Skills'))
const Experience = lazy(() => import('../components/Experience/Experience'))
const Projects = lazy(() => import('../components/Projects/Projects'))
const Education = lazy(() => import('../components/Education/Education'))
const Achievements = lazy(() => import('../components/Achievements/Achievements'))
const Contact = lazy(() => import('../components/Contact/Contact'))

function SectionFallback() {
  return <div className="section" aria-hidden="true" />
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Suspense fallback={<SectionFallback />}>
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </Suspense>
    </>
  )
}
