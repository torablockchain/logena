// src/components/HowItWorks.tsx
import { motion } from 'framer-motion';
import { Sparkles, ScrollText, Eye, Compass, Flame } from 'lucide-react';

const steps = [
  {
    icon: <Sparkles className="h-8 w-8 text-[#d9a7ff]" />,
    title: "Ingresás tus datos",
    description: "Tu nombre completo y fecha de nacimiento activan tu perfil numerológico.",
  },
  {
    icon: <ScrollText className="h-8 w-8 text-[#d9a7ff]" />,
    title: "Recibís tu lectura",
    description: "LOGENA interpreta tus números clave y genera una lectura emocional guiada por IA.",
  },
  {
    icon: <Eye className="h-8 w-8 text-[#d9a7ff]" />,
    title: "Explorás tu mapa interno",
    description: "Descubrís tu misión, desafíos, ciclos y energía esencial.",
  },
  {
    icon: <Compass className="h-8 w-8 text-[#d9a7ff]" />,
    title: "Te orientás en tu presente",
    description: "Entendés el momento que estás viviendo con claridad emocional y estratégica.",
  },
  {
    icon: <Flame className="h-8 w-8 text-[#d9a7ff]" />,
    title: "Conectás con tu propósito",
    description: "Reconocés tu energía vital, tu esencia y lo que viniste a encender en este mundo.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="bg-[#121212] text-white py-28">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-sora mb-16 text-left"
        >
          ¿Cómo funciona LOGENA?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1f1f1f] rounded-xl p-6 shadow-md border border-[#2a2a2a] hover:border-[#d9a7ff]/40 transition-all"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold font-sora mb-2">{step.title}</h3>
              <p className="text-sm text-gray-300 font-sora leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
