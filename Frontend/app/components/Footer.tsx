"use client";
import Image from 'next/image';
import Logo from '@/public/images/Raju-Rental-Logo.png'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
     <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-secondary p-2 rounded-lg">
              <Image 
             src={Logo}
             alt="Raju Rentals Logo"
             className="w-20 h-20 rounded-full" />
              </div>
              <div className='flex flex-col gap-2'>
                <div className="font-bold text-xl">Raju Rentals</div>
                <div className="text-xs text-white/70 -mt-1">Commercial Car Rental</div>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Your trusted partner for commercial vehicle rentals. 
              Providing reliable transportation solutions for businesses across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
              <a
  href="#home"
  className="text-white/70 hover:text-secondary transition-colors text-sm"
>
  Home
</a>

              </li>
              <li>
              <a
  href="#about"
  className="text-white/70 hover:text-secondary transition-colors text-sm"
>
  About Us
</a>

              </li>
              <li>
              <a
  href="#our vehicals"
  className="text-white/70 hover:text-secondary transition-colors text-sm"
>
  Our Vehicals
</a>

              </li>
              <li>
              <a
  href="#contact"
  className="text-white/70 hover:text-secondary transition-colors text-sm"
>
  Contact
</a>

              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Our Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Tempo Traveller Rental</li>
              <li>Mini Truck Rental</li>
              <li>Heavy Truck Rental</li>
              <li>Long-term Leasing</li>
              <li>Corporate Fleet Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+911234567890" className="text-white/70 hover:text-secondary transition-colors text-sm">
                    +91 123 456 7890
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@sharmarentals.com" className="text-white/70 hover:text-secondary transition-colors text-sm">
                    info@sharmarentals.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  New Delhi, India
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © {currentYear} Sharma Commercial Car Rental. All rights reserved.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer