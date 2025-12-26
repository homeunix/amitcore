import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { FiHome } from 'react-icons/fi';

export default function NotFound() {
  const t = useTranslations('common');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex items-center space-x-2"
        >
          <FiHome className="w-5 h-5" />
          <span>{t('backToHome')}</span>
        </Link>
      </div>
    </div>
  );
}
