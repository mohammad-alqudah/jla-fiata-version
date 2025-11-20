import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Experts = () => {
  const { t } = useTranslation();
  const experts = [
    {
      name: t('fiata_pages.experts.expert1_name'),
      title: t('fiata_pages.experts.expert_title'),
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: t('fiata_pages.experts.expert1_bio')
    },
    {
      name: t('fiata_pages.experts.expert2_name'),
      title: t('fiata_pages.experts.expert_title'),
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: t('fiata_pages.experts.expert2_bio')
    },
    {
      name: t('fiata_pages.experts.expert3_name'),
      title: t('fiata_pages.experts.expert_title'),
      image: 'https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: t('fiata_pages.experts.expert3_bio')
    },
    {
      name: t('fiata_pages.experts.expert4_name'),
      title: t('fiata_pages.experts.expert_title'),
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: t('fiata_pages.experts.expert4_bio')
    },
    {
      name: t('fiata_pages.experts.expert5_name'),
      title: t('fiata_pages.experts.expert_title'),
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: t('fiata_pages.experts.expert5_bio')
    },
    {
      name: t('fiata_pages.experts.expert6_name'),
      title: t('fiata_pages.experts.expert_title'),
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: t('fiata_pages.experts.expert6_bio')
    },
    {
      name: t('fiata_pages.experts.expert7_name'),
      title: t('fiata_pages.experts.expert_title'),
      image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: t('fiata_pages.experts.expert7_bio')
    },
    {
      name: t('fiata_pages.experts.expert8_name'),
      title: t('fiata_pages.experts.expert_title'),
      image: 'https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: t('fiata_pages.experts.expert8_bio')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-green-700 to-green-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <div className="flex justify-center mb-4">
            <Award className="w-16 h-16" />
          </div>
          <h1 className="text-5xl font-bold mb-4">{t('fiata_pages.experts.hero_title')}</h1>
          <p className="text-xl">{t('fiata_pages.experts.hero_subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('fiata_pages.experts.intro')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{expert.title}</p>
                <p className="text-gray-700 leading-relaxed">{expert.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t('fiata_pages.experts.cta_title')}</h3>
          <p className="text-lg mb-6">
            {t('fiata_pages.experts.cta_description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/fiata/diploma-details"
              className="inline-block bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
            >
              {t('fiata_pages.experts.cta_view_program')}
            </a>
            <a
              href="/fiata/contact"
              className="inline-block bg-green-700 hover:bg-green-900 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white"
            >
              {t('fiata_pages.experts.cta_contact')}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experts;
