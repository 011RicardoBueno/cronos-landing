import { useState } from 'react'
import { BarChart3, TrendingUp, Users, DollarSign, Calendar, PieChart, CreditCard, FileText, TrendingDown, Wallet } from 'lucide-react'

const DashboardDemo = () => {
  const [activeTab, setActiveTab] = useState('overview')
  
  const metrics = {
    overview: [
      { label: "Faturamento Mensal", value: "R$ 24.580", change: "+12%", icon: <DollarSign />, color: "emerald" },
      { label: "Agendamentos", value: "342", change: "+8%", icon: <Calendar />, color: "indigo" },
      { label: "Novos Clientes", value: "89", change: "+15%", icon: <Users />, color: "violet" },
      { label: "Satisfação", value: "96%", change: "+5%", icon: <TrendingUp />, color: "amber" }
    ],
    finance: [
      { label: "Receita Total", value: "R$ 18.450", change: "+14%", icon: <Wallet />, color: "emerald" },
      { label: "Despesas", value: "R$ 6.230", change: "-3%", icon: <TrendingDown />, color: "rose" },
      { label: "Lucro Líquido", value: "R$ 12.220", change: "+22%", icon: <DollarSign />, color: "green" },
      { label: "Ticket Médio", value: "R$ 72", change: "+5%", icon: <CreditCard />, color: "blue" }
    ],
    clients: [
      { label: "Clientes Ativos", value: "1.234", change: "+8%", icon: <Users />, color: "indigo" },
      { label: "Novos/Mês", value: "89", change: "+15%", icon: <TrendingUp />, color: "emerald" },
      { label: "Retenção", value: "78%", change: "+4%", icon: <PieChart />, color: "amber" },
      { label: "NPS", value: "62", change: "+8", icon: <BarChart3 />, color: "violet" }
    ],
    team: [
      { label: "Produtividade", value: "92%", change: "+5%", icon: <TrendingUp />, color: "emerald" },
      { label: "Horas Trabalhadas", value: "640h", change: "+12%", icon: <Calendar />, color: "blue" },
      { label: "Serviços/Profissional", value: "85", change: "+7%", icon: <Users />, color: "violet" },
      { label: "Satisfação", value: "4.8", change: "+0.2", icon: <BarChart3 />, color: "amber" }
    ]
  }
  
  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: <BarChart3 size={18} /> },
    { id: 'finance', label: 'Financeiro', icon: <DollarSign size={18} /> },
    { id: 'clients', label: 'Clientes', icon: <Users size={18} /> },
    { id: 'team', label: 'Equipe', icon: <Users size={18} /> }
  ]
  
  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <>
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
            
            <div className="mt-8 bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Atividade Recente</h3>
              <div className="space-y-4">
                {[
                  { time: '10:30', action: 'Novo agendamento - Corte Masculino', client: 'João Silva', status: 'success' },
                  { time: '09:15', action: 'Pagamento confirmado', client: 'Maria Santos', status: 'success' },
                  { time: '08:45', action: 'Avaliação 5 estrelas recebida', client: 'Carlos Oliveira', status: 'success' },
                  { time: 'Ontem', action: 'Novo cliente cadastrado', client: 'Ana Rodrigues', status: 'success' }
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 hover:bg-slate-800/30 rounded-lg transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`h-2 w-2 rounded-full ${activity.status === 'success' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
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
          </>
        )
        
      case 'finance':
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Fluxo de Caixa</h3>
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="space-y-6">
                  {[
                    { label: 'Receita de Serviços', value: 'R$ 18.450', percentage: 85 },
                    { label: 'Venda de Produtos', value: 'R$ 3.420', percentage: 15 },
                    { label: 'Despesas Operacionais', value: 'R$ 4.210', percentage: 19, type: 'expense' },
                    { label: 'Folha de Pagamento', value: 'R$ 2.020', percentage: 9, type: 'expense' }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">{item.label}</span>
                        <span className={`font-medium ${item.type === 'expense' ? 'text-rose-400' : 'text-emerald-400'}`}>
                          {item.value}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${item.type === 'expense' ? 'bg-rose-500' : 'bg-emerald-500'}`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Métodos de Pagamento</h3>
                  <CreditCard className="h-5 w-5 text-violet-400" />
                </div>
                <div className="space-y-4">
                  {[
                    { method: 'Cartão de Crédito', percentage: 45, color: 'from-blue-500 to-cyan-500' },
                    { method: 'Cartão de Débito', percentage: 25, color: 'from-green-500 to-emerald-500' },
                    { method: 'PIX', percentage: 20, color: 'from-violet-500 to-purple-500' },
                    { method: 'Dinheiro', percentage: 10, color: 'from-amber-500 to-yellow-500' }
                  ].map((payment, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-slate-300">{payment.method}</span>
                      <div className="flex items-center space-x-4">
                        <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${payment.color} rounded-full`}
                            style={{ width: `${payment.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-slate-400 text-sm w-10 text-right">{payment.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Próximas Contas a Pagar</h3>
              <div className="space-y-4">
                {[
                  { description: 'Aluguel do Espaço', dueDate: '05/01', amount: 'R$ 3.200', status: 'pending' },
                  { description: 'Fornecedor de Produtos', dueDate: '10/01', amount: 'R$ 1.850', status: 'pending' },
                  { description: 'Energia Elétrica', dueDate: '15/01', amount: 'R$ 420', status: 'pending' },
                  { description: 'Internet', dueDate: '20/01', amount: 'R$ 189', status: 'paid' }
                ].map((bill, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 hover:bg-slate-800/30 rounded-lg transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`h-2 w-2 rounded-full ${bill.status === 'paid' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                      <div>
                        <div className="text-white">{bill.description}</div>
                        <div className="text-sm text-slate-400">Vence em {bill.dueDate}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-white font-medium">{bill.amount}</span>
                      <span className={`px-3 py-1 rounded-full text-xs ${bill.status === 'paid' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                        {bill.status === 'paid' ? 'Pago' : 'Pendente'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )
        
      case 'clients':
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Origem dos Clientes</h3>
                  <PieChart className="h-5 w-5 text-indigo-400" />
                </div>
                <div className="space-y-4">
                  {[
                    { source: 'Indicação', percentage: 40, color: 'from-indigo-500 to-violet-500' },
                    { source: 'Instagram', percentage: 25, color: 'from-rose-500 to-pink-500' },
                    { source: 'Google', percentage: 20, color: 'from-blue-500 to-cyan-500' },
                    { source: 'Walk-in', percentage: 10, color: 'from-emerald-500 to-teal-500' },
                    { source: 'Outros', percentage: 5, color: 'from-slate-500 to-gray-500' }
                  ].map((origin, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-slate-300">{origin.source}</span>
                      <div className="flex items-center space-x-4">
                        <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${origin.color} rounded-full`}
                            style={{ width: `${origin.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-slate-400 text-sm w-10 text-right">{origin.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Clientes por Faixa Etária</h3>
                  <Users className="h-5 w-5 text-violet-400" />
                </div>
                <div className="flex items-end justify-between h-40">
                  {[
                    { range: '18-25', value: 25, color: 'from-blue-500 to-cyan-500' },
                    { range: '26-35', value: 45, color: 'from-indigo-500 to-violet-500' },
                    { range: '36-45', value: 65, color: 'from-violet-500 to-purple-500' },
                    { range: '46-55', value: 40, color: 'from-purple-500 to-fuchsia-500' },
                    { range: '56+', value: 15, color: 'from-slate-500 to-gray-500' }
                  ].map((age, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div 
                        className={`w-10 bg-gradient-to-t ${age.color} rounded-t-lg`}
                        style={{ height: `${age.value}%` }}
                      ></div>
                      <span className="mt-2 text-sm text-slate-400">{age.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Clientes em Risco (60+ dias sem visitar)</h3>
              <div className="space-y-4">
                {[
                  { name: 'Roberto Santos', lastVisit: '85 dias', value: 'R$ 1.240', status: 'high' },
                  { name: 'Ana Cristina', lastVisit: '72 dias', value: 'R$ 890', status: 'medium' },
                  { name: 'Carlos Mendes', lastVisit: '68 dias', value: 'R$ 1.520', status: 'high' },
                  { name: 'Fernanda Lima', lastVisit: '62 dias', value: 'R$ 650', status: 'low' }
                ].map((client, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 hover:bg-slate-800/30 rounded-lg transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`h-2 w-2 rounded-full ${
                        client.status === 'high' ? 'bg-rose-500' : 
                        client.status === 'medium' ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}></div>
                      <div>
                        <div className="text-white">{client.name}</div>
                        <div className="text-sm text-slate-400">Última visita: {client.lastVisit}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-white font-medium">{client.value}</span>
                      <button className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-lg text-sm hover:bg-indigo-500/30 transition-colors">
                        Reengajar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )
        
      case 'team':
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Desempenho por Profissional</h3>
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'João Silva', services: 42, revenue: 'R$ 3.150', rating: 4.9 },
                    { name: 'Maria Santos', services: 38, revenue: 'R$ 2.890', rating: 4.8 },
                    { name: 'Carlos Oliveira', services: 35, revenue: 'R$ 2.450', rating: 4.7 },
                    { name: 'Ana Rodrigues', services: 28, revenue: 'R$ 1.950', rating: 4.9 }
                  ].map((professional, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 hover:bg-slate-800/30 rounded-lg transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold">
                          {professional.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-white font-medium">{professional.name}</div>
                          <div className="text-sm text-slate-400">{professional.services} serviços</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold">{professional.revenue}</div>
                        <div className="text-sm text-amber-400">⭐ {professional.rating}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Horários Mais Produtivos</h3>
                  <Calendar className="h-5 w-5 text-violet-400" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { time: '9:00-10:00', occupancy: '85%', color: 'from-emerald-500 to-teal-500' },
                    { time: '10:00-11:00', occupancy: '92%', color: 'from-emerald-500 to-teal-500' },
                    { time: '11:00-12:00', occupancy: '78%', color: 'from-amber-500 to-yellow-500' },
                    { time: '12:00-13:00', occupancy: '45%', color: 'from-rose-500 to-pink-500' },
                    { time: '13:00-14:00', occupancy: '65%', color: 'from-amber-500 to-yellow-500' },
                    { time: '14:00-15:00', occupancy: '88%', color: 'from-emerald-500 to-teal-500' },
                    { time: '15:00-16:00', occupancy: '95%', color: 'from-emerald-500 to-teal-500' },
                    { time: '16:00-17:00', occupancy: '82%', color: 'from-emerald-500 to-teal-500' }
                  ].map((slot, idx) => (
                    <div key={idx} className="p-3 bg-slate-800/50 rounded-lg">
                      <div className="text-slate-300 text-sm mb-1">{slot.time}</div>
                      <div className="flex items-center justify-between">
                        <div className="text-white font-medium">{slot.occupancy}</div>
                        <div className="h-2 w-12 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${slot.color} rounded-full`}
                            style={{ width: slot.occupancy }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Próximos Treinamentos</h3>
              <div className="space-y-4">
                {[
                  { topic: 'Novas Técnicas de Corte', date: '15/01', duration: '2h', participants: 4 },
                  { topic: 'Vendas de Produtos', date: '20/01', duration: '3h', participants: 5 },
                  { topic: 'Atendimento ao Cliente', date: '25/01', duration: '2h', participants: 6 },
                  { topic: 'Gestão de Tempo', date: '30/01', duration: '4h', participants: 4 }
                ].map((training, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 hover:bg-slate-800/30 rounded-lg transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-indigo-500/20 rounded-lg">
                        <Calendar className="h-5 w-5 text-indigo-400" />
                      </div>
                      <div>
                        <div className="text-white">{training.topic}</div>
                        <div className="text-sm text-slate-400">{training.date} • {training.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-slate-300">{training.participants} participantes</span>
                      <button className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm hover:bg-emerald-500/30 transition-colors">
                        Confirmar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )
        
      default:
        return null
    }
  }
  
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
          <div className="border-b border-slate-700 bg-slate-800/50">
            <div className="flex flex-wrap gap-1 p-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="p-6 md:p-8">
            {/* Metrics Grid - Dinâmica por tab */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
              {metrics[activeTab]?.map((metric, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 md:p-6 hover:border-slate-600 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 md:p-3 bg-${metric.color}-500/10 rounded-lg`}>
                      <div className={`text-${metric.color}-500`}>
                        {metric.icon}
                      </div>
                    </div>
                    <span className={`text-sm font-semibold ${metric.change.startsWith('+') || metric.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{metric.value}</div>
                  <div className="text-slate-400 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
            
            {/* Conteúdo dinâmico por tab */}
            <div className="mt-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">
            Este é apenas um exemplo. Seu dashboard será personalizado para o seu negócio.
          </p>
                <a href="https://cronos-ruby.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center">
            Experimente o Dashboard Completo
          </a>
        </div>
      </div>
    </section>
  )
}

export default DashboardDemo