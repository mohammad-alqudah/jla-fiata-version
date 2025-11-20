import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Search, ArrowRight, Filter } from 'lucide-react';
import { newsItems } from '../data/newsData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

export default function AllNews() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');

  const categories = useMemo(() => {
    const cats = newsItems.map(item => item.category);
    return ['الكل', ...Array.from(new Set(cats))];
  }, []);

  const filteredNews = useMemo(() => {
    return newsItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'الكل' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t('news_page.title')}
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('news_page.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="ابحث في الأخبار..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter size={20} className="text-slate-600" />
                <span className="text-slate-600 font-medium">التصنيف:</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-slate-600">
              <span className="font-semibold text-slate-900">{filteredNews.length}</span> {filteredNews.length === 1 ? 'خبر' : 'أخبار'} {selectedCategory !== 'الكل' && `في تصنيف "${selectedCategory}"`}
            </p>
          </div>

          {filteredNews.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white rounded-lg p-12 shadow-md">
                <Search size={64} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  لا توجد نتائج
                </h3>
                <p className="text-slate-600">
                  لم نجد أي أخبار تطابق بحثك. جرب كلمات مفتاحية أخرى.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group block"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-slate-500 text-sm mb-3">
                      <Calendar size={16} className="ml-2" />
                      <span>{new Date(item.date).toLocaleDateString('ar-JO', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center text-red-600 font-medium">
                      اقرأ المزيد
                      <ArrowRight size={18} className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
