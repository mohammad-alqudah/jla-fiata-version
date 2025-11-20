import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the FIATA Diploma in Freight Forwarding?',
      answer: 'The FIATA Diploma in Freight Forwarding is an internationally recognised qualification awarded by the International Federation of Freight Forwarders Associations (FIATA). It covers the essential principles of freight forwarding, international transport, customs procedures, and supply chain management. The program is designed to equip professionals with the knowledge and skills needed to excel in the global logistics industry.'
    },
    {
      question: 'Who can apply for the JLA FIATA Diploma program?',
      answer: 'The program is open to fresh graduates seeking to enter the logistics sector, freight forwarders and logistics professionals, customs clearance officers and transport officials, and owners and managers of small and medium-sized enterprises in the logistics sector. Applicants must have a secondary education certificate or equivalent and competence in the English language.'
    },
    {
      question: 'Where is the training delivered?',
      answer: 'The training is delivered face-to-face in Amman, Jordan, at a certified training venue that meets international standards for professional education.'
    },
    {
      question: 'What topics are covered in the program?',
      answer: 'The program covers a comprehensive curriculum including Introduction to Freight Forwarding and Logistics Services, Land, Sea, Air, and Rail Transportation, Supply Chain Management and Logistics Services, Customs Procedures and Clearance, Shipping Documents and International Trade, and Cargo Insurance and Risk Management. The training is delivered by FIATA-validated instructors using FIATA-approved materials.'
    },
    {
      question: 'What is the cost of the program?',
      answer: 'The program fee includes enrollment fees, training materials, certification upon completion, and daily refreshments during the training course. For specific fee information, please contact the Jordanian Logistics Association (JLA) at +962-6-5658094 or fiata@jla.jo. Special discounts are available for group enrollments and JLA members.'
    },
    {
      question: 'Is there financial aid or installment payment available?',
      answer: 'Yes, flexible payment options are available, allowing participants to pay in installments. Additionally, special discounts are offered for group enrollments and members of the Jordanian Logistics Association (JLA). Please contact JLA for more details about payment plans and discounts.'
    },
    {
      question: 'How do I apply?',
      answer: 'To apply for the FIATA Diploma in Freight Forwarding, please complete the application form and email it to fiata@jla.jo. You can also contact JLA directly at +962-6-5658094 or via WhatsApp at +962-793555761 for assistance with the application process.'
    },
    {
      question: 'What is the selection process?',
      answer: 'The Selection Committee reserves the right to interview candidates to validate the coherence of their professional background, qualifications, and motivation for pursuing the FIATA Diploma in Freight Forwarding. This ensures that applicants\' profiles align with the programme\'s selection criteria and objectives.'
    },
    {
      question: 'What is the assessment method?',
      answer: 'The program includes continuous assessment through case studies, practical assignments, and a final examination. The assessment is designed to evaluate both theoretical knowledge and practical application of freight forwarding principles. All assessments align with FIATA\'s international standards.'
    },
    {
      question: 'What if I miss classes or need to withdraw?',
      answer: 'Attendance is important for successful completion of the program. If you need to miss classes due to unforeseen circumstances, please contact the program coordinator as soon as possible. The JLA team will work with you to address any attendance issues. For withdrawal procedures and policies, please contact JLA directly at fiata@jla.jo.'
    },
    {
      question: 'Can I retake the final exam if I fail?',
      answer: 'Yes, retake opportunities are available for candidates who do not pass the final examination on their first attempt. Additional fees may apply for exam retakes. Please contact JLA for specific policies and procedures regarding exam retakes.'
    },
    {
      question: 'What certificate will I receive?',
      answer: 'Upon successful completion of the program, graduates will receive a FIATA Diploma in Freight Forwarding signed by the FIATA President and FIATA Director General. The certificate includes the title of the diploma, diploma number, name of the graduate, and date and place of issuance. This internationally recognized qualification demonstrates your professional competence in freight forwarding.'
    },
    {
      question: 'What are the benefits of joining the program?',
      answer: 'The program offers numerous benefits including internationally recognized certification that opens doors to global career opportunities, comprehensive knowledge of freight forwarding and logistics operations, networking opportunities with industry professionals, training from FIATA-validated instructors, practical skills applicable in real-world scenarios, enhanced career prospects and professional credibility, and alignment with international standards recognized by logistics companies worldwide.'
    },
    {
      question: 'Is the program inclusive?',
      answer: 'Yes, the FIATA Diploma program delivered by JLA is designed to be inclusive and accessible to all qualified candidates regardless of background. We welcome applications from diverse professionals who meet the admission requirements and are committed to pursuing excellence in freight forwarding and logistics.'
    },
    {
      question: 'How can I contact JLA for more details?',
      answer: 'You can contact the Jordanian Logistics Association (JLA) through multiple channels: Phone: +962-6-5658094, WhatsApp: +962-793555761, Email: fiata@jla.jo, Website: www.JLAFIATA.jo, or visit the office at Shmeissani, Yousef Bin Tashfeen Str., Bldg.18, P.O Box 941329 Amman 11194, Jordan. The JLA team is ready to answer your questions and assist with your application.'
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
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl">Everything you need to know about the FIATA Diploma Program</p>
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
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-lg mb-6">
            Our team is here to help. Contact us for personalized assistance with your application.
          </p>
          <a
            href="/fiata/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faqs;
