import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Globe, Target, Award, GraduationCap } from 'lucide-react';

const AboutFiata = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About FIATA</h1>
          <p className="text-xl">International Federation of Freight Forwarders Associations</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is FIATA?</h2>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            FIATA, the International Federation of Freight Forwarders Associations, is a non-governmental, membership-based organisation. FIATA represents the interests of freight forwarders worldwide by actively engaging with the World Trade Organization, United Nations agencies, international transport organisations, global partners, and governments to promote and protect the freight forwarding and logistics industry.
          </p>
          <p className="text-gray-700 leading-relaxed">
            FIATA serves as a reference source on international policies and regulations governing the freight forwarding and logistics sector. It represents service providers in trade logistics and supply chain management. Through FIATA documents and forms, digitalisation of key trade documents, its annual congress and headquarters meetings, training programmes, and publications, FIATA promotes trade facilitation and best practices across the freight forwarding community.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">FIATA's Objectives</h2>
            </div>
          </div>
          <p className="text-gray-700 mb-4">FIATA's objectives are to:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">Unite the freight forwarding industry worldwide</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">Represent, promote, and protect the interests of the industry by participating as advisors or experts in international transport-related meetings</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">Familiarise trade, industry, and the public with the services provided by freight forwarders through information and publications</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">Standardise and improve the quality of services delivered by freight forwarders by developing and promoting uniform forwarding documents and standard trading conditions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">Assist with vocational training, liability insurance, and tools for electronic commerce such as EDI and barcodes</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-full">
              <GraduationCap className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">FIATA Logistics Institute (FLI)</h2>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Training and education activities at FIATA take place under the FIATA Logistics Institute (FLI). FLI equips the logistics workforce with the skills and competences needed through initiatives such as:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">FIATA Diplomas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">ICAO–FIATA Dangerous Goods by Air Training Programme</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span className="text-gray-700">Young Logistics Professionals Award</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">FIATA Individual Membership</h2>
            </div>
          </div>
          <p className="leading-relaxed mb-6">
            Individual Members are forwarding and logistics companies and other legal entities closely associated with the logistics sector. Joining FIATA as an Individual Member is a voluntary decision that reflects a commitment to FIATA's objectives, rules, and Business Integrity Statement. Many members join to benefit from the strong reputation and protection of the FIATA brand.
          </p>
          <a
            href="https://join.fiata.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
          >
            Join FIATA
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutFiata;
