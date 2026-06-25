import Reveal from "./Reveal";

export default function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <Reveal>
      <p className="label mb-4">{label}</p>
      <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}
