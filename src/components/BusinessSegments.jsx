import { Scissors, Sparkles, Heart, Hand, PenTool, Dumbbell, CheckCircle } from 'lucide-react'

const BusinessSegments = () => {
  const segments = [
    {
      name: "Barbearias",
      icon: <Scissors className="h-8 w-8" />,
      description: "Gestão completa para barbearias modernas",
      features: ["Agenda de barbeiros", "Venda de produtos", "Fila de espera"]
    },
    {
      name: "Salões de Beleza",
      icon: <Sparkles className="h-8 w-8" />,
      description: "Tudo para salões de beleza",
      features: ["Múltiplos profissionais", "Catálogo de serviços", "Agendamento online"]
    },
    {
      name: "Clínicas de Estética",
      icon: <Heart className="h-8 w-8" />,
      description: "Sistema para clínicas especializadas",
      features: ["Consultas", "Tratamentos", "Retornos agendados"]
    },
    {
      name: "Estúdios de Massagem",
      icon: <Hand className="h-8 w-8" />,
      description: "Gestão para terapeutas e massagistas",
      features: ["Tipos de massagem", "Terapeutas", "Pacotes promocionais"]
    },
    {
      name: "Estúdios de Tatuagem",
      icon: <PenTool className="h-8 w-8" />,
      description: "Sistema para tatuadores",
      features: ["Agenda por sessão", "Orçamentos", "Depósitos"]
    },
    {
      name: "Personal Trainers",
      icon: <Dumbbell className="h-8 w-8" />,
      description: "Gestão para profissionais do fitness",
      features: ["Agendamento de aulas", "Pacotes mensais", "Controle físico"]
    }
  ]
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Para <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Todos os Tipos</span> de Negócio
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            O Fluxo foi desenvolvido para atender diversos segmentos de serviços. 
            Personalizamos a experiência para o seu tipo de negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-xl group-hover:from-indigo-500/30 group-hover:to-violet-500/30 transition-colors">
                  <div className="text-indigo-400 group-hover:text-indigo-300">
                    {segment.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{segment.name}</h3>
                  <p className="text-slate-400">{segment.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {segment.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessSegments