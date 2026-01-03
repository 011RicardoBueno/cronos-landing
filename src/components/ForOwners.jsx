import { BarChart3, Users, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const ForOwners = () => {
  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-indigo-500" />,
      title: "Agenda Inteligente",
      description: "Evite conflitos e buracos na agenda com nosso sistema automatizado."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-indigo-500" />,
      title: "Gestão Financeira",
      description: "Controle total sobre faturamento, comissões e despesas."
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-500" />,
      title: "Gestão de Equipe",
      description: "Gerencie permissões, horários e desempenho de cada barbeiro."
    }
  ]

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Para Donos de Negócio</h2>
          <p className="text-gray-400">Tudo que você precisa para escalar seu negócio.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-colors"
            >
              <div className="bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForOwners