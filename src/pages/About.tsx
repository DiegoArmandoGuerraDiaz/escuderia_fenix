import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[var(--color-bg-alt)]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-[var(--color-accent)] mb-8"
      >
        Nosotros
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-3xl text-gray-300 text-lg leading-relaxed"
      >
        Somos una escudería universitaria apasionada por la ingeniería,
        la innovación y la competencia. Diseñamos, construimos y ponemos a
        prueba prototipos de vehículos eléctricos con un solo objetivo:
        demostrar que el talento estudiantil puede alcanzar la excelencia.
      </motion.p>
    </section>
  );
}
