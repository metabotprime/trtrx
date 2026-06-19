import { useEffect, useRef } from 'react';
import Image from 'next/image';

type Props = {
  image: string;
  video?: string;
  alt: string;
  label?: string;
  /** next/image sizes hint (used for the static / poster image). */
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Product hero media: a looping, muted, ambient product video with the static
 * branded photograph as its poster. The photo shows instantly (and is the
 * fallback if the video can't play); the video then loops subtly on top.
 *
 * Accessibility: pauses on `prefers-reduced-motion: reduce`, leaving the poster
 * frame visible. Markup is identical on server and client (the <video> always
 * renders) so there's no hydration mismatch — reduced-motion is handled by
 * pausing after mount.
 */
export function ProductMedia({
  image,
  video,
  alt,
  label,
  sizes = '(min-width: 1024px) 40vw, 100vw',
  priority,
  className,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause();
      return;
    }
    // Some browsers defer muted autoplay until the element is interacted with
    // or visible; nudge it.
    const play = () => v.play().catch(() => {});
    if (v.readyState >= 2) play();
    else v.addEventListener('loadeddata', play, { once: true });
  }, []);

  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface-alt ${className ?? ''}`}
    >
      {video ? (
        <video
          ref={ref}
          // poster shows immediately and remains the reduced-motion fallback
          poster={image}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={alt}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          priority={priority}
        />
      )}
      {label && (
        <span className="absolute bottom-3 left-3 rounded-full border border-border bg-surface/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-tracked text-accent-strong backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
