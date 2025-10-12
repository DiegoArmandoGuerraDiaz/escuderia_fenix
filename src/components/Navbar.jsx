export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-escuderia-gris/80 backdrop-blur-md fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold text-escuderia-naranja">Escudería Fénix</h1>
      <ul className="flex gap-6 text-sm uppercase">
        <li><a href="#about" className="hover:text-escuderia-rojo">Nosotros</a></li>
        <li><a href="#projects" className="hover:text-escuderia-rojo">Proyectos</a></li>
        <li><a href="#contact" className="hover:text-escuderia-rojo">Contacto</a></li>
      </ul>
    </nav>
  )
}
