import { TREATMENTS } from '@/content/treatments';
import { formatUSD } from '@/lib/utils';
import { Check, Minus } from 'lucide-react';

const ROUTE_SHORT: Record<string, string> = {
  'Subcutaneous or intramuscular injection': 'Subcutaneous',
  'Daily oral tablet': 'Tablet',
  'Subcutaneous injection (adjunct)': 'Subcutaneous',
  'Daily topical application': 'Topical',
};

const FDA_SHORT: Record<string, string> = {
  'FDA-approved': 'FDA',
  Compounded: 'Compounded',
  'Both available': 'FDA + Compounded',
};

export function TreatmentTable() {
  return (
    <section className="bg-surface-alt">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">Compare</p>
          <h2
            className="font-serif text-display-md font-medium text-primary"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            Side-by-<span className="display-italic text-primary">side.</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-6xl overflow-x-auto">
          <table className="min-w-[640px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 z-10 border-b border-border bg-surface-alt p-4 text-left font-mono text-[11px] uppercase tracking-tracked text-muted"
                />
                {TREATMENTS.map((t) => (
                  <th
                    key={t.slug}
                    scope="col"
                    className="border-b border-border p-4 text-left font-serif text-base font-medium text-primary"
                  >
                    {t.shortName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="font-mono text-text">
              <Row label="Form">
                {TREATMENTS.map((t) => (
                  <Cell key={t.slug}>{t.formFactor}</Cell>
                ))}
              </Row>
              <Row label="Frequency">
                {TREATMENTS.map((t) => (
                  <Cell key={t.slug}>{t.frequency}</Cell>
                ))}
              </Row>
              <Row label="Route">
                {TREATMENTS.map((t) => (
                  <Cell key={t.slug}>{ROUTE_SHORT[t.route] ?? t.route}</Cell>
                ))}
              </Row>
              <Row label="Fertility-preserving">
                {TREATMENTS.map((t) => (
                  <Cell key={t.slug}>
                    {t.fertilityPreserving ? (
                      <Check size={16} strokeWidth={2.5} className="text-accent" />
                    ) : (
                      <Minus size={16} strokeWidth={2} className="text-muted/50" />
                    )}
                  </Cell>
                ))}
              </Row>
              <Row label="Regulatory">
                {TREATMENTS.map((t) => (
                  <Cell key={t.slug}>{FDA_SHORT[t.fdaStatus] ?? t.fdaStatus}</Cell>
                ))}
              </Row>
              <Row label="Price / month">
                {TREATMENTS.map((t) => (
                  <Cell key={t.slug}>
                    <span className="text-text">
                      {t.formFactor === 'Adjunct' ? '+' : ''}
                      {formatUSD(t.monthlyPriceFrom)}
                    </span>
                  </Cell>
                ))}
              </Row>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <tr>
      <th
        scope="row"
        className="sticky left-0 z-10 border-b border-border bg-surface-alt p-4 text-left font-mono text-[11px] uppercase tracking-tracked text-muted"
      >
        {label}
      </th>
      {children}
    </tr>
  );
}

function Cell({ children }: { children: React.ReactNode }) {
  return (
    <td className="border-b border-border p-4 align-baseline text-text">
      {children}
    </td>
  );
}
