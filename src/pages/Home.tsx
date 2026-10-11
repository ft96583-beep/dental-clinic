import { useState } from 'react';
import { 
  Shield, Sparkles, Smile, ArrowRight, Play, Star, Calendar as CalendarIcon, 
  User, Phone, Clock, MapPin, CheckCircle, ChevronDown, ChevronUp, Instagram, Heart, Activity
} from 'lucide-react';
import { SERVICES, CASE_STUDIES, BLOG_POSTS, DOCTORS, TESTIMONIALS, FAQS, INSTAGRAM_PHOTOS } from '../data/mockData';
import { SubNavTicker } from '../components/SubNavTicker';

interface HomeProps {
  onNavigate: (page: string) => void;
  onSelectService: (serviceId: string) => void;
  onBookClick: () => void;
}

export function Home({ onNavigate, onSelectService, onBookClick }: HomeProps) {
  // Booking Form state
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingService, setBookingService] = useState('General Dentistry');
  const [bookingDate, setBookingDate] = useState('2026-10-01');
  const [bookingTime, setBookingTime] = useState('10:00 AM');
  const [bookingNotes, setBookingNotes] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Before / After slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // FAQ open state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      {/* Subnav Ticker */}
      <SubNavTicker onSelectService={onSelectService} />

      {/* Hero Section (With Reference Watermark & Transparent Cutout Doctor Treatment) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/95 via-white to-slate-50 pt-12 pb-16 lg:pt-20 lg:pb-28">
        {/* Massive Background Watermark Typography (Inspired by Reference) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03] z-0">
          <span className="text-[18vw] font-extrabold tracking-tighter text-slate-900 whitespace-nowrap">
            DENTALCARE
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* 1. Hero Heading & Text (Order 1 on mobile, Col-Span-7 on desktop) */}
            <div className="order-1 lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
                <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
                <span>Your Best Dental Experience Awaits</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Your Best Dental <br />
                <span className="text-blue-600">Experience Awaits</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Experience world-class dental care with expert professionals, painless modern technology, and a warm welcoming environment for your entire family.
              </p>

              {/* Mobile Only Prominent Top Book Appointment Button */}
              <div className="pt-2 block lg:hidden">
                <button
                  onClick={onBookClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-2xl text-base shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* 2. Doctor Image (Order 2 on mobile, Col-Span-5 right column on desktop) */}
            <div className="order-2 lg:order-3 lg:col-span-5 relative flex justify-center mt-2 lg:mt-0 z-20">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/25 to-cyan-400/25 rounded-full blur-3xl opacity-80 z-0"></div>
                
                {/* Cutout Portrait Container */}
                <div className="relative flex justify-center z-10">
                  <img 
                    src="/images/hero-doctor.webp" 
                    alt="Lead Dentist Cutout" 
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-[380px] sm:h-[480px] object-cover object-top drop-shadow-2xl [mask-image:radial-gradient(ellipse_at_50%_30%,black_65%,transparent_95%)]"
                  />
                  
                  {/* Floating Experience Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/60 flex items-center justify-between z-20">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                        15+
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">Years Experience</p>
                        <p className="text-[11px] text-slate-500">Certified Professional Care</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-xs font-bold text-slate-800">4.9 (2k+)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Quick Hero Form / Appointment Form (Order 3 on mobile, Col-Span-7 left column bottom on desktop) */}
            <div className="order-3 lg:order-2 lg:col-span-7 w-full">
              <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-xl border border-slate-100 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Full Name</label>
                    <div className="flex items-center bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-200">
                      <User className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                      <input type="text" placeholder="John Doe" className="bg-transparent text-sm w-full focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Phone Number</label>
                    <div className="flex items-center bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-200">
                      <Phone className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                      <input type="tel" placeholder="+1 (555)..." className="bg-transparent text-sm w-full focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Preference Date</label>
                    <div className="flex items-center bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-200">
                      <CalendarIcon className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                      <input type="date" defaultValue="2026-10-01" className="bg-transparent text-sm w-full focus:outline-none" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button 
                    onClick={() => {
                      const el = document.getElementById('booking-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Book An Appointment</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button 
                    onClick={() => {
                      const el = document.getElementById('video-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 text-slate-700 hover:text-blue-600 font-bold text-sm px-5 py-3.5 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs">
                      <Play className="h-3 w-3 fill-current ml-0.5" />
                    </div>
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/service-general.webp" 
                  alt="Dental care 1" 
                  className="rounded-2xl shadow-lg h-56 sm:h-64 w-full object-cover"
                />
                <img 
                  src="/images/service-whitening.webp" 
                  alt="Dental care 2" 
                  className="rounded-2xl shadow-lg h-56 sm:h-64 w-full object-cover sm:mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-3xl font-extrabold">99%</p>
                <p className="text-xs font-medium text-blue-100 uppercase tracking-wider mt-1">Successful Treatments</p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                15 Years of Expertise <br />in Dental Care
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We believe everyone deserves a healthy, radiant smile. Our dedicated team of board-certified dentists uses cutting-edge technology and gentle techniques to ensure your visits are completely stress-free and comfortable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Certified Specialists</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Top graduates from leading medical universities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Modern Equipment</h4>
                    <p className="text-slate-500 text-xs mt-0.5">3D scans, laser whitening & painless tools.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('pages')}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-md flex items-center space-x-2 cursor-pointer"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                A Wide Range of Services <br />for Your Best Smile
              </h2>
            </div>
            <div>
              <button
                onClick={() => onNavigate('services')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-md flex items-center space-x-2 cursor-pointer"
              >
                <span>Explore All Services</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-inner">
                    <Shield className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.details?.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-xs text-slate-500 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2 shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-600">{service.price}</span>
                  <button
                    onClick={() => {
                      onSelectService(service.id);
                      onNavigate('services');
                    }}
                    className="text-slate-900 hover:text-blue-600 font-bold text-xs flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 bg-blue-100 rounded-3xl blur-xl opacity-70"></div>
                <img 
                  src="/images/doctor-2.webp" 
                  alt="Dentist patient care" 
                  className="relative rounded-3xl shadow-2xl h-[380px] sm:h-[420px] w-full object-cover border-4 border-white"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Benefits of Our Dental Services: <br />Your Path to a Healthier Smile
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We combine clinical excellence with advanced patient comfort protocols. Here is why over 20,000 patients trust us with their dental health.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                  <p className="text-2xl font-extrabold text-blue-600">10+</p>
                  <p className="text-xs text-slate-500 font-semibold mt-1">Skilled Doctors</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                  <p className="text-2xl font-extrabold text-blue-600">15+</p>
                  <p className="text-xs text-slate-500 font-semibold mt-1">Years Experience</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                  <p className="text-2xl font-extrabold text-blue-600">20K+</p>
                  <p className="text-xs text-slate-500 font-semibold mt-1">Appointment Booked</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                  <p className="text-2xl font-extrabold text-blue-600">99%</p>
                  <p className="text-xs text-slate-500 font-semibold mt-1">Patient Satisfaction</p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    const el = document.getElementById('booking-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md transition-all inline-flex items-center space-x-2 cursor-pointer"
                >
                  <span>Book An Appointment</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
                Our Case Studies
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
                Patient Journeys to <br />Healthier, Happier Smiles
              </h2>
            </div>
            <div>
              <button
                onClick={() => onNavigate('case-studies')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-md flex items-center space-x-2 cursor-pointer"
              >
                <span>Explore More Stories</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.slice(0, 2).map((study) => (
              <div 
                key={study.id}
                className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-xl group"
              >
                <div className="relative h-60 sm:h-64 overflow-hidden">
                  <img 
                    src={study.afterImage} 
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-lg">
                    {study.category}
                  </div>
                </div>
                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="text-xl font-bold text-white">{study.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{study.description}</p>
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-700">
                    <span>Patient: {study.client}</span>
                    <button
                      onClick={() => onNavigate('case-studies')}
                      className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center space-x-1 cursor-pointer"
                    >
                      <span>View Full Journey</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-12">
            The Path to Your Perfect Smile
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center shadow-xs">
              <div className="h-16 w-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-xl mb-4 shadow-md">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Book Your Appointment</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Choose your preferred date and time online in less than 2 minutes.</p>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center shadow-xs">
              <div className="h-16 w-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-xl mb-4 shadow-md">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Consultation & Examination</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Meet our specialist for 3D digital scans and a thorough oral exam.</p>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center shadow-xs">
              <div className="h-16 w-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-xl mb-4 shadow-md">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Personalized Treatment Plan</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Receive a transparent, customized roadmap designed for your exact smile.</p>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center shadow-xs">
              <div className="h-16 w-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-xl mb-4 shadow-md">
                04
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Ongoing Care & Follow-Up</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Enjoy lifelong follow-ups and maintenance tips for lasting brightness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section id="booking-section" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Book An Appointment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Effortless Online Booking <br />for Your Dental Visit
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-100">
              {bookingSuccess && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-sm font-semibold flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Appointment booked successfully! We will confirm your visit via SMS/Email shortly.</span>
                </div>
              )}

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Your Name *</label>
                    <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-200">
                      <User className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                      <input 
                        type="text" 
                        required 
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder="John Doe" 
                        className="bg-transparent text-sm w-full focus:outline-none" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Phone Number *</label>
                    <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-200">
                      <Phone className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                      <input 
                        type="tel" 
                        required 
                        value={bookingPhone}
                        onChange={(e) => setBookingPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000" 
                        className="bg-transparent text-sm w-full focus:outline-none" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Type of Appointment *</label>
                    <select 
                      value={bookingService}
                      onChange={(e) => setBookingService(e.target.value)}
                      className="w-full bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 text-sm focus:outline-none font-medium"
                    >
                      <option>General Dentistry</option>
                      <option>Teeth Whitening</option>
                      <option>Dental Implant</option>
                      <option>Dental Sealants</option>
                      <option>Orthodontics & Braces</option>
                      <option>Root Canal Therapy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Preferred Date *</label>
                    <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-200">
                      <CalendarIcon className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                      <input 
                        type="date" 
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="bg-transparent text-sm w-full focus:outline-none" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Preferred Time *</label>
                    <select 
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 text-sm focus:outline-none font-medium"
                    >
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:30 AM</option>
                      <option>02:00 PM</option>
                      <option>04:00 PM</option>
                      <option>06:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Special Requests or Notes</label>
                    <input 
                      type="text" 
                      value={bookingNotes}
                      onChange={(e) => setBookingNotes(e.target.value)}
                      placeholder="Any sensitivity or doctor preference" 
                      className="bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 text-sm w-full focus:outline-none" 
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-base shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Book An Appointment</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Right Side Info Box */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Clinic Hours</h3>
                  <p className="text-blue-100 text-xs">Plan your visit during our standard operating hours or reach out for emergencies.</p>
                </div>
                
                <ul className="space-y-3 text-sm border-t border-blue-500 pt-4">
                  <li className="flex justify-between">
                    <span className="text-blue-100">Monday - Friday:</span>
                    <span className="font-bold">8:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-blue-100">Saturday:</span>
                    <span className="font-bold">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-blue-100">Sunday:</span>
                    <span className="font-bold text-cyan-300">24/7 Emergency</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-blue-500 flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200">24/7 Emergency Hotline</p>
                    <p className="text-base font-extrabold text-white">+1 (555) 382-9482</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Banner Section */}
      <section id="video-section" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/images/about-dental.webp" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
            Watch The Video
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            Explore Our Expert & Caring Dental Services
          </h2>

          <div className="flex justify-center">
            <button 
              onClick={() => setIsPlayingVideo(true)}
              className="h-20 w-20 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer"
            >
              <Play className="h-8 w-8 fill-current ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
              <p className="text-3xl font-extrabold text-cyan-400">10+</p>
              <p className="text-xs font-semibold text-slate-300 mt-1">Skilled Doctors</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
              <p className="text-3xl font-extrabold text-cyan-400">15+</p>
              <p className="text-xs font-semibold text-slate-300 mt-1">Years of Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
              <p className="text-3xl font-extrabold text-cyan-400">20K+</p>
              <p className="text-xs font-semibold text-slate-300 mt-1">Appointment Booked</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
              <p className="text-3xl font-extrabold text-cyan-400">99%</p>
              <p className="text-xs font-semibold text-slate-300 mt-1">Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              What Our Patients Have to Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <div key={t.id} className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">"{t.comment}"</p>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-slate-200">
                  <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Before And After
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              See the Difference: <br />Before & After
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-200">
            <div className="relative h-72 sm:h-[420px] rounded-2xl overflow-hidden select-none">
              {/* After Image (Background) */}
              <img 
                src="/images/case-1-after.webp" 
                alt="After Teeth Whitening" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                AFTER (Radiant White)
              </div>

              {/* Before Image (Clipped) */}
              <div 
                className="absolute inset-0 overflow-hidden" 
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src="/images/case-1-before.webp" 
                  alt="Before Teeth Whitening" 
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                  BEFORE (Stained)
                </div>
              </div>

              {/* Slider Divider */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg font-bold text-xs">
                  ↔
                </div>
              </div>
            </div>

            {/* Slider Range Controller */}
            <div className="mt-6 px-4">
              <input 
                type="range" 
                min="10" 
                max="90" 
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-xs font-semibold text-slate-500 mt-2">
                <span>Drag slider to compare Before & After results</span>
                <span>Interactive Comparison</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Meet Our Expert <br />Dental Specialists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DOCTORS.map((doc) => (
              <div key={doc.id} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-md group">
                <div className="h-72 overflow-hidden">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                  <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider">{doc.role}</p>
                  <p className="text-slate-600 text-xs leading-relaxed pt-2">{doc.bio}</p>
                  <div className="pt-4 flex flex-wrap justify-center gap-1.5">
                    {doc.specialties.map((spec, i) => (
                      <span key={i} className="bg-white text-slate-700 text-[11px] px-2.5 py-1 rounded-md border border-slate-200 font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles & Blog Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Our Latest Articles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Our Latest News <br />& Blog Articles
              </h2>
            </div>
            <div>
              <button
                onClick={() => onNavigate('blog')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-md flex items-center space-x-2 cursor-pointer"
              >
                <span>Read Blog</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md group">
                <div className="h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-xs text-slate-500">
                    <CalendarIcon className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="text-blue-600 font-semibold">{post.category}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{post.excerpt}</p>
                  <div className="pt-2">
                    <button 
                      onClick={() => onNavigate('blog')}
                      className="text-blue-600 hover:text-blue-700 font-bold text-xs flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Dental Care FAQ: Your <br />Questions Answered
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            <div className="lg:col-span-8 space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 font-bold text-slate-900 flex items-center justify-between cursor-pointer"
                    >
                      <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                      {isOpen ? <ChevronUp className="h-5 w-5 text-blue-600 shrink-0" /> : <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-4 bg-blue-600 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-1">Have more questions?</h3>
                <p className="text-blue-100 text-xs">Our patient coordinators are ready to help you 24/7.</p>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-xl">
                <Phone className="h-5 w-5 text-cyan-300 shrink-0" />
                <div>
                  <p className="text-xs text-blue-200">Emergency Support</p>
                  <p className="font-bold text-sm">+1 (555) 382-9482</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('pages')}
                className="w-full bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 rounded-xl text-xs transition-colors shadow-md cursor-pointer"
              >
                View All FAQs & Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 text-center sm:text-left">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Follow Us
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Follow Us On Instagram</h2>
            </div>
            <button 
              onClick={() => alert('Opening @DentalCareInstagram...')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-md flex items-center space-x-2 cursor-pointer"
            >
              <Instagram className="h-4 w-4" />
              <span>Follow Us</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INSTAGRAM_PHOTOS.map((img, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden h-40 sm:h-44 group shadow-md">
                <img src={img} alt="Instagram photo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Instagram className="h-6 w-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isPlayingVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="p-4 bg-slate-800/80 flex items-center justify-between border-b border-slate-700">
              <h3 className="text-white font-bold text-sm">Dental Clinic Virtual Tour & Expert Care</h3>
              <button 
                onClick={() => setIsPlayingVideo(false)}
                className="h-8 w-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="p-4 bg-black flex justify-center">
              <video 
                src="/videos/dental-hero.mp4" 
                controls 
                className="w-full max-h-[75vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
