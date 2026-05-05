import Image, { type ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> & {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Wraps next/image with trtrx defaults:
 * - quality 88 (slightly above default 75 — premium-positioned site)
 * - WebP via next.config images.formats
 * - explicit width/height required to prevent CLS
 * - lazy by default; pass `priority` for above-fold hero images
 *
 * Always pass meaningful `alt` text. Decorative-only images should
 * use `alt=""` and add `aria-hidden` at the call site.
 *
 * No callsites yet — section components currently use placeholder
 * <div>s. Swap them to <OptimizedImage> when real product/portrait
 * JPGs land in public/images/.
 */
export function OptimizedImage(props: Props) {
  return <Image quality={88} {...props} />;
}
