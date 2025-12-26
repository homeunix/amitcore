import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'AmiTCore - Cloud & DevOps Solutions',
    template: '%s | AmiTCore'
  },
  description: 'Expert cloud infrastructure and DevOps services across AWS, GCP, Azure, Alibaba Cloud, and Oracle Cloud. Full-spectrum DevOps implementation and support.',
  keywords: ['DevOps', 'Cloud', 'AWS', 'GCP', 'Azure', 'Alibaba Cloud', 'Oracle Cloud', 'Kubernetes', 'CI/CD', 'Infrastructure as Code', 'Terraform', 'Ansible'],
  authors: [{ name: 'AmiTCore' }],
  creator: 'AmiTCore',
  publisher: 'AmiTCore',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amitcore.com',
    siteName: 'AmiTCore',
    title: 'AmiTCore - Cloud & DevOps Solutions',
    description: 'Expert cloud infrastructure and DevOps services across all major cloud providers',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AmiTCore - Cloud & DevOps Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AmiTCore - Cloud & DevOps Solutions',
    description: 'Expert cloud infrastructure and DevOps services',
    images: ['/images/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'zh' | 'fr' | 'de' | 'uk' | 'he')) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
