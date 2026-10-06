import { useState } from 'react';
import { Shield, ArrowRight, User, Calendar, CheckCircle } from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudyItem } from '../types';

interface CaseStudiesPageProps {
  onBookClick: () => void;
}

export function CaseStudiesPage({ onBookClick }: CaseStudiesPageProps) {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyItem | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Success Stories
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Patient Journeys & Case Studies
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Real patient transformations showcasing the life-changing impact of our expert dental procedures.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {CASE_STUDIES.map((study) => (
            <div 
              key={study.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={study.afterImage} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-lg">
                    {study.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
                    <User className="h-3.5 w-3.5 text-blue-600" />
                    <span>Patient: {study.client}</span>
                    <span>•</span>
                    <Calendar className="h-3.5 w-3.5 text-blue-600" />
                    <span>{study.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug">{study.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{study.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedStudy(study)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs shadow-md transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>View Details & Before/After</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Case Study Details */}
        {selectedStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
              <button 
                onClick={() => setSelectedStudy(null)}
                className="absolute top-6 right-6 h-10 w-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>

              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                {selectedStudy.category}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{selectedStudy.title}</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-400 mb-1">BEFORE</p>
                  <img src={selectedStudy.beforeImage} alt="Before" className="rounded-xl h-48 w-full object-cover border border-slate-200" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 mb-1">AFTER</p>
                  <img src={selectedStudy.afterImage} alt="After" className="rounded-xl h-48 w-full object-cover border border-slate-200" />
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">{selectedStudy.description}</p>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Patient: <span className="text-slate-900 font-bold">{selectedStudy.client}</span></p>
                  <p className="text-xs text-slate-500 font-semibold">Duration: <span className="text-slate-900 font-bold">{selectedStudy.duration}</span></p>
                </div>
                <button
                  onClick={() => {
                    setSelectedStudy(null);
                    onBookClick();
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md cursor-pointer"
                >
                  Book Your Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
