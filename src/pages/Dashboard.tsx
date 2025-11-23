import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { User, Building, Briefcase, FileText, CheckCircle, Upload } from 'lucide-react';

type UserType = 'job_seeker' | 'organization';
type TabType = 'profile' | 'jobs';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userType] = useState<UserType>('organization');
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [success, setSuccess] = useState(false);

  const [jobSeekerProfile, setJobSeekerProfile] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    bio: '',
  });

  const [orgProfile, setOrgProfile] = useState({
    company_name_ar: '',
    company_name_en: '',
    registration_number: '',
    mobile: '',
    email: '',
    city: '',
  });

  const [jobPost, setJobPost] = useState({
    title: '',
    description: '',
    location: '',
    type: '',
    salary: '',
    requirements: '',
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-red-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {userType === 'job_seeker' ? (
                    <User className="text-white" size={32} />
                  ) : (
                    <Building className="text-white" size={32} />
                  )}
                  <div>
                    <h1 className="text-3xl font-bold text-white">لوحة التحكم</h1>
                    <p className="text-red-100 text-sm mt-1">
                      {userType === 'job_seeker' ? 'باحث عن عمل' : 'عضو في النقابة'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/')}
                  className="text-white hover:text-red-100 text-sm"
                >
                  تسجيل الخروج
                </button>
              </div>
            </div>

            <div className="border-b">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex-1 px-6 py-4 font-medium transition-colors ${
                    activeTab === 'profile'
                      ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <FileText className="inline ml-2" size={20} />
                  الملف الشخصي
                </button>
                {userType === 'organization' && (
                  <button
                    onClick={() => setActiveTab('jobs')}
                    className={`flex-1 px-6 py-4 font-medium transition-colors ${
                      activeTab === 'jobs'
                        ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <Briefcase className="inline ml-2" size={20} />
                    نشر وظيفة
                  </button>
                )}
              </div>
            </div>

            <div className="p-8">
              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="text-green-600" size={20} />
                    <p className="text-green-600 text-sm">تم الحفظ بنجاح!</p>
                  </div>
                </div>
              )}

              {activeTab === 'profile' && userType === 'job_seeker' && (
                <form onSubmit={handleProfileSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">الملف الشخصي</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        الاسم الأول *
                      </label>
                      <input
                        type="text"
                        required
                        value={jobSeekerProfile.first_name}
                        onChange={(e) => setJobSeekerProfile({ ...jobSeekerProfile, first_name: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        الاسم الثاني
                      </label>
                      <input
                        type="text"
                        value={jobSeekerProfile.middle_name}
                        onChange={(e) => setJobSeekerProfile({ ...jobSeekerProfile, middle_name: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        اسم العائلة *
                      </label>
                      <input
                        type="text"
                        required
                        value={jobSeekerProfile.last_name}
                        onChange={(e) => setJobSeekerProfile({ ...jobSeekerProfile, last_name: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      نبذة قصيرة
                    </label>
                    <textarea
                      value={jobSeekerProfile.bio}
                      onChange={(e) => setJobSeekerProfile({ ...jobSeekerProfile, bio: e.target.value })}
                      rows={4}
                      placeholder="اكتب نبذة قصيرة عنك وعن خبراتك..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                  >
                    حفظ الملف الشخصي
                  </button>
                </form>
              )}

              {activeTab === 'profile' && userType === 'organization' && (
                <form onSubmit={handleProfileSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">معلومات الشركة</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        اسم الشركة بالعربية *
                      </label>
                      <input
                        type="text"
                        required
                        value={orgProfile.company_name_ar}
                        onChange={(e) => setOrgProfile({ ...orgProfile, company_name_ar: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        اسم الشركة بالإنجليزية *
                      </label>
                      <input
                        type="text"
                        required
                        value={orgProfile.company_name_en}
                        onChange={(e) => setOrgProfile({ ...orgProfile, company_name_en: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        رقم التسجيل *
                      </label>
                      <input
                        type="text"
                        required
                        value={orgProfile.registration_number}
                        onChange={(e) => setOrgProfile({ ...orgProfile, registration_number: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        المدينة *
                      </label>
                      <input
                        type="text"
                        required
                        value={orgProfile.city}
                        onChange={(e) => setOrgProfile({ ...orgProfile, city: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        الموبايل *
                      </label>
                      <input
                        type="tel"
                        required
                        value={orgProfile.mobile}
                        onChange={(e) => setOrgProfile({ ...orgProfile, mobile: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        required
                        value={orgProfile.email}
                        onChange={(e) => setOrgProfile({ ...orgProfile, email: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      💡 للحصول على نموذج التسجيل الكامل، يرجى زيارة صفحة{' '}
                      <button
                        type="button"
                        onClick={() => navigate('/organization-profile')}
                        className="font-bold underline hover:text-blue-900"
                      >
                        التسجيل التفصيلي
                      </button>
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                  >
                    حفظ معلومات الشركة
                  </button>
                </form>
              )}

              {activeTab === 'jobs' && userType === 'organization' && (
                <form onSubmit={handleJobSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">نشر وظيفة جديدة</h2>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      عنوان الوظيفة *
                    </label>
                    <input
                      type="text"
                      required
                      value={jobPost.title}
                      onChange={(e) => setJobPost({ ...jobPost, title: e.target.value })}
                      placeholder="مثال: مدير عمليات لوجستية"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      وصف الوظيفة *
                    </label>
                    <textarea
                      required
                      value={jobPost.description}
                      onChange={(e) => setJobPost({ ...jobPost, description: e.target.value })}
                      rows={6}
                      placeholder="اكتب وصفاً تفصيلياً للوظيفة والمهام المطلوبة..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        الموقع *
                      </label>
                      <input
                        type="text"
                        required
                        value={jobPost.location}
                        onChange={(e) => setJobPost({ ...jobPost, location: e.target.value })}
                        placeholder="مثال: عمّان، الأردن"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        نوع الوظيفة *
                      </label>
                      <select
                        required
                        value={jobPost.type}
                        onChange={(e) => setJobPost({ ...jobPost, type: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      >
                        <option value="">اختر نوع الوظيفة</option>
                        <option value="دوام كامل">دوام كامل</option>
                        <option value="دوام جزئي">دوام جزئي</option>
                        <option value="عقد">عقد</option>
                        <option value="مؤقت">مؤقت</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        الراتب
                      </label>
                      <input
                        type="text"
                        value={jobPost.salary}
                        onChange={(e) => setJobPost({ ...jobPost, salary: e.target.value })}
                        placeholder="مثال: 800-1200 دينار"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      المتطلبات *
                    </label>
                    <textarea
                      required
                      value={jobPost.requirements}
                      onChange={(e) => setJobPost({ ...jobPost, requirements: e.target.value })}
                      rows={4}
                      placeholder="اكتب المتطلبات والمؤهلات المطلوبة..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                  >
                    <Briefcase className="inline ml-2" size={20} />
                    نشر الوظيفة
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
