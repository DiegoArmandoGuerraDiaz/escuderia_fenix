import { motion, AnimatePresence } from "motion/react";
import { TbEngine } from "react-icons/tb";
import { FiBatteryCharging, FiTool, FiZap } from "react-icons/fi";
import { useState, useEffect } from "react";

const images = ["/FX01.webp", "/FX02.webp", "/FX03.webp"];

export default function Car() {
  const [index, setIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

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
      {/* 🎞 Crossfade imagen→imagen */}
      {/* 🎞 Crossfade + panorámica izquierda→derecha */}
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={images[index]}
          alt={`Auto Fénix ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "30% center" }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            objectPosition: ["10% center", "60% center"],
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            objectPosition: {
              delay: 1.2,         // empieza cuando termina el fade
              duration: 4.8,      // pan sincronizado al total (6 s)
              ease: "easeInOut",
            },
          }}
        />
      </AnimatePresence>


      {/* 🌓 Degradado responsivo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block w-full h-full"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0) 0%, rgba(10,10,10,0.25) 55%, rgba(10,10,10,0.85) 100%)",
          }}
        />
        <div className="block md:hidden w-full h-full"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,0) 0%, rgba(10,10,10,0.25) 60%, rgba(10,10,10,0.85) 100%)",
          }}
        />
      </div>

      {/* 🧊 Panel desktop */}
      <motion.div
        className="hidden md:block mt-15 absolute right-[8%] md:right-[5%] lg:right-[6%] w-[85%] md:w-[60%] lg:w-[35%] backdrop-blur-xl 
        bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] 
        p-8 md:p-10 shadow-[0_0_40px_var(--color-fenix-orange)]/30 text-left space-y-6"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-[var(--color-fenix-orange)] mb-4">
          Fénix FX-01
        </h2>

        <p className="text-gray-300 leading-relaxed text-md">
          Nuestro monoplaza eléctrico de alto rendimiento combina potencia,
          eficiencia y precisión. Diseñado para competir, representa la ingeniería y la pasión
          de la Escudería Fénix.
        </p>

        <ul className="space-y-4 text-gray-400 mt-6">
          <li className="flex items-center gap-3">
            <TbEngine className="text-[var(--color-fenix-orange)] text-2xl" />
            <span>
              <span className="text-[var(--color-fenix-orange)] font-semibold">
                Motor:
              </span>{" "}
              PMSM 6 kW · 48 V
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FiBatteryCharging className="text-[var(--color-fenix-orange)] text-2xl" />
            <span>
              <span className="text-[var(--color-fenix-orange)] font-semibold">
                Batería:
              </span>{" "}
              LiFePO₄ 48 V · 6000 Wh
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FiTool className="text-[var(--color-fenix-orange)] text-2xl" />
            <span>
              <span className="text-[var(--color-fenix-orange)] font-semibold">
                Chasis:
              </span>{" "}
              Tubular de acero
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

      {/* 📱 Panel móvil */}
      <motion.div
        className="md:hidden absolute top-30 left-1/2 -translate-x-1/2 w-[100%] backdrop-blur-xl 
        bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)]
        p-4 shadow-[0_0_30px_rgba(255,107,0,0.25)] text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button
          onClick={() => setShowInfo((s) => !s)}
          className="w-full text-4xl font-extrabold text-[var(--color-fenix-orange)] tracking-wide"
          style={{ fontFamily: "Dodger, sans-serif" }}
        >
          Fénix FX-01
          <span className="ml-2 text-xl align-middle">{showInfo ? "▲" : "▼"}</span>
        </button>

        <AnimatePresence initial={false}>
          {showInfo && (
            <motion.div
              className="overflow-hidden mt-3 text-sm text-gray-200"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <p className="px-1">
                Nuestro monoplaza eléctrico combina potencia, eficiencia y precisión.
                Diseñado para competir.
              </p>

              <ul className="space-y-2 text-gray-300 mt-3 text-left mx-auto w-fit">
                <li className="flex items-center gap-2">
                  <TbEngine className="text-[var(--color-fenix-orange)]" />
                  <span>PMSM 6 kW · 48 V</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiBatteryCharging className="text-[var(--color-fenix-orange)]" />
                  <span>LiFePO₄ 48 V · 6000 Wh</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiTool className="text-[var(--color-fenix-orange)]" />
                  <span>Tubular de acero</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiZap className="text-[var(--color-fenix-orange)]" />
                  <span>0–60 km/h: 3.9 s</span>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
