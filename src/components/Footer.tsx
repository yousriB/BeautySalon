
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-playfair font-bold text-lg">S</span>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl">Serenity</h3>
                  <p className="text-sm text-gray-300 -mt-1">Beauty Salon</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Experience luxury and relaxation at Serenity Beauty Salon. Where beauty meets wellness in a serene atmosphere.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-playfair font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/portfolio" className="text-gray-300 hover:text-primary transition-colors">Portfolio</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/booking" className="text-gray-300 hover:text-primary transition-colors">Book Now</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-playfair font-semibold text-lg">Our Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">Hair Styling & Color</li>
                <li className="text-gray-300">Facial Treatments</li>
                <li className="text-gray-300">Nail Services</li>
                <li className="text-gray-300">Massage Therapy</li>
                <li className="text-gray-300">Bridal Packages</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-playfair font-semibold text-lg">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">123 Beauty Street<br />City, State 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">info@serenitysalon.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-6 text-center">
            <p className="text-gray-300">
              © 2024 Serenity Beauty Salon. All rights reserved. | 
              <span className="hover:text-primary cursor-pointer"> Privacy Policy</span> | 
              <span className="hover:text-primary cursor-pointer"> Terms of Service</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
