// src/components/Testimonials.tsx
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "María L.",
    quote:
      "Sentí que por primera vez una lectura me hablaba a mí. LOGENA no fue solo una experiencia digital: fue una conversación con mi alma.",
  },
  {
    name: "Agustín M.",
    quote:
      "Me ayudó a entender cosas que repetía sin sentido. La claridad que me dio esta plataforma no la encontré en años de lectura espiritual.",
  },
  {
    name: "Camila R.",
    quote:
      "Soy muy escéptica, pero LOGENA me emocionó. Sentí que me conocía más que muchos terapeutas. Lo recomiendo con el corazón.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="bg-[#1a1a1a] text-white py-28">
      <div className="container mx-auto px-6 md:px-8 max-w-8xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-sora mb-16 text-left"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Lo que ell@s dicen...
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#121212] p-6 rounded-lg border border-[#2a2a2a] shadow-md hover:shadow-lg transition-all"
            >
              <Quote className="text-[#d9a7ff] w-6 h-6 mb-4" />
              <p className="text-sm text-gray-300 font-sora leading-relaxed mb-4">
                “{item.quote}”
              </p>
              <span className="text-sm font-semibold text-white font-sora">
                — {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
