import React from 'react';
import Image from 'next/image';
import IconText from '../Cards/IconText';
import TitleHeadingParagraphBtn from '../Cards/TitleHeadingParagraphBtn';
import { GrSend } from 'react-icons/gr';
import { LiaAwardSolid } from 'react-icons/lia';

// Custom SVG Icons
const AwardIcon = () => (
  <LiaAwardSolid className="w-full h-full text-primary" />
);
const SendIcon = () => <GrSend className="w-full h-full text-primary" />;

const AboutSection: React.FC = () => {
  return (
    <section className="bg-secondary pt-40 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/Home%20Section/t9qf8gmz6nemvulrip48"
                alt="Professional architect working with building models"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <IconText
                icon={<AwardIcon />}
                topText="5"
                bottomText="Years of Experience"
                iconSize="lg"
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
              />
              <IconText
                icon={<SendIcon />}
                topText="100 +"
                bottomText="Projects completed"
                iconSize="lg"
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <TitleHeadingParagraphBtn
              title="About Us"
              heading="Powering Possibilities Through Technology"
              paragraph="Enovate Resources Ltd, founded in 2020, is an IT firm driven by a passion for delivering innovative and exceptional solutions."
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

export default AboutSection;
