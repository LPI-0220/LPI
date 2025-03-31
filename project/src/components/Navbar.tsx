import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Company name removed */}
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 font-medium`}>Home</a>
            <a href="#services" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 font-medium`}>Services</a>
            <a href="#properties" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 font-medium`}>Properties</a>
            <a href="#about" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 font-medium`}>About</a>
            <a href="#team" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 font-medium`}>Founder</a>
            <a href="#testimonials" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 font-medium`}>Testimonials</a>
            <a href="#contact" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 font-medium`}>Contact</a>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#properties" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Properties</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>About</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Founder</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;