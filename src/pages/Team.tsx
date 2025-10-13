import { motion } from "motion/react";

export default function Team() {
  const members = [
    { name: "Mike Tyson", role: "Capitán" },
    { name: "Hasbullah Rodríguez", role: "Diseño Mecánico" },
    { name: "Dinosaurio Anacleto", role: "Electrónica y Control" },
    { name: "Juan", role: " " },
  ];

  return (
    <section
      id="team"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-[var(--color-bg-default)] px-4 sm:px-6 text-center overflow-hidden"
    >
      {/* 🔥 Fondo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-fenix-orange)_0%,transparent_70%)] opacity-10 blur-[120px] pointer-events-none" />

      {/* 🧡 Título */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[8vw] sm:text-5xl md:text-6xl font-extrabold 
                   text-[var(--color-fenix-orange)] mb-4 drop-shadow-[0_0_15px_var(--color-fenix-orange)] leading-tight"
      >
        Conoce al Equipo
      </motion.h2>

      {/* 💬 Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[4vw] sm:text-lg md:text-xl text-gray-300 mb-12 
                   max-w-3xl leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.4)]"
      >
        Ingenieros, diseñadores y soñadores. <br /> 
        Orgullosamente politécnicos
      </motion.p>

      {/* 🧩 Grid de miembros */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {members.map((m) => (
          <motion.div
            key={m.name}
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-[var(--color-fenix-orange)]  
                       backdrop-blur-xl bg-[rgba(255,255,255,0.05)] transition-all duration-300
                       hover:bg-[rgba(255,255,255,0.08)] hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]"
          >
            <p className="text-[5vw] sm:text-xl md:text-2xl font-bold text-white leading-tight">
              {m.name}
            </p>
            <p className="text-[3.5vw] sm:text-base text-gray-400 mt-1">{m.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Línea decorativa */}
      <div className="w-24 h-[3px] bg-gradient-to-r from-[var(--color-fenix-orange)] to-[var(--color-fenix-red)] rounded-full mt-12"></div>
    </section>
  );
}
