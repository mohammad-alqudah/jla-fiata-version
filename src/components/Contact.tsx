
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 
  return (
    <section id="contact">
           <div className="text-center mb-3">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
 {t('contact')}
           </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
{t('contact_message')}
        </p>
        </div>
      {/* Contact Form and Map */}
      
      <section className="py-16 bg-gray-50" id="contact" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 px-2 ">{t("contact")}</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact_section.full_name")} *                        
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder={t("contact_section.placeholder_name")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                     {t("contact_section.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact_section.subject")} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  >
                    <option value="">{t("contact_section.select_subject")}</option>
                    <option value="general">{t("contact_section.subjects.general")}</option>
                    <option value="membership">{t("contact_section.subjects.membership")}</option>
                    <option value="training">{t("contact_section.subjects.training")}</option>
                    <option value="events">{t("contact_section.subjects.events")}</option>
                    <option value="partnership">{t("contact_section.subjects.partnership")}</option>
                    <option value="media">{t("contact_section.subjects.media")}</option>
                    <option value="other">{t("contact_section.subjects.other")}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact_section.message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder={t("contact_section.placeholder_message")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {t("contact_section.send")}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Department Contacts */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{t("contact_section.contact_info_title")}</h3>
                <div className="space-y-3">
                  
                    <div  className=" flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700">{t("contact_section.phone")}:</span>
                      <span className="text-red-600 hover:text-red-700 text-sm">
                        00962-6-5658094
                      </span>
                    </div>
                    <div  className=" flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700">{t("contact_section.email")}:</span>
                      <span className="text-red-600 hover:text-red-700 text-sm">
                        info@jla.jo
                      </span>
                    </div>
                 
                </div>
              </div>
                {/* Map Placeholder */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{t("contact_section.location_title")}</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4 overflow-hidden">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1692.0779316010846!2d35.898973!3d31.98379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca118a33aadcb%3A0xf7d86619c29b3cc3!2sJordanian%20Logistics%20Association!5e0!3m2!1sen!2sjo!4v1763403486012!5m2!1sen!2sjo" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>{t("contact_section.address_label")}:</strong> {t("contact_section.address_value")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </section>
  );
};

export default Contact;