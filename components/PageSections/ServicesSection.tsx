'use client';
import React from 'react';
import {
  FiSettings,
  FiVideo,
  FiSun,
  FiDatabase,
  FiLayers,
  FiLock,
  FiBookOpen,
} from 'react-icons/fi';
import TitleBox from '../Cards/TitleBox';
import ServiceCard from '../Cards/ServiceCard';

interface ServicesSectionProps {
  limit?: number;
  showTitle?: boolean;
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  limit,
  showTitle = true,
  className = '',
}) => {
  const allServices = [
    {
      icon: <FiSettings size={40} />,
      header: 'Project Management',
      paragraph:
        'We ensure timely, budget-friendly project delivery with full accountability.',
    },
    {
      icon: <FiVideo size={40} />,
      header: 'CCTV Maintenance',
      paragraph:
        'Our team provide reliable CCTV maintenance to keep your security systems running smoothly.',
    },
    {
      icon: <FiSun size={40} />,
      header: 'Solar backup system',
      paragraph:
        'We design and implement backup power systems for businesses of all sizes, serving both private and public sectors.',
    },
    {
      icon: <FiDatabase size={40} />,
      header: 'IT Infrastructure',
      paragraph:
        "We assess clients' needs on-site to deliver tailored, effective solutions.",
    },
    {
      icon: <FiLayers size={40} />,
      header: 'Technical Procurement',
      paragraph:
        'We source from licensed suppliers, fulfill client specs, and deliver quality products with expert guidance.',
    },
    {
      icon: <FiLock size={40} />,
      header: 'Access Control',
      paragraph:
        'Our tech team delivers cost-effective access control with integrated emergency management for workplace safety.',
    },
    {
      icon: <FiBookOpen size={40} />,
      header: 'Training',
      paragraph:
        'We training our team and clients with top-notch tech and OEM support for excellence in service delivery.',
    },
  ];

  // Use limit if provided, otherwise show all services
  const services = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Title Section */}
        {showTitle && (
          <TitleBox
            title="Our Services"
            header="What we do"
            className="mb-12 md:mb-16"
          />
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 px-16 md:px-0">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              header={service.header}
              paragraph={service.paragraph}
              onClick={() => console.log(`Clicked on ${service.header}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
