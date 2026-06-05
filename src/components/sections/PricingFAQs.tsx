import { FAQS } from '@/content/faqs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeader } from './SectionHeader';

const PRICING_CATEGORIES = new Set(['insurance', 'refund', 'legality']);

export function PricingFAQs() {
  const faqs = FAQS.filter((f) => PRICING_CATEGORIES.has(f.category));

  if (faqs.length === 0) return null;

  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Pricing Questions"
          title="Straight answers on *cost.*"
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="border-t border-border">
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
      </div>
    </section>
  );
}
