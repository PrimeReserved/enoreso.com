import HeroBox from '@/components/Hero/HeroBox';
import CallToActionSection from '@/components/PageSections/CallToActionSection';
import ImageTextSection from '@/components/PageSections/ImageTextSection';
import ServicesSection from '@/components/PageSections/ServicesSection';
import React from 'react';

export default function ServicesPage() {
  return (
    <div>
      <HeroBox
        backgroundImage="https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/Services%20Section/r4engh7fuaizqmcgsfun"
        title="Services"
        overlayOpacity={0.7}
        height="h-80 md:h-96"
      />
      <ImageTextSection />
      <ServicesSection />
      <CallToActionSection backgroundImage="https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/Home%20Section/ku96mjovwtfjkl9qtokh" />
    </div>
  );
}
