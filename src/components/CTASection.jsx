import { ArrowRight, CheckCircle, Zap, Users, Shield } from 'lucide-react'

const CTASection = () => {
  const benefits = [
    "Teste grátis por 14 dias",
    "Sem cartão de crédito necessário",
    "Setup em menos de 10 minutos",
    "Suporte especializado incluso"
  ]
  
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-6">
            <Zap className="h-5 w-5 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-400">PRONTO PARA COMEÇAR?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Transforme a gestão do seu <span className="text-gradient">negócio hoje</span>
          </h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            Junte-se a mais de 200 negócios que já otimizaram sua operação com o Fluxo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">O que você ganha:</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-slate-300">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-4 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-slate-700">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i}
                        className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full border-2 border-slate-900 flex items-center justify-center text-white text-sm font-bold"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-white font-bold">+200 negócios já confiam no Fluxo</div>
                    <div className="text-sm text-slate-400">Avaliação média: 4.8/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Form */}
          <div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Comece agora mesmo</h3>
              <p className="text-slate-400 mb-8">Preencha os dados abaixo para iniciar seu teste gratuito</p>

              <form className="space-y-6">
                <div>
            <label htmlFor="user-name" className="block text-slate-300 mb-2">
              Seu nome completo <span className="text-rose-500">*</span>
            </label>
            <input 
              id="user-name"
              type="text" 
              placeholder="João Silva"
              required
              className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              aria-required="true"
            />
          </div>
                <div>
            <label htmlFor="user-email" className="block text-slate-300 mb-2">
              Email profissional <span className="text-rose-500">*</span>
            </label>
            <input 
              id="user-email"
              type="email" 
              placeholder="seu@email.com"
              required
              className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              aria-required="true"
            />
          </div>
                <div>
            <label htmlFor="business-type" className="block text-slate-300 mb-2">
              Tipo de negócio <span className="text-rose-500">*</span>
            </label>
            <select 
              id="business-type"
              required
              className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
              aria-required="true"
            >
                    <option value="">Selecione...</option>
                    <option value="barbershop">Barbearia</option>
                    <option value="salon">Salão de Beleza</option>
                    <option value="clinic">Clínica de Estética</option>
                    <option value="massage">Estúdio de Massagem</option>
                    <option value="tattoo">Estúdio de Tatuagem</option>
                    <option value="fitness">Personal Trainer</option>
                    <option value="other">Outro</option>
                  </select>
          </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 flex items-center justify-center space-x-3 group"
                        aria-label="Iniciar teste gratuito do Fluxo"
                >
                  <span>Começar Teste Grátis</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-center text-sm text-slate-500">
                  Ao clicar, você concorda com nossos Termos de Serviço e Política de Privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-emerald-500" />
            <span>Pagamento 100% seguro</span>
          </div>
          <div className="h-4 w-px bg-slate-700"></div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-indigo-500" />
            <span>Suporte em português</span>
          </div>
          <div className="h-4 w-px bg-slate-700"></div>
          <div className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-amber-500" />
            <span>Setup em 10 minutos</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection