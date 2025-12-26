'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { FiCloud, FiGitBranch, FiArrowRight, FiServer, FiDatabase } from 'react-icons/fi';

export default function ServicesOverview() {
  const t = useTranslations('home.services');

  const serviceCategories = [
    {
      icon: FiCloud,
      title: t('cloudTitle'),
      description: t('cloudDesc'),
      highlights: ['AWS', 'GCP', 'Azure', 'Alibaba Cloud', 'Oracle Cloud'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiGitBranch,
      title: t('devopsTitle'),
      description: t('devopsDesc'),
      highlights: ['CI/CD', 'IaC', 'Kubernetes', 'Monitoring'],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const cloudProviders = [
    { name: 'AWS', icon: FiCloud, color: 'text-orange-500' },
    { name: 'Azure', icon: FiServer, color: 'text-blue-500' },
    { name: 'GCP', icon: FiDatabase, color: 'text-blue-400' },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="card group hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cloud Providers Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Multi-Cloud Expertise</h3>
              <p className="text-gray-600 mb-6">
                We specialize in all major cloud platforms, helping you choose and implement the best solution for your needs.
              </p>
              <Link href="/services" className="group inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold">
                <span>Explore all services</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex items-center gap-8">
              {cloudProviders.map((provider) => {
                const ProviderIcon = provider.icon;
                return (
                  <div key={provider.name} className="text-center group cursor-pointer">
                    <ProviderIcon className={`w-16 h-16 ${provider.color} group-hover:scale-110 transition-transform`} />
                    <p className="text-sm font-medium text-gray-600 mt-2">{provider.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
