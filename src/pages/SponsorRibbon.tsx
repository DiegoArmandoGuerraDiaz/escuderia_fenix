import { motion } from "motion/react";

interface SponsorRibbonProps {
  reverse?: boolean;
  className?: string;
  logos?: { src: string; alt?: string }[]; // opcional, si se quiere pasar un conjunto específico
}
  

export default function SponsorRibbon({ reverse = false, className = "",  }: SponsorRibbonProps) {
  // ✅ Carga automática desde /public/sponsorsElectraton/
  const images = Object.values(
    import.meta.glob("/public/sponsorsElectraton/Logo*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ) as string[];

  // 🎲 Aleatoriza orden
  const shuffled = [...images].sort(() => Math.random() - 0.5);
  const finalLogos = [...shuffled, ...shuffled]; // duplicado para loop infinito

  return (
    <div
      className={`absolute top-0 h-full w-[120px] overflow-hidden flex flex-col items-center ${className}`}
    >
      <motion.div
        className="flex flex-col"
        animate={{
          y: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 60 + Math.random() * 10, // velocidad variable leve
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {finalLogos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Sponsor ${i + 1}`}
            className="w-[80px] h-auto mb-8 opacity-85 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(255,107,0,0.3)] select-none"
            draggable={false}
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
  );
}
