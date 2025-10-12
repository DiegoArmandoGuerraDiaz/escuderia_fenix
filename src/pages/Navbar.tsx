import { motion } from "motion/react"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[rgba(15,15,15,0.55)] border-b border-[rgba(255,255,255,0.1)] shadow-[0_0_25px_rgba(255,107,0,0.2)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo-fenix.svg"
            alt="Escudería Fénix"
            className="w-8 h-8"
          />
          <span className="font-bold tracking-widest text-[var(--color-fenix-orange)]">
            ESCUDERÍA FÉNIX
          </span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
          <li><a href="#hero" className="nav-link">Inicio</a></li>
          <li><a href="#about" className="nav-link">Nosotros</a></li>
          <li><a href="#car" className="nav-link">Auto</a></li>
          <li><a href="#team" className="nav-link">Equipo</a></li>
          <li><a href="#sponsors" className="nav-link">Sponsors</a></li>
          <li><a href="#contact" className="nav-link">Contacto</a></li>
        </ul>

        {/* Botón */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-block px-5 py-2 rounded-lg font-semibold text-black bg-[var(--color-fenix-orange)] hover:bg-[var(--color-fenix-red)] shadow-[0_0_10px_var(--color-fenix-orange)] transition-colors"
        >
          Únete
        </motion.a>
      </div>

      {/* Línea líquida animada */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-fenix-orange)] to-transparent opacity-60"
        animate={{
          backgroundPositionX: ["0%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.nav>
  );
}
