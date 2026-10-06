import { Sparkles, ShieldCheck, Smile, Activity } from 'lucide-react';

interface SubNavTickerProps {
  onSelectService?: (serviceId: string) => void;
}

export function SubNavTicker({ onSelectService }: SubNavTickerProps) {
  const items = [
    { id: 'general-dentistry', label: 'General Dentistry', icon: ShieldCheck },
    { id: 'teeth-whitening', label: 'Teeth Whitening', icon: Sparkles },
    { id: 'dental-implant', label: 'Dental Implant', icon: Smile },
    { id: 'dental-sealants', label: 'Dental Sealants', icon: Activity }
  ];

  return (
    <div className="bg-blue-600 text-white py-3 px-4 shadow-inner overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between space-x-8 whitespace-nowrap min-w-[700px]">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="flex items-center space-x-8">
              <button
                onClick={() => onSelectService && onSelectService(item.id)}
                className="flex items-center space-x-2 text-sm font-semibold tracking-wide hover:text-cyan-200 transition-colors cursor-pointer group"
              >
                <Icon className="h-4 w-4 text-cyan-300 group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
              </button>
              {idx < items.length - 1 && (
                <span className="text-blue-400 select-none">|</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
