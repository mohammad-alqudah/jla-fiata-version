import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpeg'
import bg3 from '../assets/bg3.jpg'
import bg4 from '../assets/bg4.jpg'


export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();
  
const slides = [
    {
      id: 1,
      title:"النقابة اللوجستية الاردنية" ,
      description: "نسعى للارتقاء بصناعة الشحن في الاردن",
      image: bg1,
    },
    {
      id: 1,
      title:t('slide1_title') ,
      description: t('slide1_description'),
      image: bg4,
    },
    {
    id: 2,   title:t('slide2_title') ,
    description: t('slide2_description'),
    image: bg2,
  },
  {
    id: 3,
    title: t('slide3_title') ,
    description: t('slide3_description'),
    image: bg3,
  },
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
      >
        <ChevronRight size={28} />
        
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
      >
        <ChevronLeft size={28} />
        
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-reverse space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
