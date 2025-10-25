import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { contactInfo } from '../data/yogaData';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(contactInfo.whatsappMessage);
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Classes', id: 'classes' },
    { name: 'Instructors', id: 'instructors' },
    { name: 'Schedule', id: 'schedule' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePhoneClick}
              className="flex items-center gap-2 hover:text-teal-100 transition-colors"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">{contactInfo.phone}</span>
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 hover:text-teal-100 transition-colors"
            >
              <MessageCircle size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
          </div>
          <div className="text-xs sm:text-sm">
            <span className="hidden md:inline">Open daily: 6:00 AM - 9:00 PM</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
              Y
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-bold text-gray-800">Yoga Academy</span>
              <span className="text-xs text-gray-500 hidden xs:block">Find Your Balance</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-medium transition-colors relative group ${
                  currentPage === item.id
                    ? 'text-teal-600'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-teal-600 transition-transform origin-left ${
                  currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left font-medium transition-colors px-4 py-2 rounded-lg ${
                    currentPage === item.id
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
