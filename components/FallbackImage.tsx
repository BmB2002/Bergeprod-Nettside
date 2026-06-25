"use client";

/**
 * Renders an <img> that simply hides itself if the file isn't there yet.
 * Lets us reference /hero.gif and /portrait.jpg before those assets exist,
 * without showing a broken-image icon.
 */
export default function FallbackImage({
  src,
  alt,
  className,
  ariaHidden,
}: {
  src: string;
  alt: string;
  className?: string;
  ariaHidden?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      aria-hidden={ariaHidden}
      className={className}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}
