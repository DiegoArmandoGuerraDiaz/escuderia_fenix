import { motion } from "motion/react";
import SponsorRibbon from "../pages/SponsorRibbon";

export default function Competition() {
  interface Logo {
    src: string;
    alt: string;
  }



  const logos: Logo[] = [
  ];

  return (
    <section
      id="competition"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
    

      {/* 🌒 Capas sutiles */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.25)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.6)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-fenix-orange)_0%,transparent_70%)] opacity-10 blur-[120px]" />

      {/* 🧩 Ribbons */}
      <div className="hidden min-[480px]:block">
        <SponsorRibbon logos={logos} className="left-0" />
        <SponsorRibbon logos={logos} reverse className="left-30" />
        <SponsorRibbon logos={logos} className="right-0" />
        <SponsorRibbon logos={logos} reverse className="right-30" />
      </div>
      <div className="block min-[480px]:hidden">
        <SponsorRibbon logos={logos} className="left-0" />
        <SponsorRibbon logos={logos} className="left-1/2 -translate-x-1/2" />
        <SponsorRibbon logos={logos} className="right-0" />
      </div>

      {/* 🧱 Fondo negro detrás del texto (solo ≤1200px) */}
      <div className="hidden max-[1200px]:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-full bg-black/55 backdrop-blur-[2px] z-[6]" />

      {/* 🔥 Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mt-15 px-4 sm:px-6 flex flex-col items-center text-white"
      >

        <h2 className="text-[6vw] sm:text-3xl md:text-4xl font-extrabold text-[var(--color-fenix-orange)] drop-shadow-[0_0_15px_var(--color-fenix-orange)] leading-tight">
          La Competencia:
        </h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-[7vw]  sm:text-5xl md:text-6xl font-bold text-[var(--color-fenix-red)] uppercase tracking-widest drop-shadow-[0_0_25px_var(--color-fenix-red)] leading-tight"
        >
          Electratón
        </motion.h3>

         {/* 🏎️ Logo del Electratón */}
        <motion.img
          src="/public/LogoElectraton.webp" // 🔁 cambia la ruta según tu carpeta real
          alt="Logo Electratón"
          className="w-[50vw] sm:w-[25vw] md:w-[35vw] p-8  drop-shadow-[0_0_15px_var(--color-fenix-red)]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <p className="text-gray-100 text-sm md:text-lg lg:text-[1vw] md:px-10 leading-relaxed sm:leading-relaxed max-w-3xl drop-shadow-[0_0_8px_rgba(0,0,0,0.4)]">
          Es el campeonato nacional de autos eléctricos
          organizado por <strong>Incubadora de Tecnología A.C.</strong>, donde universidades y empresas
          impulsan el desarrollo de la movilidad sustentable en México.  
          <br /><br />
          Más que una competencia, es una plataforma que reta a los estudiantes a
          innovar, diseñar y construir el futuro del transporte eléctrico.
        </p>

        <div className="w-28 h-[3px] bg-gradient-to-r from-[var(--color-fenix-orange)] to-[var(--color-fenix-red)] rounded-full mt-10"></div>
      </motion.div>
    </section>
  );
}
