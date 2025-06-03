import { motion } from "framer-motion";



export const Cta = () => {
  return (
    <section
      className="relative py-28 px-4 md:px-20 overflow-hidden bg-black"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1618005198919-d3d4b6d41939?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay violeta oscuro */}
      <div className="absolute inset-0 bg-[#6b21a8]/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-sora mb-6 leading-snug"
        >
          Empezá tu camino de autoconocimiento
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-200 font-sora mb-10 max-w-4xl mx-auto"
        >
          Los números hablan de vos. Tu alma, tu misión, tus desafíos. Descubrilo gratis.
        </motion.p>

        

      </div>
    </section>
  );
};
export default Cta;
