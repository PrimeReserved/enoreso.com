import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Enovate Resources Ltd | IT Solutions & Infrastructure Services',
  description:
    'Enovate Resources Ltd is a leading IT company in Nigeria providing expert services in network infrastructure, surveillance systems, solar backup solutions, access control, and more. Pace for exceptional delivery.',
  keywords: [
    'Enovate Resources Ltd',
    'IT Infrastructure Nigeria',
    'Network Installation',
    'CCTV Surveillance Nigeria',
    'Access Control',
    'Solar Backup Systems',
    'LAN/WAN Solutions',
    'Project Management',
    'Tech Training Nigeria',
    'Port Harcourt IT Company',
    'Fiber Optic Network Nigeria',
  ],
  authors: [{ name: 'Enovate Resources Ltd', url: 'https://www.enoreso.com' }],
  creator: 'Enovate Resources Ltd',
  publisher: 'Enovate Resources Ltd',
  openGraph: {
    title: 'Enovate Resources Ltd | IT Solutions & Infrastructure Services',
    description:
      'Delivering exceptional IT services across Nigeria. We specialize in infrastructure design, network support, surveillance, security systems, solar power, and more.',
    url: 'https://www.enoreso.com',
    siteName: 'Enoreso',
    images: [
      {
        url: '/assets/images/your-image-file.png', // <-- replace with actual image filename
        width: 1200,
        height: 630,
        alt: 'Enovate Resources Ltd - IT Solutions Provider',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  metadataBase: new URL('https://www.enoreso.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
