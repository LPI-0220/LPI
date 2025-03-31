import React from 'react';

const Properties = () => {
  const properties = [
    {
      image: "https://i.imgur.com/IpWLtOk.jpg",
      title: "Renovated Family Home",
      location: "West Cobb",
      price: "$350K",
      type: "Residential"
    },
    {
      image: "https://i.imgur.com/8iURSNZ.jpg",
      title: "Renovated Townhouse",
      location: "South Cobb",
      price: "$210K",
      type: "Residential"
    },
    {
      image: "https://i.imgur.com/O05p6o5.jpg",
      title: "Remodeled Family Home",
      location: "East Paulding",
      price: "$400K",
      type: "Residential"
    }
  ];

  return (
    <section id="properties" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our selection of quality, affordable homes recently sold in metro Atlanta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {property.type}
                  </span>
                  <span className="text-xl font-bold text-blue-600">{property.price}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <a 
                  href="#contact" 
                  className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded transition duration-300"
                >
                  Request Details
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default Properties;