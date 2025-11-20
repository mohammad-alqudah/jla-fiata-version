import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BookOpen, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiplomaPrograms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">FIATA Diploma Programs</h1>
          <p className="text-xl">World-Class Professional Education in Logistics</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join a World-Class Diploma Program</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            FIATA has developed minimum standards for professional education in freight forwarding and supply chain management. Based on these standards, there are two main FIATA diploma types.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">FIATA Diploma in Freight Forwarding</h3>
            </div>

            <div className="mb-6">
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Consists of 15 comprehensive modules</span>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Covers multimodal transport operations</span>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Air transport and cargo handling</span>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Customs procedures and compliance</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Digital operations and technology</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-blue-900 mb-1">Available in Jordan</p>
              <p className="text-sm text-blue-700">Delivered by JLA - FIATA Association Member</p>
            </div>

            <Link
              to="/fiata/diploma-details"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              View Full Details
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-purple-600">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-3 rounded-full">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">FIATA Higher Diploma in Supply Chain Management</h3>
            </div>

            <div className="mb-6">
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Standalone advanced program</span>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Progression pathway for professionals</span>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Includes 8 specialized modules</span>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Global purchasing strategies</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Production and operations management</span>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-purple-900 mb-1">Coming Soon</p>
              <p className="text-sm text-purple-700">Future expansion planned for Jordan</p>
            </div>

            <button
              disabled
              className="block w-full text-center bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
            >
              Not Yet Available
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">FIATA Training in Jordan</h2>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Jordan, the <strong>Jordanian Logistics Association (JLA)</strong> is accredited to deliver the <strong>FIATA Diploma in Freight Forwarding</strong>, with the potential to grow into further FIATA-aligned programs in the future.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This accreditation ensures that the training meets FIATA's rigorous international standards and provides participants with globally recognized qualifications that open doors to career opportunities worldwide.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your FIATA Journey?</h3>
          <p className="text-lg mb-6">
            Explore the FIATA Diploma in Freight Forwarding and take the first step toward international recognition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/fiata/diploma-details"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
            >
              View Diploma Details
            </Link>
            <Link
              to="/fiata/contact"
              className="inline-block bg-blue-700 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DiplomaPrograms;
