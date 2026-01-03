import { Zap, Smartphone, Lock, Cloud, Bell, RefreshCw, Code, Users } from 'lucide-react'

const Features = () => {
  const technicalFeatures = [
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Performance Otimizada",
      description: "Carregamento rápido mesmo em conexões lentas",
      details: ["CDN global", "Cache inteligente", "Otimização de imagens"]
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "100% Responsivo",
      description: "Funciona perfeitamente em qualquer dispositivo",
      details: ["Mobile-first design", "Tablet otimizado", "Desktop completo"]
    },
    {
      icon: <Lock className="h-10 w-10" />,
      title: "Segurança Máxima",
      description: "Seus dados protegidos com tecnologia de ponta",
      details: ["SSL 256-bit", "Backup diário", "Conformidade LGPD"]
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud Native",
      description: "Tudo na nuvem, sem instalação necessária",
      details: ["Escalabilidade automática", "Uptime 99.9%", "Atualizações automáticas"]
    },
    {
      icon: <Bell className="h-10 w-10" />,
      title: "Notificações Inteligentes",
      description: "Comunicação automática com clientes",
      details: ["WhatsApp e Email", "Lembretes personalizados", "Confirmatória automática"]
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "API Completa",
      description: "Integre com outras ferramentas do seu negócio",
      details: ["Documentação detalhada", "Suporte a webhooks", "Zapier pronto"]
    }
  ]
  
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-6">
            <Zap className="h-5 w-5 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-400">TECNOLOGIA AVANÇADA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Construído com as <span className="text-gradient">melhores tecnologias</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Uma plataforma robusta e confiável, desenvolvida com as mais modernas tecnologias do mercado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group card-gradient p-8 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl group-hover:from-emerald-500/20 group-hover:to-teal-500/20">
                  <div className="text-emerald-400">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-slate-200">
                    <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full mr-3"></div>
                    <span className="text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-xs text-slate-500">
                  Disponível em todos os planos
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-indigo-500/5 to-violet-500/5 border border-indigo-500/20 rounded-2xl p-8">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-slate-300">Uptime garantido</div>
            <div className="text-sm text-slate-500 mt-2">Disponibilidade máxima para seu negócio</div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 rounded-2xl p-8">
            <div className="text-4xl font-bold text-white mb-2">&lt;2s</div>
            <div className="text-slate-300">Tempo de carregamento</div>
            <div className="text-sm text-slate-500 mt-2">Performance otimizada para conversão</div>
          </div>
          
          <div className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 border border-violet-500/20 rounded-2xl p-8">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-slate-300">Suporte especializado</div>
            <div className="text-sm text-slate-500 mt-2">Nossa equipe sempre disponível</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features