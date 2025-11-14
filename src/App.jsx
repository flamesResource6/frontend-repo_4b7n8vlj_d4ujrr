import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    const handler = (e) => {
      const targetId = e.currentTarget.getAttribute('href')?.slice(1)
      const el = document.getElementById(targetId)
      if (el) {
        e.preventDefault()
        window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
      }
    }
    links.forEach((a) => a.addEventListener('click', handler))
    return () => links.forEach((a) => a.removeEventListener('click', handler))
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
