'use client';

import { useTranslations } from 'next-intl';
import { FiCloud, FiServer, FiDatabase, FiGlobe, FiBox } from 'react-icons/fi';

export default function CloudProviders() {
  const t = useTranslations('services.cloudProviders');

  const providers = [
    {
      key: 'aws',
      name: t('aws.name'),
      icon: FiCloud,
      description: t('aws.description'),
      services: t('aws.services'),
      color: 'from-orange-500 to-orange-600',
      iconColor: 'text-orange-500',
    },
    {
      key: 'gcp',
      name: t('gcp.name'),
      icon: FiDatabase,
      description: t('gcp.description'),
      services: t('gcp.services'),
      color: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-500',
    },
    {
      key: 'azure',
      name: t('azure.name'),
      icon: FiServer,
      description: t('azure.description'),
      services: t('azure.services'),
      color: 'from-blue-600 to-blue-700',
      iconColor: 'text-blue-600',
    },
    {
      key: 'alicloud',
      name: t('alicloud.name'),
      icon: FiGlobe,
      description: t('alicloud.description'),
      services: t('alicloud.services'),
      color: 'from-orange-400 to-orange-500',
      iconColor: 'text-orange-400',
    },
    {
      key: 'oracle',
      name: t('oracle.name'),
      icon: FiBox,
      description: t('oracle.description'),
      services: t('oracle.services'),
      color: 'from-red-600 to-red-700',
      iconColor: 'text-red-600',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {providers.map((provider) => {
          const Icon = provider.icon;
          return (
            <div key={provider.key} className="card group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${provider.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{provider.name}</h3>
                  <p className="text-gray-600 mb-4">{provider.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <p className="text-sm font-medium text-gray-500 mb-1">Core Services:</p>
                    <p className="text-sm text-gray-700">{provider.services}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
