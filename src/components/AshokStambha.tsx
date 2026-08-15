import React from 'react';

interface AshokStambhaProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  textColor?: string;
  goldTone?: boolean;
}

export const AshokStambha: React.FC<AshokStambhaProps> = ({
  className = '',
  size = 48,
  showText = true,
  textColor = 'currentColor',
  goldTone = true,
}) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xs transition-transform duration-300 hover:scale-105"
        aria-label="State Emblem of India - Ashok Stambha"
      >
        <defs>
          <linearGradient id="ashokGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={goldTone ? "#E5CB90" : "#D4AF37"} />
            <stop offset="50%" stopColor={goldTone ? "#C6A052" : "#997A15"} />
            <stop offset="100%" stopColor={goldTone ? "#8C6A23" : "#5C4008"} />
          </linearGradient>
          <linearGradient id="chakraBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000080" />
            <stop offset="100%" stopColor="#1A3841" />
          </linearGradient>
        </defs>

        {/* --- Top Crown & Three Visible Lions --- */}
        {/* Center Lion Head */}
        <path
          d="M50 8 C44 8 38 12 37 17 C36 21 38 25 41 27 C40 30 40 34 43 37 C46 40 54 40 57 37 C60 34 60 30 59 27 C62 25 64 21 63 17 C62 12 56 8 50 8 Z"
          fill="url(#ashokGold)"
          stroke="#5C4008"
          strokeWidth="1.2"
        />
        {/* Center Lion Face Details (Eyes, Mane, Muzzle) */}
        <circle cx="46" cy="18" r="1.5" fill="#1A3841" />
        <circle cx="54" cy="18" r="1.5" fill="#1A3841" />
        <path d="M48 22 C49 23 51 23 52 22 L50 24 Z" fill="#5C4008" />
        <path d="M45 25 C48 27 52 27 55 25" stroke="#5C4008" strokeWidth="1" fill="none" />
        {/* Center Lion Mane lines */}
        <path d="M42 14 C40 18 40 24 43 28" stroke="#5C4008" strokeWidth="0.8" fill="none" />
        <path d="M58 14 C60 18 60 24 57 28" stroke="#5C4008" strokeWidth="0.8" fill="none" />

        {/* Left Lion Head & Profile */}
        <path
          d="M37 18 C32 18 26 21 24 26 C22 30 24 35 27 38 C28 41 31 44 36 45 C38 42 39 38 38 34 C36 31 35 27 37 22 Z"
          fill="url(#ashokGold)"
          stroke="#5C4008"
          strokeWidth="1.2"
        />
        <circle cx="28" cy="27" r="1.3" fill="#1A3841" />
        <path d="M25 32 C28 34 31 33 33 31" stroke="#5C4008" strokeWidth="0.8" fill="none" />

        {/* Right Lion Head & Profile */}
        <path
          d="M63 18 C68 18 74 21 76 26 C78 30 76 35 73 38 C72 41 69 44 64 45 C62 42 61 38 62 34 C64 31 65 27 63 22 Z"
          fill="url(#ashokGold)"
          stroke="#5C4008"
          strokeWidth="1.2"
        />
        <circle cx="72" cy="27" r="1.3" fill="#1A3841" />
        <path d="M75 32 C72 34 69 33 67 31" stroke="#5C4008" strokeWidth="0.8" fill="none" />

        {/* Lion Chests & Forelegs Base */}
        <path
          d="M32 43 C32 54 36 62 42 65 L58 65 C64 62 68 54 68 43 C64 45 59 46 50 46 C41 46 36 45 32 43 Z"
          fill="url(#ashokGold)"
          stroke="#5C4008"
          strokeWidth="1.2"
        />
        {/* Muscular Chest & Claws */}
        <path d="M42 46 L42 62 M50 47 L50 63 M58 46 L58 62" stroke="#5C4008" strokeWidth="0.8" strokeDasharray="1 1" />
        <ellipse cx="40" cy="64" rx="4" ry="2" fill="url(#ashokGold)" stroke="#5C4008" strokeWidth="0.8" />
        <ellipse cx="60" cy="64" rx="4" ry="2" fill="url(#ashokGold)" stroke="#5C4008" strokeWidth="0.8" />

        {/* --- Abacus (Circular Base Platform) --- */}
        <rect x="20" y="66" width="60" height="14" rx="2" fill="url(#ashokGold)" stroke="#5C4008" strokeWidth="1.2" />

        {/* Galloping Horse (Left on Abacus) */}
        <path
          d="M23 74 C25 71 27 71 29 73 C31 74 32 72 34 72 C33 75 30 77 28 76 C26 77 24 78 23 74 Z"
          fill="#3A2803"
        />

        {/* Central Ashoka Dharma Chakra (24 Spokes motif) */}
        <circle cx="50" cy="73" r="5.5" fill="#FFF3C8" stroke="url(#chakraBlue)" strokeWidth="1.2" />
        <circle cx="50" cy="73" r="1.5" fill="#000080" />
        {/* Radial Spokes */}
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="73"
            x2={50 + 4.5 * Math.cos((i * Math.PI) / 4)}
            y2={73 + 4.5 * Math.sin((i * Math.PI) / 4)}
            stroke="#000080"
            strokeWidth="0.7"
          />
        ))}

        {/* Striding Bull (Right on Abacus) */}
        <path
          d="M77 74 C75 71 73 71 71 73 C69 74 68 72 66 72 C67 75 70 77 72 76 C74 77 76 78 77 74 Z"
          fill="#3A2803"
        />

        {/* --- Inverted Lotus Bell Base (Padma) --- */}
        <path
          d="M26 80 C26 88 34 94 50 94 C66 94 74 88 74 80 Z"
          fill="url(#ashokGold)"
          stroke="#5C4008"
          strokeWidth="1.2"
        />
        {/* Lotus Petals */}
        <path d="M34 81 C36 88 40 91 43 93" stroke="#5C4008" strokeWidth="0.8" fill="none" />
        <path d="M50 81 L50 94" stroke="#5C4008" strokeWidth="0.8" fill="none" />
        <path d="M66 81 C64 88 60 91 57 93" stroke="#5C4008" strokeWidth="0.8" fill="none" />

        {/* Base Pedestal line */}
        <rect x="22" y="94" width="56" height="3" rx="1.5" fill="#5C4008" />

        {/* Motto Plate Underneath */}
        <rect x="18" y="100" width="64" height="15" rx="3" fill="#1A3841" stroke="#E5CB90" strokeWidth="0.8" />
        <text
          x="50"
          y="110"
          textAnchor="middle"
          fill="#E5CB90"
          fontSize="7.5"
          fontWeight="bold"
          fontFamily="serif"
          letterSpacing="0.6"
        >
          सत्यमेव जयते
        </text>
      </svg>

      {showText && (
        <div className="text-center mt-1">
          <span 
            className="text-[10px] sm:text-[11px] font-black tracking-widest uppercase block"
            style={{ color: textColor }}
          >
            सत्यमेव जयते
          </span>
          <span className="text-[9px] text-[#458393] font-bold block tracking-tight">
            GOVERNMENT OF INDIA
          </span>
        </div>
      )}
    </div>
  );
};
