import { Smartphone, Clock, Star, MessageSquare, Bell, CreditCard, Shield, Calendar, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const ForClients = () => {
  const clientFeatures = [
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Agendamento Mobile",
      description: "Agende serviços pelo celular em poucos cliques",
      benefit: "Conveniência total"
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Tempo Real",
      description: "Acompanhe sua fila de espera em tempo real",
      benefit: "Sem tempo perdido"
    },
    {
      icon: <Star className="h-10 w-10" />,
      title: "Avaliações",
      description: "Avalie o serviço e ajude a melhorar a qualidade",
      benefit: "Feedback valioso"
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "Lembretes Inteligentes",
      description: "Receba lembretes por WhatsApp e email",
      benefit: "Nunca mais esqueça"
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Pagamento Digital",
      description: "Pague online ou no estabelecimento",
      benefit: "Pagamento seguro"
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Histórico Completo",
      description: "Acesse todo seu histórico de serviços",
      benefit: "Controle total"
    }
  ]
  
  return (
    <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-6 py-3 mb-6">
            <Users className="h-5 w-5 text-violet-400" />
            <span className="text-sm font-semibold text-violet-400">EXPERIÊNCIA DO CLIENTE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Encante seus clientes com uma <span className="text-gradient">experiência única</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ofereça aos seus clientes a modernidade e praticidade que eles esperam.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clientFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl">
                  <div className="text-violet-400">
                    {feature.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 mb-6">{feature.description}</p>
              
              <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                <span className="text-sm font-semibold text-violet-400">{feature.benefit}</span>
                <div className="h-8 w-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <span className="text-violet-400 text-sm">✓</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Seus clientes agradecem a <span className="text-gradient">experiência moderna</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-300">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Taxa de remarcação reduzida em 40%</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>NPS (Net Promoter Score) aumentado em 35 pontos</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Retenção de clientes 2x maior</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mb-6">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Feedback em Tempo Real</h4>
                <p className="text-slate-400">
                  Receba feedback imediato dos seus clientes e melhore continuamente seus serviços.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForClients