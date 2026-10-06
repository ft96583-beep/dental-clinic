import { useState } from 'react';
import { Shield, ChevronDown, ChevronUp, Phone, MapPin, Mail, CheckCircle } from 'lucide-react';
import { DOCTORS, FAQS } from '../data/mockData';

interface PagesOverviewProps {
  onBookClick: () => void;
}

export function PagesOverview({ onBookClick }: PagesOverviewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Clinic Overview
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Specialists & Clinic Info
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything you need to know about our medical team, office locations, operating hours, and frequently asked questions.
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">Our Dental Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DOCTORS.map((doc) => (
              <div key={doc.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md">
                <div className="h-72 overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                  <p className="text-blue-600 text-xs font-semibold uppercase">{doc.role}</p>
                  <p className="text-slate-600 text-xs leading-relaxed">{doc.bio}</p>
                  <button
                    onClick={onBookClick}
                    className="mt-4 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs cursor-pointer shadow-md"
                  >
                    Book with {doc.name.split(' ')[1]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 font-bold text-slate-900 flex items-center justify-between cursor-pointer"
                  >
                    <span className="text-base">{faq.question}</span>
                    {isOpen ? <ChevronUp className="h-5 w-5 text-blue-600 shrink-0" /> : <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Clinic Location & Contact */}
        <div className="bg-blue-600 rounded-3xl p-10 text-white shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-cyan-300 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-base mb-1">Our Location</h4>
              <p className="text-blue-100 text-xs leading-relaxed">123 Dental Avenue, Suite 400, New York, NY 10001</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-cyan-300 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-base mb-1">Direct Phone</h4>
              <p className="text-blue-100 text-xs leading-relaxed">+1 (555) 382-9482 (24/7 Emergency Available)</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-cyan-300 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-base mb-1">Email Support</h4>
              <p className="text-blue-100 text-xs leading-relaxed">support@dentalcare.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
