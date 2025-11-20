import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Globe, Target, Award, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutFiata = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">{t('fiata_pages.aboutFiata.hero_title')}</h1>
          <p className="text-xl">{t('fiata_pages.aboutFiata.hero_subtitle')}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('fiata_pages.aboutFiata.what_is_fiata_title')}</h2>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('fiata_pages.aboutFiata.what_is_fiata_p1')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('fiata_pages.aboutFiata.what_is_fiata_p2')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('fiata_pages.aboutFiata.objectives_title')}</h2>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{t('fiata_pages.aboutFiata.objectives_intro')}</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">{t('fiata_pages.aboutFiata.objective1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">{t('fiata_pages.aboutFiata.objective2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">{t('fiata_pages.aboutFiata.objective3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">{t('fiata_pages.aboutFiata.objective4')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">{t('fiata_pages.aboutFiata.objective5')}</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-full">
              <GraduationCap className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('fiata_pages.aboutFiata.fli_title')}</h2>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('fiata_pages.aboutFiata.fli_intro')}
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">{t('fiata_pages.aboutFiata.fli_initiative1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">{t('fiata_pages.aboutFiata.fli_initiative2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">{t('fiata_pages.aboutFiata.fli_initiative3')}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">{t('fiata_pages.aboutFiata.membership_title')}</h2>
            </div>
          </div>
          <p className="leading-relaxed mb-6">
            {t('fiata_pages.aboutFiata.membership_text')}
          </p>
          <a
            href="https://join.fiata.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
          >
            {t('fiata_pages.aboutFiata.join_fiata')}
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutFiata;
