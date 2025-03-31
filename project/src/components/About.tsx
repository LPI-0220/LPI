import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80" 
                alt="Renovated home" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Linear Prism Investments, LLC</h2>
            <p className="text-lg text-gray-600 mb-6">
              Amidst a growing housing affordability crisis in metro Atlanta, our company was founded with
              a clear and compassionate mission: to address the pressing need for quality, affordable homes. The
              founder recognized the challenges many aspiring homeowners faced in a market where skyrocketing
              prices and limited options created significant barriers to ownership.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Rather than building new homes, he identified an innovative solution—renovating existing inventory to provide affordable, high-quality housing options. From the outset, his vision has been to create an alternative path to homeownership, empowering individuals and families to achieve stability and equity without compromising on quality or accessibility.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Since our founding, we've been dedicated to revitalizing communities by transforming underutilized properties into inviting, functional homes. Each renovation reflects our commitment to craftsmanship, affordability, and long-term value, making homeownership a reality for those who may have otherwise been priced out of the market.
            </p>
            <p className="text-lg text-gray-600">
              With this unique approach and steadfast mission, Linear Prism Investments, LLC has become a trusted partner in metro Atlanta's housing market, offering solutions that prioritize both economic accessibility and community well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;