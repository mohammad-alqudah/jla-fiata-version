import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Camera, Video } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MediaCentre = () => {
  const { t } = useTranslation();
  const photos = [
    {
      url: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: t('fiata_pages.mediaCentre.photos.photo1_title'),
      description: t('fiata_pages.mediaCentre.photos.photo1_description')
    },
    {
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: t('fiata_pages.mediaCentre.photos.photo2_title'),
      description: t('fiata_pages.mediaCentre.photos.photo2_description')
    },
    {
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: t('fiata_pages.mediaCentre.photos.photo3_title'),
      description: t('fiata_pages.mediaCentre.photos.photo3_description')
    },
    {
      url: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: t('fiata_pages.mediaCentre.photos.photo4_title'),
      description: t('fiata_pages.mediaCentre.photos.photo4_description')
    },
    {
      url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: t('fiata_pages.mediaCentre.photos.photo5_title'),
      description: t('fiata_pages.mediaCentre.photos.photo5_description')
    },
    {
      url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: t('fiata_pages.mediaCentre.photos.photo6_title'),
      description: t('fiata_pages.mediaCentre.photos.photo6_description')
    },
    {
      url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: t('fiata_pages.mediaCentre.photos.photo7_title'),
      description: t('fiata_pages.mediaCentre.photos.photo7_description')
    },
    {
      url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: t('fiata_pages.mediaCentre.photos.photo8_title'),
      description: t('fiata_pages.mediaCentre.photos.photo8_description')
    },
    {
      url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: t('fiata_pages.mediaCentre.photos.photo9_title'),
      description: t('fiata_pages.mediaCentre.photos.photo9_description')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-pink-700 to-pink-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <div className="flex justify-center mb-4">
            <Camera className="w-16 h-16" />
          </div>
          <h1 className="text-5xl font-bold mb-4">{t('fiata_pages.mediaCentre.hero_title')}</h1>
          <p className="text-xl">{t('fiata_pages.mediaCentre.hero_subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('fiata_pages.mediaCentre.intro')}
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('fiata_pages.mediaCentre.photo_gallery_title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{photo.title}</h3>
                  <p className="text-gray-600 text-sm">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('fiata_pages.mediaCentre.video_title')}</h2>
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="bg-gray-100 rounded-lg p-12 mb-6">
              <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">{t('fiata_pages.mediaCentre.video_coming_soon')}</p>
            </div>
            <p className="text-gray-700">
              {t('fiata_pages.mediaCentre.video_text')}
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('fiata_pages.mediaCentre.success_stories_title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('fiata_pages.mediaCentre.story1_title')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('fiata_pages.mediaCentre.story1_text')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('fiata_pages.mediaCentre.story2_title')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('fiata_pages.mediaCentre.story2_text')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('fiata_pages.mediaCentre.story3_title')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('fiata_pages.mediaCentre.story3_text')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('fiata_pages.mediaCentre.story4_title')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('fiata_pages.mediaCentre.story4_text')}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-pink-800 rounded-lg shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t('fiata_pages.mediaCentre.cta_title')}</h3>
          <p className="text-lg mb-6">
            {t('fiata_pages.mediaCentre.cta_description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/fiata/diploma-details"
              className="inline-block bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
            >
              {t('fiata_pages.mediaCentre.cta_view_details')}
            </a>
            <a
              href="/fiata/contact"
              className="inline-block bg-pink-700 hover:bg-pink-900 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white"
            >
              {t('fiata_pages.mediaCentre.cta_apply')}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MediaCentre;
