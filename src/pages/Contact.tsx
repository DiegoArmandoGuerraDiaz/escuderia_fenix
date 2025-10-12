import { motion } from "motion/react";
import { FiInstagram, FiLinkedin, FiYoutube, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-6 py-24 bg-[var(--color-bg-alt)] text-center md:text-left relative"
    >
      {/* 🔶 Fondo líquido sutil */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-fenix-orange)_0%,transparent_70%)] opacity-10 blur-3xl"
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 📝 Formulario de contacto */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full md:w-1/2 max-w-lg"
      >
        <h2 className="text-5xl font-extrabold text-[var(--color-accent)] mb-8 text-center md:text-left">
          Contáctanos
        </h2>

        <p className="max-w-2xl text-gray-300 mb-12 text-lg text-center md:text-left">
          ¿Quieres colaborar, patrocinar o conocer más sobre la Escudería Fénix?
          Escríbenos y con gusto te responderemos.
        </p>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full space-y-6"
        >
          <input
            type="text"
            placeholder="Nombre"
            className="w-full bg-[var(--color-bg-default)] border border-[var(--color-accent)] text-white p-3 rounded-[var(--radius-base)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full bg-[var(--color-bg-default)] border border-[var(--color-accent)] text-white p-3 rounded-[var(--radius-base)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
          <textarea
            placeholder="Mensaje"
            rows={5}
            className="w-full bg-[var(--color-bg-default)] border border-[var(--color-accent)] text-white p-3 rounded-[var(--radius-base)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-fenix w-full"
          >
            Enviar mensaje
          </motion.button>
        </motion.form>
      </motion.div>

      {/* 🔸 Espaciador con gradiente vertical */}
      <div className="hidden md:block w-[2px] h-80 bg-gradient-to-b from-[var(--color-fenix-orange)] via-[var(--color-fenix-red)] to-transparent opacity-40" />

      {/* 🌐 Redes sociales */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full md:w-1/3 max-w-sm flex flex-col items-center md:items-start gap-6"
      >
        <h3 className="text-3xl font-bold text-[var(--color-fenix-orange)] mb-4">
          Siguenos en redes
        </h3>

        <div className="flex flex-col gap-4 w-full">
          {[
            {
              name: "Instagram",
              icon: <FiInstagram size={22} />,
              color: "#E4405F",
              href: "https://instagram.com/",
            },
            {
              name: "LinkedIn",
              icon: <FiLinkedin size={22} />,
              color: "#0077B5",
              href: "https://linkedin.com/",
            },
            {
              name: "YouTube",
              icon: <FiYoutube size={22} />,
              color: "#FF0000",
              href: "https://youtube.com/",
            },
            {
              name: "Correo",
              icon: <FiMail size={22} />,
              color: "var(--color-fenix-orange)",
              href: "mailto:contacto@escuderiafenix.com",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4 backdrop-blur-md transition-all duration-300 w-full"
              style={{
                boxShadow: `0 0 15px ${social.color}20`,
              }}
            >
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${social.color}33` }}
              >
                <span style={{ color: social.color }}>{social.icon}</span>
              </div>
              <span className="text-white font-medium">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
