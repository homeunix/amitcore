'use client';

import { useTranslations } from 'next-intl';
import { FiAward, FiUsers, FiSettings, FiClock, FiDollarSign } from 'react-icons/fi';

export default function WhyChooseUs() {
  const t = useTranslations('home.whyChooseUs');

  const reasons = [
    {
      icon: FiAward,
      title: t('expertise.title'),
      description: t('expertise.description'),
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: FiUsers,
      title: t('team.title'),
      description: t('team.description'),
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: FiSettings,
      title: t('devops.title'),
      description: t('devops.description'),
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: FiClock,
      title: t('support.title'),
      description: t('support.description'),
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: FiDollarSign,
      title: t('costEffective.title'),
      description: t('costEffective.description'),
      color: 'bg-emerald-100 text-emerald-600',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto rounded-2xl ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-gray-600">Cloud Providers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">DevOps Tools</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
