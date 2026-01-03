import { useState } from 'react'
import { ChevronDown, MessageCircle, Clock, CreditCard, Smartphone, Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  
  const faqItems = [
    {
      question: "Como funciona o período de teste gratuito?",
      answer: "Oferecemos 14 dias gratuitos para testar todos os recursos do plano Profissional. Não é necessário cartão de crédito para iniciar. Após o período de teste, você pode escolher continuar com qualquer um dos nossos planos.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, todos os nossos planos são sem contrato de fidelidade. Você pode cancelar a qualquer momento diretamente pela plataforma. Se cancelar durante o período de teste, não será cobrado nada.",
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      question: "O Fluxo funciona no celular?",
      answer: "Sim! Nossa plataforma é 100% responsiva e funciona perfeitamente em smartphones e tablets. Temos também funcionalidades otimizadas para mobile como agendamento rápido e notificações push.",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Absolutamente. Usamos criptografia de ponta a ponta, servidores em data centers seguros no Brasil, backups diários e somos totalmente compliant com a LGPD. A segurança dos seus dados é nossa prioridade máxima.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      question: "Posso migrar meus dados de outro sistema?",
      answer: "Sim, oferecemos suporte para migração de dados de outros sistemas. Nossa equipe pode ajudar a importar seus clientes, serviços, profissionais e histórico de agendamentos.",
      icon: <MessageCircle className="h-6 w-6" />
    },
    {
      question: "O que acontece se eu precisar de mais profissionais?",
      answer: "Você pode atualizar seu plano a qualquer momento. A mudança é instantânea e você só paga a diferença proporcional. Não há custos de migração ou configuração adicional.",
      icon: <ChevronDown className="h-6 w-6" />
    }
  ]
  
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tire suas dúvidas sobre a plataforma, planos e funcionalidades.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="card-gradient overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-lg">
                    <div className="text-indigo-400">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 overflow-hidden"
                  >
                    <div className="pl-16 pr-6 pb-6">
                      <p className="text-slate-300">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        {/* Still have questions */}
        <div className="mt-12 p-8 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ainda tem dúvidas?</h3>
          <p className="text-slate-300 mb-6">
            Nossa equipe está pronta para te ajudar a encontrar a solução perfeita para seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contato@fluxoapp.com"
              className="btn-primary inline-flex items-center justify-center"
            >
              Enviar Email
            </a>
            <a 
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ