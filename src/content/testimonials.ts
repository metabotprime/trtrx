// Only publish real patient testimonials with documented consent and verified claims.
// Keep this empty until approved pilot records are available.

export type Testimonial = {
  id: string;
  name: string;
  age: number;
  city: string;
  photo: string;
  quote: string;
  statBefore: number;
  statAfter: number;
  statTimeframe: string;
};

export const TESTIMONIALS: Testimonial[] = [];

export function getHomepageTestimonials(): Testimonial[] {
  return TESTIMONIALS.slice(0, 3);
}
