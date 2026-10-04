import { useId } from "react";
import type { FeatureIcon } from "@/lib/apps";

const iconPaths: Record<FeatureIcon, React.ReactNode> = {
  clipboard: (
    <>
      <rect x="5" y="4.5" width="14" height="16.5" rx="2.5" />
      <path d="M9 3h6v3H9z" />
      <path d="m9 13.5 2 2 4-4.5" />
    </>
  ),
  check: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <path d="m8 12.5 3 3 5.5-6" />
    </>
  ),
  family: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16.5 14.1c2.7.3 4.5 2.6 4.5 5.9" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.8" />
      <path d="M5 6v4c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6" />
      <path d="M5 10v4c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-4" />
      <path d="M5 14v4c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-4" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z" />,
  star: <path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" />,
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
};

export function Icon({ name, color = "currentColor", fill, size = 24 }: { name: FeatureIcon; color?: string; fill?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ?? "none"}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {iconPaths[name]}
    </svg>
  );
}

// Glossy colored tile with a white icon, used on the step cards
export function IconTile({ name, color, className = "h-16 w-16" }: { name: FeatureIcon; color: string; className?: string }) {
  return (
    <div
      className={`relative grid shrink-0 place-items-center rounded-[22px] ${className}`}
      style={{
        background: `linear-gradient(150deg, color-mix(in srgb, ${color} 80%, white) 0%, ${color} 45%, color-mix(in srgb, ${color} 65%, black) 100%)`,
        boxShadow: `inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18), 0 18px 40px -14px ${color}`,
      }}
    >
      <Icon name={name} color="white" size={30} />
    </div>
  );
}

function starPoints(cx: number, cy: number, outer: number, inner: number) {
  return Array.from({ length: 10 }, (_, i) => {
    const r = i % 2 ? inner : outer;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
}

// Gold coin with an embossed star, matching the coin in the app's logo
export function Coin({ className = "" }: { className?: string }) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <radialGradient id={`${id}f`} cx="35%" cy="28%" r="75%">
          <stop offset="0" stopColor="#fff4b0" />
          <stop offset="0.35" stopColor="#ffd23f" />
          <stop offset="0.75" stopColor="#f6a512" />
          <stop offset="1" stopColor="#d9800a" />
        </radialGradient>
        <linearGradient id={`${id}e`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c47406" />
          <stop offset="1" stopColor="#8a4c00" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="55" r="43" fill={`url(#${id}e)`} />
      <circle cx="50" cy="49" r="43" fill={`url(#${id}f)`} />
      <circle cx="50" cy="49" r="32" fill="none" stroke="#e08a0a" strokeWidth="4" opacity="0.65" />
      <polygon points={starPoints(50, 50, 19, 8.5)} fill="#ffc21f" stroke="#e48b00" strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="34" cy="27" rx="13" ry="6" fill="white" opacity="0.45" transform="rotate(-32 34 27)" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#ffec8a" />
          <stop offset="0.55" stopColor="#ffc21a" />
          <stop offset="1" stopColor="#f08c00" />
        </linearGradient>
      </defs>
      <polygon points={starPoints(50, 52, 44, 20)} fill={`url(#${id})`} stroke={`url(#${id})`} strokeWidth="10" strokeLinejoin="round" />
    </svg>
  );
}
