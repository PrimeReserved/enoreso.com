import CTAButton from '@/components/Buttons/CTAButton';
import HeroHome from '@/components/Hero/HeroHome';
import AboutSection from '@/components/PageSections/AboutSection';
import CallToActionSection from '@/components/PageSections/CallToActionSection';
import ServicesSection from '@/components/PageSections/ServicesSection';
import TrustedClientsSection from '@/components/PageSections/TrustedClientsSection';
import VisionSection from '@/components/PageSections/VisionSection';

export default function HomePage() {
  return (
    <main>
      <HeroHome
        backgroundImage="https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/emqhun8rnersi7iwfozm"
        heading="Powering Possibilities Through Technology"
        paragraph="At Enovate Resources Ltd, we don't follow trends we engineer the future of IT infrastructure."
        buttonText="CONTACT US"
        buttonHref="/contact"
        buttonVariant="primary"
      />
      <AboutSection />
      <ServicesSection limit={3} />
      <div className="flex items-center justify-center mt-12 pb-16">
        <CTAButton text="View More" href="/services" />
      </div>
      <TrustedClientsSection />
      <div id="about">
        <VisionSection />
      </div>
      <CallToActionSection backgroundImage="https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/Stock%20Photos/Home%20Section/ku96mjovwtfjkl9qtokh" />
    </main>
  );
}
