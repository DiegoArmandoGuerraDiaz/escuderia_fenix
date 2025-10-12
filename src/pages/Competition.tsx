import { motion } from "motion/react";

export default function Competition() {
  return (
    <section
      id="competitions"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-t from-[var(--color-fenix-black)] to-[var(--color-fenix-gray)] px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-[var(--color-accent)] mb-8"
      >
        Dónde Competimos
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-3xl text-gray-300 text-lg leading-relaxed"
      >
        Hemos participado en competencias nacionales e internacionales
        como *Formula SAE México* y *Formula Student Spain*, representando
        el talento y la innovación de nuestra universidad en cada circuito.
      </motion.p>
    </section>
  );
}
