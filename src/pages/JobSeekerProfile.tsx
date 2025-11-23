import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { User, Upload, FileText, CheckCircle } from 'lucide-react';

export default function JobSeekerProfile() {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    bio: '',
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-red-600 p-6">
              <div className="flex items-center justify-center gap-3">
                <User className="text-white" size={32} />
                <h1 className="text-3xl font-bold text-white">الملف الشخصي - باحث عن عمل</h1>
              </div>
            </div>

            <div className="p-8">
              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="text-green-600" size={20} />
                    <p className="text-green-600 text-sm">تم تحديث الملف الشخصي بنجاح</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    الاسم الأول *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.first_name}
                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    الاسم الثاني
                  </label>
                  <input
                    type="text"
                    value={formData.middle_name}
                    onChange={(e) => setFormData({ ...formData, middle_name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    اسم العائلة *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.last_name}
                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    نبذة قصيرة
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    rows={4}
                    placeholder="اكتب نبذة قصيرة عنك وعن خبراتك..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>

                <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Upload className="inline ml-2" size={20} />
                    الصورة الشخصية
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProfileImage(e.target.files?.[0] || null)}
                    className="w-full"
                  />
                  {profileImage && (
                    <p className="text-sm text-green-600 mt-2">✓ {profileImage.name}</p>
                  )}
                </div>

                <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <FileText className="inline ml-2" size={20} />
                    السيرة الذاتية (CV)
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                    className="w-full"
                  />
                  {cvFile && (
                    <p className="text-sm text-green-600 mt-2">✓ {cvFile.name}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                >
                  حفظ التغييرات
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
