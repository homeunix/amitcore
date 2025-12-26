'use client';

import { useTranslations } from 'next-intl';
import { FiGitBranch, FiServer, FiPackage, FiActivity, FiShield, FiSettings } from 'react-icons/fi';

export default function DevOpsServices() {
  const t = useTranslations('services.devops');

  const services = [
    {
      key: 'cicd',
      icon: FiGitBranch,
      title: t('cicd.title'),
      description: t('cicd.description'),
      tools: t('cicd.tools'),
      color: 'bg-blue-100 text-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      key: 'iac',
      icon: FiServer,
      title: t('iac.title'),
      description: t('iac.description'),
      tools: t('iac.tools'),
      color: 'bg-green-100 text-green-600',
      borderColor: 'border-green-200',
    },
    {
      key: 'containers',
      icon: FiPackage,
      title: t('containers.title'),
      description: t('containers.description'),
      tools: t('containers.tools'),
      color: 'bg-purple-100 text-purple-600',
      borderColor: 'border-purple-200',
    },
    {
      key: 'monitoring',
      icon: FiActivity,
      title: t('monitoring.title'),
      description: t('monitoring.description'),
      tools: t('monitoring.tools'),
      color: 'bg-orange-100 text-orange-600',
      borderColor: 'border-orange-200',
    },
    {
      key: 'security',
      icon: FiShield,
      title: t('security.title'),
      description: t('security.description'),
      tools: t('security.tools'),
      color: 'bg-red-100 text-red-600',
      borderColor: 'border-red-200',
    },
    {
      key: 'config',
      icon: FiSettings,
      title: t('config.title'),
      description: t('config.description'),
      tools: t('config.tools'),
      color: 'bg-indigo-100 text-indigo-600',
      borderColor: 'border-indigo-200',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.key}
              className={`card group border-2 ${service.borderColor} hover:shadow-2xl transition-all duration-300`}
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-500 mb-2">Tools & Technologies:</p>
                <p className="text-sm text-gray-700 leading-relaxed">{service.tools}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
