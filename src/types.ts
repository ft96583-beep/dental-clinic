export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  price?: string;
  duration?: string;
  details?: string[];
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  duration: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
