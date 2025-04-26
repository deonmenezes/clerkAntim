import ContactForm from "./contact-form"
import ContactInfo from "./contact-info"
import Map from "./map"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <ContactInfo />
          <div className="mt-8">
            <Map />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}