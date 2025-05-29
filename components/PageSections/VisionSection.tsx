'use client';
import React from 'react';
import { FiEye, FiTarget, FiHeart } from 'react-icons/fi';
import VisionCard from '../Cards/VisionCard';

interface VisionSectionProps {
  limit?: number;
  showTitle?: boolean;
  className?: string;
}

const VisionSection: React.FC<VisionSectionProps> = ({
  limit,
  showTitle = true,
  className = '',
}) => {
  const visionStatements = [
    {
      icon: <FiEye size={40} />,
      header: 'Our Vision',
      paragraph:
        "Becoming Africa's most leading company in IT infrastructure and solution development across all sectors.",
    },
    {
      icon: <FiTarget size={40} />,
      header: 'Our Mission',
      paragraph:
        'To engineer the quality and management of information technology infrastructural system in all unit.',
    },
    {
      icon: <FiHeart size={40} />,
      header: 'Our Values',
      paragraph:
        'Enovate Resource Ltd is guided by its core value system: PRIMAC, which stands for Professionalism, Reliability, Accountability, Flexibility, Accuracy, and Competence.',
    },
  ];

  // Use limit if provided, otherwise show all services
  const services = limit ? visionStatements.slice(0, limit) : visionStatements;

  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 px-8 md:px-0">
          {services.map((service, index) => (
            <VisionCard
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

export default VisionSection;
