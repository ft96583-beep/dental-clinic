import { useState } from 'react';
import { X, User, Phone, Calendar, Clock, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('General Dentistry');
  const [date, setDate] = useState('2026-10-01');
  const [time, setTime] = useState('10:00 AM');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-xl overflow-hidden relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          <span className="bg-blue-600/50 text-cyan-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
            Instant Booking
          </span>
          <h3 className="text-2xl font-extrabold tracking-tight">Book Your Dental Appointment</h3>
          <p className="text-blue-200 text-sm mt-1">Fill out the form below and our care team will confirm your visit instantly.</p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Appointment Requested!</h4>
              <p className="text-slate-600 max-w-sm mx-auto text-sm">
                Thank you, <span className="font-semibold text-slate-800">{name || 'Guest'}</span>. We have received your booking request for <span className="font-semibold text-slate-800">{service}</span> on <span className="font-semibold text-slate-800">{date}</span>. We will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
                  <div className="flex items-center bg-slate-50 rounded-xl px-3.5 py-3 border border-slate-200 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <User className="h-4 w-4 text-slate-400 mr-2.5 shrink-0" />
                    <input 
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe" 
                      className="bg-transparent text-sm w-full focus:outline-none text-slate-800" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone Number</label>
                  <div className="flex items-center bg-slate-50 rounded-xl px-3.5 py-3 border border-slate-200 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <Phone className="h-4 w-4 text-slate-400 mr-2.5 shrink-0" />
                    <input 
                      type="tel" 
                      required 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000" 
                      className="bg-transparent text-sm w-full focus:outline-none text-slate-800" 
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Service</label>
                  <select 
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="bg-slate-50 rounded-xl px-3 py-3 border border-slate-200 text-sm w-full focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-800 font-medium"
                  >
                    <option value="General Dentistry">General Dentistry</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Dental Implant">Dental Implant</option>
                    <option value="Dental Sealants">Dental Sealants</option>
                    <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Date</label>
                  <div className="flex items-center bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-200 focus-within:border-blue-600 transition-all">
                    <Calendar className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                    <input 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-transparent text-sm w-full focus:outline-none text-slate-800" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Time</label>
                  <div className="flex items-center bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-200 focus-within:border-blue-600 transition-all">
                    <Clock className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                    <select 
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="bg-transparent text-sm w-full focus:outline-none text-slate-800"
                    >
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Special Requests or Notes</label>
                <div className="flex items-start bg-slate-50 rounded-xl px-3.5 py-3 border border-slate-200 focus-within:border-blue-600 transition-all">
                  <MessageSquare className="h-4 w-4 text-slate-400 mr-2.5 mt-0.5 shrink-0" />
                  <textarea 
                    rows={3} 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any specific symptoms or dental concerns..." 
                    className="bg-transparent text-sm w-full focus:outline-none text-slate-800 resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-base shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Confirm Appointment</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
