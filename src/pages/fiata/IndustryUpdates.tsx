import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Newspaper, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const IndustryUpdates = () => {
  const { t, i18n } = useTranslation();
  const updates = [
    {
      title: t('fiata_pages.industryUpdates.updates.update1_title'),
      description: t('fiata_pages.industryUpdates.updates.update1_description'),
      link: 'https://www.flipsnack.com/fiata/fiata-review-march-2025/full-view.html',
      date: i18n.language === 'ar' ? 'مارس 2025' : 'March 2025',
      category: t('fiata_pages.industryUpdates.updates.update1_category')
    },
    {
      title: t('fiata_pages.industryUpdates.updates.update2_title'),
      description: t('fiata_pages.industryUpdates.updates.update2_description'),
      link: null,
      date: i18n.language === 'ar' ? 'فبراير 2025' : 'February 2025',
      category: t('fiata_pages.industryUpdates.updates.update2_category')
    },
    {
      title: t('fiata_pages.industryUpdates.updates.update3_title'),
      description: t('fiata_pages.industryUpdates.updates.update3_description'),
      link: null,
      date: i18n.language === 'ar' ? 'يناير 2025' : 'January 2025',
      category: t('fiata_pages.industryUpdates.updates.update3_category')
    },
    {
      title: t('fiata_pages.industryUpdates.updates.update4_title'),
      description: t('fiata_pages.industryUpdates.updates.update4_description'),
      link: null,
      date: i18n.language === 'ar' ? 'ديسمبر 2024' : 'December 2024',
      category: t('fiata_pages.industryUpdates.updates.update4_category')
    },
    {
      title: t('fiata_pages.industryUpdates.updates.update5_title'),
      description: t('fiata_pages.industryUpdates.updates.update5_description'),
      link: null,
      date: i18n.language === 'ar' ? 'نوفمبر 2024' : 'November 2024',
      category: t('fiata_pages.industryUpdates.updates.update5_category')
    },
    {
      title: t('fiata_pages.industryUpdates.updates.update6_title'),
      description: t('fiata_pages.industryUpdates.updates.update6_description'),
      link: null,
      date: i18n.language === 'ar' ? 'أكتوبر 2024' : 'October 2024',
      category: t('fiata_pages.industryUpdates.updates.update6_category')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-teal-700 to-teal-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <div className="flex justify-center mb-4">
            <Newspaper className="w-16 h-16" />
          </div>
          <h1 className="text-5xl font-bold mb-4">{t('fiata_pages.industryUpdates.hero_title')}</h1>
          <p className="text-xl">{t('fiata_pages.industryUpdates.hero_subtitle')}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('fiata_pages.industryUpdates.intro')}
          </p>
        </div>

        <div className="grid gap-6">
          {updates.map((update, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-sm font-semibold rounded-full">
                      {update.category}
                    </span>
                    <span className="text-sm text-gray-500">{update.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{update.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{update.description}</p>
                </div>
              </div>
              {update.link && (
                <a
                  href={update.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
                >
                  {t('fiata_pages.industryUpdates.read_more')} <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg shadow-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('fiata_pages.industryUpdates.magazine_title')}</h3>
              <p className="text-lg mb-2">{t('fiata_pages.industryUpdates.magazine_subtitle')}</p>
              <p className="text-3xl font-bold mb-6">{t('fiata_pages.industryUpdates.magazine_edition')}</p>
              <a
                href="https://www.flipsnack.com/fiata/fiata-review-march-2025/full-view.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
              >
                {t('fiata_pages.industryUpdates.magazine_button')} <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h4 className="font-bold text-xl mb-3">{t('fiata_pages.industryUpdates.stay_connected_title')}</h4>
              <p className="mb-4">
                {t('fiata_pages.industryUpdates.stay_connected_text')}
              </p>
              <a
                href="/fiata/contact"
                className="inline-block bg-teal-700 hover:bg-teal-900 text-white px-6 py-3 rounded-lg font-semibold transition border-2 border-white"
              >
                {t('fiata_pages.industryUpdates.contact_us')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndustryUpdates;
