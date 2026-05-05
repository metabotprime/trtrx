import { SectionHeader } from './SectionHeader';

const PARAGRAPHS = [
  'trtrx exists because the modern men’s-health market still treats testosterone therapy like a side hustle. Inflated memberships stacked on top of medication costs. Patient portals on someone else’s domain. "$99/mo" hooks that quietly become $325 once the labs and consult fees land.',
  'We started trtrx to do the obvious thing: charge one transparent number, ship the medication, and let a board-certified physician — not a quiz — set your protocol. No clever bundling. No "first 90 days are different." The number on the homepage is the number on your statement.',
  'Behind every protocol is a doctor who actually reads your labs. Behind every package is a 503A pharmacy or FDA-registered manufacturer. Behind every refill is a follow-up. The boring parts are where trust gets built — so we made them the focus.',
];

export function CompanyNarrative() {
  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Our Story"
          title="The market needed *adults.*"
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-[1.7] text-text">
          {PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
