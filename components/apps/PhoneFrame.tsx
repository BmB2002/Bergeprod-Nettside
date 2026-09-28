export default function PhoneFrame({
  image,
  alt = "",
  className = "w-[9.5rem] sm:w-48 md:w-56 lg:w-60",
}: {
  image: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[16%/7.4%] bg-gradient-to-b from-[#3a3b3f] via-[#1a1b1d] to-[#2b2c30] p-[1.2%] shadow-[0_40px_90px_-25px_rgba(0,0,0,0.95)] ${className}`}
    >
      <div className="rounded-[15%/7%] bg-[#070707] p-[2.4%]">
        <div className="relative aspect-[640/1385] overflow-hidden rounded-[13%/6%] bg-black">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-[1.6%] z-10 h-[3.4%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={alt} className="h-full w-full object-cover object-top" />
        </div>
      </div>
    </div>
  );
}
