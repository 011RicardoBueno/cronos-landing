import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    "Agendamento Online 24/7",
    "Controle de Comissões",
    "Gestão de Estoque",
    "Relatórios Financeiros",
    "Marketing Automatizado",
    "Histórico de Clientes",
    "Múltiplas Unidades",
    "Integração com WhatsApp"
  ]

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Recursos Completos</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-indigo-500/30 transition-colors"
            >
              <CheckCircle2 className="h-5 w-5 text-indigo-500 flex-shrink-0" />
              <span className="font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features