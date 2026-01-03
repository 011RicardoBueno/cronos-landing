import Header from './components/Header'
import Hero from './components/Hero'
import BusinessSegments from './components/BusinessSegments'
import ForOwners from './components/ForOwners'
import ForClients from './components/ForClients'
import DashboardDemo from './components/DashboardDemo'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <BusinessSegments />
        <ForOwners />
        <ForClients />
        <DashboardDemo />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
