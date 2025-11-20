import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Camera, Video } from 'lucide-react';

const MediaCentre = () => {
  const photos = [
    {
      url: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'FIATA Diploma Graduation Ceremony 2024',
      description: 'Celebrating the success of our graduates'
    },
    {
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Training Session - Customs Procedures',
      description: 'Interactive classroom learning'
    },
    {
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Group Workshop Activity',
      description: 'Collaborative problem-solving exercises'
    },
    {
      url: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Expert Instructor Presentation',
      description: 'FIATA-validated instructors in action'
    },
    {
      url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Certificate Award Ceremony',
      description: 'Proud moment for diploma recipients'
    },
    {
      url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Networking Event',
      description: 'Building professional connections'
    },
    {
      url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Case Study Discussion',
      description: 'Analyzing real-world logistics scenarios'
    },
    {
      url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Training Facility',
      description: 'Modern learning environment'
    },
    {
      url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Group Photo - Class of 2024',
      description: 'Memorable moments with fellow students'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-pink-700 to-pink-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <div className="flex justify-center mb-4">
            <Camera className="w-16 h-16" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Media Centre</h1>
          <p className="text-xl">Highlights from FIATA Diploma Deliveries in Jordan</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover highlights from FIATA Diploma deliveries in Jordan, including training sessions, graduation ceremonies, and success stories.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Photo Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{photo.title}</h3>
                  <p className="text-gray-600 text-sm">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Video Highlights</h2>
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="bg-gray-100 rounded-lg p-12 mb-6">
              <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Video content coming soon</p>
            </div>
            <p className="text-gray-700">
              We're currently compiling video highlights from our training sessions and graduation ceremonies. Check back soon for updates.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Career Advancement</h3>
              <p className="text-gray-700 leading-relaxed">
                "The FIATA Diploma opened doors I never thought possible. Within six months of completing the program, I was promoted to logistics manager at my company." - Alumni Testimonial
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Recognition</h3>
              <p className="text-gray-700 leading-relaxed">
                "Having the FIATA certification gave me credibility when applying for positions abroad. It's truly an internationally recognized qualification." - Alumni Testimonial
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Network</h3>
              <p className="text-gray-700 leading-relaxed">
                "The connections I made during the program have been invaluable. My classmates and instructors continue to be important professional contacts." - Alumni Testimonial
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Practical Skills</h3>
              <p className="text-gray-700 leading-relaxed">
                "The program's focus on real-world case studies meant I could immediately apply what I learned in my daily work. The impact was immediate." - Alumni Testimonial
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-pink-800 rounded-lg shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Be Part of Our Success Story</h3>
          <p className="text-lg mb-6">
            Join the next cohort of FIATA Diploma students and create your own success story in the logistics industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/fiata/diploma-details"
              className="inline-block bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
            >
              View Program Details
            </a>
            <a
              href="/fiata/contact"
              className="inline-block bg-pink-700 hover:bg-pink-900 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white"
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

export default MediaCentre;
