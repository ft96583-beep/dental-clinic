export function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 group cursor-pointer ${className}`}>
      {/* Exact SVG Tooth & Swoosh Logo from Uploaded Reference */}
      <svg className="h-10 w-10 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M35 15C25 15 15 25 15 40C15 60 25 75 32 85C35 89 38 85 40 80C45 68 48 72 55 80C62 88 70 85 75 75C85 55 85 35 75 22C65 10 50 15 42 22C38 25 35 20 35 15Z" 
          fill="url(#toothGrad)" 
          stroke="#0b2545" 
          strokeWidth="3"
        />
        <path 
          d="M60 25C68 30 72 40 70 55C68 65 62 75 58 80" 
          stroke="#00b4d8" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
        <path 
          d="M12 75C30 95 70 95 92 65" 
          stroke="url(#swooshGrad)" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="toothGrad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0b2545" />
            <stop offset="1" stopColor="#00b4d8" />
          </linearGradient>
          <linearGradient id="swooshGrad" x1="12" y1="75" x2="92" y2="65" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0b2545" />
            <stop offset="1" stopColor="#00b4d8" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col">
        <div className="flex items-center space-x-1">
          <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
            Dental
          </span>
          <span className="text-xl font-extrabold tracking-tight text-cyan-500 leading-none">
            Clinic
          </span>
        </div>
        <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mt-0.5">
          Slogan Goes Here
        </span>
      </div>
    </div>
  );
}
