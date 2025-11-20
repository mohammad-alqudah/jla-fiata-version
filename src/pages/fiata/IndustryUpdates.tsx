import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Newspaper, ExternalLink } from 'lucide-react';

const IndustryUpdates = () => {
  const updates = [
    {
      title: 'FIATA Review – March 2025',
      description: 'The latest edition of the FIATA Association Magazine featuring industry insights, policy updates, and global logistics trends. Stay informed about the latest developments in freight forwarding worldwide.',
      link: 'https://www.flipsnack.com/fiata/fiata-review-march-2025/full-view.html',
      date: 'March 2025',
      category: 'Magazine'
    },
    {
      title: 'Global Freight Forwarding Standards Update',
      description: 'FIATA announces new guidelines for digital documentation and e-freight initiatives, aimed at streamlining international trade processes and reducing paper-based transactions.',
      date: 'February 2025',
      category: 'Standards'
    },
    {
      title: 'Sustainability in Logistics: FIATA Green Initiative',
      description: 'New sustainability framework introduced for freight forwarders to measure and reduce carbon emissions across supply chain operations.',
      date: 'January 2025',
      category: 'Sustainability'
    },
    {
      title: 'Digital Transformation in Freight Forwarding',
      description: 'Industry report on the adoption of blockchain, AI, and IoT technologies in modern logistics operations and their impact on efficiency and transparency.',
      date: 'December 2024',
      category: 'Technology'
    },
    {
      title: 'Trade Facilitation and Customs Modernization',
      description: 'FIATA collaborates with WCO on initiatives to harmonize customs procedures and accelerate cross-border trade facilitation globally.',
      date: 'November 2024',
      category: 'Policy'
    },
    {
      title: 'Dangerous Goods Regulations Update',
      description: 'Latest amendments to IATA Dangerous Goods Regulations and their implications for air cargo operations and safety compliance.',
      date: 'October 2024',
      category: 'Regulations'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-teal-700 to-teal-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <div className="flex justify-center mb-4">
            <Newspaper className="w-16 h-16" />
          </div>
          <h1 className="text-5xl font-bold mb-4">FIATA Industry Updates</h1>
          <p className="text-xl">Latest News and Developments in Freight Forwarding</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Stay up to date with the latest news, policy updates, and industry developments from FIATA and the global freight forwarding community.
          </p>
        </div>

        <div className="grid gap-6">
          {updates.map((update, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-sm font-semibold rounded-full">
                      {update.category}
                    </span>
                    <span className="text-sm text-gray-500">{update.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{update.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{update.description}</p>
                </div>
              </div>
              {update.link && (
                <a
                  href={update.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
                >
                  Read More <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg shadow-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">FIATA Association Magazine</h3>
              <p className="text-lg mb-2">Check out the latest FIATA Review</p>
              <p className="text-3xl font-bold mb-6">March 2025 Edition</p>
              <a
                href="https://www.flipsnack.com/fiata/fiata-review-march-2025/full-view.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
              >
                Read the Magazine <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h4 className="font-bold text-xl mb-3">Stay Connected</h4>
              <p className="mb-4">
                Subscribe to receive updates about FIATA news, training opportunities, and industry developments.
              </p>
              <a
                href="/fiata/contact"
                className="inline-block bg-teal-700 hover:bg-teal-900 text-white px-6 py-3 rounded-lg font-semibold transition border-2 border-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndustryUpdates;
