import { motion } from "motion/react"



export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-6 bg-escuderia-fondo text-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-4xl font-bold mb-8 text-escuderia-naranja">Contacto</h3>

      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        ¿Quieres colaborar, patrocinar o saber más sobre nuestra escudería?  
        Escríbenos o visita nuestras redes sociales.
      </p>

      <motion.div
        className="flex flex-col md:flex-row justify-center gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="mailto:escuderiafenix@universidad.edu"
          className="px-6 py-3 bg-escuderia-rojo rounded-lg font-semibold hover:bg-escuderia-naranja transition"
        >
          ✉️ escuderiafenix@universidad.edu
        </a>

        <a
          href="https://wa.me/5215512345678"
          target="_blank"
          className="px-6 py-3 bg-escuderia-naranja text-black rounded-lg font-semibold hover:bg-escuderia-rojo hover:text-white transition"
        >
          💬 WhatsApp
        </a>
      </motion.div>

      <motion.div
        className="flex justify-center mt-12 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <a href="#" className="hover:text-escuderia-rojo text-2xl">🐦</a>
        <a href="#" className="hover:text-escuderia-rojo text-2xl">📷</a>
        <a href="#" className="hover:text-escuderia-rojo text-2xl">🎥</a>
      </motion.div>
    </motion.section>
  )
}
