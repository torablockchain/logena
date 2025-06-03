import { useState } from "react";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "¿Qué es una lectura numerológica?",
    answer:
      "Es una herramienta de autoconocimiento basada en los números que componen tu fecha de nacimiento y tu nombre completo. Te ayuda a entender tus talentos, desafíos y propósito.",
  },
  {
    question: "¿Cómo empiezo mi primera lectura gratuita?",
    answer:
      "Solo necesitás crear tu perfil en Logena con tu nombre completo y fecha de nacimiento. ¡El sistema hace el resto!",
  },
  {
    question: "¿Qué tan precisas son las lecturas?",
    answer:
      "La numerología es una herramienta simbólica. La precisión depende de tu apertura y cómo integrás la información a tu proceso personal.",
  },
  {
    question: "¿Qué diferencia hay entre los planes?",
    answer:
      "El plan gratuito ofrece una lectura mensual, mientras que los pagos habilitan más lecturas, compatibilidades y acceso a reportes descargables.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#f9f8ff] dark:bg-[#121212] py-28 px-4 md:px-20">
      <div className="max-w-5xl mx-auto text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-sora mb-12"
        >
          Preguntas frecuentes
        </motion.h2>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-[#1c1c1c] shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center font-sora text-lg"
              >
                <span>{item.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;