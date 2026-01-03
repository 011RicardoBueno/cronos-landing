import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 to-violet-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pronto para transformar sua barbearia?</h2>
        <p className="text-xl text-gray-900/80 mb-10">Junte-se a mais de 500 barbearias que já modernizaram sua gestão.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: ["0 0 0 0 rgba(17, 24, 39, 0.7)", "0 0 0 20px rgba(17, 24, 39, 0)"]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-all shadow-xl"
        >
          Começar Teste Grátis
        </motion.button>
      </div>
    </section>
  )
}

export default CTASection