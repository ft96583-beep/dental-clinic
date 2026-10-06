import { Shield, Sparkles, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { SERVICES } from '../data/mockData';

interface ServicesPageProps {
  onBookClick: () => void;
}

export function ServicesPage({ onBookClick }: ServicesPageProps) {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Comprehensive Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Professional Dental Services
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From routine preventive cleanings to advanced dental implants and cosmetic makeovers, discover our full suite of expert treatments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="h-16 w-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-inner">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.details?.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-700 font-medium">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Starting at</span>
                  <span className="text-lg font-extrabold text-blue-600">{service.price}</span>
                </div>
                <button
                  onClick={onBookClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Book Visit</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-10 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl font-extrabold tracking-tight">Need a Personalized Treatment Consultation?</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Our specialists will review your dental history and build a custom care plan tailored to your budget and goals.
            </p>
            <button
              onClick={onBookClick}
              className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-extrabold px-8 py-3.5 rounded-xl text-sm shadow-lg transition-colors inline-flex items-center space-x-2 cursor-pointer"
            >
              <span>Schedule Consultation Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
