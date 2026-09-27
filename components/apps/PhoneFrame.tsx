export default function PhoneFrame({
  image,
  alt = "",
  children,
}: {
  image?: string;
  alt?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative w-[9.5rem] rounded-[16%/7.4%] bg-[#0d0d0d] p-[3.2%] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/15 sm:w-48 md:w-56 lg:w-60">
      <div className="relative aspect-[640/1385] overflow-hidden rounded-[13%/6%] bg-black">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-[1.6%] z-10 h-[3.4%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={alt} className="h-full w-full object-cover" />
        ) : (
          // Screen content sized in em, scaled off the phone's width
          <div className="@container h-full w-full">
            <div className="h-full w-full text-[4.4cqw]">{children}</div>
          </div>
        )}
      </div>
    </div>
  );
}
