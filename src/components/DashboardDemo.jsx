import { useState } from 'react'
import { BarChart3, TrendingUp, Users, DollarSign, Calendar, PieChart } from 'lucide-react'

const DashboardDemo = () => {
  const [activeTab, setActiveTab] = useState('overview')
  
  const metrics = [
    { label: "Faturamento Mensal", value: "R$ 24.580", change: "+12%", icon: <DollarSign />, color: "emerald" },
    { label: "Agendamentos", value: "342", change: "+8%", icon: <Calendar />, color: "indigo" },
    { label: "Novos Clientes", value: "89", change: "+15%", icon: <Users />, color: "violet" },
    { label: "Satisfação", value: "96%", change: "+5%", icon: <TrendingUp />, color: "amber" }
  ]
  
  const tabs = [
    { id: 'overview', label: 'Visão Geral' },
    { id: 'finance', label: 'Financeiro' },
    { id: 'clients', label: 'Clientes' },
    { id: 'team', label: 'Equipe' }
  ]
  
  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 rounded-full px-6 py-3 mb-6">
            <BarChart3 className="h-5 w-5 text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-400">DASHBOARD DEMO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Veja como é fácil <span className="text-gradient">controlar tudo</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Dashboard intuitivo com todas as informações importantes do seu negócio em um só lugar.
          </p>
        </div>
        
        {/* Demo Container */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-slate-700">
            <div className="flex space-x-1 p-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="p-8">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-${metric.color}-500/10 rounded-lg`}>
                      <div className={`text-${metric.color}-500`}>
                        {metric.icon}
                      </div>
                    </div>
                    <span className={`text-sm font-semibold text-${metric.color}-500`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-slate-400 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
            
            {/* Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Faturamento por Serviço</h3>
                  <PieChart className="h-5 w-5 text-indigo-400" />
                </div>
                <div className="space-y-4">
                  {['Corte de Cabelo', 'Barba', 'Massagem', 'Estética Facial', 'Outros'].map((service, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-slate-300">{service}</span>
                      <div className="flex items-center space-x-4">
                        <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                            style={{ width: `${[45, 25, 15, 10, 5][idx]}%` }}
                          ></div>
                        </div>
                        <span className="text-slate-400 text-sm">{[45, 25, 15, 10, 5][idx]}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Agendamentos por Dia</h3>
                  <Calendar className="h-5 w-5 text-violet-400" />
                </div>
                <div className="flex items-end justify-between h-40">
                  {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div 
                        className="w-10 bg-gradient-to-t from-indigo-500 to-violet-500 rounded-t-lg"
                        style={{ height: `${[60, 80, 45, 90, 75, 50][idx]}%` }}
                      ></div>
                      <span className="mt-2 text-sm text-slate-400">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="mt-8 bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Atividade Recente</h3>
              <div className="space-y-4">
                {[
                  { time: '10:30', action: 'Novo agendamento - Corte Masculino', client: 'João Silva' },
                  { time: '09:15', action: 'Pagamento confirmado', client: 'Maria Santos' },
                  { time: '08:45', action: 'Avaliação 5 estrelas recebida', client: 'Carlos Oliveira' },
                  { time: 'Ontem', action: 'Novo cliente cadastrado', client: 'Ana Rodrigues' }
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 hover:bg-slate-800/30 rounded-lg transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                      <div>
                        <div className="text-white">{activity.action}</div>
                        <div className="text-sm text-slate-400">{activity.client}</div>
                      </div>
                    </div>
                    <span className="text-sm text-slate-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">
            Este é apenas um exemplo. Seu dashboard será personalizado para o seu negócio.
          </p>
          <a href="#cta" className="btn-primary inline-flex items-center">
            Experimente o Dashboard Completo
          </a>
        </div>
      </div>
    </section>
  )
}

export default DashboardDemo