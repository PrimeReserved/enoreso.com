import React from 'react';
import HeadingParagraphBulletsBtn from '../Cards/HeadingParagraphBulletsBtn';

interface TrustedClientsSectionProps {
  className?: string;
}

const TrustedClientsSection: React.FC<TrustedClientsSectionProps> = ({
  className = '',
}) => {
  const clientList = [
    'Rivers State Government (Ministry of Justice)',
    'Nigeria Liquefier Natural Gas (NLNG)',
    'Niger Delta Petroleum Resources (NDPR)',
    'Walter Smith Refinery',
    'Nigeria National Petroleum Corporation (NNPC)',
    'Bouygues Company Nigeria Ltd (BCNL)',
    'Guaranteed Trust Bank Plc (GTB)',
    'Access Bank Plc',
    'Polaris',
    'IPNX',
  ];

  return (
    <div className={`${className}`}>
      <div className="grid lg:grid-cols-2">
        {/* Left Content Section */}
        <section className="bg-secondary py-16 md:py-20 lg:py-24 lg:order-1 px-8">
          <div className="container mx-auto px-4 lg:px-8">
            <HeadingParagraphBulletsBtn
              heading="Trusted by Clients to Power Innovation"
              paragraph="We collaborate with clients to deliver innovative and reliable IT solutions. Our clientele includes:"
              bullets={clientList}
              buttonText="CONTACT US"
              buttonHref="/contact"
              buttonVariant="primary"
              alignment="left"
              textColor="gray-900"
              className="bg-transparent"
            />
          </div>
        </section>

        {/* Right Content Section - Image and Quote */}
        <section className="bg-white lg:bg-secondary py-16 md:py-20 lg:py-24 lg:order-2 px-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden lg:overflow-hidden shadow-lg -mt-24 md:-mt-32 lg:mt-8">
                <img
                  src="https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/s7fv0odjy0idallqicx5"
                  alt="Professional working on computer"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>

              {/* Quote Card */}
              <div className="absolute -bottom-32 left-4 right-4 md:-bottom-32 lg:-bottom-32 lg:-left-60 lg:right-60">
                <div className="bg-white rounded p-8 md:p-10 lg:p-12 shadow-xl border-l-4 border-primary transform lg:translate-x-0">
                  <p className="text-gray-800 text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed">
                    Driven by passion and purpose, we turn ideas into impactful
                    solutions that empower businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrustedClientsSection;
