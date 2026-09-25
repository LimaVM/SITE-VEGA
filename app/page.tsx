import Header from "@/components/header"
import SmoothScroll from "@/components/smooth-scroll"
import RackOpening from "@/components/rack-opening"
import CompanySection from "@/components/manifesto-section"
import ServicesSection from "@/components/services-section"
import InvisibleNetworkSection from "@/components/invisible-network-section"
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
        <CompanySection />
        <ServicesSection />
        <InvisibleNetworkSection />
        <SolutionsSection />
        <TechnologiesSection />
        <InstagramSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}
