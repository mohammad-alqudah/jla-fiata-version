export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  author: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'نجاح إطلاق المنتج',
    excerpt: 'تجاوز منتجنا الأخير جميع التوقعات، حيث وصل إلى آلاف العملاء الراضين في الأسبوع الأول.',
    content: 'في إنجاز تاريخي للنقابة اللوجستية الأردنية، تم إطلاق منتجنا الجديد الذي يمثل نقلة نوعية في مجال اللوجستيات الحديثة.',
    date: '2024-03-15',
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg',
    category: 'Product Launch',
    author: 'JLA Team'
  },
  {
    id: 2,
    title: 'توسع الشراكات الدولية',
    excerpt: 'نعلن عن شراكة استراتيجية جديدة مع منظمات دولية رائدة في مجال اللوجستيات.',
    content: 'أعلنت النقابة اللوجستية الأردنية عن توسع كبير في شبكة شراكاتها الدولية، مما يعزز مكانة الأردن كمركز لوجستي إقليمي.',
    date: '2024-03-10',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    category: 'Partnerships',
    author: 'JLA Team'
  },
  {
    id: 3,
    title: 'برنامج تدريبي جديد',
    excerpt: 'إطلاق برنامج تدريبي شامل لتطوير مهارات المهنيين في قطاع اللوجستيات.',
    content: 'تقدم النقابة برنامجاً تدريبياً متقدماً يهدف إلى رفع كفاءة العاملين في قطاع اللوجستيات والنقل.',
    date: '2024-03-05',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    category: 'Training',
    author: 'JLA Team'
  },
  {
    id: 4,
    title: 'مؤتمر اللوجستيات السنوي',
    excerpt: 'استعدوا لحضور المؤتمر السنوي للوجستيات الذي سيجمع خبراء الصناعة من جميع أنحاء المنطقة.',
    content: 'ينعقد المؤتمر السنوي للوجستيات في عمان، ويشارك فيه نخبة من الخبراء الدوليين والإقليميين.',
    date: '2024-02-28',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    category: 'Events',
    author: 'JLA Team'
  },
  {
    id: 5,
    title: 'جائزة التميز في اللوجستيات',
    excerpt: 'تفوز النقابة اللوجستية الأردنية بجائزة التميز الإقليمية للعام 2024.',
    content: 'حصلت النقابة على جائزة التميز في مجال اللوجستيات تقديراً لجهودها في تطوير القطاع.',
    date: '2024-02-20',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    category: 'Awards',
    author: 'JLA Team'
  },
  {
    id: 6,
    title: 'تطوير البنية التحتية',
    excerpt: 'مبادرة جديدة لتحديث البنية التحتية اللوجستية في الأردن بالتعاون مع القطاع الخاص.',
    content: 'تعمل النقابة على مشروع ضخم لتطوير البنية التحتية اللوجستية بما يواكب المعايير الدولية.',
    date: '2024-02-15',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg',
    category: 'Infrastructure',
    author: 'JLA Team'
  }
];
