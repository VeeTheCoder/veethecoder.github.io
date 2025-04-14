import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Banner from './components/Banner/Banner.tsx'
import AboutMe from './components/AboutMe/AboutMe.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Banner />
    <AboutMe />
  </StrictMode>,
)
