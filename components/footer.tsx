import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react"
import MemoryVerse from "@/components/memory-verse"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-secondary to-secondary/90 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/5 animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full border border-white/5 animate-rotate-slow"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              ACK St. Andrews
            </h3>
            <p className="mb-4 text-gray-300">
              Serving the community with faith, love, and compassion since 2015. Join us in worship and fellowship.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.youtube.com/@ACKSTANDREWSKIBABETCHOIRELDORE"
                className="hover:text-primary transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                //{ name: "Sermons", href: "/sermons" },
                { name: "Choir", href: "/choir" },
                { name: "Events", href: "/events" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Times</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Sunday School Service</p>
                  <p className="text-gray-300">8:00 AM - 10:00 AM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Main Service</p>
                  <p className="text-gray-300">10:30 AM - 13:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Bible Study</p>
                  <p className="text-gray-300">Wednesday, 5:30 PM - 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Kibabet, Eldoret City, Kenya</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+254 700 000000</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">info@ackstandrews.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Memory Verse */}
        <div className="mt-12 mb-8 p-4 glass border border-white/10 rounded-lg">
          <MemoryVerse variant="minimal" />
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ACK St. Andrews Kibabet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

