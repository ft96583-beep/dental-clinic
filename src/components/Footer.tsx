import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Box */}
        <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 mb-16 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Subscribe to Our Newsletter for the Latest Updates and Offers
            </h3>
            <p className="mt-2 text-blue-100 text-sm sm:text-base">
              Get expert dental tips, exclusive discounts, and appointment reminders straight to your inbox.
            </p>
          </div>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to DentalCare newsletter!');
            }}
            className="flex w-full md:w-auto items-center gap-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="bg-white/10 border border-white/30 rounded-2xl px-4 py-3.5 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white w-full md:w-80 text-sm"
            />
            <button
              type="submit"
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 py-3.5 rounded-2xl text-sm transition-colors shadow-md whitespace-nowrap cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Logo & Info */}
          <div className="space-y-4">
            <div className="filter brightness-0 invert">
              <Logo />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing compassionate, advanced dental care with state-of-the-art technology for patients of all ages. Your best smile is our passion.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#instagram" className="h-9 w-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#facebook" className="h-9 w-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#twitter" className="h-9 w-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Services</button>
              </li>
              <li>
                <button onClick={() => onNavigate('case-studies')} className="hover:text-white transition-colors">Case Studies</button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">Blog & News</button>
              </li>
              <li>
                <button onClick={() => onNavigate('pages')} className="hover:text-white transition-colors">Pages & Doctors</button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>123 Dental Avenue, Suite 400, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400 shrink-0" />
                <span>+1 (555) 382-9482</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400 shrink-0" />
                <span>support@dentalcare.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Clinic Hours */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">Clinic Hours</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center justify-between py-1 border-b border-slate-800">
                <span>Mon - Fri:</span>
                <span className="text-white font-medium">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-slate-800">
                <span>Saturday:</span>
                <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Sunday:</span>
                <span className="text-cyan-400 font-semibold">24/7 Emergency Only</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Developed by Faizan Jutt */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} DentalCare Clinic. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-cyan-400 font-semibold bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/50 flex items-center space-x-1">
              <span>Developed by</span>
              <a 
                href="https://faizanjutt.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-white transition-colors font-bold"
              >
                Faizan Jutt
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
