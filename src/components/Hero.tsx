import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#121212] to-[#1a1a1a] text-white flex items-center py-32 overflow-hidden">
      {/* Fondo decorativo sutil con imagen de estrellas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/stars-bg.png"
          alt="Fondo de estrellas"
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
        <div className="absolute w-[600px] h-[600px] bg-[#a18cd1]/20 rounded-full blur-[150px] top-[-100px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-[#d9a7ff]/20 rounded-full blur-[120px] bottom-[-80px] right-[-100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container z-10 px-4 md:px-8"
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-sora text-left">
            Descubrí tu mapa interno.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a7ff] to-[#a18cd1]">
              La sabiduría está en los números, y en vos.
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 font-sora max-w-xl text-left">
            LOGENA es la primera plataforma de numerología guiada por inteligencia artificial con alma. Un puente entre la lógica de los números y la intuición de tu camino personal.
          </p>
          {/* Botón removido */}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
