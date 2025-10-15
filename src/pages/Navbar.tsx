import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[rgba(15,15,15,0.55)] border-b border-[rgba(255,255,255,0.1)] shadow-[0_0_25px_rgba(255,107,0,0.2)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* 🔥 Logo + Nombre */}
        <div className="flex items-center gap-3">
          <img
            src="/LogoColor.svg"
            alt="Escudería Fénix"
            className="w-14 drop-shadow-[0_0_10px_var(--color-fenix-orange)]"
          />
          <div className="flex flex-col leading-none gap-0">
            <span className="font-[Dodger] tracking-widest uppercase text-gray-200">
              Escudería
            </span>
            <span className="font-[Korataki] tracking-wide text-[var(--color-fenix-orange)] drop-shadow-[0_0_10px_var(--color-fenix-orange)]">
              FÉNIX
            </span>
          </div>
        </div>

        {/* 🖥️ Navegación principal con menús desplegables */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-sm tracking-wide relative">
          {/* Inicio */}
          <li>
            <a href="#hero" className="nav-link hover:text-[var(--color-fenix-orange)] transition-colors">
              Inicio
            </a>
          </li>

          {/* Nosotros (dropdown) */}
          <li className="relative">
            <button
              onClick={() => handleDropdown("nosotros")}
              className="nav-link flex items-center gap-1 hover:text-[var(--color-fenix-orange)] transition-colors"
            >
              Nosotros <FiChevronDown className="text-xs mt-1" />
            </button>
            <AnimatePresence>
              {activeDropdown === "nosotros" && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -left-3 mt-2 w-56 bg-[rgba(20,20,20,0.9)] border border-[rgba(255,255,255,0.1)] shadow-lg backdrop-blur-md"
                >
                  <li>
                    <a
                      href="#about"
                      className="nav-link block px-4 py-2 hover:bg-[rgba(255,255,255,0.1)]"
                    >
                      Nosotros
                    </a>
                  </li>
                  
                  <li>
                    <a
                      href="#car"
                      className="nav-link block px-4 py-2 hover:bg-[rgba(255,255,255,0.1)]"
                    >
                      Nuestro auto
                    </a>
                  </li>
                  <li>
                    <a
                      href="#team"
                      className="nav-link block px-4 py-2 hover:bg-[rgba(255,255,255,0.1)]"
                    >
                      Conoce al equipo
                    </a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Sponsors */}
          <li>
            <a href="#sponsors" className="nav-link hover:text-[var(--color-fenix-orange)] transition-colors">
              Sponsors
            </a>
          </li>

          {/* Competencia (dropdown) */}
          <li className="relative">
            <button
              onClick={() => handleDropdown("competencia")}
              className="nav-link flex items-center gap-1 hover:text-[var(--color-fenix-orange)] transition-colors"
            >
              Competencia <FiChevronDown className="text-xs mt-1" />
            </button>
            <AnimatePresence>
              {activeDropdown === "competencia" && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -left-3 mt-2 w-56 bg-[rgba(20,20,20,0.9)] border border-[rgba(255,255,255,0.1)] shadow-lg backdrop-blur-md"
                >
                  <li>
                    <a
                      href="#competition"
                      className="nav-link block px-4 py-2 hover:bg-[rgba(255,255,255,0.1)]"
                    >
                      Electratón
                    </a>
                  </li>
                  <li>
                    <a
                      href="#locations"
                      className="nav-link block px-4 py-2 hover:bg-[rgba(255,255,255,0.1)]"
                    >
                      Sedes
                    </a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Sponsors y Contacto */}
          
        </ul>

        {/* 🎯 Botón principal */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:inline-block px-5 py-2 rounded-lg font-semibold text-black bg-[var(--color-fenix-orange)] hover:bg-[var(--color-fenix-red)] shadow-[0_0_10px_var(--color-fenix-orange)] transition-colors"
        >
          Contáctanos
        </motion.a>

        {/* 📱 Botón menú móvil */}
        <button
          className="lg:hidden text-[var(--color-fenix-orange)] text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* 📱 Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-[rgba(10,10,10,0.95)] backdrop-blur-xl border-t border-[rgba(255,255,255,0.1)] shadow-[0_8px_25px_rgba(255,107,0,0.15)]"
          >
            <ul className="flex flex-col items-center gap-4 py-6 font-medium text-gray-200 text-lg">
              <a href="#hero" onClick={() => setMenuOpen(false)}>Inicio</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>Nosotros</a>
              <a href="#car" onClick={() => setMenuOpen(false)}>Nuestro Auto</a>
              <a href="#team" onClick={() => setMenuOpen(false)}>Conoce al equipo</a>
              <a href="#sponsors" onClick={() => setMenuOpen(false)}>Sponsors</a>
              <a href="#competition" onClick={() => setMenuOpen(false)}>Electratón</a>
              <a href="#locations" onClick={() => setMenuOpen(false)}>Sedes</a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-2 rounded-lg font-semibold text-black bg-[var(--color-fenix-orange)] hover:bg-[var(--color-fenix-red)] shadow-[0_0_10px_var(--color-fenix-orange)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contáctanos
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔻 Línea decorativa */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-fenix-orange)] to-transparent opacity-60 -z-10"
      />
    </motion.nav>
  );
}
