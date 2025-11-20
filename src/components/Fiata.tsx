
import fiata from '../assets/fiata-removebg-preview.png';
import { useTranslation } from 'react-i18next';

export default function Fiata() {
  const { t } = useTranslation();
  return (
    <div>
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-200 rounded-full mb-6">
               <img
                    src={fiata}
                    alt="FIATA - International  Federation of Freight Forwarders Associations"
                    className="h-20 w-auto mx-auto  p-3 rounded-full"
                  />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('fiata.title')}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('fiata.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <img
                src={fiata}
                alt="FIATA Diploma Program"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('fiata.programOverview')}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                {t('register now')}
              </button>
            </div>
          </div>
    </div>
  )
}
