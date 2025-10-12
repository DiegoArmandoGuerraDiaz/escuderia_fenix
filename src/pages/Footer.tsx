export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-default)] border-t border-[var(--color-accent)] py-10 px-6 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-6">
        <h3 className="text-2xl font-extrabold text-[var(--color-accent)] tracking-widest">
          ESCUDERÍA FÉNIX
        </h3>

        <div className="flex space-x-6 text-gray-400 text-2xl">
          <a href="https://www.instagram.com" target="_blank" className="hover:text-[var(--color-accent)]">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" className="hover:text-[var(--color-accent)]">
            <i className="ri-linkedin-line"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" className="hover:text-[var(--color-accent)]">
            <i className="ri-youtube-line"></i>
          </a>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Escudería Fénix — Ingeniería, innovación y velocidad.
      </div>
    </footer>
  );
}
