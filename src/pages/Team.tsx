import { motion } from "motion/react";

export default function Team() {
  const members = [
    { name: "Andrea López", role: "Capitana" },
    { name: "Luis Hernández", role: "Diseño Mecánico" },
    { name: "María Ruiz", role: "Electrónica y Control" },
    { name: "Carlos Torres", role: "Gestión y Logística" },
  ];

  return (
    <section
      id="team"
      className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg-default)] px-6 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-[var(--color-accent)] mb-8"
      >
        Conoce al Equipo
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl">
        {members.map((m) => (
          <motion.div
            key={m.name}
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-[var(--color-accent)] rounded-lg"
          >
            <p className="text-xl font-bold">{m.name}</p>
            <p className="text-gray-400">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
