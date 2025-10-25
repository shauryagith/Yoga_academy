import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/yogaData';

export default function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(contactInfo.whatsappMessage);
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                Y
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Yoga Academy</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              Transform your life through the ancient practice of yoga. Join our community and discover inner peace, strength, and balance.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Classes</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Schedule</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 flex-shrink-0 text-teal-400" />
                <span>{contactInfo.address}</span>
              </li>
              <li>
                <button
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 hover:text-teal-400 transition-colors"
                >
                  <Phone size={14} className="flex-shrink-0 text-teal-400" />
                  <span>{contactInfo.phone}</span>
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="flex-shrink-0 text-teal-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-teal-400 transition-colors break-all">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Stay Connected</h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">Get updates about new classes and wellness tips.</p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors text-xs sm:text-sm"
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
          
          <p className="mt-2 text-gray-500">
            {new Date().getFullYear()} Code Sarathi. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1 flex-wrap">
            Designed by @ Shreyash Srivastav
          </p>
        </div>
      </div>
    </footer>
  );
}
