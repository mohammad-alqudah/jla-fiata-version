import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Award } from 'lucide-react';

const Experts = () => {
  const experts = [
    {
      name: 'Hassan Al Shaar',
      title: 'FIATA Certified Expert',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Hassan Al Shaar is a seasoned logistics and freight forwarding expert with over 20 years of experience in the industry. He has been validated by FIATA as a certified instructor and has trained hundreds of professionals across the Middle East region.'
    },
    {
      name: 'Nizar Haddadin',
      title: 'FIATA Certified Expert',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Nizar Haddadin brings extensive knowledge in international trade compliance and customs procedures. With a career spanning multiple continents, he provides invaluable insights into global logistics operations and regulatory frameworks.'
    },
    {
      name: 'Osama Al-Zu\'bi',
      title: 'FIATA Certified Expert',
      image: 'https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Osama Al-Zu\'bi specializes in supply chain optimization and multimodal transport solutions. His practical approach to teaching combines theoretical knowledge with real-world case studies from his extensive industry experience.'
    },
    {
      name: 'Ramy Kawar',
      title: 'FIATA Certified Expert',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ramy Kawar is an expert in air cargo operations and dangerous goods handling. His specialized knowledge in aviation logistics and safety compliance makes him a valuable resource for understanding complex regulatory requirements.'
    },
    {
      name: 'Nabile Barakat',
      title: 'FIATA Certified Expert',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Nabile Barakat has deep expertise in maritime shipping and containerized cargo operations. With decades of hands-on experience in port operations and ocean freight, he brings practical insights to complex shipping scenarios.'
    },
    {
      name: 'Marwan Banat',
      title: 'FIATA Certified Expert',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Marwan Banat specializes in cargo insurance, risk management, and freight documentation. His comprehensive understanding of legal frameworks and insurance principles helps students navigate the complex world of liability and claims.'
    },
    {
      name: 'Mohammad Alag',
      title: 'FIATA Certified Expert',
      image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Mohammad Alag is an authority on digital transformation in logistics and emerging technologies. He helps students understand how automation, blockchain, and digital platforms are reshaping the freight forwarding industry.'
    },
    {
      name: 'Abdullah Joubor',
      title: 'FIATA Certified Expert',
      image: 'https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Abdullah Joubor brings expertise in land transport operations and cross-border logistics. His knowledge of regional trade corridors and transport infrastructure is invaluable for understanding overland freight movements in the Middle East.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-green-700 to-green-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <div className="flex justify-center mb-4">
            <Award className="w-16 h-16" />
          </div>
          <h1 className="text-5xl font-bold mb-4">FIATA Certified Experts</h1>
          <p className="text-xl">Learn from Industry-Leading Professionals</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our FIATA Diploma program is delivered by highly experienced logistics and freight forwarding professionals who have been validated by FIATA. Each instructor brings decades of real-world experience and a passion for developing the next generation of logistics experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{expert.title}</p>
                <p className="text-gray-700 leading-relaxed">{expert.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Learn from the Best</h3>
          <p className="text-lg mb-6">
            Join our FIATA Diploma program and benefit from the expertise of these industry-leading professionals.
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

export default Experts;
