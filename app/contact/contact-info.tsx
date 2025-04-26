import { Building2, Mail, MapPin, Phone } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Building2 className="h-5 w-5 mt-1 text-green-600" />
          <div>
            <p className="font-semibold">Company Name</p>
            <p className="text-gray-600">Smooth Technical Trading and Service LLC</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 mt-1 text-green-600" />
          <div>
            <p className="font-semibold">Address</p>
            <p className="text-gray-600">
              Abu Dhabi, UAE
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 mt-1 text-green-600" />
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-gray-600">+971545417801</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 mt-1 text-green-600" />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-gray-600">exceltrdguae@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
