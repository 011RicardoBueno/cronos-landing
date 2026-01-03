import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent"
      >
        Gestão Inteligente para<br />Seu Negócio de Serviços
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
      >
        Uma plataforma unificada para barbearias, salões, clínicas e estúdios. Controle completo do seu negócio em um só lugar.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/20">
          Teste Grátis por 14 dias <ArrowRight className="h-5 w-5" />
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
          Ver Demonstração
        </button>
      </motion.div>
    </section>
  )
}

export default Hero