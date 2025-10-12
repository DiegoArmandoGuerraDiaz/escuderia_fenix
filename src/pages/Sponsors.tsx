import { motion } from "motion/react";

export default function Sponsors() {
  const sponsors = ["Bosch", "Continental", "Siemens", "Autodesk"];

  return (
    <section
      id="sponsors"
      className="min-h-[60vh] flex flex-col items-center justify-center text-center bg-[var(--color-bg-alt)] px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-[var(--color-accent)] mb-8"
      >
        Nuestros Patrocinadores
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
        {sponsors.map((name) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.1 }}
            className="p-6 border border-[var(--color-accent)] rounded-lg"
          >
            <p className="text-lg font-semibold">{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
