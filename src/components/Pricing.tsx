import { motion } from "framer-motion";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full bg-[#f9f8ff] dark:bg-[#121212] py-28 px-4 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-sora mb-12"
        >
          Elegí tu camino
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Plan Gratuito */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-[#1c1c1c] shadow-sm"
          >
            <h3 className="text-2xl font-bold font-sora mb-4">Gratuito</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Comenzá tu camino interior sin costo.
            </p>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ 1 lectura mensual</li>
              <li>✓ Acceso básico al perfil numerológico</li>
              <li>✓ Tips de autoconocimiento</li>
            </ul>
          </motion.div>

          {/* Plan Intermedio */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="border border-violet-400 rounded-2xl p-6 bg-gradient-to-b from-violet-100 to-white dark:from-[#2a2a48] dark:to-[#1c1c1c] shadow-md"
          >
            <h3 className="text-2xl font-bold font-sora mb-4">Esencial</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ideal para quienes buscan claridad y dirección.
            </p>
            <ul className="text-sm space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ 4 lecturas mensuales</li>
              <li>✓ Acceso completo al perfil numerológico</li>
              <li>✓ Reportes descargables</li>
              <li>✓ Acceso anticipado a novedades</li>
            </ul>
          </motion.div>

          {/* Plan Premium */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-[#1c1c1c] shadow-sm"
          >
            <h3 className="text-2xl font-bold font-sora mb-4">Premium</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Para quienes buscan ir más allá del número.
            </p>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Acceso ilimitado</li>
              <li>✓ Informe de compatibilidad</li>
              <li>✓ Sesiones personalizadas</li>
              <li>✓ Soporte prioritario</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;