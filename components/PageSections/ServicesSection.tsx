'use client';
import React from 'react';
import {
  FiSettings,
  FiVideo,
  FiSun,
  FiShoppingCart,
  FiLock,
  FiBookOpen,
  FiWifi,
  FiZap,
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
      image:
        'https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/Services%20Section/nzib9wpp97mzfkxycaq9',
      icon: <FiSun size={24} />,
      header: 'Solar Backup System',
      paragraph:
        'We design and implement backup power systems for businesses of all sizes, serving both private and public sectors.',
      expandedContent:
        "Our comprehensive solar backup solutions include system design, installation, and maintenance. We provide custom-engineered systems that ensure uninterrupted power supply during outages. Our team handles everything from initial site assessment to ongoing monitoring and support. We use high-quality inverters, batteries, and solar panels that are built to last. Additionally, we offer remote monitoring capabilities so you can track your system's performance in real-time.",
    },
    {
      image:
        'https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/Services%20Section/emanul9qo9bpnj4byzqs',
      icon: <FiVideo size={24} />,
      header: 'CCTV Maintenance',
      paragraph:
        'Our team provide reliable CCTV maintenance to keep your security systems running smoothly.',
      expandedContent:
        'We offer comprehensive CCTV maintenance services including regular system health checks, camera cleaning and calibration, DVR/NVR updates, and 24/7 monitoring support. Our certified technicians perform preventive maintenance to identify potential issues before they become problems. We also provide emergency repair services and system upgrades to ensure your security infrastructure remains cutting-edge and reliable.',
    },
    {
      image:
        'https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/Services%20Section/jrbmdzd9kivlibkfgosp',
      icon: <FiSettings size={24} />,
      header: 'Project Management',
      paragraph:
        'We ensure timely, budget-friendly project delivery with full accountability.',
      expandedContent:
        'Our project management approach combines industry best practices with cutting-edge tools to deliver exceptional results. We assign dedicated project managers who oversee every aspect from planning to execution. Our methodology includes risk assessment, resource allocation, timeline management, and quality assurance. We provide regular progress reports and maintain transparent communication throughout the project lifecycle to ensure stakeholder satisfaction.',
    },
    {
      image:
        'https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/Services%20Section/axfrodwvh4l29agvjwdx',
      icon: <FiShoppingCart size={24} />,
      header: 'Technical Procurement',
      paragraph:
        'We source from licensed suppliers, fulfill client specs, and deliver quality products with expert guidance.',
      expandedContent:
        'Our procurement team has established relationships with leading technology vendors worldwide. We handle everything from vendor selection and price negotiation to quality assurance and logistics. Our experts evaluate products based on technical specifications, cost-effectiveness, and long-term reliability. We also provide post-purchase support including installation guidance, warranty management, and technical consultation.',
    },
    {
      image:
        'https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/Services%20Section/qjw9jc7xysd2yz6uhfay',
      icon: <FiLock size={24} />,
      header: 'Access Control',
      paragraph:
        'Our tech team delivers cost-effective access control with integrated emergency management for workplace safety.',
      expandedContent:
        'We design and implement sophisticated access control systems including biometric scanners, card readers, and mobile access solutions. Our systems integrate with fire safety and emergency protocols to ensure compliance with safety regulations. We provide user management software, audit trails, and real-time monitoring capabilities. Our solutions scale from small offices to large enterprise facilities with centralized management and reporting.',
    },
    {
      image:
        'https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/Services%20Section/tlb0ycdg7syrxwhzbmpp',
      icon: <FiBookOpen size={24} />,
      header: 'Training',
      paragraph:
        'We training our team and clients with top-notch tech and OEM support for excellence in service delivery.',
      expandedContent:
        'Our comprehensive training programs cover both technical skills and industry best practices. We offer hands-on workshops, certification programs, and ongoing professional development. Our curriculum includes the latest technologies, safety protocols, and industry standards. We also provide customized training solutions tailored to specific client needs and maintain partnerships with leading technology manufacturers for specialized certification programs.',
    },
    {
      image:
        'https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/Services%20Section/czjp18qrikhnwgqzh8cf',
      icon: <FiWifi size={24} />,
      header: 'Land Networking',
      paragraph:
        'We create reliable, efficient land use through verified listings and smart networking tools.',
      expandedContent:
        'Our land networking solutions include comprehensive site surveys, network infrastructure design, and implementation of robust communication systems. We specialize in creating reliable connections across challenging terrains using the latest wireless technologies, fiber optic cables, and satellite communications. Our team handles everything from initial site assessment to ongoing network monitoring and maintenance to ensure optimal performance.',
    },
    {
      image:
        'https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/Services%20Section/usi7bgsyvtggzcvd9a4b',
      icon: <FiZap size={24} />,
      header: 'Fibre Optics',
      paragraph:
        'We offer high-speed fiber optic solutions that ensure fast, reliable, and secure internet connectivity.',
      expandedContent:
        'Our fiber optic services encompass design, installation, and maintenance of high-speed networks. We use premium fiber optic cables and equipment to deliver exceptional speed and reliability. Our solutions include fiber-to-the-home (FTTH), fiber-to-the-building (FTTB), and enterprise fiber networks. We provide comprehensive testing, splicing, and troubleshooting services to ensure optimal network performance and minimal downtime.',
    },
  ];

  // Use limit if provided, otherwise show all services
  const services = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Title Section */}
        {showTitle && (
          <div className="animate-fade-in-up">
            <TitleBox
              title="Our Services"
              header="What we do"
              className="mb-12 md:mb-16"
            />
          </div>
        )}

        {/* Services Grid - Added extra spacing for overlapping icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-14 lg:gap-16 px-4 md:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in-up w-full"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both',
              }}
            >
              <ServiceCard
                image={service.image}
                icon={service.icon}
                header={service.header}
                paragraph={service.paragraph}
                expandedContent={service.expandedContent}
                onClick={() => console.log(`Clicked on ${service.header}`)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
