import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const faqs = [
    { q: "Preciso instalar algum programa?", a: "Não, nosso sistema é 100% online e funciona em qualquer dispositivo com internet." },
    { q: "Tem fidelidade?", a: "Não, você pode cancelar a qualquer momento sem multas." },
    { q: "Como funciona o suporte?", a: "Oferecemos suporte via WhatsApp e email em horário comercial." }
  ]

  return (
    <section id="faq" className="py-20 bg-gray-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center font-medium hover:bg-gray-700/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? <ChevronUp className="h-5 w-5 text-indigo-500" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-400">
          {answer}
        </div>
      )}
    </div>
  )
}

export default FAQ