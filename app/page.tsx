import BusinessHero from "@/components/business-hero"
import ContactSection from "@/components/contact-section"
import FeatureSection from "@/components/feature-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import LocationSection from "@/components/location-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header businessName="Business Center Name" />
      <main className="flex-1">
        <BusinessHero />
        <FeatureSection />
        <LocationSection
          address="123 Business Avenue, Business District"
          city="New York"
          state="NY"
          zipCode="10001"
          country="USA"
          mapUrl="https://maps.google.com/?q=New+York+NY"
        />
        <ContactSection
          phone="+1 (555) 123-4567"
          email="contact@businesscenter.com"
          hours="Monday - Friday: 9AM - 6PM"
        />
      </main>
      <Footer businessName="Business Center Name" />
    </div>
  )
}

