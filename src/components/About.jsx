import { motion } from "motion/react"

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6 bg-escuderia-fondo text-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-4xl font-bold mb-8 text-escuderia-naranja">Sobre Nosotros</h3>
      <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
        Somos una escudería universitaria comprometida con el desarrollo tecnológico y la formación de ingenieros apasionados por la competencia. 
        Diseñamos, construimos y optimizamos vehículos eléctricos de alto rendimiento.
      </p>
    </motion.section>
  )
}
