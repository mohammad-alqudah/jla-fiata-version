// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// import { UserPlus, Upload, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Register() {
  // const [step, setStep] = useState(1);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');
  // const [success, setSuccess] = useState(false);
  // const { signUp, user } = useAuth();
  // const navigate = useNavigate();

  // const [authData, setAuthData] = useState({
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });

  // const [formData, setFormData] = useState({
  //   company_name_ar: '',
  //   company_name_en: '',
  //   registration_number: '',
  //   company_type: '',
  //   authorized_person_name: '',
  //   national_id: '',
  //   capital: '',
  //   years_experience: 0,
  //   city: '',
  //   district: '',
  //   mobile: '',
  //   email: '',
  //   phone: '',
  //   fax: '',
  //   branches_domestic: '',
  //   branches_international: '',
  //   license: '',
  //   trucks_count: 0,
  //   storage_area: '',
  //   employees_land_shipping: 0,
  //   employees_clearance: 0,
  //   employees_sea_shipping: 0,
  //   employees_air_shipping: 0,
  //   employees_logistics: 0,
  //   employees_express_mail: 0,
  //   employees_other: 0,
  //   represents_companies: '',
  //   union_member_references: '',
  //   other_memberships: '',
  //   info_confirmed: false,
  // });

  // const [files, setFiles] = useState({
  //   registration_certificate: null as File | null,
  //   profession_license: null as File | null,
  //   license_photo: null as File | null,
  //   id_photo: null as File | null,
  //   criminal_record: null as File | null,
  //   academic_certificate: null as File | null,
  // });

  // useEffect(() => {
  //   const total =
  //     formData.employees_land_shipping +
  //     formData.employees_clearance +
  //     formData.employees_sea_shipping +
  //     formData.employees_air_shipping +
  //     formData.employees_logistics +
  //     formData.employees_express_mail +
  //     formData.employees_other;

  //   setFormData(prev => ({ ...prev, employees_total: total }));
  // }, [
  //   formData.employees_land_shipping,
  //   formData.employees_clearance,
  //   formData.employees_sea_shipping,
  //   formData.employees_air_shipping,
  //   formData.employees_logistics,
  //   formData.employees_express_mail,
  //   formData.employees_other,
  // ]);

  // const handleAuthSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError('');

  //   if (authData.password !== authData.confirmPassword) {
  //     setError('كلمات المرور غير متطابقة');
  //     return;
  //   }

  //   if (authData.password.length < 6) {
  //     setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
  //     return;
  //   }

  //   setLoading(true);
  //   const { error } = await signUp(authData.email, authData.password);

  //   if (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   } else {
  //     setFormData(prev => ({ ...prev, email: authData.email }));
  //     setStep(2);
  //     setLoading(false);
  //   }
  // };

  // const uploadFile = async (file: File, bucket: string, path: string) => {
  //   const { data, error } = await supabase.storage
  //     .from(bucket)
  //     .upload(path, file, {
  //       upsert: true,
  //     });

  //   if (error) throw error;

  //   const { data: { publicUrl } } = supabase.storage
  //     .from(bucket)
  //     .getPublicUrl(path);

  //   return publicUrl;
  // };

  // const handleFinalSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError('');

  //   if (!formData.info_confirmed) {
  //     setError('يجب تأكيد صحة المعلومات');
  //     return;
  //   }

  //   if (!user) {
  //     setError('يجب تسجيل الدخول أولاً');
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const fileUrls: any = {};

  //     if (files.registration_certificate) {
  //       fileUrls.registration_certificate_url = await uploadFile(
  //         files.registration_certificate,
  //         'documents',
  //         `${user.id}/registration_certificate_${Date.now()}.pdf`
  //       );
  //     }

  //     if (files.profession_license) {
  //       fileUrls.profession_license_url = await uploadFile(
  //         files.profession_license,
  //         'documents',
  //         `${user.id}/profession_license_${Date.now()}.pdf`
  //       );
  //     }

  //     if (files.license_photo) {
  //       fileUrls.license_photo_url = await uploadFile(
  //         files.license_photo,
  //         'documents',
  //         `${user.id}/license_photo_${Date.now()}.pdf`
  //       );
  //     }

  //     if (files.id_photo) {
  //       fileUrls.id_photo_url = await uploadFile(
  //         files.id_photo,
  //         'documents',
  //         `${user.id}/id_photo_${Date.now()}.pdf`
  //       );
  //     }

  //     if (files.criminal_record) {
  //       fileUrls.criminal_record_url = await uploadFile(
  //         files.criminal_record,
  //         'documents',
  //         `${user.id}/criminal_record_${Date.now()}.pdf`
  //       );
  //     }

  //     if (files.academic_certificate) {
  //       fileUrls.academic_certificate_url = await uploadFile(
  //         files.academic_certificate,
  //         'documents',
  //         `${user.id}/academic_certificate_${Date.now()}.pdf`
  //       );
  //     }

  //     const { error: insertError } = await supabase
  //       .from('member_registrations')
  //       .insert({
  //         user_id: user.id,
  //         ...formData,
  //         employees_total: formData.employees_land_shipping +
  //           formData.employees_clearance +
  //           formData.employees_sea_shipping +
  //           formData.employees_air_shipping +
  //           formData.employees_logistics +
  //           formData.employees_express_mail +
  //           formData.employees_other,
  //         ...fileUrls,
  //       });

  //     if (insertError) throw insertError;

  //     setSuccess(true);
  //     setTimeout(() => {
  //       navigate('/');
  //     }, 3000);
  //   } catch (err: any) {
  //     setError(err.message || 'حدث خطأ أثناء تقديم الطلب');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // if (success) {
  //   return (
  //     <div className="min-h-screen bg-slate-50">
  //       <Navbar />
  //       <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
  //         <div className="max-w-2xl mx-auto text-center">
  //           <div className="bg-white rounded-lg shadow-xl p-12">
  //             <CheckCircle className="text-green-600 mx-auto mb-6" size={64} />
  //             <h1 className="text-3xl font-bold text-slate-900 mb-4">
  //               تم تقديم الطلب بنجاح
  //             </h1>
  //             <p className="text-slate-600 text-lg mb-6">
  //               سيتم مراجعة طلبك والرد عليك في أقرب وقت ممكن
  //             </p>
  //             <p className="text-slate-500">
  //               جاري توجيهك إلى الصفحة الرئيسية...
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-red-600 p-6">
              <div className="flex items-center justify-center gap-3">
                {/* <UserPlus className="text-white" size={32} /> */}
                <h1 className="text-3xl font-bold text-white text-center">
                  التسجيل كعضو في النقابة
                </h1>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                {/* ${step >= 1 ? 'text-white' : 'text-red-300'} */}
                <div className={`flex items-center gap-2 `}>
                  {/* ${step >= 1 ? 'bg-white text-red-600' : 'bg-red-400'} */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center  font-bold`}>
                    1
                  </div>
                  <span className="font-medium">إنشاء حساب</span>
                </div>
                {/* ${step >= 2 ? 'bg-white' : 'bg-red-400'} */}
                <div className={`w-16 h-0.5 `} />
                {/* ${step >= 2 ? 'text-white' : 'text-red-300'} */}
                <div className={`flex items-center gap-2 `}>
                  {/* ${step >= 2 ? 'bg-white text-red-600' : 'bg-red-400'} */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center  font-bold`}>
                    2
                  </div>
                  <span className="font-medium">بيانات الشركة</span>
                </div>
                {/* ${step >= 3 ? 'bg-white' : 'bg-red-400'} */}
                <div className={`w-16 h-0.5 `} />
                {/* ${step >= 3 ? 'text-white' : 'text-red-300'} */}
                <div className={`flex items-center gap-2 `}>
                  {/*  ${step >= 3 ? 'bg-white text-red-600' : 'bg-red-400'} */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold`}>
                    3
                  </div>
                  <span className="font-medium">المرفقات</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              {false && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm text-center"> error text</p>
                </div>
              )}

               {true && (
                <form  className="space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">إنشاء حساب</h2>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      required
                      // value={authData.email}
                      // onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      كلمة المرور
                    </label>
                    <input
                      type="password"
                      required
                      // value={authData.password}
                      // onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      تأكيد كلمة المرور
                    </label>
                    <input
                      type="password"
                      required
                      // value={authData.confirmPassword}
                      // onChange={(e) => setAuthData({ ...authData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={false}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 disabled:opacity-50"
                  >
                    {false ? 'جاري الإنشاء...' : 'التالي'}
                  </button>
                </form>
              )}
{/*
              {step === 2 && (
                <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">بيانات الشركة</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        اسم الشركة بالعربية *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company_name_ar}
                        onChange={(e) => setFormData({ ...formData, company_name_ar: e.target.value })}
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
                        value={formData.company_name_en}
                        onChange={(e) => setFormData({ ...formData, company_name_en: e.target.value })}
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
                        value={formData.registration_number}
                        onChange={(e) => setFormData({ ...formData, registration_number: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        نوع الشركة *
                      </label>
                      <select
                        required
                        value={formData.company_type}
                        onChange={(e) => setFormData({ ...formData, company_type: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      >
                        <option value="">اختر نوع الشركة</option>
                        <option value="شركة مساهمة عامة">شركة مساهمة عامة</option>
                        <option value="شركة مساهمة خاصة">شركة مساهمة خاصة</option>
                        <option value="شركة ذات مسؤولية محدودة">شركة ذات مسؤولية محدودة</option>
                        <option value="مؤسسة فردية">مؤسسة فردية</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        اسم المفوض *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.authorized_person_name}
                        onChange={(e) => setFormData({ ...formData, authorized_person_name: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        الرقم الوطني *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.national_id}
                        onChange={(e) => setFormData({ ...formData, national_id: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        رأس المال *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.capital}
                        onChange={(e) => setFormData({ ...formData, capital: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        عدد سنوات الخبرة *
                      </label>
                      <input
                        type="number"
                        required
                        min="0"
                        value={formData.years_experience}
                        onChange={(e) => setFormData({ ...formData, years_experience: parseInt(e.target.value) })}
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
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        الحي *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
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
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        الهاتف
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        الفاكس
                      </label>
                      <input
                        type="text"
                        value={formData.fax}
                        onChange={(e) => setFormData({ ...formData, fax: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        الترخيص *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.license}
                        onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        عدد الشاحنات
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={formData.trucks_count}
                        onChange={(e) => setFormData({ ...formData, trucks_count: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        مستودعات التخزين بالمتر المربع
                      </label>
                      <input
                        type="text"
                        value={formData.storage_area}
                        onChange={(e) => setFormData({ ...formData, storage_area: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      الفروع داخل المملكة
                    </label>
                    <textarea
                      value={formData.branches_domestic}
                      onChange={(e) => setFormData({ ...formData, branches_domestic: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      الفروع خارج المملكة
                    </label>
                    <textarea
                      value={formData.branches_international}
                      onChange={(e) => setFormData({ ...formData, branches_international: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">عدد الموظفين العاملين في:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          الشحن البري
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={formData.employees_land_shipping}
                          onChange={(e) => setFormData({ ...formData, employees_land_shipping: parseInt(e.target.value) || 0 })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          التخليص
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={formData.employees_clearance}
                          onChange={(e) => setFormData({ ...formData, employees_clearance: parseInt(e.target.value) || 0 })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          الشحن البحري
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={formData.employees_sea_shipping}
                          onChange={(e) => setFormData({ ...formData, employees_sea_shipping: parseInt(e.target.value) || 0 })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          الشحن الجوي
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={formData.employees_air_shipping}
                          onChange={(e) => setFormData({ ...formData, employees_air_shipping: parseInt(e.target.value) || 0 })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          الخدمات اللوجستية
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={formData.employees_logistics}
                          onChange={(e) => setFormData({ ...formData, employees_logistics: parseInt(e.target.value) || 0 })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          البريد السريع
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={formData.employees_express_mail}
                          onChange={(e) => setFormData({ ...formData, employees_express_mail: parseInt(e.target.value) || 0 })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          أخرى
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={formData.employees_other}
                          onChange={(e) => setFormData({ ...formData, employees_other: parseInt(e.target.value) || 0 })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          الإجمالي
                        </label>
                        <input
                          type="number"
                          value={formData.employees_land_shipping + formData.employees_clearance + formData.employees_sea_shipping + formData.employees_air_shipping + formData.employees_logistics + formData.employees_express_mail + formData.employees_other}
                          disabled
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-slate-100 font-bold"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      تمثيل شركات عالمية
                    </label>
                    <textarea
                      value={formData.represents_companies}
                      onChange={(e) => setFormData({ ...formData, represents_companies: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="اذكر أسماء الشركات العالمية التي تمثلها إن وجدت"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      المعرفين من أعضاء النقابة
                    </label>
                    <textarea
                      value={formData.union_member_references}
                      onChange={(e) => setFormData({ ...formData, union_member_references: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="أسماء الأعضاء الذين يعرفونك"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      العضوية في النقابات والجمعيات الأخرى
                    </label>
                    <textarea
                      value={formData.other_memberships}
                      onChange={(e) => setFormData({ ...formData, other_memberships: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-slate-200 text-slate-700 py-3 rounded-lg font-medium hover:bg-slate-300 transition-colors duration-200"
                    >
                      السابق
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                    >
                      التالي
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={handleFinalSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">رفع المرفقات</h2>

                  <div className="space-y-4">
                    <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        شهادة تسجيل
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => setFiles({ ...files, registration_certificate: e.target.files?.[0] || null })}
                        className="w-full"
                      />
                      {files.registration_certificate && (
                        <p className="text-sm text-green-600 mt-2">✓ {files.registration_certificate.name}</p>
                      )}
                    </div>

                    <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        رخصة مهن سارية
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => setFiles({ ...files, profession_license: e.target.files?.[0] || null })}
                        className="w-full"
                      />
                      {files.profession_license && (
                        <p className="text-sm text-green-600 mt-2">✓ {files.profession_license.name}</p>
                      )}
                    </div>

                    <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        صورة ترخيص
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => setFiles({ ...files, license_photo: e.target.files?.[0] || null })}
                        className="w-full"
                      />
                      {files.license_photo && (
                        <p className="text-sm text-green-600 mt-2">✓ {files.license_photo.name}</p>
                      )}
                    </div>

                    <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        صورة عن الهوية
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => setFiles({ ...files, id_photo: e.target.files?.[0] || null })}
                        className="w-full"
                      />
                      {files.id_photo && (
                        <p className="text-sm text-green-600 mt-2">✓ {files.id_photo.name}</p>
                      )}
                    </div>

                    <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        شهادة عدم محكومية
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => setFiles({ ...files, criminal_record: e.target.files?.[0] || null })}
                        className="w-full"
                      />
                      {files.criminal_record && (
                        <p className="text-sm text-green-600 mt-2">✓ {files.criminal_record.name}</p>
                      )}
                    </div>

                    <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        صورة مؤهل علمي
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => setFiles({ ...files, academic_certificate: e.target.files?.[0] || null })}
                        className="w-full"
                      />
                      {files.academic_certificate && (
                        <p className="text-sm text-green-600 mt-2">✓ {files.academic_certificate.name}</p>
                      )}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.info_confirmed}
                        onChange={(e) => setFormData({ ...formData, info_confirmed: e.target.checked })}
                        className="mt-1 w-5 h-5 text-red-600 border-slate-300 rounded focus:ring-red-600"
                      />
                      <span className="text-sm text-slate-700">
                        أقر بأن جميع المعلومات والبيانات المقدمة صحيحة وكاملة، وأتحمل المسؤولية القانونية الكاملة عن أي معلومات خاطئة أو مضللة.
                      </span>
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 bg-slate-200 text-slate-700 py-3 rounded-lg font-medium hover:bg-slate-300 transition-colors duration-200"
                    >
                      السابق
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        'جاري تقديم الطلب...'
                      ) : (
                        <>
                          <Upload size={20} />
                          تقديم الطلب
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )} */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
