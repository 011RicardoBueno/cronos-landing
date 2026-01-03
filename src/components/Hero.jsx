import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-hero-animation -z-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
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
          className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
        >
          Uma plataforma unificada para barbearias, salões, clínicas e estúdios. Controle completo do seu negócio em um só lugar.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="https://cronos-ruby.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2 hover:scale-105">
            Teste Grátis por 14 dias <ArrowRight className="h-5 w-5" />
          </a>
          <a href="https://cronos-ruby.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center">
            Ver Demonstração
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero