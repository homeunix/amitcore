'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('navigation');

  const navigation = [
    { name: navT('home'), href: '/' },
    { name: navT('services'), href: '/services' },
    { name: navT('about'), href: '/about' },
    { name: navT('contact'), href: '/contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com/company/amitcore' },
    { name: 'Email', icon: FiMail, href: 'mailto:info@amitcore.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gradient">
              AmiTCore
            </div>
            <p className="text-gray-400 text-sm">
              {t('tagline')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{navT('contact')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:info@amitcore.com"
                  className="hover:text-white transition-colors"
                >
                  info@amitcore.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/amitcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
