// PLACEHOLDER: Real testimonials replace these as the pilot completes.
// All names, ages, cities, and stats below are illustrative only.
// Photos point to Stocksy editorial placeholders until commissioned shoots land.

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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'marcus-b',
    name: 'Marcus B.',
    age: 41,
    city: 'Austin, TX',
    photo: '/images/testimonials/marcus-b.jpg',
    quote:
      'Thought the fog was just being a dad of three. Six weeks in I was awake for the first time in years. The labs are not the part I brag about — the morning workouts are.',
    statBefore: 285,
    statAfter: 712,
    statTimeframe: '12 weeks',
  },
  {
    id: 'devon-r',
    name: 'Devon R.',
    age: 38,
    city: 'Denver, CO',
    photo: '/images/testimonials/devon-r.jpg',
    quote:
      'I had bounced between three clinics that all wanted a yearly membership and would not show their pricing. trtrx put the number on the page. Two months later my numbers came back inside range.',
    statBefore: 314,
    statAfter: 689,
    statTimeframe: '8 weeks',
  },
  {
    id: 'andre-w',
    name: 'Andre W.',
    age: 46,
    city: 'Charlotte, NC',
    photo: '/images/testimonials/andre-w.jpg',
    quote:
      'My PCP told me 220 was just aging. The trtrx physician spent forty minutes on the consult and we built a plan. Lifting heavier now than I did at thirty-five.',
    statBefore: 220,
    statAfter: 645,
    statTimeframe: '14 weeks',
  },
  {
    id: 'tom-k',
    name: 'Tom K.',
    age: 52,
    city: 'Minneapolis, MN',
    photo: '/images/testimonials/tom-k.jpg',
    quote:
      'Wife noticed before I did. Said I came back to myself. That is the part the bloodwork misses. Bloodwork was good too.',
    statBefore: 248,
    statAfter: 678,
    statTimeframe: '16 weeks',
  },
  {
    id: 'samir-p',
    name: 'Samir P.',
    age: 35,
    city: 'San Diego, CA',
    photo: '/images/testimonials/samir-p.jpg',
    quote:
      'Picked enclomiphene because we want kids next year. T moved from 312 to 590 without injections. My wife is happier than I am about it.',
    statBefore: 312,
    statAfter: 590,
    statTimeframe: '10 weeks',
  },
  {
    id: 'james-h',
    name: 'James H.',
    age: 49,
    city: 'Brooklyn, NY',
    photo: '/images/testimonials/james-h.jpg',
    quote:
      'I tried gels in my late forties and gave up — too messy, too inconsistent. The weekly injection is two minutes and the results are not subtle. Sleeping like a kid again.',
    statBefore: 268,
    statAfter: 724,
    statTimeframe: '12 weeks',
  },
];

export function getHomepageTestimonials(): Testimonial[] {
  return TESTIMONIALS.slice(0, 3);
}
