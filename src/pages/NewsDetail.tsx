import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { newsItems } from '../data/newsData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const newsId = parseInt(id || '1');
  const news = newsItems.find(item => item.id === newsId);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">الخبر غير موجود</h1>
          <Link to="/" className="text-red-600 hover:text-red-700">
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    );
  }

  const relatedNews = newsItems
    .filter(item => item.id !== newsId && item.category === news.category)
    .slice(0, 3);

  const sidebarNews = newsItems
    .filter(item => item.id !== newsId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const galleryImages = [
    'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4246121/pexels-photo-4246121.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4246106/pexels-photo-4246106.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4246097/pexels-photo-4246097.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20">
        <div className="relative h-96 w-full">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 right-0 left-0 p-8">
            <div className="max-w-4xl mx-auto">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {news.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                {news.title}
              </h1>
              <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{new Date(news.date).toLocaleDateString('ar-JO', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{news.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <article className="lg:w-2/3">
              <div className="mb-8">
                <Link
                  to="/#news"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  <ArrowLeft size={20} className="ml-2" />
                  العودة إلى الأخبار
                </Link>
              </div>

              <div
                className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4 prose-ul:text-slate-600 prose-li:mb-2 prose-blockquote:border-r-4 prose-blockquote:border-red-600 prose-blockquote:pr-4 prose-blockquote:italic prose-blockquote:text-slate-700"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </article>

            <aside className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-600">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <ArrowRight className="text-red-600" size={24} />
                    أخبار ذات صلة
                  </h3>
                  <div className="space-y-6">
                    {sidebarNews.map((item) => (
                      <Link
                        key={item.id}
                        to={`/news/${item.id}`}
                        className="block group"
                      >
                        <div className="flex gap-4">
                          <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <span className="inline-block bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium mb-2">
                              {item.category}
                            </span>
                            <h4 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-red-600 transition-colors duration-200 mb-2">
                              {item.title}
                            </h4>
                            <div className="flex items-center text-xs text-slate-500">
                              <Calendar size={12} className="ml-1" />
                              <span>{new Date(item.date).toLocaleDateString('ar-JO', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}</span>
                            </div>
                          </div>
                        </div>
                        {item.id !== sidebarNews[sidebarNews.length - 1].id && (
                          <div className="border-b border-slate-200 mt-6" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {relatedNews.length > 0 && (
          <section className="bg-slate-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-red-600 p-2 rounded-lg">
                  <ArrowRight className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  أخبار ذات صلة
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedNews.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
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
                      <p className="text-slate-600 mb-4 line-clamp-2">
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
            </div>
          </section>
        )}

        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-600 p-2 rounded-lg">
                <ImageIcon className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                معرض الصور
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image}
                    alt={`معرض الصور ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-medium">عرض الصورة</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
