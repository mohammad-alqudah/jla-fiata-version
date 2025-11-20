import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Download, FileText, Clock, MapPin, Award, Users, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiplomaDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-96 bg-gradient-to-r from-blue-800 to-blue-950 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">FIATA Diploma in Freight Forwarding</h1>
          <p className="text-xl mb-8 leading-relaxed">
            Enroll in the JLA FIATA Diploma in Freight Forwarding and take your logistics career to the next level. Earn global recognition, build your professional network, and develop the skills needed in today's competitive logistics industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:fiata@jla.jo"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
            >
              Apply Now
            </a>
            <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white">
              <Download className="w-5 h-5" />
              Download Applicant Brochure
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The International Federation of Freight Forwarders Associations (FIATA), based in Zurich, Switzerland, is the global umbrella body for the freight forwarding industry. FIATA's commitment to excellence in education is embodied in its Advisory Body Vocational Training (ABVT), which has established comprehensive standards for awarding the FIATA Diploma in Freight Forwarding.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The FIATA Diploma is an internationally recognised qualification covering the core principles of freight forwarding and international supply chains. Since its launch in 1996, it has become a benchmark of professional competence for freight forwarding operations worldwide.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Application Form – FIATA Diploma in Freight Forwarding
            </h3>
            <p className="text-blue-800">
              Please complete the form and email it to: <a href="mailto:fiata@jla.jo" className="font-semibold underline">fiata@jla.jo</a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Learning Objectives</h2>
          <p className="text-gray-700 mb-6">
            This internationally recognised Diploma in Freight Forwarding aims to equip aspiring and current professionals with the knowledge and practical skills required to:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Gain foundational knowledge of freight forwarding and global logistics</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Understand international transport systems including sea, air, road, and rail</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Navigate global regulations, customs procedures, and legal frameworks</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Master essential transport documentation and FIATA documents</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Develop pricing and cost estimation skills for freight modes</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Boost operational efficiency through logistics planning</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Apply principles of risk management and insurance</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Handle dangerous goods in accordance with safety standards</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Adopt digital tools such as barcoding and e-commerce platforms</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Integrate sustainability practices and meet emissions standards</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Gain real-world experience through applied case studies</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Enhance career potential with globally recognized qualifications</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Duration</h3>
            <p className="text-gray-700">4–6 months</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-700">Amman, Jordan</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery</h3>
            <p className="text-gray-700">Face-to-Face</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Curriculum and Training Methodology</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The programme combines rigorous training with a focus on global trade practices, customs regulations, and supply chain optimisation. The training methodology balances traditional theoretical classes with case studies and practical assignments.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The programme is delivered by FIATA-validated instructors and industry experts using FIATA-approved training materials to ensure high-quality content.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Core Topics and Modules:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Introduction to Freight Forwarding and Logistics Services</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Land, Sea, Air, and Rail Transportation</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Supply Chain Management and Logistics Services</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Customs Procedures and Clearance</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Shipping Documents and International Trade</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Cargo Insurance and Risk Management</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4 italic">
            Note: A detailed module description is available in the Applicant Brochure.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Enroll</h2>
          <p className="text-gray-700 mb-4">The Diploma is intended for:</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">Fresh graduates seeking to enter the logistics sector</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">Freight forwarders and logistics professionals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">Customs clearance officers and transport officials</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">Owners and managers of SMEs in the logistics sector</span>
            </li>
          </ul>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-3">Admission Requirements:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800">Secondary education certificate or equivalent</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800">Competence in the English language</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Selection Criteria</h2>
          <p className="text-gray-700 leading-relaxed">
            The Selection Committee reserves the right to interview candidates to validate the coherence of their professional background, qualifications, and motivation for pursuing the FIATA Diploma in Freight Forwarding. This ensures that applicants' profiles align with the programme's Selection Criteria and objectives.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Fees & Support</h2>
          </div>
          <p className="text-gray-700 mb-4">The Diploma programme fee includes:</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span className="text-gray-700">Enrollment fees</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span className="text-gray-700">Training materials</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span className="text-gray-700">Certification upon completion</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span className="text-gray-700">Daily refreshments during the training course</span>
            </li>
          </ul>
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded mb-6">
            <p className="text-green-900 font-semibold mb-2">Flexible payment options are available, allowing participants to pay in installments.</p>
            <p className="text-green-800">Special discounts are available for group enrollments and Jordanian Logistics Association (JLA) members.</p>
          </div>
          <p className="text-gray-700 mb-4">To learn more about programme fees, discounts, and installment plans, please contact JLA:</p>
          <div className="flex flex-col gap-2">
            <p className="text-gray-700"><span className="font-semibold">Phone:</span> +962-6-5658094</p>
            <p className="text-gray-700"><span className="font-semibold">Email:</span> <a href="mailto:fiata@jla.jo" className="text-blue-600 hover:underline">fiata@jla.jo</a></p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Certification</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Graduates will receive a FIATA Diploma in Freight Forwarding signed by the FIATA President and FIATA Director General, including:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-yellow-600 mt-1" />
              <span className="text-gray-700">Title of the diploma</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-yellow-600 mt-1" />
              <span className="text-gray-700">Diploma number</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-yellow-600 mt-1" />
              <span className="text-gray-700">Name of the graduate</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-yellow-600 mt-1" />
              <span className="text-gray-700">Date and place of issuance</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-lg mb-6">
            Take the next step in your logistics career with the FIATA Diploma in Freight Forwarding.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:fiata@jla.jo"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
            >
              Apply Now
            </a>
            <Link
              to="/fiata/faqs"
              className="inline-block bg-blue-700 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DiplomaDetails;
