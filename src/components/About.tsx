import { Package, FileText, Shield, Target } from 'lucide-react';
import aboutBg from '@/assets/about-bg.jpg'

export default function About() {
  return (
    <section className={`py-20  bg-cover bg-center`} style={{ backgroundImage: `url(${aboutBg})` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            من هي النقابة اللوجستية الأردنية
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-slate-100">
          <div className="max-w-5xl mx-auto text-right space-y-6 text-slate-700 leading-relaxed text-lg">
            <p>
              تأسست النقابة اللوجستية الاردنية في عام 2007 بهدف تمثيل العاملين في صناعة الشحن في الاردن، وبالرغم من الدور الأساسي لوسطاء الشحن في صناعة النقل في الاردن، الا انه لم يكن هناك جهة معنية بتمثيل هذه الفئة أمام الحكومة والجهات ذات العلاقة ومستعملي النقل قبل تأسيس النقابة اللوجستية.
            </p>
            <p>
              ومنذ تأسيس النقابة فقد تواصل الدعم والاسناد من الجهات الرسمية والعامة وكذلك المنظمة الدولية لوسطاء الشحن الدوليين <span className="font-semibold text-red-600">FIATA</span>
            </p>
            <p>
              يتضمن موقع النقابة معلومات تفصيلية محدثة عن قطاع النقل في الاردن، والاعضاء المسجلين في النقابة بالاضافة الى انشطة واخبار النقابة.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl transform transition-transform group-hover:scale-105 opacity-10"></div>
            <div className="relative bg-white rounded-2xl shadow-lg p-8 text-right border border-slate-100 hover:border-red-200 transition-all duration-300">
              <div className="flex justify-end mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-end">
                الرسالة
                <div className="w-1 h-8 bg-red-600 mr-3"></div>
              </h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                تطوير ورفع مستوى الخدمات المقدمة لمهنة وسطاء الشحن (بري, بحري, جوي) ومزودي الخدمات اللوجستية دعمآ للإقتصاد الوطني.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl transform transition-transform group-hover:scale-105 opacity-10"></div>
            <div className="relative bg-white rounded-2xl shadow-lg p-8 text-right border border-slate-100 hover:border-blue-200 transition-all duration-300">
              <div className="flex justify-end mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Package className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-end">
                الرؤية
                <div className="w-1 h-8 bg-blue-600 mr-3"></div>
              </h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                الوصول بقطاع اللوجستيات الأردني إلى أعلى مستوى من التطور والحداثة وضمان الإدارة المثلى لتدفق وتخزين السلع والخدمات والمعلومات بكفاءة عالية خدمة للمستهلك النهائي.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl transform transition-transform group-hover:scale-105 opacity-10"></div>
            <div className="relative bg-white rounded-2xl shadow-lg p-8 text-right border border-slate-100 hover:border-green-200 transition-all duration-300">
              <div className="flex justify-end mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-end">
                الأهداف الإستراتيجية
                <div className="w-1 h-8 bg-green-600 mr-3"></div>
              </h3>
              <ul className="text-slate-700 leading-relaxed space-y-3 text-lg">
                <li className="flex items-start justify-end">
                  <span>تطوير نظم العمل لوسطاء الشحن ومزودي الخدمات اللوجستية</span>
                  <Shield className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                </li>
                <li className="flex items-start justify-end">
                  <span>تعزيز مصداقية العاملين في مهنة وسطاء الشحن مع الزبائن</span>
                  <Shield className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                </li>
                <li className="flex items-start justify-end">
                  <span>السعي لتحقيق أفضل العلاقات المهنية والإجتماعية بين أعضاء النقابة</span>
                  <Shield className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                </li>
                <li className="flex items-start justify-end">
                  <span>توفير بيئة تنافسية وحماية العاملين في مهنة وسطاء الشحن</span>
                  <Shield className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
