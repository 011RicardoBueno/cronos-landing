import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Dono da Barbearia Vintage",
      business: "Barbearia",
      content: "O Fluxo revolucionou minha barbearia. Agora consigo focar no atendimento enquanto o sistema cuida de toda a gestão. Minha produtividade aumentou 40%!",
      rating: 5,
      avatar: "CM"
    },
    {
      name: "Ana Beatriz",
      role: "Proprietária do Salão Elegance",
      business: "Salão de Beleza",
      content: "Como dona de salão, tinha dificuldade com agenda de múltiplas profissionais. Com o Fluxo, tudo ficou organizado e minhas clientes adoram a experiência de agendamento online.",
      rating: 5,
      avatar: "AB"
    },
    {
      name: "Roberto Silva",
      role: "Gerente da Clínica Estética Bella",
      business: "Clínica de Estética",
      content: "A integração com WhatsApp foi decisiva para nossa escolha. Os lembretes automáticos reduziram as faltas em 75%. O retorno sobre investimento foi imediato.",
      rating: 4,
      avatar: "RS"
    },
    {
      name: "Fernanda Costa",
      role: "Massoterapeuta Autônoma",
      business: "Estúdio de Massagem",
      content: "Como profissional autônoma, precisava de uma solução simples e eficiente. O Fluxo me deu credibilidade profissional e me ajudou a organizar minha agenda como nunca.",
      rating: 5,
      avatar: "FC"
    },
    {
      name: "Marcelo Oliveira",
      role: "Sócio do Estúdio Ink Tattoo",
      business: "Estúdio de Tatuagem",
      content: "O sistema de orçamentos e depósitos do Fluxo resolveu um grande problema do nosso estúdio. Agora conseguimos gerenciar as sessões de forma muito mais profissional.",
      rating: 5,
      avatar: "MO"
    },
    {
      name: "Patrícia Santos",
      role: "Personal Trainer",
      business: "Studio Fitness",
      content: "Gerenciar pacotes mensais e horários de alunos era caótico. Com o Fluxo, tudo ficou automático. Meus clientes adoram a facilidade de remarcar pelo celular.",
      rating: 4,
      avatar: "PS"
    }
  ]
  
  const [activeIndex, setActiveIndex] = useState(0)
  
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-amber-500 fill-amber-500' : 'text-slate-700'}`} 
      />
    ))
  }
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-full px-6 py-3 mb-6">
            <Quote className="h-5 w-5 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">DEPOIMENTOS REAIS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos clientes <span className="text-gradient">estão dizendo</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Mais de 200 negócios de serviços já transformaram sua gestão com o Fluxo.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`card-gradient p-8 transition-all duration-300 hover:border-amber-500/50 ${
                index === activeIndex ? 'border-amber-500/30' : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <Quote className="h-8 w-8 text-amber-500/30 mb-6" />
              
              <p className="text-slate-200 mb-8 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-300">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-700">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-200">
                  {testimonial.business}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
                    <div className="text-slate-300">Negócios Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4.8</div>
                    <div className="text-slate-300">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
                    <div className="text-slate-300">Taxa de Retenção</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24h</div>
                    <div className="text-slate-300">Suporte Médio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials