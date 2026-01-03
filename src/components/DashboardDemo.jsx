import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const DashboardDemo = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={ref} className="relative py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Controle Total na Palma da Mão</h2>
        <motion.div style={{ y }} className="relative mx-auto max-w-5xl">
          <div className="aspect-video bg-gray-800 rounded-xl border border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">
             <p className="text-gray-500 text-lg">Dashboard Interface Demo</p>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-xl blur opacity-20 -z-10"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default DashboardDemo