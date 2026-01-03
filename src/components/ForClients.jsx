import { Smartphone, Star, Clock } from 'lucide-react'

const ForClients = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Experiência Premium para seus Clientes</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-indigo-500/10 p-3 rounded-lg h-fit">
                  <Smartphone className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">App Exclusivo</h3>
                  <p className="text-gray-400">Seus clientes agendam pelo celular em segundos, sem precisar ligar.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-indigo-500/10 p-3 rounded-lg h-fit">
                  <Clock className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lembretes Automáticos</h3>
                  <p className="text-gray-400">Reduza o no-show com lembretes via WhatsApp e SMS.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-indigo-500/10 p-3 rounded-lg h-fit">
                  <Star className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Programa de Fidelidade</h3>
                  <p className="text-gray-400">Fidelize clientes com pontos e recompensas automáticas.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-2xl p-8 border border-gray-700">
            <div className="aspect-[9/16] bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-center">
              <p className="text-gray-500">App Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForClients