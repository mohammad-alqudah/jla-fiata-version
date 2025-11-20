import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Building2, Award, Users, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const JlaMember = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-green-700 to-green-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">{t('fiata_pages.jlaMember.hero_title')}</h1>
          <p className="text-xl">{t('fiata_pages.jlaMember.hero_subtitle')}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <Building2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('fiata_pages.jlaMember.about_title')}</h2>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('fiata_pages.jlaMember.about_p1')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('fiata_pages.jlaMember.about_p2')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">{t('fiata_pages.jlaMember.accreditation_title')}</h3>
            </div>
            <p className="text-gray-700">
              {t('fiata_pages.jlaMember.accreditation_text')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">{t('fiata_pages.jlaMember.regional_title')}</h3>
            </div>
            <p className="text-gray-700">
              {t('fiata_pages.jlaMember.regional_text')}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-full">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('fiata_pages.jlaMember.partnership_title')}</h2>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {t('fiata_pages.jlaMember.partnership_text')}
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t('fiata_pages.jlaMember.cta_title')}</h3>
          <p className="text-lg mb-6">
            {t('fiata_pages.jlaMember.cta_description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/fiata/diploma-details"
              className="inline-block bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
            >
              {t('fiata_pages.jlaMember.cta_view_program')}
            </a>
            <a
              href="/fiata/contact"
              className="inline-block bg-green-700 hover:bg-green-900 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white"
            >
              {t('fiata_pages.jlaMember.cta_contact')}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JlaMember;
