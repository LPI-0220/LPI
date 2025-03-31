import React from 'react';
import { Home, Hammer, TrendingUp, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: "Affordable Housing",
      description: "We transform existing properties into quality, affordable homes, making homeownership accessible for Atlanta families."
    },
    {
      icon: <Hammer className="h-12 w-12 text-blue-600" />,
      title: "Property Renovation",
      description: "Our expert team renovates underutilized properties with a focus on quality craftsmanship and modern amenities."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Homeownership Pathways",
      description: "We create alternative paths to homeownership, helping families build equity and financial stability."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Community Revitalization",
      description: "Our projects contribute to neighborhood revitalization, strengthening communities throughout metro Atlanta."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Linear Prism Investments is committed to addressing Atlanta's housing affordability crisis through innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;