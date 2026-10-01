import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Services from '../sections/Services'
import Timeline from '../sections/Timeline'
import Resume from '../sections/Resume'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Timeline />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
