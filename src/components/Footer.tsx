import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from 'figma:asset/9505e66f109403fc170fa331689fb2e80141f4a8.png';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="luxury-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <ImageWithFallback
                src={logoImage}
                alt="Canine Needs Logo"
                className="h-8 sm:h-10 w-auto"
              />
              <div className="ml-3">
                <h3 className="text-lg sm:text-xl font-bold">Canine Needs</h3>
                <p className="text-accent text-xs sm:text-sm">Professional Dog Training</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm sm:text-base max-w-md">
              Expert training and care, backed by accreditations and years of experience. 
              Everything we do is inspired by our love for dogs.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base">+44 7973 320 413</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">info@canineneeds.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base">United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Quick Links and Social */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-accent text-black rounded-full hover:bg-accent/80 transition-colors"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-accent text-black rounded-full hover:bg-accent/80 transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
            <div className="mt-4 sm:mt-6">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Quick Links</h4>
              <div className="space-y-1 sm:space-y-2 text-gray-300">
                <button 
                  onClick={() => onPageChange('training-services')}
                  className="block hover:text-accent cursor-pointer transition-colors text-left text-sm sm:text-base"
                >
                  Training Services
                </button>
                <button 
                  onClick={() => onPageChange('behaviour-consultation')}
                  className="block hover:text-accent cursor-pointer transition-colors text-left text-sm sm:text-base"
                >
                  Behaviour Consultation
                </button>
                <button 
                  onClick={() => onPageChange('shop')}
                  className="block hover:text-accent cursor-pointer transition-colors text-left text-sm sm:text-base"
                >
                  Shop
                </button>
                <button 
                  onClick={() => onPageChange('certificates')}
                  className="block hover:text-accent cursor-pointer transition-colors text-left text-sm sm:text-base"
                >
                  Certificates
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-300 text-xs sm:text-sm">
            © 2024 Canine Needs. All rights reserved. Founded in 2011 by Hannah Greeno.
          </p>
        </div>
      </div>
    </footer>
  );
}