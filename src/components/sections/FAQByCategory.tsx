import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getFAQsByCategory, type FAQCategory } from '@/content/faqs';

const CATEGORY_TITLES: Record<FAQCategory, string> = {
  'results': 'Results',
  'safety': 'Safety',
  'fertility': 'Fertility',
  'insurance': 'Insurance & FSA',
  'legality': 'Legality',
  'products': 'Treatments',
  'side-effects': 'Side Effects',
  'monitoring': 'Labs & Monitoring',
  'lifestyle': 'Lifestyle',
  'refund': 'Refund & Cancellation',
};

const ORDER: FAQCategory[] = [
  'results',
  'safety',
  'side-effects',
  'monitoring',
  'fertility',
  'products',
  'insurance',
  'refund',
  'legality',
  'lifestyle',
];

export function FAQByCategory() {
  const grouped = getFAQsByCategory();

  return (
    <section className="bg-surface">
      <div className="container py-12 pb-24 md:pb-32">
        {/* Anchor strip on desktop */}
        <nav
          aria-label="FAQ categories"
          className="mx-auto mb-16 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-2 border-y border-border py-4"
        >
          {ORDER.map((cat) => {
            if (!grouped[cat] || grouped[cat].length === 0) return null;
            return (
              <a
                key={cat}
                href={`#${cat}`}
                className="font-mono text-[11px] uppercase tracking-tracked text-muted underline-offset-4 transition-colors hover:text-accent"
              >
                {CATEGORY_TITLES[cat]}
              </a>
            );
          })}
        </nav>

        <div className="mx-auto max-w-3xl space-y-16">
          {ORDER.map((cat) => {
            const faqs = grouped[cat];
            if (!faqs || faqs.length === 0) return null;

            return (
              <section
                key={cat}
                id={cat}
                aria-labelledby={`${cat}-heading`}
                className="scroll-mt-24"
              >
                <p className="font-mono text-[11px] uppercase tracking-tracked text-accent">
                  {CATEGORY_TITLES[cat]}
                </p>
                <h2
                  id={`${cat}-heading`}
                  className="mt-3 font-serif text-display-md font-medium text-primary"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  {CATEGORY_TITLES[cat]}.
                </h2>

                <div className="mt-8 border-t border-border">
                  <Accordion type="single" collapsible>
                    {faqs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                          <p>{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
