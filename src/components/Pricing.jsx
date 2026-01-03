import { Check } from 'lucide-react'

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Planos Simples e Transparentes</h2>
          <p className="text-gray-400">Escolha o melhor para o seu momento.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold mb-2">Inicial</h3>
            <div className="text-3xl font-bold mb-6">R$ 89<span className="text-sm text-gray-400 font-normal">/mês</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-indigo-500" /> 1 Profissional</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-indigo-500" /> Agendamento Online</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-indigo-500" /> Gestão Básica</li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-indigo-500 text-indigo-500 font-semibold hover:bg-indigo-500/10 transition-colors">Começar</button>
          </div>
          
          {/* Pro */}
          <div className="bg-gray-800 p-8 rounded-2xl border-2 border-indigo-500 relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold">Mais Popular</div>
            <h3 className="text-xl font-bold mb-2">Profissional</h3>
            <div className="text-3xl font-bold mb-6">R$ 149<span className="text-sm text-gray-400 font-normal">/mês</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-indigo-500" /> Até 5 Profissionais</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-indigo-500" /> Gestão Financeira</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-indigo-500" /> Lembretes WhatsApp</li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-colors">Começar Agora</button>
          </div>

          {/* Enterprise */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold mb-2">Redes</h3>
            <div className="text-3xl font-bold mb-6">Sob Consulta</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-indigo-500" /> Profissionais Ilimitados</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-indigo-500" /> Múltiplas Unidades</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-indigo-500" /> API Dedicada</li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-indigo-500 text-indigo-500 font-semibold hover:bg-indigo-500/10 transition-colors">Falar com Vendas</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing