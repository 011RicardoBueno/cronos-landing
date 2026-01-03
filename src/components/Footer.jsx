import { Workflow, Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const menuSections = [
    {
      title: "Produto",
      links: [
        { label: "Funcionalidades", href: "#features" },
        { label: "Para Donos", href: "#owners" },
        { label: "Para Clientes", href: "#clients" },
        { label: "Dashboard", href: "#dashboard" },
        { label: "Preços", href: "#pricing" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre Nós", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Carreiras", href: "#" },
        { label: "Contato", href: "#" },
        { label: "Imprensa", href: "#" }
      ]
    },
    {
      title: "Recursos",
      links: [
        { label: "Centro de Ajuda", href: "#" },
        { label: "Documentação", href: "#" },
        { label: "API", href: "#" },
        { label: "Status", href: "#" },
        { label: "LGPD", href: "#" }
      ]
    }
  ]
  
  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" }
  ]
  
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-lg">
                <Workflow className="h-8 w-8 text-indigo-400" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Fluxo
                </span>
                <p className="text-sm text-slate-400">Gestão Inteligente para Serviços</p>
              </div>
            </div>
            
            <p className="text-slate-400 mb-8 max-w-md">
              A plataforma completa para gerenciar seu negócio de serviços. 
              Simplifique sua operação e foque no que realmente importa: seus clientes.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                        className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Menu Links */}
          {menuSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href}
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span>contato@fluxoapp.com</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 text-indigo-400 mt-1" />
                <span>São Paulo, SP<br />Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-slate-800 my-12"></div>
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-500 text-sm mb-4 md:mb-0">
            © {currentYear} Fluxo. Todos os direitos reservados.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Cookies
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Configurações
            </a>
          </div>
        </div>
        
        {/* Made in Brazil */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-slate-600 text-sm">
            <span>🇧🇷</span>
            <span>Feito com ❤️ no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer