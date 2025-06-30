
import React from 'react';

const TrustedPartners = () => {
  const partners = [
    { name: "IIT Madras", logo: "IIT" },
    { name: "Pearson", logo: "PEARSON" },
    { name: "Microsoft", logo: "MICROSOFT" },
    { name: "Google", logo: "GOOGLE" },
    { name: "UNESCO", logo: "UNESCO" },
    { name: "Cambridge", logo: "CAMBRIDGE" }
  ];

  return (
    <section className="py-16 bg-white border-t border-b">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-gray-600">
            We partner with world-class institutions to deliver exceptional learning experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 hover-scale"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-gradient-to-br from-kiki-purple-100 to-kiki-blue-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-kiki-purple-700">
                    {partner.logo}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
