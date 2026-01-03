import { Workflow, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-950 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Workflow className="h-6 w-6 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">Fluxo</span>
            </div>
            <p className="text-gray-400">A plataforma completa para gestão de barbearias e salões.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Produto</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-indigo-500">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-indigo-500">Preços</a></li>
              <li><a href="#" className="hover:text-indigo-500">Atualizações</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-indigo-500">Sobre</a></li>
              <li><a href="#" className="hover:text-indigo-500">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-500">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-500"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-500"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-500"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Fluxo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer