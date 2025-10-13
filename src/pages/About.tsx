import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4 sm:px-6"
    >
      {/* 🖼️ Imagen de fondo */}
      <motion.img
        src="/about.jpg"
        alt="Escudería Fénix equipo y vehículo"
        className="absolute inset-0 w-full h-full object-cover object-center"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* 🌒 Capas de luz */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.25)] via-[rgba(10,10,10,0.23)] to-[rgba(0,0,0,0.4)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-fenix-orange)_0%,transparent_70%)] opacity-10 blur-[120px]" />

      {/* 🔥 Contenido central */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center text-white"
      >
        {/* Título */}
        <h2 className="text-[8vw] sm:text-5xl font-extrabold text-[var(--color-fenix-orange)] mb-4 drop-shadow-[0_0_15px_var(--color-fenix-orange)] leading-tight">
          Nosotros
        </h2>

        {/* Texto principal */}
        <p className="text-gray-100 text-[4.5vw] sm:text-lg md:text-xl leading-relaxed sm:leading-relaxed md:leading-relaxed max-w-3xl drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]">
          Somos una escudería universitaria apasionada por la ingeniería,
          la innovación y la competencia. Diseñamos, construimos y ponemos a
          prueba prototipos de vehículos eléctricos con un solo objetivo:
        </p>

        {/* Frase destacada */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[5vw] sm:text-2xl md:text-3xl font-semibold text-[var(--color-fenix-orange)] mt-6 drop-shadow-[0_0_15px_var(--color-black)] leading-tight max-w-3xl"
        >
          Demostrar que el talento estudiantil puede alcanzar la excelencia.
        </motion.p>

        {/* Línea decorativa */}
        <div className="w-24 h-[3px] bg-gradient-to-r from-[var(--color-fenix-orange)] to-[var(--color-fenix-red)] rounded-full mt-10"></div>
      </motion.div>
    </section>
  );
}
