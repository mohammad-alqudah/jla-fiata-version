import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Download, FileText, Clock, MapPin, Award, Users, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DiplomaDetails = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-96 bg-gradient-to-r from-blue-800 to-blue-950 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">{t('fiata_pages.diplomaDetails.hero_title')}</h1>
          <p className="text-xl mb-8 leading-relaxed">
            {t('fiata_pages.diplomaDetails.hero_description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:fiata@jla.jo"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
            >
              {t('fiata_pages.diplomaDetails.apply_now')}
            </a>
            <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white">
              <Download className="w-5 h-5" />
              {t('fiata_pages.diplomaDetails.download_brochure')}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('fiata_pages.diplomaDetails.program_overview_title')}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('fiata_pages.diplomaDetails.program_overview_p1')}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t('fiata_pages.diplomaDetails.program_overview_p2')}
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              {t('fiata_pages.diplomaDetails.application_form_title')}
            </h3>
            <p className="text-blue-800">
              {t('fiata_pages.diplomaDetails.application_form_text')} <a href="mailto:fiata@jla.jo" className="font-semibold underline">fiata@jla.jo</a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('fiata_pages.diplomaDetails.learning_objectives_title')}</h2>
          <p className="text-gray-700 mb-6">
            {t('fiata_pages.diplomaDetails.learning_objectives_intro')}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.objective1')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.objective2')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.objective3')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.objective4')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.objective5')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.objective6')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.objective7')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.objective8')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.objective9')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.objective10')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.objective11')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.objective12')}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('fiata_pages.diplomaDetails.duration')}</h3>
            <p className="text-gray-700">{t('fiata_pages.diplomaDetails.duration_value')}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('fiata_pages.diplomaDetails.location')}</h3>
            <p className="text-gray-700">{t('fiata_pages.diplomaDetails.location_value')}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('fiata_pages.diplomaDetails.delivery')}</h3>
            <p className="text-gray-700">{t('fiata_pages.diplomaDetails.delivery_value')}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('fiata_pages.diplomaDetails.curriculum_title')}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t('fiata_pages.diplomaDetails.curriculum_p1')}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t('fiata_pages.diplomaDetails.curriculum_p2')}
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t('fiata_pages.diplomaDetails.curriculum_topics_title')}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">{t('fiata_pages.diplomaDetails.topic1')}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">{t('fiata_pages.diplomaDetails.topic2')}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">{t('fiata_pages.diplomaDetails.topic3')}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">{t('fiata_pages.diplomaDetails.topic4')}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">{t('fiata_pages.diplomaDetails.topic5')}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">{t('fiata_pages.diplomaDetails.topic6')}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4 italic">
            {t('fiata_pages.diplomaDetails.curriculum_note')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('fiata_pages.diplomaDetails.who_should_enroll_title')}</h2>
          <p className="text-gray-700 mb-4">{t('fiata_pages.diplomaDetails.who_should_enroll_intro')}</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.target1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.target2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.target3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.target4')}</span>
            </li>
          </ul>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-3">{t('fiata_pages.diplomaDetails.admission_requirements_title')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800">{t('fiata_pages.diplomaDetails.requirement1')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800">{t('fiata_pages.diplomaDetails.requirement2')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('fiata_pages.diplomaDetails.selection_criteria_title')}</h2>
          <p className="text-gray-700 leading-relaxed">
            {t('fiata_pages.diplomaDetails.selection_criteria_text')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{t('fiata_pages.diplomaDetails.fees_title')}</h2>
          </div>
          <p className="text-gray-700 mb-4">{t('fiata_pages.diplomaDetails.fees_intro')}</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.fee1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.fee2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.fee3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.fee4')}</span>
            </li>
          </ul>
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded mb-6">
            <p className="text-green-900 font-semibold mb-2">{t('fiata_pages.diplomaDetails.fees_flexible')}</p>
            <p className="text-green-800">{t('fiata_pages.diplomaDetails.fees_discounts')}</p>
          </div>
          <p className="text-gray-700 mb-4">{t('fiata_pages.diplomaDetails.fees_contact')}</p>
          <div className="flex flex-col gap-2">
            <p className="text-gray-700"><span className="font-semibold">{t('fiata_pages.diplomaDetails.phone')}</span> +962-6-5658094</p>
            <p className="text-gray-700"><span className="font-semibold">{t('fiata_pages.diplomaDetails.email')}</span> <a href="mailto:fiata@jla.jo" className="text-blue-600 hover:underline">fiata@jla.jo</a></p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{t('fiata_pages.diplomaDetails.certification_title')}</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('fiata_pages.diplomaDetails.certification_intro')}
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-yellow-600 mt-1" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.cert1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-yellow-600 mt-1" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.cert2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-yellow-600 mt-1" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.cert3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-yellow-600 mt-1" />
              <span className="text-gray-700">{t('fiata_pages.diplomaDetails.cert4')}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t('fiata_pages.diplomaDetails.cta_title')}</h3>
          <p className="text-lg mb-6">
            {t('fiata_pages.diplomaDetails.cta_description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:fiata@jla.jo"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
            >
              {t('fiata_pages.diplomaDetails.apply_now')}
            </a>
            <Link
              to="/fiata/faqs"
              className="inline-block bg-blue-700 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white"
            >
              {t('fiata_pages.diplomaDetails.view_faqs')}
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DiplomaDetails;
