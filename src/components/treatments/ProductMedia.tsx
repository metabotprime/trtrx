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
  /** Container classes (aspect + radius/border). Defaults to the 4:5 hero frame. */
  className?: string;
  /** Add a subtle hover zoom (used inside `group` card links). */
  hoverZoom?: boolean;
};

/**
 * Branded product media: a looping, muted, ambient product video (which carries
 * the trtrx label) with the static branded photograph as its poster. The photo
 * paints instantly and is the fallback if the video can't play; the video then
 * loops subtly on top.
 *
 * Performance: the video has no `autoplay` attribute. An IntersectionObserver
 * plays it only while it's on screen and pauses it when scrolled away, so a
 * grid of these never runs more than the visible few at once. preload="metadata"
 * keeps off-screen cards from fetching the full clip.
 *
 * Accessibility: respects `prefers-reduced-motion: reduce` (stays on the poster
 * frame). Markup is identical server/client, so no hydration mismatch.
 */
export function ProductMedia({
  image,
  video,
  alt,
  label,
  sizes = '(min-width: 1024px) 40vw, 100vw',
  priority,
  className,
  hoverZoom = false,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause();
      return;
    }
    if (typeof IntersectionObserver === 'undefined') {
      v.play().catch(() => {});
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) v.play().catch(() => {});
          else v.pause();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const mediaClass = `absolute inset-0 h-full w-full object-cover${
    hoverZoom ? ' transition-transform duration-300 group-hover:scale-[1.03]' : ''
  }`;

  return (
    <div
      className={`relative w-full overflow-hidden bg-surface-alt ${
        className ?? 'aspect-[4/5] rounded-2xl border border-border'
      }`}
    >
      {video ? (
        <video
          ref={ref}
          poster={image}
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={alt}
          className={mediaClass}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          className={mediaClass}
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
