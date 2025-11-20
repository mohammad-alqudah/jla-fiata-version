import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { GraduationCap } from 'lucide-react';

const DiplomaHolders = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-yellow-600 to-yellow-800 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <div className="flex justify-center mb-4">
            <GraduationCap className="w-16 h-16" />
          </div>
          <h1 className="text-5xl font-bold mb-4">FIATA Diploma Holders in Jordan</h1>
          <p className="text-xl">Celebrating Our Graduates</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            This page displays lists of graduates who have successfully completed the FIATA Diploma in Freight Forwarding in Jordan. These professionals have demonstrated their commitment to excellence in logistics and freight forwarding.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <img
              src="https://via.placeholder.com/120x80/1e40af/ffffff?text=JLA"
              alt="JLA Logo"
              className="h-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/120x80/059669/ffffff?text=LogiSkills"
              alt="LogiSkills Logo"
              className="h-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/120x80/7c3aed/ffffff?text=FIATA"
              alt="FIATA Logo"
              className="h-20 object-contain"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">2025 FIATA Diploma in Freight Forwarding</h2>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-6">
            <p className="text-blue-900 font-semibold mb-2">Class of 2025</p>
            <p className="text-blue-800">Diploma holders list will be published upon course completion.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 text-center italic">
              The list of graduates will be displayed here once the 2025 cohort completes the program.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <img
              src="https://via.placeholder.com/120x80/1e40af/ffffff?text=JLA"
              alt="JLA Logo"
              className="h-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/120x80/059669/ffffff?text=LogiSkills"
              alt="LogiSkills Logo"
              className="h-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/120x80/7c3aed/ffffff?text=FIATA"
              alt="FIATA Logo"
              className="h-20 object-contain"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">2026 FIATA Diploma in Freight Forwarding</h2>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 text-center italic">
              Applications for the 2026 cohort will open soon. Contact JLA for more information.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <img
              src="https://via.placeholder.com/120x80/1e40af/ffffff?text=JLA"
              alt="JLA Logo"
              className="h-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/120x80/059669/ffffff?text=LogiSkills"
              alt="LogiSkills Logo"
              className="h-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/120x80/7c3aed/ffffff?text=FIATA"
              alt="FIATA Logo"
              className="h-20 object-contain"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">2027 FIATA Diploma in Freight Forwarding</h2>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 text-center italic">
              Information about the 2027 cohort will be available in the future.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Next Cohort</h3>
          <p className="text-lg mb-6">
            Become a FIATA Diploma holder and join the ranks of qualified logistics professionals in Jordan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/fiata/diploma-details"
              className="inline-block bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
            >
              View Program Details
            </a>
            <a
              href="/fiata/contact"
              className="inline-block bg-yellow-700 hover:bg-yellow-900 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DiplomaHolders;
