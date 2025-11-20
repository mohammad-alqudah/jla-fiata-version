// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
import { LogIn, Mail, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function Login() {
   const { t } = useTranslation();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  // const { signIn } = useAuth();
  // const navigate = useNavigate();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError('');
  //   setLoading(true);

  //   const { error } = await signIn(email, password);

  //   if (error) {
  //     setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
  //     setLoading(false);
  //   } else {
  //     navigate('/');
  //   }
  // };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-red-600 p-6">
              <div className="flex items-center justify-center gap-3">
                <LogIn className="text-white" size={32} />
                <h1 className="text-3xl font-bold text-white text-center">
                  {t("login_page.title")}
                </h1>
              </div>
            </div>

            <div className="p-8">
              {false && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm text-center">error text</p>
                </div>
              )}

              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    {t("login_page.email_label")}
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      id="email"
                      type="email"
                      required
                      value={''}
                      className="w-full pr-10 pl-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="your@email.com"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                    {t("login_page.password_label")}
                  </label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      id="password"
                      type="password"
                      required
                      value={""}
                      
                      className="w-full pr-10 pl-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder={t("login_page.password_placeholder")}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={false}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {false ? t("login_page.logging_in") : t("login_page.login_button")}
                </button>
              </form>

              <div className="mt-6 text-center">
               <p>
  {t("login_page.no_account")}{" "}
  <Link to="/register" className="text-red-600 hover:text-red-700 font-medium">
    {t("login_page.register_link")}
  </Link>
</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
