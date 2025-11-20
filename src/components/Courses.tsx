import { BookOpen, Clock, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import course1 from '../assets/contact_1.jpeg';
import course2 from '../assets/contact_2.jpeg';
import course3 from '../assets/contact_3.jpeg';

const courses = [
  {
    id: 1,
    title: 'إدارة سلسلة التوريد',
    description: 'تعلم أساسيات وأفضل ممارسات إدارة سلسلة التوريد الحديثة وتحسين العمليات اللوجستية.',
    duration: '8 أسابيع',
    students: 245,
    level: 'متوسط',
    image: 'https://images.pexels.com/photos/4481534/pexels-photo-4481534.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'النقل والشحن الدولي',
    description: 'دورة شاملة في النقل والشحن الدولي تغطي جميع وسائل النقل والإجراءات الجمركية.',
    duration: '6 أسابيع',
    students: 189,
    level: 'مبتدئ',
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'إدارة المخازن والمستودعات',
    description: 'احترف إدارة المخازن باستخدام أحدث التقنيات وأنظمة إدارة المخزون الذكية.',
    duration: '5 أسابيع',
    students: 312,
    level: 'مبتدئ',
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'التكنولوجيا في اللوجستيات',
    description: 'استكشف أحدث التقنيات المستخدمة في مجال اللوجستيات من الذكاء الاصطناعي إلى إنترنت الأشياء.',
    duration: '7 أسابيع',
    students: 156,
    level: 'متقدم',
    image: 'https://images.pexels.com/photos/5599486/pexels-photo-5599486.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'التخطيط اللوجستي الاستراتيجي',
    description: 'طور مهاراتك في التخطيط الاستراتيجي للعمليات اللوجستية وتحسين الأداء التشغيلي.',
    duration: '10 أسابيع',
    students: 198,
    level: 'متقدم',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'إدارة الجودة في اللوجستيات',
    description: 'تعرف على معايير الجودة الدولية وكيفية تطبيقها في العمليات اللوجستية.',
    duration: '6 أسابيع',
    students: 223,
    level: 'متوسط',
    image: 'https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
];

export default function Courses() {
    const { t } = useTranslation();
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('ourcourses')}
               </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
      {t('course_description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course) => (
            <article
              key={course.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-slate-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.id === 1 ? course1 : course.id === 2 ? course2 : course3}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
                  {course.title}
                </h3>

                <p className="text-slate-600 mb-4 line-clamp-3 h-12">
                  {course.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-slate-500 text-sm">
                    <Clock size={16} className="ml-2" />
                    <span>المدة: {course.duration}</span>
                  </div>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Users size={16} className="ml-2" />
                    <span>{course.students} متدرب</span>
                  </div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  <BookOpen size={18} className="ml-2" />
                  {t('register now')}
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            {t('view all courses')}
            <BookOpen size={20} className="mr-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
