import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Research from './components/Research.jsx'
import Publications from './components/Publications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <About />
        <Research />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
