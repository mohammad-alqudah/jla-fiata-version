import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, User, Building } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type UserType = 'job_seeker' | 'organization';

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'type' | 'credentials'>('type');
  const [userType, setUserType] = useState<UserType | null>(null);

  const [authData, setAuthData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleTypeSelection = (type: UserType) => {
    setUserType(type);
    setStep('credentials');
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-red-600 p-6">
              <div className="flex items-center justify-center gap-3">
                <UserPlus className="text-white" size={32} />
                <h1 className="text-3xl font-bold text-white text-center">
                  التسجيل
                </h1>
              </div>
            </div>

            <div className="p-8">
              {step === 'type' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
                    اختر نوع الحساب
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button
                      type="button"
                      onClick={() => handleTypeSelection('job_seeker')}
                      className="group p-8 border-2 border-slate-300 rounded-lg hover:border-red-600 hover:bg-red-50 transition-all duration-200"
                    >
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 bg-red-100 group-hover:bg-red-200 rounded-full flex items-center justify-center transition-colors duration-200">
                          <User className="text-red-600" size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">
                          باحث عن عمل
                        </h3>
                        <p className="text-slate-600 text-center text-sm">
                          للأفراد الباحثين عن فرص عمل في مجال الخدمات اللوجستية
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleTypeSelection('organization')}
                      className="group p-8 border-2 border-slate-300 rounded-lg hover:border-red-600 hover:bg-red-50 transition-all duration-200"
                    >
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 bg-red-100 group-hover:bg-red-200 rounded-full flex items-center justify-center transition-colors duration-200">
                          <Building className="text-red-600" size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">
                          عضو في النقابة
                        </h3>
                        <p className="text-slate-600 text-center text-sm">
                          للمنظمات والشركات الراغبة بالانضمام إلى النقابة اللوجستية
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {step === 'credentials' && (
                <form onSubmit={handleAuthSubmit} className="space-y-6">
                  <div className="mb-6">
                    <button
                      type="button"
                      onClick={() => {
                        setStep('type');
                        setUserType(null);
                      }}
                      className="text-red-600 hover:text-red-700 text-sm font-medium"
                    >
                      ← تغيير نوع الحساب
                    </button>
                    <div className="mt-3 p-4 bg-slate-50 rounded-lg">
                      <p className="text-sm text-slate-600">
                        نوع الحساب المختار:{' '}
                        <span className="font-bold text-slate-900">
                          {userType === 'job_seeker' ? 'باحث عن عمل' : 'عضو في النقابة'}
                        </span>
                      </p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    إنشاء حساب
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      required
                      value={authData.email}
                      onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      كلمة المرور *
                    </label>
                    <input
                      type="password"
                      required
                      value={authData.password}
                      onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      تأكيد كلمة المرور *
                    </label>
                    <input
                      type="password"
                      required
                      value={authData.confirmPassword}
                      onChange={(e) => setAuthData({ ...authData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                  >
                    إنشاء الحساب
                  </button>

                  <p className="text-center text-sm text-slate-600">
                    لديك حساب بالفعل؟{' '}
                    <a href="/login" className="text-red-600 hover:text-red-700 font-medium">
                      تسجيل الدخول
                    </a>
                  </p>
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
