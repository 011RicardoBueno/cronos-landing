import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  // Debounce function for performance
  const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
  
  // Show button when scroll > 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  
  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  useEffect(() => {
    const debouncedToggle = debounce(toggleVisibility, 100)
    window.addEventListener('scroll', debouncedToggle)
    return () => {
      window.removeEventListener('scroll', debouncedToggle)
    }
  }, [])
  
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-110 group scroll-top-enter"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  )
}

export default ScrollToTop