import { Users, Target, Eye, Award, MapPin, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import marwan from '../assets/marwan.png';
import mohamed from '../assets/mohammadAlag.jpg';
import nabile from '../assets/nabile.jpg';
import nizar from '../assets/nizar.jpg';
import osama from '../assets/osama.jpg';
import hassan from '../assets/photo hassan final.jpg';
import AbdullahJoubor from '../assets/AbdullahJoubor.jpg';

import ramy from '../assets/ramy.jpg';
import image1 from '../assets/WhatsApp Image 2023-06-15 at 1-14-31 PM.jpeg';
import image2 from '../assets/New Microsoft Word Document-pdf - Adobe Acrobat Reader -64-b.png';
import { useTranslation } from 'react-i18next';



const About = () => {
  const { t } = useTranslation();
  const milestones = [
    { year: '2009', event: 'JLA Founded', description: 'Established to unite Jordan\'s logistics professionals' },
    { year: '2012', event: 'First Certification Program', description: 'Launched professional development initiatives' },
    { year: '2015', event: '100 Members Milestone', description: 'Reached significant membership growth' },
    { year: '2018', event: 'Regional Partnerships', description: 'Expanded cooperation across the Middle East' },
    { year: '2021', event: 'Digital Transformation', description: 'Launched online platforms and services' },
    { year: '2024', event: '500+ Active Members', description: 'Became Jordan\'s largest logistics association' },
  ];

  const leadership = [
    {
      name: 'Mr.Ramy Naber',
      position: 'Secretariat',
      image: ramy,
      bio: 'Orient Heavy Haulage'
    },
    {
      name: 'Mr.Nabil Alkhatib',
      position: 'Charman',
      image: nabile,
      bio: 'Maltrans Shipping Agencies Co'
    },
    {
      name: 'Mr.Osama Hulail',
      position: 'Board Member',
      image: osama,
      bio: 'Seven Hills Cargo Services'
    },
    {
      name: 'Mr.Kareem Naouri',
      position: 'Treasurer',
      image: image2,
      bio: 'Naouri Group'
    },
    {

      name: 'Mr.Hasan Bushnaq',
      position: ' Board Member',
      image: hassan,
      bio: 'RIXOS LOGISTICS'
    },
    {

      name: 'Mr.Marwan Owais',
      position: 'Board Member',
      image: marwan,
      bio: 'Grand Arabia Forwarding & Logistic Services'
    },
    {
      name: 'Mr.Abdullah Joubor',
      position: 'Executive Manager',
      image: AbdullahJoubor,
      bio: 'Jordan Logistics Association (JLA)'
    },
    {

      name: 'Mr.Mohammad Ajlouni',
      position: 'Board Member',
      image: mohamed,
      bio: 'Al Nahrain Transportation & Marine Services'
    },
    {

      name: 'Mr.Nizar Saleh',
      position: 'Charman-President',
      image: nizar,
      bio: 'Majlan International Cargo Services'
    },
    {
      name: 'Sadi Habash',
      position: 'Board Member',
      image: image1,
      bio: 'Black Sea Shipping Services CO'
    }
  ];

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("about.title")}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              {t("about.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("missions.title")}</h3>
              <p className="text-gray-600">
                {t("missions.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("vision.title")}</h3>
              <p className="text-gray-600">
                {t("vision.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("value.title")}</h3>
              <p className="text-gray-600">
                {t("value.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("leadership.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("leadership.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-red-600 font-medium mb-3">{leader.position}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* History Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
  {t("journey.title")}
</h2>
<p className="text-xl text-gray-600">
  {t("journey.subtitle")}
</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-red-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-red-600 mr-2" />
                        <span className="text-red-600 font-bold text-lg">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>






      <Footer />
    </>

  );
};

export default About;



