import { BarChart3, Users, Calendar, DollarSign, Settings, Shield, PieChart, Bell, FileText, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const ForOwners = () => {
  const features = [
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Dashboard Inteligente",
      description: "Visão completa do seu negócio em tempo real",
      items: ["Métricas de desempenho", "Gráficos interativos", "KPI's personalizados"]
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Agenda Avançada",
      description: "Controle total da agenda dos profissionais",
      items: ["Agendamento online", "Bloqueio de horários", "Controle de capacidade"]
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Gestão de Clientes",
      description: "Sistema completo de relacionamento",
      items: ["Histórico de atendimentos", "Fidelização", "Comunicação automática"]
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Controle Financeiro",
      description: "Tudo sobre suas finanças organizado",
      items: ["Fluxo de caixa", "Relatórios financeiros", "Controle de despesas"]
    },
    {
      icon: <PieChart className="h-10 w-10" />,
      title: "Análises Preditivas",
      description: "Insights para tomar melhores decisões",
      items: ["Tendências de mercado", "Previsão de demanda", "Análise de sazonalidade"]
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Segurança e Backup",
      description: "Seus dados protegidos 24/7",
      items: ["Backup automático", "Criptografia de dados", "Conformidade LGPD"]
    }
  ]
  
  return (
    <section id="owners" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-6 py-3 mb-6">
            <Settings className="h-5 w-5 text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-400">PARA DONOS DE NEGÓCIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tudo o que você precisa para <span className="text-gradient">gerenciar</span> seu negócio
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Uma plataforma completa com todas as ferramentas para você focar no crescimento do seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="card-gradient p-8 hover:border-indigo-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-2xl group-hover:from-indigo-500/20 group-hover:to-violet-500/20 transition-colors">
                  <div className="text-indigo-400">
                    {feature.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 mb-6">{feature.description}</p>
              
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-300">
                    <div className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Pronto para transformar sua gestão?</h3>
              <p className="text-slate-300">Experimente todas as funcionalidades por 14 dias grátis.</p>
            </div>
            <a 
              href="#cta" 
              className="btn-primary mt-6 lg:mt-0"
            >
              Começar Teste Gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForOwners