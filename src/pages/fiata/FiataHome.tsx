import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen, Users, TrendingUp } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';

const FiataHome = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: t('fiata_pages.home.slide1_title'),
      text: t('fiata_pages.home.slide1_text'),
      button: t('fiata_pages.home.slide1_button'),
      link: '/fiata/diploma-details',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      title: t('fiata_pages.home.slide2_title'),
      text: t('fiata_pages.home.slide2_text'),
      button: t('fiata_pages.home.slide2_button'),
      link: '#brochure',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      title: t('fiata_pages.home.slide3_title'),
      text: t('fiata_pages.home.slide3_text'),
      button: t('fiata_pages.home.slide3_button'),
      link: '/fiata/experts',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
            <div className="relative h-full flex items-center justify-center px-4">
              <div className="max-w-4xl text-center text-white">
                <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
                <p className="text-xl mb-8 leading-relaxed">{slide.text}</p>
                <Link
                  to={slide.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
                >
                  {slide.button}
                </Link>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full transition"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full transition"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('fiata_pages.home.welcome_title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('fiata_pages.home.welcome_text')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('fiata_pages.home.card1_title')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t('fiata_pages.home.card1_text')}
            </p>
            <Link
              to="/fiata/diploma-details"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
            >
              {t('fiata_pages.home.card1_link')}
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('fiata_pages.home.card2_title')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t('fiata_pages.home.card2_text')}
            </p>
            <Link
              to="/fiata/jla-member"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
            >
              {t('fiata_pages.home.card2_link')}
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('fiata_pages.home.card3_title')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t('fiata_pages.home.card3_text')}
            </p>
            <Link
              to="/fiata/programs"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
            >
              {t('fiata_pages.home.card3_link')}
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">{t('fiata_pages.home.insights_title')}</h2>
          <p className="text-lg mb-6">
            {t('fiata_pages.home.insights_text')}
          </p>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-6 inline-block">
            <p className="text-xl font-semibold mb-2">{t('fiata_pages.home.insights_magazine_title')}</p>
            <p className="text-2xl font-bold">{t('fiata_pages.home.insights_magazine_name')}</p>
          </div>
          <a
            href="https://www.flipsnack.com/fiata/fiata-review-march-2025/full-view.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            {t('fiata_pages.home.insights_button')}
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FiataHome;
