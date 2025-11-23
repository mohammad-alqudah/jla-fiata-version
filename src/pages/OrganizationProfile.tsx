import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Building, CheckCircle } from 'lucide-react';

export default function OrganizationProfile() {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    company_name_ar: '',
    company_name_en: '',
    registration_number: '',
    national_id: '',
    authorized_person_name: '',
    authorized_person_number: '',
    company_type: '',
    capital: '',
    years_experience: 0,
    city: '',
    district: '',
    street: '',
    building_number: '',
    phone: '',
    fax: '',
    mobile: '',
    email: '',
  });

  const [branches, setBranches] = useState({
    amman: false,
    aqaba: false,
    airport: false,
    other_local: '',
    iraq: false,
    uae: false,
    syria: false,
    other_international: '',
  });

  const [activities, setActivities] = useState({
    sea_shipping: false,
    air_shipping: false,
    land_shipping: false,
    express_mail: false,
    land_broker: false,
    sea_broker: false,
    sea_agent: false,
    customs_clearance: false,
    logistics: false,
    storage: false,
    storage_area: '',
  });

  const [employees, setEmployees] = useState({
    air_shipping: 0,
    sea_shipping: 0,
    land_shipping: 0,
    express_mail: 0,
    logistics: 0,
    customs: 0,
  });

  const [representsCompanies, setRepresentsCompanies] = useState(['']);
  const [memberships, setMemberships] = useState(['', '', '']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const totalEmployees = Object.values(employees).reduce((sum, val) => sum + val, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-red-600 p-6">
              <div className="flex items-center justify-center gap-3">
                <Building className="text-white" size={32} />
                <h1 className="text-3xl font-bold text-white">نموذج عضوية المنظمة</h1>
              </div>
            </div>

            <div className="p-8">
              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="text-green-600" size={20} />
                    <p className="text-green-600 text-sm">تم تقديم الطلب بنجاح! سيتم مراجعته قريباً.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">معلومات الشركة الأساسية</h2>
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
                        الرقم الوطني للمفوض *
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
                        رقم المفوض
                      </label>
                      <input
                        type="text"
                        value={formData.authorized_person_number}
                        onChange={(e) => setFormData({ ...formData, authorized_person_number: e.target.value })}
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
                        رأس المال
                      </label>
                      <input
                        type="text"
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
                        onChange={(e) => setFormData({ ...formData, years_experience: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">معلومات الاتصال</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        الشارع
                      </label>
                      <input
                        type="text"
                        value={formData.street}
                        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        رقم المبنى
                      </label>
                      <input
                        type="text"
                        value={formData.building_number}
                        onChange={(e) => setFormData({ ...formData, building_number: e.target.value })}
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
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        dir="ltr"
                      />
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">الفروع</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">فروع داخل المملكة</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={branches.amman}
                            onChange={(e) => setBranches({ ...branches, amman: e.target.checked })}
                            className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-600"
                          />
                          <span>عمّان</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={branches.aqaba}
                            onChange={(e) => setBranches({ ...branches, aqaba: e.target.checked })}
                            className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-600"
                          />
                          <span>العقبة</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={branches.airport}
                            onChange={(e) => setBranches({ ...branches, airport: e.target.checked })}
                            className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-600"
                          />
                          <span>المطار</span>
                        </label>
                      </div>
                      <input
                        type="text"
                        value={branches.other_local}
                        onChange={(e) => setBranches({ ...branches, other_local: e.target.value })}
                        placeholder="فروع أخرى"
                        className="mt-3 w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">فروع خارج المملكة</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={branches.iraq}
                            onChange={(e) => setBranches({ ...branches, iraq: e.target.checked })}
                            className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-600"
                          />
                          <span>العراق</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={branches.uae}
                            onChange={(e) => setBranches({ ...branches, uae: e.target.checked })}
                            className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-600"
                          />
                          <span>الإمارات</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={branches.syria}
                            onChange={(e) => setBranches({ ...branches, syria: e.target.checked })}
                            className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-600"
                          />
                          <span>سوريا</span>
                        </label>
                      </div>
                      <input
                        type="text"
                        value={branches.other_international}
                        onChange={(e) => setBranches({ ...branches, other_international: e.target.value })}
                        placeholder="فروع أخرى"
                        className="mt-3 w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">الترخيص / النشاط</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { key: 'sea_shipping', label: 'شحن بحري' },
                      { key: 'air_shipping', label: 'شحن جوي' },
                      { key: 'land_shipping', label: 'شحن بري' },
                      { key: 'express_mail', label: 'بريد سريع' },
                      { key: 'land_broker', label: 'وسيط شحن بري' },
                      { key: 'sea_broker', label: 'وسيط شحن بحري' },
                      { key: 'sea_agent', label: 'وكيل بحري' },
                      { key: 'customs_clearance', label: 'تخليص جمركي' },
                      { key: 'logistics', label: 'خدمات لوجستية' },
                      { key: 'storage', label: 'مستودعات تخزين' },
                    ].map(activity => (
                      <label key={activity.key} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={activities[activity.key as keyof typeof activities] as boolean}
                          onChange={(e) => setActivities({ ...activities, [activity.key]: e.target.checked })}
                          className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-600"
                        />
                        <span>{activity.label}</span>
                      </label>
                    ))}
                  </div>
                  {activities.storage && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        مساحة التخزين (متر مربع)
                      </label>
                      <input
                        type="text"
                        value={activities.storage_area}
                        onChange={(e) => setActivities({ ...activities, storage_area: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                  )}
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">عدد الموظفين حسب القطاع</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { key: 'air_shipping', label: 'الشحن الجوي' },
                      { key: 'sea_shipping', label: 'الشحن البحري' },
                      { key: 'land_shipping', label: 'الشحن البري' },
                      { key: 'express_mail', label: 'البريد السريع' },
                      { key: 'logistics', label: 'الخدمات اللوجستية' },
                      { key: 'customs', label: 'التخليص' },
                    ].map(emp => (
                      <div key={emp.key}>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {emp.label}
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={employees[emp.key as keyof typeof employees]}
                          onChange={(e) => setEmployees({ ...employees, [emp.key]: parseInt(e.target.value) || 0 })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                    <p className="text-sm font-medium text-slate-700">
                      إجمالي الموظفين: <span className="text-red-600 font-bold text-lg">{totalEmployees}</span>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">تمثيل شركات عالمية</h2>
                  <div className="space-y-3">
                    {representsCompanies.map((company, index) => (
                      <input
                        key={index}
                        type="text"
                        value={company}
                        onChange={(e) => {
                          const newCompanies = [...representsCompanies];
                          newCompanies[index] = e.target.value;
                          setRepresentsCompanies(newCompanies);
                        }}
                        placeholder={`شركة ${index + 1}`}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    ))}
                    <button
                      type="button"
                      onClick={() => setRepresentsCompanies([...representsCompanies, ''])}
                      className="text-red-600 text-sm hover:text-red-700 font-medium"
                    >
                      + إضافة شركة
                    </button>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">العضوية في نقابات/جمعيات أخرى</h2>
                  <div className="space-y-3">
                    {memberships.map((membership, index) => (
                      <input
                        key={index}
                        type="text"
                        value={membership}
                        onChange={(e) => {
                          const newMemberships = [...memberships];
                          newMemberships[index] = e.target.value;
                          setMemberships(newMemberships);
                        }}
                        placeholder={`جمعية ${index + 1}`}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    ))}
                  </div>
                </section>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-medium text-lg hover:bg-red-700 transition-colors duration-200"
                >
                  تقديم الطلب
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
