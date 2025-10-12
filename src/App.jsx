import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import CarSection from "./components/CarSection"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <CarSection />
      <Contact />
      <Footer />
    </div>
  )
}
