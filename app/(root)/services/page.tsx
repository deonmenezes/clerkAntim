import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Services | Smooth Technical Trading and Service LLC",
  description: "Explore our comprehensive range of industrial services tailored to meet client-specific demands.",
};

const servicesData = [
  {
    title: "Industrial Product Supply",
    description: "Reliable supply chain for a wide array of mechanical and electrical components. Partnership with top-tier manufacturers and distributors worldwide.",
    imageUrl: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Custom Sourcing & Procurement",
    description: "Specialized sourcing for hard-to-find industrial products. Procurement based on technical specifications, certifications, and project needs.",
    imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Inventory & Logistics Support",
    description: "Managed stock for ongoing projects and maintenance contracts. Local delivery and export coordination with documentation support.",
    imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Technical Consultation & Product Matching",
    description: "In-depth consultation to match product specifications with your project needs. Engineering support to ensure compatibility and performance.",
    imageUrl: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop",
  },
  {
    title: "Equipment Installation Assistance",
    description: "Guidance for on-site installation of complex machinery or industrial systems. Coordinating with installation experts as per client's site condition.",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Scheduled Deliveries & Fulfillment",
    description: "Project-based scheduling for seamless site delivery. Fulfillment planning to avoid site delays and reduce inventory burden.",
    imageUrl: "https://images.unsplash.com/photo-1573030889348-c6b0f8b15e40?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Vendor Consolidation & After-Sales Support",
    description: "Consolidated procurement from multiple vendors into a single window. Warranty management, replacements, and after-sales technical assistance.",
    imageUrl: "https://images.unsplash.com/photo-1560264357-8d9202250f21?q=80&w=1932&auto=format&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Smooth Technical Trading and Service LLC provides a broad range of industrial solutions tailored to 
          meet client-specific demands. Our services are built on quality, reliability, and efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <Card key={index} className="overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="h-48 relative">
              <Image 
                src={service.imageUrl} 
                alt={service.title} 
                fill 
                className="object-cover" 
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 p-8 bg-gray-50 rounded-xl shadow-inner">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Services?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With our technical expertise, global sourcing capabilities, and commitment to quality, 
            we ensure that your industrial needs are met with precision and reliability.
          </p>
        </div>
      </div>
    </div>
  );
}