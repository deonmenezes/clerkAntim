import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/heroimg2.jpg"
          alt="Industrial background"
          fill
          className="object-cover brightness-70"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-white text-black px-4 py-2 mb-6">
            <h2 className="text-lg font-semibold">Industrial Tools & Equipment</h2>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">ELEVATE YOUR WORK WITH OUR PREMIUM TOOLS</h1>

          <p className="text-lg mb-8">
          Smooth Technical Trading and Service LLC is a premier industrial trading company based in Abu Dhabi, UAE. We specialize in sourcing, supplying, and distributing high-quality mechanical and electrical products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/collections">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Discover More
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
