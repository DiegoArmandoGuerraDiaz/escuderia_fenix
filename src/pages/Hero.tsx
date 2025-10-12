import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-gradient-to-b from-[var(--color-fenix-red)] to-[var(--color-fenix-black)]"
    >
      {/* 🔥 Glow de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-fenix-orange)_0%,transparent_70%)] opacity-20 blur-3xl pointer-events-none"></div>

      {/* 🔥 Título animado */}
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-extrabold text-[var(--color-fenix-white)] drop-shadow-[0_0_20px_var(--color-fenix-orange)]"
      >
        Escudería Fénix
      </motion.h1>

      {/* ✨ Subtítulo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl leading-relaxed"
      >
        La pasión por la ingeniería y la velocidad renace en cada vuelta.  
        Somos una escudería universitaria que convierte ideas en potencia.
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
