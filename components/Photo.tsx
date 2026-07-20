import Image from "next/image";

interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  overlay?: boolean;
}

/**
 * Real project photograph with graceful object-cover fill and optional
 * ink-tinted overlay for text legibility. Uses next/image for optimization.
 */
export default function Photo({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  overlay = false,
}: PhotoProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imgClassName}`}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
      )}
    </div>
  );
}
