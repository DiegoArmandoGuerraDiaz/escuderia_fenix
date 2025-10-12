import { motion } from "motion/react"

export default function CarSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-escuderia-fondo to-black text-center">
      <h3 className="text-4xl font-bold mb-8 text-escuderia-rojo">Nuestro Auto</h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <motion.img
          src="/auto-fenix.jpg"
          alt="Auto de la escudería"
          className="w-full md:w-1/2 rounded-2xl shadow-xl shadow-escuderia-rojo/40"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="md:w-1/2 text-left space-y-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-semibold text-escuderia-naranja">Fénix E-01</h4>
          <p className="text-gray-300">
            El Fénix E-01 es nuestro monoplaza eléctrico diseñado para competencia universitaria.  
            Combina potencia, eficiencia y precisión en cada detalle.
          </p>

          <ul className="space-y-3 text-gray-400">
            <li><span className="text-escuderia-naranja">⚙️ Motor:</span> PMSM 10 kW con controlador de 48V</li>
            <li><span className="text-escuderia-naranja">🔋 Batería:</span> Paquete LiFePO₄ 96V – 80Ah</li>
            <li><span className="text-escuderia-naranja">🛠️ Chasis:</span> Tubular de acero SAE 1020</li>
            <li><span className="text-escuderia-naranja">🏁 Aceleración 0–60 km/h:</span> 3.9 s</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
