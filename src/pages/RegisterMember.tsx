import { Building2, Mail, Lock, Phone, MapPin, User, FileText, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function RegisterMember() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6">
              <div className="flex items-center justify-center gap-3">
                <Building2 className="text-white" size={32} />
                <h1 className="text-3xl font-bold text-white text-center">
                  Member Registration
                </h1>
              </div>
              <p className="text-emerald-100 text-center mt-2">Join our professional network</p>
            </div>

            <div className="p-8">
              <form className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-emerald-500">
                    Company Information
                  </h3>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="companyNameAr" className="block text-sm font-medium text-slate-700 mb-2">
                          Company Name (Arabic) *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <input
                            id="companyNameAr"
                            type="text"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                            placeholder="اسم الشركة"
                            dir="rtl"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="companyNameEn" className="block text-sm font-medium text-slate-700 mb-2">
                          Company Name (English) *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <input
                            id="companyNameEn"
                            type="text"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                            placeholder="Company Name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="registrationNumber" className="block text-sm font-medium text-slate-700 mb-2">
                          Registration Number *
                        </label>
                        <input
                          id="registrationNumber"
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                          placeholder="CR-123456"
                        />
                      </div>

                      <div>
                        <label htmlFor="companyType" className="block text-sm font-medium text-slate-700 mb-2">
                          Company Type *
                        </label>
                        <select
                          id="companyType"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent appearance-none bg-white"
                        >
                          <option value="">Select company type</option>
                          <option value="llc">Limited Liability Company</option>
                          <option value="corporation">Corporation</option>
                          <option value="partnership">Partnership</option>
                          <option value="sole">Sole Proprietorship</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-2">
                          Industry *
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <select
                            id="industry"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent appearance-none bg-white"
                          >
                            <option value="">Select industry</option>
                            <option value="logistics">Logistics & Transportation</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="technology">Technology</option>
                            <option value="retail">Retail</option>
                            <option value="services">Professional Services</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="yearsExperience" className="block text-sm font-medium text-slate-700 mb-2">
                          Years in Business *
                        </label>
                        <input
                          id="yearsExperience"
                          type="number"
                          min="0"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                          placeholder="5"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-emerald-500">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="authorizedPerson" className="block text-sm font-medium text-slate-700 mb-2">
                          Authorized Person Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <input
                            id="authorizedPerson"
                            type="text"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                            placeholder="John Smith"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-2">
                          Position *
                        </label>
                        <input
                          id="position"
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                          placeholder="CEO / Managing Director"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <input
                            id="email"
                            type="email"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                            placeholder="company@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <input
                            id="phone"
                            type="tel"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                        Company Address *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-slate-400" size={20} />
                        <textarea
                          id="address"
                          required
                          rows={3}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                          placeholder="Street address, city, state, postal code"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-emerald-500">
                    Documents
                  </h3>

                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 hover:border-emerald-500 transition-colors">
                      <label htmlFor="registration" className="block text-sm font-medium text-slate-700 mb-2">
                        Company Registration Certificate *
                      </label>
                      <div className="relative">
                        <FileText className="mx-auto text-slate-400 mb-2" size={32} />
                        <input
                          id="registration"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <p className="text-center text-sm text-slate-600">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-center text-xs text-slate-500 mt-1">
                          PDF, JPG, PNG (Max 5MB)
                        </p>
                      </div>
                    </div>

                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 hover:border-emerald-500 transition-colors">
                      <label htmlFor="license" className="block text-sm font-medium text-slate-700 mb-2">
                        Business License *
                      </label>
                      <div className="relative">
                        <FileText className="mx-auto text-slate-400 mb-2" size={32} />
                        <input
                          id="license"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <p className="text-center text-sm text-slate-600">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-center text-xs text-slate-500 mt-1">
                          PDF, JPG, PNG (Max 5MB)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-emerald-500">
                    Account Security
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                        Password *
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                          id="password"
                          type="password"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                          placeholder="••••••••"
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Must be at least 8 characters</p>
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                          id="confirmPassword"
                          type="password"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-600"
                    />
                    <span className="text-sm text-slate-700">
                      I confirm that all the information provided is accurate and complete, and I agree to the Terms and Conditions and Privacy Policy
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200"
                >
                  Submit Membership Application
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-slate-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Sign in
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
