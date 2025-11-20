import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Building2, Award, Users, Globe } from 'lucide-react';

const JlaMember = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-green-700 to-green-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">JLA as FIATA Association Member</h1>
          <p className="text-xl">Official FIATA Member in Jordan</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <Building2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Jordanian Logistics Association</h2>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Jordanian Logistics Association (JLA) was established in October 2007 to represent the freight forwarding industry in Jordan. Although freight forwarders play a significant role in the transportation sector, there was previously no dedicated official body acting as their spokesman with the government, transport users, and related organisations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Since its inception, JLA has received continuous support and recognition from Jordan's Ministry of Transport and the International Federation of Freight Forwarders Associations (FIATA).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">FIATA Accreditation</h3>
            </div>
            <p className="text-gray-700">
              JLA is the <strong>FIATA Association Member in Jordan</strong>, accredited to conduct a validated training programme leading to the FIATA Diploma in Freight Forwarding.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">Regional Leadership</h3>
            </div>
            <p className="text-gray-700">
              It is the only accredited member in Jordan to deliver this certified training, and one of the few accredited members in the Arab region.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-full">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership with LogiSkills</h2>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Through this Diploma program, JLA and the <strong>National Sector Skills Council for Logistics (Logiskills)</strong> aim to bridge the skills gap in the logistics sector in Jordan and the region, better aligning labour market demands with workforce skills and supporting the country's economic development.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join a World-Class Program?</h3>
          <p className="text-lg mb-6">
            Discover how JLA's FIATA-accredited training can advance your logistics career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/fiata/diploma-details"
              className="inline-block bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
            >
              View Diploma Program
            </a>
            <a
              href="/fiata/contact"
              className="inline-block bg-green-700 hover:bg-green-900 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JlaMember;
