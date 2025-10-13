import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Car from "./pages/Car";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";
import Competition from "./pages/Competition";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[var(--color-fenix-black)] text-[var(--color-text-default)]">
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <section className="snap-start"><Hero /></section>
        <section className="snap-start"><About /></section>
        <section className="snap-start"><Car /></section>
        <section className="snap-start"><Team /></section>
        <section className="snap-start"><Sponsors /></section>
        <section className="snap-start"><Competition /></section>
        <section className="snap-start"><Locations /></section>
        <Contact />
        <section className="snap-start"><Footer /></section>
      </div>
    </main>
  );
}
