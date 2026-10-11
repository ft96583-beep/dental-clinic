import { ServiceItem, CaseStudyItem, BlogPost, Doctor, Testimonial, FAQItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    description: 'Comprehensive dental exams, cleanings, cavity fillings, and preventive care to maintain optimal oral health.',
    iconName: 'ShieldPlus',
    price: '$50 - $150',
    duration: '45 mins',
    details: ['Routine Checkups & Cleanings', 'Digital X-Rays', 'Composite Fillings', 'Sealants & Fluoride Treatment']
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Professional laser whitening treatments to remove stubborn stains and give you a dazzling, radiant smile.',
    iconName: 'Sparkles',
    price: '$250 - $450',
    duration: '60 mins',
    details: ['In-Office Laser Whitening', 'Take-Home Custom Trays', 'Sensitivity Protection', 'Long-lasting Results']
  },
  {
    id: 'dental-implant',
    title: 'Dental Implant',
    description: 'Permanent, natural-looking tooth replacement solutions engineered to restore full bite functionality.',
    iconName: 'Smile',
    price: '$1,200 - $3,000',
    duration: '90 mins',
    details: ['Titanium & Zirconia Implants', '3D Guided Surgery', 'Single & Full Arch Restorations', 'Lifetime Warranty']
  },
  {
    id: 'dental-sealants',
    title: 'Dental Sealants',
    description: 'Protective plastic coatings applied to the chewing surfaces of back teeth to prevent decay and cavities.',
    iconName: 'Shield',
    price: '$60 - $120',
    duration: '30 mins',
    details: ['BPA-free Materials', 'Quick & Painless Application', 'Ideal for Children & Adults', 'Years of Protection']
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics & Braces',
    description: 'Modern clear aligners and traditional braces designed to straighten crooked teeth and align jaws perfectly.',
    iconName: 'Activity',
    price: '$2,500 - $5,500',
    duration: 'Varies',
    details: ['Invisible Clear Aligners', 'Ceramic Braces', 'Retainer Fitting', 'Regular Progress Monitoring']
  },
  {
    id: 'root-canal',
    title: 'Root Canal Therapy',
    description: 'Painless endodontic treatment to save infected or damaged teeth and eliminate severe toothache.',
    iconName: 'HeartPulse',
    price: '$400 - $900',
    duration: '75 mins',
    details: ['Advanced Rotary Endodontics', 'Painless Anesthesia', 'Custom Crown Placement', 'Immediate Pain Relief']
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'sarah-whitening',
    title: 'A Brighter Tomorrow: Sarah’s Whitening Journey',
    client: 'Sarah Jenkins',
    category: 'Teeth Whitening',
    beforeImage: '/images/case-1-before.webp',
    afterImage: '/images/case-1-after.webp',
    description: 'Sarah came to us with severe coffee and tea staining that impacted her confidence during public speaking. After a single 60-minute laser whitening session and home care kit, her smile improved by 8 shades.',
    duration: '1 Session (60 mins)'
  },
  {
    id: 'olivia-braces',
    title: 'A Beautiful Transformation: Olivia’s Braces Journey',
    client: 'Olivia Martinez',
    category: 'Braces & Alignment',
    beforeImage: '/images/case-2-before.webp',
    afterImage: '/images/case-2-after.webp',
    description: 'Olivia suffered from crowded lower teeth and an overbite. Using our custom clear aligner therapy, her teeth were successfully aligned over 12 months with zero disruption to her college life.',
    duration: '12 Months'
  },
  {
    id: 'david-implants',
    title: 'Restoring Confidence: David’s Full Implant Recovery',
    client: 'David Henderson',
    category: 'Dental Implants',
    beforeImage: '/images/case-3-before.webp',
    afterImage: '/images/case-3-after.webp',
    description: 'After an accidental sports injury, David lost two front premolars. Our expert team placed precision titanium implants with custom porcelain crowns, fully restoring his natural chewing ability and radiant smile.',
    duration: '3 Months Recovery'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'essential-practice-for-healthy-smile',
    title: 'Essential Practice for a Healthy, Beautiful Smile',
    excerpt: 'Discover the daily habits, brushing techniques, and flossing tips recommended by top dentists to keep your teeth sparkling.',
    content: 'Maintaining a healthy smile goes beyond just brushing twice a day. In this comprehensive guide, we explore the golden rules of oral hygiene: choosing the right soft-bristled toothbrush, mastering the Bass brushing technique for 2 minutes, incorporating interdental flossers, and scheduling bi-annual professional cleanings. Small daily habits compound into lifelong dental health.',
    date: 'Oct 15, 2024',
    author: 'Dr. Olivia Hayes',
    category: 'Oral Care',
    image: '/images/blog-1.webp',
    readTime: '4 min read'
  },
  {
    id: 'everything-you-need-to-know-about-teeth-whitening',
    title: 'Everything You Need to Know About Teeth Whitening',
    excerpt: 'Is professional whitening safe for sensitive teeth? We break down the science, myths, and what results you can expect.',
    content: 'Whiter teeth are at the top of many cosmetic wishlists. But with so many over-the-counter charcoal pastes, strips, and professional laser options, how do you choose? Professional in-office whitening uses controlled peroxide gels activated by specialized light to safely break down chromogens without damaging your enamel.',
    date: 'Oct 18, 2024',
    author: 'Dr. Emily Carter',
    category: 'Cosmetic',
    image: '/images/blog-2.webp',
    readTime: '5 min read'
  },
  {
    id: 'everything-you-need-to-know-about-dental-implants',
    title: 'Everything You Need to Know About Dental Implants',
    excerpt: 'From initial consultation to osseointegration, learn why dental implants are the gold standard for missing teeth.',
    content: 'Dental implants have revolutionized restorative dentistry. Unlike bridges or dentures, implants replace both the root and the crown of a missing tooth. Made of biocompatible titanium, the post fuses naturally with your jawbone in a process called osseointegration, providing unmatched stability and preserving facial bone structure.',
    date: 'Oct 22, 2024',
    author: 'Dr. James Walker',
    category: 'Surgery & Implants',
    image: '/images/blog-3.webp',
    readTime: '6 min read'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-olivia-hayes',
    name: 'Dr. Olivia Hayes',
    role: 'Lead Orthodontist & Founder',
    image: '/images/doctor-1.webp',
    bio: 'Dr. Hayes has over 15 years of experience transforming smiles with advanced orthodontics and gentle patient care.',
    specialties: ['Orthodontics', 'Invisalign', 'Cosmetic Dentistry']
  },
  {
    id: 'dr-emily-carter',
    name: 'Dr. Emily Carter',
    role: 'Cosmetic & Restorative Dentist',
    image: '/images/doctor-2.webp',
    bio: 'Passionate about aesthetic restorations, veneers, and teeth whitening, Dr. Carter ensures every patient leaves with sparkling confidence.',
    specialties: ['Teeth Whitening', 'Veneers', 'General Care']
  },
  {
    id: 'dr-james-walker',
    name: 'Dr. James Walker',
    role: 'Implantologist & Oral Surgeon',
    image: '/images/doctor-3.webp',
    bio: 'Specializing in complex oral surgeries and dental implants, Dr. Walker uses state-of-the-art 3D imaging for painless procedures.',
    specialties: ['Dental Implants', 'Oral Surgery', 'Root Canals']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Leslie Alexander',
    role: 'Marketing Executive',
    rating: 5,
    comment: 'Professional and Friendly! The clinic environment is immaculate and relaxing. My teeth whitening results exceeded all my expectations.',
    image: '/images/testimonial-1.webp'
  },
  {
    id: '2',
    name: 'Bessie Lane',
    role: 'Software Engineer',
    rating: 5,
    comment: 'Highly Recommended! I had a root canal done by Dr. Walker and I felt absolutely zero pain. Exceptional staff and state-of-the-art facility.',
    image: '/images/testimonial-2.webp'
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Architect',
    rating: 5,
    comment: 'Booking an appointment online was so effortless. The dental implants look and feel completely natural. Truly world-class service!',
    image: '/images/testimonial-3.webp'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of dental services including general checkups, teeth whitening, dental implants, root canals, orthodontics, crowns, bridges, and pediatric dental care.'
  },
  {
    question: 'Do I need to make an appointment?',
    answer: 'While we do accommodate urgent cases, we highly recommend booking an appointment online or via phone to secure your preferred date and time without waiting.'
  },
  {
    question: 'Do you accept walk-in appointments?',
    answer: 'Yes, we welcome walk-ins for dental emergencies and urgent pain relief, subject to doctor availability.'
  },
  {
    question: 'Can I book an emergency dental appointment?',
    answer: 'Absolutely. We have a 24/7 emergency dental hotline and dedicated emergency slots every day to handle sudden toothaches or trauma.'
  },
  {
    question: 'Do you offer online consultations?',
    answer: 'Yes! You can schedule a virtual consultation with our lead dentists to discuss cosmetic options, aligners, or treatment estimates from the comfort of your home.'
  },
  {
    question: 'What is the cost of a dental consultation?',
    answer: 'Standard initial consultations start at $50, which includes a clinical examination and digital scan review. We also offer free cosmetic evaluations.'
  }
];

export const INSTAGRAM_PHOTOS = [
  '/images/insta-1.webp',
  '/images/insta-2.webp',
  '/images/insta-3.webp',
  '/images/insta-4.webp',
  '/images/insta-5.webp',
  '/images/insta-6.webp'
];
