import ContactForm from '@/components/ContactForm/ContactForm';
import HeroBox from '@/components/Hero/HeroBox';
import ContactSection from '@/components/PageSections/ContactSection';

export default function ContactPage() {
  return (
    <div>
      <HeroBox
        backgroundImage="https://res.cloudinary.com/dzd51q99i/image/upload/f_auto,q_auto/v1/enoreso.com/s7fv0odjy0idallqicx5"
        title="Contact Us"
        overlayOpacity={0.7}
        height="h-80 md:h-96"
      />
      <ContactSection />
      <ContactForm />
    </div>
  );
}
