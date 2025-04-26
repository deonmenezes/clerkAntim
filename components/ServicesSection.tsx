import { Truck, Shield, Clock, Wrench } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Quality Equipment",
    description: "Premium industrial tools and equipment sourced from leading manufacturers"
  },
  {
    icon: Shield,
    title: "Certified Products",
    description: "All products meet international quality and safety standards"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Reliable delivery service across the UAE"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and customer service"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive industrial solutions backed by exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <service.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}