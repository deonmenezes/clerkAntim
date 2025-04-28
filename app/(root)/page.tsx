import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import Collections from "@/components/Collections"
import ProductList from "@/components/ProductList"
import ServicesSection from "@/components/ServicesSection"
import ClientsSection from "@/components/clients-section"
import ContactCTA from "@/components/contact-cta"
import { getCollections } from "@/lib/actions/actions"

export default async function Home() {
  const collections = await getCollections()

  return (
    <main>
      <Hero />
      <AboutSection />
      <Collections collections={collections} />
      <ProductList />
      <ServicesSection />
      <ClientsSection />
      <ContactCTA />
    </main>
  )
}

