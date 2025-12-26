import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';

export const dynamic = 'force-static';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: 'Contact Us',
    description: t('subtitle'),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('contact');

  const contactMethods = [
    {
      icon: FiMail,
      label: t('email'),
      value: t('emailAddress'),
      href: 'mailto:info@amitcore.com',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: FiPhone,
      label: t('phone'),
      value: t('phoneNumber'),
      href: null,
      color: 'bg-green-100 text-green-600',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: 'https://linkedin.com/company/amitcore',
      color: 'hover:text-blue-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t('getInTouch')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const content = (
                  <div className="card text-center group hover:shadow-2xl transition-all duration-300">
                    <div className={`w-16 h-16 mx-auto rounded-full ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{method.label}</h3>
                    <p className={`text-gray-700 ${method.href ? 'group-hover:text-primary-600 transition-colors' : ''}`}>
                      {method.value}
                    </p>
                  </div>
                );

                return method.href ? (
                  <a key={method.label} href={method.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={method.label}>{content}</div>
                );
              })}
            </div>

            {/* Email CTA */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 text-center border-2 border-primary-200">
              <FiMail className="w-16 h-16 mx-auto text-primary-600 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                {t('sendMessage')}
              </h3>
              <p className="text-gray-700 mb-8 text-lg">
                {t('messagePrompt')}
              </p>
              <a
                href="mailto:info@amitcore.com?subject=Inquiry from AmiTCore Website"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <FiMail className="w-5 h-5" />
                <span>{t('contactButton')}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">{t('social')}</h3>
              <div className="flex items-center justify-center space-x-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 border-gray-300 ${social.color} transition-all duration-300 hover:border-primary-600 hover:shadow-lg`}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Additional Info Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Global Reach, Local Expertise</h3>
              <p className="text-gray-700 mb-6">
                We work with clients worldwide, providing cloud infrastructure and DevOps solutions
                across multiple time zones. Our team is available to discuss your specific requirements
                and provide tailored solutions for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <span className="px-4 py-2 bg-gray-100 rounded-full">Remote Consultations Available</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">Flexible Engagement Models</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">Multi-language Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
