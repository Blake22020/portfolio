import { useReveal } from './hooks/useReveal'
import { Cursor } from './components/Cursor'
import { ProgressBar } from './components/ProgressBar'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Stack } from './components/Stack'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  useReveal()
  return (
    <>
      <ProgressBar />
      <Cursor />
      <Nav />
      <Hero />
      <Stack />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
