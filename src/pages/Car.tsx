import { motion, AnimatePresence } from "motion/react";
import { TbEngine } from "react-icons/tb";
import { FiBatteryCharging, FiTool, FiZap } from "react-icons/fi";
import { useState, useEffect } from "react";

const images = [
  "/FX01.webp",
  "/FX02.webp",
  "/FX03.webp",
];

export default function Car() {
  const [index, setIndex] = useState(0);

  // 🔁 Avance automático del carrusel
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="car"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[var(--color-fenix-black)]"
    >
      {/* 🔥 Fondo con carrusel de imágenes */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`Auto Fénix ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* 🌓 Capa de gradiente con transparencia izquierda → derecha */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(10,10,10,0) 0%, rgba(10,10,10,0.25) 40%, rgba(10,10,10,0.85) 100%)',
        }}
      />

      {/* 🧊 Panel informativo tipo glass (alineado a la derecha) */}
      <motion.div
        className="absolute right-[8%] md:right-[5%] lg:right-[6%] w-[85%] md:w-[60%] lg:w-[35%] backdrop-blur-xl 
        bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] 
        rounded-2xl p-8 md:p-10 shadow-[0_0_40px_var(--color-fenix-orange)]/30 text-left space-y-6"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-[var(--color-fenix-orange)] mb-4">
          Fénix FX-01
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          Nuestro monoplaza eléctrico de alto rendimiento combina potencia,
          eficiencia y precisión. Diseñado para competir en{" "}
          <strong>Formula Student</strong>, representa la ingeniería y la pasión
          de la Escudería Fénix.
        </p>

        <ul className="space-y-4 text-gray-400 mt-6">
          <li className="flex items-center gap-3">
            <TbEngine className="text-[var(--color-fenix-orange)] text-2xl" />
            <span>
              <span className="text-[var(--color-fenix-orange)] font-semibold">
                Motor:
              </span>{" "}
              PMSM 10 kW · 48 V
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FiBatteryCharging className="text-[var(--color-fenix-orange)] text-2xl" />
            <span>
              <span className="text-[var(--color-fenix-orange)] font-semibold">
                Batería:
              </span>{" "}
              LiFePO₄ 96 V · 80 Ah
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FiTool className="text-[var(--color-fenix-orange)] text-2xl" />
            <span>
              <span className="text-[var(--color-fenix-orange)] font-semibold">
                Chasis:
              </span>{" "}
              Tubular de acero SAE 1020
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FiZap className="text-[var(--color-fenix-orange)] text-2xl" />
            <span>
              <span className="text-[var(--color-fenix-orange)] font-semibold">
                0 – 60 km/h:
              </span>{" "}
              3.9 s
            </span>
          </li>
        </ul>

        {/* Indicadores del carrusel */}
        <div className="flex gap-2 mt-8">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-[var(--color-fenix-orange)] scale-110"
                  : "bg-gray-400 opacity-40"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
