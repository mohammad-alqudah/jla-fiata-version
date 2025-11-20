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

      <div className="relative min-h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
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
            <div className="relative h-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 md:py-0">
              <div className="max-w-4xl text-center text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 leading-tight px-2 sm:px-0">{slide.title}</h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 leading-relaxed px-2 sm:px-0">{slide.text}</p>
                <Link
                  to={slide.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition w-full sm:w-auto max-w-xs sm:max-w-none"
                >
                  {slide.button}
                </Link>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-2 sm:p-3 rounded-full transition hidden sm:block"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-2 sm:p-3 rounded-full transition hidden sm:block"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>

        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            {t('fiata_pages.home.welcome_title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            {t('fiata_pages.home.welcome_text')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition">
            <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto sm:mx-0">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center sm:text-left">
              {t('fiata_pages.home.card1_title')}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 text-center sm:text-left">
              {t('fiata_pages.home.card1_text')}
            </p>
            <Link
              to="/fiata/diploma-details"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center block text-center sm:text-left"
            >
              {t('fiata_pages.home.card1_link')}
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition">
            <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto sm:mx-0">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center sm:text-left">
              {t('fiata_pages.home.card2_title')}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 text-center sm:text-left">
              {t('fiata_pages.home.card2_text')}
            </p>
            <Link
              to="/fiata/jla-member"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center block text-center sm:text-left"
            >
              {t('fiata_pages.home.card2_link')}
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition sm:col-span-2 lg:col-span-1">
            <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto sm:mx-0">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center sm:text-left">
              {t('fiata_pages.home.card3_title')}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 text-center sm:text-left">
              {t('fiata_pages.home.card3_text')}
            </p>
            <Link
              to="/fiata/programs"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center block text-center sm:text-left"
            >
              {t('fiata_pages.home.card3_link')}
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-6 sm:p-8 md:p-12 text-white text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">{t('fiata_pages.home.insights_title')}</h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 px-2 sm:px-0">
            {t('fiata_pages.home.insights_text')}
          </p>
          <div className="bg-white bg-opacity-10 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 inline-block w-full sm:w-auto">
            <p className="text-base sm:text-lg md:text-xl font-semibold mb-2">{t('fiata_pages.home.insights_magazine_title')}</p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">{t('fiata_pages.home.insights_magazine_name')}</p>
          </div>
          <a
            href="https://www.flipsnack.com/fiata/fiata-review-march-2025/full-view.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition w-full sm:w-auto max-w-xs sm:max-w-none"
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
