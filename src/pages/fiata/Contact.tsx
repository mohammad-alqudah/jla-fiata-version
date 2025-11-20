import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { MapPin, Phone, Mail, Globe, Facebook, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredLanguage: [] as string[],
    otherLanguage: '',
    currentRole: '',
    organization: '',
    industrySector: '',
    yearsExperience: '',
    location: '',
    message: '',
    agreeContact: false,
    subscribeNewsletter: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleLanguageChange = (language: string) => {
    setFormData(prev => {
      const languages = prev.preferredLanguage.includes(language)
        ? prev.preferredLanguage.filter(l => l !== language)
        : [...prev.preferredLanguage, language];
      return { ...prev, preferredLanguage: languages };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submission will be implemented. For now, please email fiata@jla.jo');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-80 bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in Touch with the Jordanian Logistics Association</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Address</h3>
            <p className="text-gray-700 leading-relaxed">
              Shmeissani, Yousef Bin Tashfeen Str., Bldg.18<br />
              P.O Box 941329<br />
              Amman 11194, Jordan
            </p>
            <button className="mt-4 text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              View Map
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Phone & WhatsApp</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Phone:</span><br />
              <a href="tel:+96265658094" className="hover:text-blue-600">+962-6-5658094</a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">WhatsApp:</span><br />
              <a href="https://wa.me/962793555761" className="hover:text-blue-600">+962-793555761</a>
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Email & Website</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email:</span><br />
              <a href="mailto:fiata@jla.jo" className="hover:text-blue-600">fiata@jla.jo</a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Website:</span><br />
              <a href="http://www.JLAFIATA.jo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">www.JLAFIATA.jo</a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center gap-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/jla"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/company/jla"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Send Us an Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number (with country code)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+962-XXX-XXXXXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Preferred Language
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.preferredLanguage.includes('English')}
                    onChange={() => handleLanguageChange('English')}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-600"
                  />
                  <span className="ml-2 text-gray-700">English</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.preferredLanguage.includes('Arabic')}
                    onChange={() => handleLanguageChange('Arabic')}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Arabic</span>
                </label>
              </div>
              <input
                type="text"
                name="otherLanguage"
                value={formData.otherLanguage}
                onChange={handleInputChange}
                placeholder="Other (please specify)"
                className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Current Role / Occupation
                </label>
                <input
                  type="text"
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Organization / Company Name
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Industry Sector
                </label>
                <input
                  type="text"
                  name="industrySector"
                  value={formData.industrySector}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Years of Experience
                </label>
                <select
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="0-1">0–1 years</option>
                  <option value="2-4">2–4 years</option>
                  <option value="5-7">5–7 years</option>
                  <option value="8+">8+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Location (City/Country)
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message / Specific Inquiry <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              ></textarea>
            </div>

            <div className="space-y-3">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeContact"
                  checked={formData.agreeContact}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-600 mt-1"
                />
                <span className="ml-2 text-gray-700">
                  I agree to receive emails or phone calls from JLA regarding my inquiry.
                </span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="subscribeNewsletter"
                  checked={formData.subscribeNewsletter}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-600 mt-1"
                />
                <span className="ml-2 text-gray-700">
                  I would like to subscribe to the JLA newsletter for updates and opportunities.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
