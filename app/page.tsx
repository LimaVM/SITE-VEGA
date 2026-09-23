import Header from "@/components/header"
import SmoothScroll from "@/components/smooth-scroll"
import RackOpening from "@/components/rack-opening"
import ManifestoSection from "@/components/manifesto-section"
import AboutVegaSection from "@/components/about-vega-section"
import ServicesSection from "@/components/services-section"
import SystemsSection from "@/components/systems-section"
import SolutionsSection from "@/components/solutions-section"
import TechnologiesSection from "@/components/technologies-section"
import InstagramSection from "@/components/instagram-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main id="conteudo">
        <RackOpening />
        <ManifestoSection />
        <AboutVegaSection />
        <ServicesSection />
        <SystemsSection />
        <SolutionsSection />
        <TechnologiesSection />
        <InstagramSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}
