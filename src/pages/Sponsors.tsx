import { motion } from "motion/react";

export default function Sponsors() {
  const sponsors = [
    { name: "EnergyEV", logo: "/sponsors/energyEV.svg" },
    { name: "Roshfrans", logo: "/sponsors/roshfrans.png" },
    { name: "SolidWORKS", logo: "/sponsors/solidworks.svg" },
    { name: "Autodesk", logo: "/sponsors/autodesk.svg" },
  ];

  return (
    <section
      id="sponsors"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[var(--color-fenix-black)]"
    >
      {/* 💡 Fondo sutil */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-fenix-orange)_0%,transparent_70%)] opacity-10 blur-3xl pointer-events-none"
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔥 Título */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-extrabold text-[6vw] md:text-5xl text-[var(--color-fenix-orange)] mb-12 md:mb-20 mt-12"
      >
        Nuestros Patrocinadores
      </motion.h2>

      {/* 🧩 Versión escritorio (mantiene tu diseño original) */}
      <div className="hidden md:grid relative z-10 grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl px-6">
        {sponsors.map((sponsor, i) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(255,107,0,0.35)",
            }}
            className="group bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] 
              p-6 flex flex-col items-center justify-center 
              backdrop-blur-xl transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)]"
          >
            <div className="w-full h-50 flex items-center justify-center mb-2">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 p-1"
              />
            </div>
            <p className="text-lg font-semibold text-gray-300 tracking-wide">
              {sponsor.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 📱 Versión móvil — fluida y con wrap */}
      <div className="flex md:hidden flex-wrap justify-center gap-6 w-full px-4 mb-12">
        {sponsors.map((sponsor, i) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)]
              p-[4vw] flex flex-col items-center justify-center
              backdrop-blur-xl transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)]
              w-[40vw] min-w-[130px] max-w-[180px]"
          >
            <div className="w-full h-[20vw] flex items-center justify-center">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <p className="text-[0.8rem] font-semibold text-gray-300 tracking-wide text-center">
              {sponsor.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🔻 Indicador final */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 text-gray-500 text-[3vw] md:text-sm"
      >
        Más alianzas próximamente…
      </motion.div>
    </section>
  );
}
