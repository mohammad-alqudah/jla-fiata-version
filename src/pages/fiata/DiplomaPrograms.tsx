import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BookOpen, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DiplomaPrograms = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">{t('fiata_pages.diplomaPrograms.hero_title')}</h1>
          <p className="text-xl">{t('fiata_pages.diplomaPrograms.hero_subtitle')}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('fiata_pages.diplomaPrograms.main_title')}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('fiata_pages.diplomaPrograms.main_intro')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('fiata_pages.diplomaPrograms.diploma1_title')}</h3>
            </div>

            <div className="mb-6">
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t('fiata_pages.diplomaPrograms.diploma1_feature1')}</span>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t('fiata_pages.diplomaPrograms.diploma1_feature2')}</span>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t('fiata_pages.diplomaPrograms.diploma1_feature3')}</span>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t('fiata_pages.diplomaPrograms.diploma1_feature4')}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t('fiata_pages.diplomaPrograms.diploma1_feature5')}</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-blue-900 mb-1">{t('fiata_pages.diplomaPrograms.diploma1_available')}</p>
              <p className="text-sm text-blue-700">{t('fiata_pages.diplomaPrograms.diploma1_delivered')}</p>
            </div>

            <Link
              to="/fiata/diploma-details"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              {t('fiata_pages.diplomaPrograms.diploma1_button')}
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-purple-600">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-3 rounded-full">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('fiata_pages.diplomaPrograms.diploma2_title')}</h3>
            </div>

            <div className="mb-6">
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t('fiata_pages.diplomaPrograms.diploma2_feature1')}</span>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t('fiata_pages.diplomaPrograms.diploma2_feature2')}</span>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t('fiata_pages.diplomaPrograms.diploma2_feature3')}</span>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t('fiata_pages.diplomaPrograms.diploma2_feature4')}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t('fiata_pages.diplomaPrograms.diploma2_feature5')}</span>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-purple-900 mb-1">{t('fiata_pages.diplomaPrograms.diploma2_coming_soon')}</p>
              <p className="text-sm text-purple-700">{t('fiata_pages.diplomaPrograms.diploma2_future')}</p>
            </div>

            <button
              disabled
              className="block w-full text-center bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
            >
              {t('fiata_pages.diplomaPrograms.diploma2_not_available')}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('fiata_pages.diplomaPrograms.training_title')}</h2>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('fiata_pages.diplomaPrograms.training_p1')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('fiata_pages.diplomaPrograms.training_p2')}
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t('fiata_pages.diplomaPrograms.cta_title')}</h3>
          <p className="text-lg mb-6">
            {t('fiata_pages.diplomaPrograms.cta_description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/fiata/diploma-details"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
            >
              {t('fiata_pages.diplomaPrograms.cta_view_details')}
            </Link>
            <Link
              to="/fiata/contact"
              className="inline-block bg-blue-700 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white"
            >
              {t('fiata_pages.diplomaPrograms.cta_contact')}
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DiplomaPrograms;
