import { Check, Star, Zap, Crown } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  
  const plans = [
    {
      name: "Iniciante",
      description: "Perfeito para profissionais autônomos",
      monthlyPrice: 79,
      yearlyPrice: 59,
      features: [
        "1 profissional",
        "Até 100 agendamentos/mês",
        "Dashboard básico",
        "Agendamento online",
        "WhatsApp automático",
        "Suporte por email",
        "Sem contrato de fidelidade"
      ],
      ctaText: "Começar Grátis",
      popular: false,
      icon: <Star className="h-8 w-8" />
    },
    {
      name: "Profissional",
      description: "Ideal para pequenos e médios negócios",
      monthlyPrice: 149,
      yearlyPrice: 119,
      features: [
        "Até 5 profissionais",
        "Agendamentos ilimitados",
        "Dashboard avançado",
        "Gestão de clientes",
        "Controle financeiro",
        "Relatórios detalhados",
        "Suporte prioritário",
        "LGPD compliance"
      ],
      ctaText: "Testar 14 Dias",
      popular: true,
      icon: <Zap className="h-8 w-8" />
    },
    {
      name: "Enterprise",
      description: "Para grandes redes e franquias",
      monthlyPrice: 299,
      yearlyPrice: 239,
      features: [
        "Profissionais ilimitados",
        "Multi-unidades",
        "Dashboard corporativo",
        "API completa",
        "Integração personalizada",
        "Treinamento dedicado",
        "Suporte 24/7",
        "Consultoria estratégica",
        "White label disponível"
      ],
      ctaText: "Falar com Vendas",
      popular: false,
      icon: <Crown className="h-8 w-8" />
    }
  ]
  
  const calculateSavings = (monthly, yearly) => {
    const saving = ((monthly * 12) - (yearly * 12)) / (monthly * 12) * 100
    return Math.round(saving)
  }
  
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-full px-6 py-3 mb-6">
            <Crown className="h-5 w-5 text-violet-400" />
            <span className="text-sm font-semibold text-violet-400">PLANOS E PREÇOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Escolha o plano <span className="text-gradient">perfeito</span> para você
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-12">
            Experimente grátis por 14 dias. Sem cartão de crédito necessário.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-slate-800 rounded-full p-1 mb-12">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-3 rounded-full font-medium transition-all relative ${
                billingPeriod === 'yearly'
                  ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Anual <span className="ml-2 text-sm bg-emerald-500 text-white px-2 py-1 rounded-full">-{calculateSavings(plans[1].monthlyPrice, plans[1].yearlyPrice)}%</span>
            </button>
          </div>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice
            const period = billingPeriod === 'monthly' ? 'mês' : 'ano'
            
            return (
              <motion.div 
                key={index}
                className={`relative card-gradient p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-2 border-violet-500/50 shadow-xl shadow-violet-500/10' 
                    : 'border border-slate-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      MAIS POPULAR
                    </div>
                  </div>
                )}
                
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl">
                      <div className="text-violet-400">
                        {plan.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      <p className="text-slate-300">{plan.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">R$ {price}</span>
                      <span className="text-slate-300 ml-2">/{period}</span>
                    </div>
                    {billingPeriod === 'yearly' && (
                      <div className="text-sm text-emerald-500 mt-2">
                        Economize {calculateSavings(plan.monthlyPrice, plan.yearlyPrice)}% vs mensal
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-200">
                        <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}>
                  {plan.ctaText}
                </button>
                
                {plan.name === "Iniciante" && (
                  <div className="mt-4 text-center text-sm text-slate-500">
                    Teste grátis por 14 dias
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
        
        {/* FAQ Link */}
        <div className="text-center mt-16">
          <p className="text-slate-400">
            Precisa de um plano personalizado? 
            <a href="#faq" className="text-indigo-400 hover:text-indigo-300 ml-2 font-medium">
              Fale com nossa equipe →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing