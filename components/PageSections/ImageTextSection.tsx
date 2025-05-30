import React from 'react';
import Image from 'next/image';
import TitleHeadingParagraphBtn from '../Cards/TitleHeadingParagraphBtn';

const ImageTextSection: React.FC = () => {
  return (
    <section className="bg-secondary pt-40 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/Home%20Section/w2t0iumqvy31t0xpwskl"
                alt="Professional architect working with building models"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <TitleHeadingParagraphBtn
              title="Our Services"
              heading="Why Choose Us"
              paragraph="Our approach is simple, understand your goals, craft tailored strategies, and execute with precision. Backed by a passionate team and a solid value system, we don’t just solve problems, we empower your growth, enhance your operations, and help you stay ahead in a fast-changing digital world."
              buttonText="CONTACT US"
              buttonHref="/contact"
              buttonVariant="primary"
              alignment="left"
              textColor="white"
              className="text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
