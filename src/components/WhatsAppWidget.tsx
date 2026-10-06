import { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck } from 'lucide-react';

// Easy-to-change WhatsApp configuration value as requested
export const WHATSAPP_CONFIG = {
  phoneNumber: '1234567890',
  formattedNumber: '+1 (234) 567-890',
  businessName: 'Dental Clinic Care',
  welcomeMessage: 'Hello! 👋 Welcome to Dental Clinic. How can we help you with your teeth and dental care today?'
};

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = message.trim() || 'Hello, I would like to inquire about dental appointments.';
    const url = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* WhatsApp Button for Top Header / Navigation Area */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-2.5 sm:px-4 sm:py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center space-x-2 cursor-pointer"
        aria-label="Open WhatsApp Chat"
      >
        <div className="relative">
          <MessageCircle className="h-5 w-5 fill-current" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-emerald-500"></span>
        </div>
        <span className="hidden lg:inline">WhatsApp</span>
      </button>

      {/* WhatsApp Chat Preview Popup (Dropdown / Modal anchored or centered) */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-fadeIn transition-all duration-300 text-left">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white shadow-sm">
                  <MessageCircle className="h-6 w-6 fill-current text-white" />
                </div>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-emerald-600"></div>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight flex items-center space-x-1">
                  <span>{WHATSAPP_CONFIG.businessName}</span>
                  <ShieldCheck className="h-4 w-4 text-emerald-200 inline" />
                </h4>
                <p className="text-[11px] text-emerald-100">Typically replies instantly</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 min-h-[200px] max-h-[260px] overflow-y-auto space-y-3">
            <div className="flex items-start space-x-2">
              <div className="h-7 w-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                DC
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs border border-slate-100 text-xs text-slate-700 max-w-[85%] leading-relaxed">
                {WHATSAPP_CONFIG.welcomeMessage}
              </div>
            </div>
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center space-x-2">
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..." 
              className="bg-slate-100 text-xs rounded-xl px-3.5 py-2.5 flex-1 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-slate-800"
            />
            <button 
              type="submit"
              className="h-9 w-9 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-md transition-colors cursor-pointer shrink-0"
              aria-label="Send WhatsApp message"
            >
              <Send className="h-4 w-4 ml-0.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
