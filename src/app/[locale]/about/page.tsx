import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { FiTarget, FiAward, FiHeart, FiTrendingUp, FiUsers, FiShield } from 'react-icons/fi';

export const dynamic = 'force-static';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: 'About Us',
    description: t('subtitle'),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');

  const values = [
    {
      icon: FiTrendingUp,
      title: t('values.innovation'),
      description: t('values.innovationDesc'),
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: FiShield,
      title: t('values.reliability'),
      description: t('values.reliabilityDesc'),
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: FiUsers,
      title: t('values.partnership'),
      description: t('values.partnershipDesc'),
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: FiHeart,
      title: t('values.excellence'),
      description: t('values.excellenceDesc'),
      color: 'bg-orange-100 text-orange-600',
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

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                <FiTarget className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              {t('mission.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t('mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center">
                <FiAward className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              {t('expertise.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              {t('expertise.description')}
            </p>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-primary-600">
              <p className="text-sm font-semibold text-gray-500 mb-2">Certifications</p>
              <p className="text-gray-700">
                {t('expertise.certifications')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">{t('values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 mx-auto rounded-2xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Let us discuss how we can help you achieve your cloud and DevOps goals.
          </p>
          <Link
            href="/contact"
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
