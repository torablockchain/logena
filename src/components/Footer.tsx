import { Github, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-6">
        <div>
          <h3 className="text-2xl font-bold font-sora mb-2">LOGENA</h3>
          <p className="text-gray-400 text-sm font-sora max-w-md">
            Plataforma de numerología emocional guiada por inteligencia artificial. Tu camino comienza en vos.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex gap-4 text-gray-400">
            <a
              href="mailto:contacto@logena.io"
              className="hover:text-white transition"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/logena.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/tu-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-gray-500 font-sora">
            © {new Date().getFullYear()} Logena. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
