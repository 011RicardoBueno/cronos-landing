import { useState } from 'react'
import { Menu, X, Workflow } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  const navLinks = [
    { href: '#features', label: 'Funcionalidades' },
    { href: '#pricing', label: 'Preços' },
    { href: '#faq', label: 'FAQ' },
  ]

return (
    <header className="fixed w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Workflow className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-xl font-bold text-white">Fluxo</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4" onMouseLeave={() => setHoveredLink(null)}>
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  className="relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.label}
                  {hoveredLink === link.href && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"
                      layoutId="underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              ))}
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Começar Agora
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Funcionalidades</a>
            <a href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Preços</a>
            <a href="#faq" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
            <button className="w-full text-left bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium">
              Começar Agora
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header