import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsItems } from '../data/newsData';
import { useTranslation } from 'react-i18next';


export default function News() {
  const { t } = useTranslation();
  return (
    <section id="news" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('lastNews')}        </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('last_news_description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(0, 3).map((article, index) => (
   
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 hover:text-red-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link
                    to="/news"
                    className="text-red-600 font-medium hover:text-red-700 inline-flex items-center"
                  >
                    {t('Read More')} <ArrowLeft className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/all-news"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
          >
            {t('view all news')}
            <ArrowLeft size={20} className="mr-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
