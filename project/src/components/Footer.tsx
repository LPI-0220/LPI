import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://imgur.com/9O1yKS4.jpg" 
                alt="Linear Prism Investments Logo" 
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-bold">Linear Prism Investments, LLC</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making quality, affordable homeownership accessible in metro Atlanta through innovative renovation solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/people/Linear-Prism-Investments/61572481320612/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/linearprisminvestments/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/linear-prism-investments/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#properties" className="text-gray-400 hover:text-white transition duration-300">Properties</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition duration-300">Our Founder</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Affordable Housing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Property Renovation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Homeownership Pathways</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Community Revitalization</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Linear Prism Investments, LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;