
import { Package, FileText, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';


export default function LogisticsUnion() {
  const { t } = useTranslation();
  return (
   <>
      <div className=" px-10">
        <div className={`bg-auto bg-repeat md:bg-cover bg-center py-12 bg-letter bg-blend-lighten bg-white/70 `}  >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div  >
              {/* Header */}
            <h1 className="text-xl md:text-4xl font-bold text-gray-900 text-center mb-5">
              {t("Decleartion")}
              </h1>
    
            {/* Main Content */}
            <div className=" p-8 md:p-12 mb-12">
              <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
              {t('decleartion_paragraph1')}
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('decleartion_paragraph2')}
              </p>
    
              <p className="text-md md:text-lg text-gray-600 leading-relaxed">
              {t('decleartion_paragraph3')}
              </p>
            </div>
    
          </div>
            {/* Three Column Grid */}
            <div className="space-y-8">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-8 justify-center items-center">
    
             <div className='col-span-2'>
                 <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                   
                        {/* Vision Card */}
                        <div>
                          <div className="flex justify-center mb-6">
                            <div className="w-16 h-16  flex items-center justify-center">
                              <Package className="w-8 h-8 text-red-600" />
                            </div>
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                        {t('view')}                </h2>
                          <p className="text-gray-700 leading-relaxed text-center  w-80 mx-auto">{t('vision_description')}  </p>
                        </div>
              
                        {/* Mission Card */}
                        <div>
                          <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 flex items-center justify-center">
                              <FileText className="w-8 h-8 text-red-600" />
                            </div>
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                       {t('mission')}                </h2>
                          <p className="text-gray-700 leading-relaxed text-center  w-80 mx-auto">{t('mission_description')}  </p>
                        </div>
              
             </div>
                 
               </div>
                  {/* Strategic Goals Card */}
                  <div className='col-span-2'>
                    <div className="flex justify-center mb-6  ">
                      <div className="w-16 h-16  flex items-center justify-center">
                        <Shield className="w-8 h-8 text-red-600" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {t('values')}        </h2>
                    <p className="text-gray-700 leading-relaxed text-center lg:w-80 mx-auto">{t('values_description')}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
   </>
  );
}