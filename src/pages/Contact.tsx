import { motion } from "motion/react";
import { FiInstagram, FiYoutube, FiFacebook } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

export default function Contact() {
  const socials = [
    {
      name: "Instagram",
      icon: <FiInstagram size={22} />,
      color: "#E4405F",
      href: "https://www.instagram.com/escuderiafenix_upiita/",
    },
    {
      name: "TikTok",
      icon: <FaTiktok size={22} />,
      color: "#010101",
      href: "https://www.tiktok.com/@escuderiafenix_upiita",
    },
    {
      name: "YouTube",
      icon: <FiYoutube size={22} />,
      color: "#FF0000",
      href: "https://www.youtube.com/@escuderiafenix_upiita",
    },
    {
      name: "Facebook",
      icon: <FiFacebook size={22} />,
      color: "#1877F2",
      href: "https://www.facebook.com/escuderiafenix_upiita",
    },
  ];

  const formSection = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center z-10 w-full md:w-1/2 max-w-lg"
    >
      <h2 className="text-[7vw] mt-4 md:text-5xl md:ml-50 font-extrabold text-[var(--color-accent)] drop-shadow-[0_0_15px_var(--color-fenix-orange)] mb-6 md:mb-8  text-center">
        Contáctanos
      </h2>
      <p className="text-gray-300 mb-4 md:mb-6 text-base sm:text-md text-center md:text-left">
        ¿Quieres colaborar, patrocinar o conocer más sobre la Escudería Fénix?
        Escríbenos y con gusto nos pondremos en contacto.
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
          className="w-full bg-[var(--color-bg-default)] border border-[var(--color-accent)]
                     text-white p-3 rounded-[var(--radius-base)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full bg-[var(--color-bg-default)] border border-[var(--color-accent)]
                     text-white p-3 rounded-[var(--radius-base)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        />
        <textarea
          placeholder="Mensaje"
          rows={5}
          className="w-full bg-[var(--color-bg-default)] border border-[var(--color-accent)]
                     text-white p-3 rounded-[var(--radius-base)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-fenix w-full px-6 py-2 rounded-lg font-semibold text-black bg-[var(--color-fenix-orange)] hover:bg-[var(--color-fenix-red)] shadow-[0_0_10px_var(--color-fenix-orange)] transition-colors"
        >
          Enviar mensaje
        </motion.button>
      </motion.form>
    </motion.div>
  );

  const socialsSection = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full md:w-1/3 max-w-sm flex flex-col items-center md:items-start gap-6"
    >
      <h3 className="text-3xl font-bold text-[var(--color-fenix-orange)] mt-10">
        Síguenos en redes
      </h3>
      <div className="flex flex-col gap-4 w-full">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-[rgba(255,255,255,0.05)]
                       hover:bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)]
                       rounded-xl p-4 backdrop-blur-md transition-all duration-300 w-full"
            style={{ boxShadow: `0 0 15px ${s.color}20` }}
          >
            <div className="p-2 rounded-lg" style={{ backgroundColor: `${s.color}33` }}>
              <span style={{ color: s.color }}>{s.icon}</span>
            </div>
            <span className="text-white font-medium">{s.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );

  return (
    <>
      {/* 💻 PC: UNA sola sección unificada */}
      <section
        id="contact"
        className="hidden md:flex snap-start relative min-h-screen flex-row items-center justify-center gap-16 px-6 py-24
                   bg-[var(--color-bg-alt)] text-center md:text-left overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-fenix-orange)_0%,transparent_70%)] opacity-10 blur-3xl"
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {formSection}

        <div className="w-[2px] h-80 bg-gradient-to-b from-[var(--color-fenix-orange)]
                        via-[var(--color-fenix-red)] to-transparent opacity-40" />

        {socialsSection}
      </section>

      {/* 📱 MÓVIL: DOS secciones separadas */}
      <section
        id="contact-mobile"
        className="md:hidden snap-start relative min-h-screen flex flex-col items-center justify-center px-6 py-20 
                   bg-[var(--color-bg-alt)] text-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-fenix-orange)_0%,transparent_70%)] opacity-10 blur-3xl"
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        {formSection}
      </section>

      <section
        id="socials-mobile"
        className="md:hidden snap-start relative min-h-screen flex flex-col items-center justify-center px-6 py-20 
                   bg-[var(--color-bg-alt)] text-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-fenix-orange)_0%,transparent_70%)] opacity-10 blur-3xl"
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        {socialsSection}
      </section>
    </>
  );
}