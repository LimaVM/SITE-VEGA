import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"
import TechnologiesSection from "@/components/technologies-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101010] relative overflow-hidden">

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechnologiesSection />
        <FaqSection />
        <Footer />
      </div>
    </main>
  )
}
