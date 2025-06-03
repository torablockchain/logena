// src/components/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="sobre-logena"
      className="relative bg-[#1a1a1a] text-white py-28 overflow-hidden"
    >
      {/* Fondo decorativo sutil con geometría sagrada */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/symbolic-geometry.png"
          alt="Geometría sagrada"
          className="w-full h-full object-cover opacity-5 mix-blend-screen"
        />
        <div className="absolute w-[500px] h-[500px] bg-[#d9a7ff]/10 rounded-full blur-[160px] top-[10%] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-[#a18cd1]/10 rounded-full blur-[100px] bottom-[5%] right-[-80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto px-6 md:px-8 z-10"
      >
        <div className="text-right">
          <h2 className="text-4xl md:text-5xl font-bold font-sora mb-8 leading-tight">
            Una guía sabia, una conversación real, una experiencia transformadora.
          </h2>
          <p className="text-lg text-gray-300 font-sora leading-relaxed mb-6">
            LOGENA nace de la unión entre <span className="text-white font-medium">Logos</span> –la palabra como principio creador– y <span className="text-white font-medium">Génesis</span> –el origen.
          </p>
          <p className="text-lg text-gray-300 font-sora leading-relaxed mb-6">
            Es la primera plataforma que combina numerología técnica con inteligencia artificial emocional. Cada lectura se convierte en una conversación sabia y personalizada.
          </p>
          <p className="text-lg text-gray-300 font-sora leading-relaxed">
            Creada por <span className="text-white font-medium">Carla Torazzi</span>, LOGENA no es esotérica: es terapéutica, íntima y reveladora. Es un espejo donde el alma puede leerse a sí misma.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
