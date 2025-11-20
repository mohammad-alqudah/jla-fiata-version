import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Faqs = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t('fiata_pages.faqs.faq1_question'),
      answer: t('fiata_pages.faqs.faq1_answer')
    },
    {
      question: t('fiata_pages.faqs.faq2_question'),
      answer: t('fiata_pages.faqs.faq2_answer')
    },
    {
      question: t('fiata_pages.faqs.faq3_question'),
      answer: t('fiata_pages.faqs.faq3_answer')
    },
    {
      question: t('fiata_pages.faqs.faq4_question'),
      answer: t('fiata_pages.faqs.faq4_answer')
    },
    {
      question: t('fiata_pages.faqs.faq5_question'),
      answer: t('fiata_pages.faqs.faq5_answer')
    },
    {
      question: t('fiata_pages.faqs.faq6_question'),
      answer: t('fiata_pages.faqs.faq6_answer')
    },
    {
      question: t('fiata_pages.faqs.faq7_question'),
      answer: t('fiata_pages.faqs.faq7_answer')
    },
    {
      question: t('fiata_pages.faqs.faq8_question'),
      answer: t('fiata_pages.faqs.faq8_answer')
    },
    {
      question: t('fiata_pages.faqs.faq9_question'),
      answer: t('fiata_pages.faqs.faq9_answer')
    },
    {
      question: t('fiata_pages.faqs.faq10_question'),
      answer: t('fiata_pages.faqs.faq10_answer')
    },
    {
      question: t('fiata_pages.faqs.faq11_question'),
      answer: t('fiata_pages.faqs.faq11_answer')
    },
    {
      question: t('fiata_pages.faqs.faq12_question'),
      answer: t('fiata_pages.faqs.faq12_answer')
    },
    {
      question: t('fiata_pages.faqs.faq13_question'),
      answer: t('fiata_pages.faqs.faq13_answer')
    },
    {
      question: t('fiata_pages.faqs.faq14_question'),
      answer: t('fiata_pages.faqs.faq14_answer')
    },
    {
      question: t('fiata_pages.faqs.faq15_question'),
      answer: t('fiata_pages.faqs.faq15_answer')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-purple-700 to-purple-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-16 h-16" />
          </div>
          <h1 className="text-5xl font-bold mb-4">{t('fiata_pages.faqs.hero_title')}</h1>
          <p className="text-xl">{t('fiata_pages.faqs.hero_subtitle')}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <h3 className="text-lg font-bold text-gray-900 text-left pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t('fiata_pages.faqs.cta_title')}</h3>
          <p className="text-lg mb-6">
            {t('fiata_pages.faqs.cta_description')}
          </p>
          <a
            href="/fiata/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
          >
            {t('fiata_pages.faqs.cta_button')}
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faqs;
