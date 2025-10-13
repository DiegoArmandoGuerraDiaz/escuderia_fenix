import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-gradient-to-b from-[var(--color-fenix-red)] to-[var(--color-fenix-black)]"
    >
      {/* 🔥 Glow de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-fenix-orange)_0%,transparent_70%)] opacity-20 blur-3xl pointer-events-none"></div>

      {/* 🔥 Logo principal */}
      <motion.img
        src="/LogoBlanco.svg"
        alt="Escudería Fénix Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-lg fit-cover mt-20 drop-shadow-[0_0_30px_var(--color-fenix-orange)]"
      />

      {/* 🔥 Título animado */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center font-extrabold text-[var(--color-fenix-white)] drop-shadow-[0_0_15px_var(--color-fenix-orange)] "
      >
        <span className="font-[Dodger] tracking-widest text-4xl md:text-6xl">Escudería</span>
        <span className="font-[Korataki] tracking-widest text-6xl md:text-8xl text-[var(--color-fenix-orange)]">
          Fénix
        </span>
      </motion.h1>

      {/* ✨ Subtítulo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl leading-relaxed"
      >
        Pasión Politécnica
      </motion.p>

      {/* 🏁 Botón animado */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 15px var(--color-fenix-orange)",
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 btn-fenix"
      >
        Conócenos
      </motion.a>

      {/* 🔻 Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 2,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 text-[var(--color-fenix-orange)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
