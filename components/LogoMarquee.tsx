// Add logo filenames here as you drop PNGs into /public/jobb_logo/
const logos = [
  "astudio.png",
  "avia.png",
  "hexagon.png",
  "oclin.png",
  "solvtrans.png",
];

function LogoSet() {
  return (
    <div className="flex shrink-0 items-center gap-20 pr-20">
      {logos.map((logo) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={logo}
          src={`/jobb_logo/${logo}`}
          alt={logo.replace(/\.[^.]+$/, "")}
          className={`w-auto object-contain opacity-80 ${logo === "solvtrans.png" ? "h-28" : logo === "astudio.png" ? "h-7" : logo === "oclin.png" ? "h-7" : "h-10"}`}
          draggable={false}
        />
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  if (logos.length === 0) return null;

  return (
    <div className="border-b border-line bg-ink py-8">
      <div className="mx-auto max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex w-max animate-marquee">
          <LogoSet />
          <LogoSet />
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </div>
  );
}
