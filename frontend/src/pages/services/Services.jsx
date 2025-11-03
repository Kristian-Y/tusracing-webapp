import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">{t('services.title')}</h1>
        <p className="py-6">{t('services.description')}</p>
      </div>
    </div>
  </div>
  );
};

export default Services;