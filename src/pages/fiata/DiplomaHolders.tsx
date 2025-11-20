import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const DiplomaHolders = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-yellow-600 to-yellow-800 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <div className="flex justify-center mb-4">
            <GraduationCap className="w-16 h-16" />
          </div>
          <h1 className="text-5xl font-bold mb-4">{t('fiata_pages.diplomaHolders.hero_title')}</h1>
          <p className="text-xl">{t('fiata_pages.diplomaHolders.hero_subtitle')}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('fiata_pages.diplomaHolders.intro')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <img
              src="https://via.placeholder.com/120x80/1e40af/ffffff?text=JLA"
              alt="JLA Logo"
              className="h-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/120x80/059669/ffffff?text=LogiSkills"
              alt="LogiSkills Logo"
              className="h-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/120x80/7c3aed/ffffff?text=FIATA"
              alt="FIATA Logo"
              className="h-20 object-contain"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{t('fiata_pages.diplomaHolders.year2025_title')}</h2>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-6">
            <p className="text-blue-900 font-semibold mb-2">{t('fiata_pages.diplomaHolders.year2025_class')}</p>
            <p className="text-blue-800">{t('fiata_pages.diplomaHolders.year2025_notice')}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 text-center italic">
              {t('fiata_pages.diplomaHolders.year2025_message')}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <img
              src="https://via.placeholder.com/120x80/1e40af/ffffff?text=JLA"
              alt="JLA Logo"
              className="h-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/120x80/059669/ffffff?text=LogiSkills"
              alt="LogiSkills Logo"
              className="h-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/120x80/7c3aed/ffffff?text=FIATA"
              alt="FIATA Logo"
              className="h-20 object-contain"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{t('fiata_pages.diplomaHolders.year2026_title')}</h2>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 text-center italic">
              {t('fiata_pages.diplomaHolders.year2026_message')}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <img
              src="https://via.placeholder.com/120x80/1e40af/ffffff?text=JLA"
              alt="JLA Logo"
              className="h-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/120x80/059669/ffffff?text=LogiSkills"
              alt="LogiSkills Logo"
              className="h-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/120x80/7c3aed/ffffff?text=FIATA"
              alt="FIATA Logo"
              className="h-20 object-contain"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{t('fiata_pages.diplomaHolders.year2027_title')}</h2>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 text-center italic">
              {t('fiata_pages.diplomaHolders.year2027_message')}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t('fiata_pages.diplomaHolders.cta_title')}</h3>
          <p className="text-lg mb-6">
            {t('fiata_pages.diplomaHolders.cta_description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/fiata/diploma-details"
              className="inline-block bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
            >
              {t('fiata_pages.diplomaHolders.cta_view_details')}
            </a>
            <a
              href="/fiata/contact"
              className="inline-block bg-yellow-700 hover:bg-yellow-900 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white"
            >
              {t('fiata_pages.diplomaHolders.cta_apply')}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DiplomaHolders;
