import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Linear Prism Investments helped my family achieve our dream of homeownership when we thought it was impossible in today's market. Their renovated home was affordable, beautiful, and in a great neighborhood.",
      name: "Michael Thompson",
      title: "Homeowner, West Cobb",
      image: "https://imgur.com/R9VmKWI.jpg"
    },
    {
      quote: "After renting for years, I never thought I could afford to buy in Atlanta. Linear Prism found and renovated a property that was within my budget and exceeded my expectations in quality and design.",
      name: "Sarah Johnson",
      title: "First-time Homeowner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    },
    {
      quote: "The team at Linear Prism truly cares about creating affordable housing solutions. They transformed neglected properties into beautiful homes that locals families can actually afford.",
      name: "Teresa Hardy",
      title: "Community Advocate",
      image: "https://i.imgur.com/aoLaEBj.jpg"
    },
    {
      quote: "James and his team at Linear Prism Investments are changing lives through their commitment to affordable housing. Their renovations are thoughtful, high-quality, and designed with families in mind.",
      name: "Lisa Rodriguez",
      title: "Housing Advocate",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hear from homeowners who have found their dream homes through Linear Prism Investments.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-blue-800 rounded-lg p-8 md:p-12">
              <p className="text-xl mb-8">{testimonials[currentIndex].quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover mr-4 mt-2"
                />
                <div>
                  <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-blue-300">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;