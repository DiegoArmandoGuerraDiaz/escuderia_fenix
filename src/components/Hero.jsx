import { motion } from "motion/react"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-escuderia-gris to-escuderia-fondo">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-4 text-escuderia-naranja"
      >
        Escudería Fénix
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-300 max-w-xl mb-8"
      >
        Innovación, ingeniería y velocidad. Unidos por la pasión del automovilismo estudiantil.
      </motion.p>

      <motion.a
        href="#about"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-escuderia-rojo text-white font-semibold rounded-lg shadow-lg hover:bg-escuderia-naranja transition"
      >
        Conócenos
      </motion.a>
    </section>
  )
}
