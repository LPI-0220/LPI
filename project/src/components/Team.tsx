import React from 'react';
import { Linkedin, Mail, Instagram, Facebook } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary behind Linear Prism Investments who is committed to making homeownership accessible in Atlanta.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="h-[32rem] md:h-full relative">
                  <img 
                    src="https://i.imgur.com/HupvLfP.jpg" 
                    alt="James Marrisette" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">James Marrisette</h3>
                <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>
                <p className="text-lg text-gray-600 mb-6">
                  With a vision for affordable housing and community revitalization, James founded Linear Prism Investments to create pathways to homeownership for Atlanta families. His extensive experience in real estate and deep understanding of the local market allows him to identify opportunities to make a meaningful impact on the community.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  James combines smart business practices with a genuine commitment to community development. Under his leadership, Linear Prism Investments has helped dozens of families achieve homeownership while contributing to the revitalization of Atlanta Metropolitan neighborhoods.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Passionate about creating pathways to financial stability through homeownership, James believes that quality housing should be accessible to everyone, regardless of their economic background.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/company/linear-prism-investments/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-600 transition duration-300"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/people/Linear-Prism-Investments/61572481320612/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-600 transition duration-300"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/linearprisminvestments/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-600 transition duration-300"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="mailto:info@linearprisminvestments.com" 
                    className="text-gray-400 hover:text-blue-600 transition duration-300"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;