import type { Treatment } from '@/content/treatments';

type FormFactor = Treatment['formFactor'];

const NAVY = 'hsl(215 60% 28%)';
const NAVY_SOFT = 'hsl(215 60% 28% / 0.45)';
const AMBER = 'hsl(45 95% 55%)';
const AMBER_FILL = 'hsl(45 95% 55% / 0.45)';

/**
 * Branded per-form-factor product illustration that replaces the
 * ghost-text placeholder on treatment cards. Pure SVG — no photography
 * dependency — so cards read as finished and differentiate at a glance:
 * injectable (vial), oral (tablet), topical (tube), adjunct (vial + plus).
 */
export function TreatmentVisual({
  formFactor,
  label,
  className,
}: {
  formFactor: FormFactor;
  label?: string;
  className?: string;
}) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${className ?? ''}`}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 8%, hsl(45 95% 55% / 0.12), hsl(220 15% 96%) 68%)',
        }}
      />
      {/* faint dot grid for texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(hsl(215 60% 28% / 0.07) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />
      <div className="relative flex h-full items-center justify-center">
        <Glyph formFactor={formFactor} />
      </div>
      {label && (
        <span className="absolute bottom-3 left-3 rounded-full border border-border bg-surface/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-tracked text-accent-strong backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}

function Glyph({ formFactor }: { formFactor: FormFactor }) {
  switch (formFactor) {
    case 'Oral':
      return <OralGlyph />;
    case 'Topical':
      return <TopicalGlyph />;
    case 'Adjunct':
      return <VialGlyph adjunct />;
    case 'Injectable':
    default:
      return <VialGlyph />;
  }
}

const SVG_PROPS = {
  width: 104,
  height: 104,
  viewBox: '0 0 104 104',
  fill: 'none' as const,
  className: 'drop-shadow-[0_8px_16px_hsl(215_60%_28%/0.12)]',
};

function VialGlyph({ adjunct = false }: { adjunct?: boolean }) {
  return (
    <svg {...SVG_PROPS} aria-hidden>
      {/* cap */}
      <rect x="42" y="16" width="20" height="9" rx="2" fill={NAVY} />
      <rect x="45" y="11" width="14" height="6" rx="2" fill={NAVY_SOFT} />
      {/* body */}
      <rect
        x="38"
        y="27"
        width="28"
        height="60"
        rx="10"
        fill="white"
        stroke={NAVY}
        strokeWidth="2.5"
      />
      {/* liquid */}
      <path
        d="M40.5 60 h23 v17 a8 8 0 0 1 -8 8 h-7 a8 8 0 0 1 -8 -8 z"
        fill={AMBER_FILL}
      />
      {/* dose ticks */}
      <g stroke={NAVY_SOFT} strokeWidth="1.6" strokeLinecap="round">
        <path d="M44 40 h6" />
        <path d="M44 48 h6" />
        <path d="M44 56 h6" />
      </g>
      {adjunct && (
        <g>
          <circle cx="76" cy="34" r="13" fill={AMBER} />
          <path
            d="M76 28 v12 M70 34 h12"
            stroke={NAVY}
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </g>
      )}
    </svg>
  );
}

function OralGlyph() {
  return (
    <svg {...SVG_PROPS} aria-hidden>
      {/* secondary tablet */}
      <circle cx="68" cy="40" r="15" fill={AMBER_FILL} stroke={NAVY} strokeWidth="2.2" />
      {/* primary tablet */}
      <circle cx="44" cy="56" r="24" fill="white" stroke={NAVY} strokeWidth="2.5" />
      <path d="M44 33 v46" stroke={NAVY} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M28 50 a18 18 0 0 1 12 -12"
        stroke={NAVY_SOFT}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TopicalGlyph() {
  return (
    <svg {...SVG_PROPS} aria-hidden>
      {/* cap */}
      <rect x="45" y="12" width="14" height="15" rx="2" fill={NAVY} />
      {/* shoulder */}
      <path
        d="M40 30 q12 -5 24 0 l-3 9 h-18 z"
        fill="white"
        stroke={NAVY}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* body */}
      <path
        d="M37 39 h30 v40 a5 5 0 0 1 -5 5 h-20 a5 5 0 0 1 -5 -5 z"
        fill="white"
        stroke={NAVY}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* amber band */}
      <rect x="37" y="52" width="30" height="9" fill={AMBER_FILL} />
      <path d="M44 70 h16" stroke={NAVY_SOFT} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
