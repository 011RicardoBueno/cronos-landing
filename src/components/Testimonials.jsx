const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Quem usa aprova</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Carlos Silva</h4>
                  <p className="text-sm text-gray-400">Barbearia Vintage</p>
                </div>
              </div>
              <p className="text-gray-300">"O sistema mudou completamente a forma como gerenciamos a barbearia. O agendamento online reduziu muito o tempo no telefone."</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials