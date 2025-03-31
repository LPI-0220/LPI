import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="min-h-[120vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-col md:flex-row items-center mb-12 bg-white/10 backdrop-blur-sm p-8 rounded-xl w-fit">
              <img 
                src="https://imgur.com/9O1yKS4.jpg" 
                alt="Linear Prism Investments Logo" 
                className="h-32 w-48 md:h-36 md:w-56"
              />
              <div className="md:ml-8 mt-4 md:mt-0 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Linear Prism Investments, LLC</h2>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Making Homeownership Accessible in Atlanta
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              Linear Prism Investments, LLC specializes in renovating existing properties into quality, affordable homes, creating pathways to homeownership for Atlanta families.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center text-lg"
              >
                Find Your Home
              </a>
              <a 
                href="#properties" 
                className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300 flex items-center justify-center text-lg"
              >
                View Properties <ChevronRight className="ml-2 h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;