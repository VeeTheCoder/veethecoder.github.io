import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Banner from './components/Banner/Banner.tsx'
import AboutMe from './components/AboutMe/AboutMe.tsx'
import Projects from './components/Projects/Projects.tsx'
import Skills from './components/Skills/Skills.tsx'
import Education from './components/Education/Education.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import Footer from './components/Footer/Footer.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Banner />
    <div className="grid justify-center p-8">
      <div className="max-w-6xl">
        <section id="about-me" className='py-15'>
          <AboutMe />
        </section>
        
        <div className="divider div-transparent"></div>

        <section id="projects" className='py-15'>
          <Projects />
        </section>

        <div className="divider div-transparent"></div>

        <section id="skills" className='py-15'>
          <Skills />
        </section>

        <div className="divider div-transparent"></div>
        
        <section id="education" className='py-15'>
          <Education />
        </section>

        <section id="footer" className='pt-15'>
          <Footer />
        </section>
      </div>
    </div>
  </StrictMode>,
)
