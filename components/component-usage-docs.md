// ===============================
// ENHANCED CTABUTTON USAGE EXAMPLES
// ===============================

import CTAButton from '@/components/Buttons/CTAButton';

// 1. Basic Primary Button (default)
<CTAButton 
  text="Get Started" 
  href="/contact" 
/>

// 2. Secondary Button
<CTAButton 
  text="Learn More" 
  href="/services" 
  variant="secondary"
/>

// 3. Outline Button
<CTAButton 
  text="View Portfolio" 
  href="/portfolio" 
  variant="outline"
/>

// 4. Custom Colors
<CTAButton 
  text="Custom Button" 
  href="/custom" 
  variant="custom"
  bgColor="#ff6b6b"
  textColor="white"
  hoverBgColor="#ff5252"
  hoverTextColor="white"
/>

// 5. Different Sizes
<CTAButton text="Small" href="/link" size="sm" />
<CTAButton text="Medium" href="/link" size="md" />
<CTAButton text="Large" href="/link" size="lg" />

// 6. Full Width Button
<CTAButton 
  text="Full Width Button" 
  href="/contact" 
  fullWidth={true}
/>

// 7. Disabled Button
<CTAButton 
  text="Disabled" 
  href="/nowhere" 
  disabled={true}
/>

// 8. With Custom Classes and Click Handler
<CTAButton
text="Advanced Button"
href="/advanced"
className="shadow-2xl border-4"
onClick={() => console.log('Button clicked!')}
/>

// ===============================
// HERO COMPONENT USAGE EXAMPLES
// ===============================

import Hero from '@/components/Hero/Hero';

// 1. Basic Hero for Homepage
<Hero
  backgroundImage="/images/hero-bg.jpg"
  heading="Innovative IT Solutions for Your Business"
  paragraph="We provide cutting-edge technology solutions that drive growth and efficiency for businesses of all sizes."
  buttonText="Get Started Today"
  buttonHref="/contact"
/>

// 2. Hero with Custom Overlay
<Hero
  backgroundImage="/images/tech-bg.jpg"
  overlayOpacity={0.8}
  overlayColor="navy"
  heading="Transform Your Digital Presence"
  paragraph="Expert web development, cloud solutions, and IT consulting services."
  buttonText="Explore Services"
  buttonHref="/services"
  buttonVariant="outline"
/>

// 3. Hero with Custom Height
<Hero
  backgroundImage="/images/office-bg.jpg"
  minHeight="min-h-[80vh]"
  heading="Your Technology Partner"
  paragraph="24/7 support and maintenance for all your IT needs."
  buttonText="Contact Us"
  buttonHref="/contact"
  buttonVariant="secondary"
/>

// ===============================
// HEROBOX COMPONENT USAGE EXAMPLES
// ===============================

// Usage Examples for the HeroBox Component

import HeroBox from './components/HeroBox';

// Example 1: Basic Services Page (like your screenshot)
function ServicesPage() {
return (
<div>
<HeroBox
        backgroundImage="/images/services-bg.jpg"
        title="Services"
        overlayOpacity={0.7}
        height="h-80 md:h-96 lg:h-[28rem]"
      />
{/_ Rest of your page content _/}
</div>
);
}

// Example 2: With Breadcrumb Navigation
function AboutPage() {
return (
<div>
<HeroBox
backgroundImage="/images/about-bg.jpg"
title="About Us"
showBreadcrumb={true}
breadcrumbItems={['Home', 'Company', 'About Us']}
overlayOpacity={0.6}
textSize="text-4xl"
/>
{/_ Rest of your page content _/}
</div>
);
}

// Example 3: Contact Page with Custom Styling
function ContactPage() {
return (
<div>
<HeroBox
backgroundImage="/images/contact-bg.jpg"
title="Contact Us"
overlayColor="rgb(30, 58, 138)" // Blue overlay
overlayOpacity={0.8}
height="h-72 md:h-80"
textSize="text-5xl"
className="border-b-4 border-blue-500"
/>
{/_ Rest of your page content _/}
</div>
);
}

// Example 4: Home Page Hero
function HomePage() {
return (
<div>
<HeroBox
backgroundImage="/images/hero-bg.jpg"
title="Innovative IT Solutions"
showBreadcrumb={true}
breadcrumbItems={['Home']}
overlayOpacity={0.5}
height="h-96 md:h-[32rem] lg:h-[36rem]"
textSize="text-6xl"
/>
{/_ Rest of your page content _/}
</div>
);
}

// Example 5: Portfolio/Projects Page
function ProjectsPage() {
return (
<div>
<HeroBox
backgroundImage="/images/projects-bg.jpg"
title="Our Projects"
showBreadcrumb={true}
breadcrumbItems={['Home', 'Portfolio', 'Projects']}
overlayColor="rgb(17, 24, 39)" // Dark gray overlay
overlayOpacity={0.75}
textSize="text-4xl"
/>
{/_ Rest of your page content _/}
</div>
);
}

// Props Reference:
// backgroundImage: string - URL to your background image
// title: string - Main heading text
// overlayOpacity?: number - Opacity of the overlay (0-1, default: 0.65)
// overlayColor?: string - Color of the overlay (default: 'black')
// height?: string - Tailwind height classes (default: 'h-72 md:h-80 lg:h-96')
// textSize?: 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl' - Title size (default: 'text-5xl')
// className?: string - Additional CSS classes
// showBreadcrumb?: boolean - Show breadcrumb navigation (default: false)
// breadcrumbItems?: string[] - Array of breadcrumb items

// ===============================
// COMPLETE PAGE EXAMPLES
// ===============================

// Homepage with Hero
export default function HomePage() {
return (

<main>
<Hero
        backgroundImage="/images/hero-home.jpg"
        heading="Leading IT Solutions Provider"
        paragraph="We deliver innovative technology solutions that empower businesses to thrive in the digital age. From web development to cloud infrastructure, we've got you covered."
        buttonText="Start Your Project"
        buttonHref="/contact"
      />
{/_ Other homepage content _/}
</main>
);
}

// Services Page with HeroBox
export default function ServicesPage() {
return (

<main>
<HeroBox
backgroundImage="/images/hero-services.jpg"
title="Our Services"
showBreadcrumb={true}
breadcrumbItems={['Home', 'Services']}
height="h-80 md:h-96"
/>
{/_ Services content _/}
</main>
);
}

// Contact Page with HeroBox
export default function ContactPage() {
return (

<main>
<HeroBox
backgroundImage="/images/hero-contact.jpg"
title="Get In Touch"
showBreadcrumb={true}
breadcrumbItems={['Home', 'Contact']}
textSize="text-4xl"
overlayOpacity={0.7}
/>
{/_ Contact form and content _/}
</main>
);
}

HeadingParagraphBtn Usage

Basic:
<HeadingParagraphBtn
  heading="Welcome to Our Platform"
  paragraph="Discover amazing features that will transform your workflow and boost productivity."
  buttonText="Get Started"
  buttonHref="/signup"
/>

With Custom Styling:
<HeadingParagraphBtn
  heading="Transform Your Business"
  paragraph="Join thousands of companies that have revolutionized their operations with our solutions."
  buttonText="Learn More"
  buttonHref="/solutions"
  buttonVariant="secondary"
  alignment="center"
  backgroundColor="rgba(59, 130, 246, 0.8)"
  backgroundOpacity={80}
  textColor="white"
  className="my-8"
/>

With Click Handler:
<HeadingParagraphBtn
heading="Ready to Start?"
paragraph="Take the first step towards success with our comprehensive platform."
buttonText="Contact Sales"
buttonHref="/contact"
onButtonClick={() => {
console.log('Button clicked!');
// Add analytics tracking, etc.
}}
alignment="right"
/>

Custom Background:
<HeadingParagraphBtn
  heading="Premium Features"
  paragraph="Unlock advanced capabilities designed for enterprise-level performance."
  buttonText="Upgrade Now"
  buttonHref="/pricing"
  buttonVariant="outline"
  backgroundColor="#1f2937"
  backgroundOpacity={90}
  textColor="gray-100"
  alignment="center"
  className="rounded-xl shadow-2xl"
/>

---

## HeroHome Component Usage

Desktop view usage:

<HeroHome
  backgroundImage="/path/to/your/hero-image.jpg"
  heading="Powering Possibilities Through Technology"
  paragraph="At Enovate Resources Ltd, we don't follow trends we engineer the future of IT infrastructure."
  buttonText="CONTACT US"
  buttonHref="/contact"
  buttonVariant="primary"
/>

---

## With Custom Styling:

<HeroHome
  backgroundImage="/images/tech-background.jpg"
  heading="Transform Your Business"
  paragraph="Leading innovation in technology solutions for the modern enterprise."
  buttonText="Get Started"
  buttonHref="/services"
  buttonVariant="secondary"
  overlayOpacity={0.8}
  overlayColor="navy"
  minHeight="min-h-[80vh]"
  className="mb-8"
/>

---

## For Different Sections:

<HeroHome
  backgroundImage="/images/tech-background.jpg"
  heading="Transform Your Business"
  paragraph="Leading innovation in technology solutions for the modern enterprise."
  buttonText="Get Started"
  buttonHref="/services"
  buttonVariant="secondary"
  overlayOpacity={0.8}
  overlayColor="navy"
  minHeight="min-h-[80vh]"
  className="mb-8"
/>

---

## TitleBox component usage

Basic usage:
<TitleBox 
  title="Our Services" 
  header="What we do" 
/>

advanced usage:
// Custom colors
<TitleBox 
  title="About Us" 
  header="Who we are" 
  titleColor="text-primaryOrange"
  headerColor="text-black"
/>

// Left aligned instead of centered
<TitleBox 
  title="Our Mission" 
  header="Delivering Excellence" 
  centered={false}
/>

// Without animations (for performance)
<TitleBox 
  title="Contact" 
  header="Get in touch" 
  animate={false}
/>

// With custom styling and click handler
<TitleBox
title="Portfolio"
header="Our Recent Work"
className="bg-gray-50 p-8 rounded-xl"
onClick={() => console.log('Title clicked!')}
/>

// For hero sections with larger text
<TitleBox 
  title="Welcome to Enovate" 
  header="IT Solutions & Infrastructure Services" 
  className="py-12 md:py-16 lg:py-20"
/>

---

## ServicesSection component usage:

<ServicesSection limit={3} />

show all:
<ServicesSection />

custom variables:
// Show first 6 services without title
<ServicesSection limit={6} showTitle={false} />

// Show all services with custom styling
<ServicesSection className="bg-white py-24" />

// Show first 4 services
<ServicesSection limit={4} />

---
