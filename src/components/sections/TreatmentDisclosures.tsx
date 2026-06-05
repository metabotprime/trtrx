import { type Treatment } from '@/content/treatments';

type Props = { treatment: Treatment };

/**
 * Per-treatment safety + regulatory disclosure block. Surfaces the compliance
 * statements a compounded-Rx telehealth page must carry, tailored to each
 * product: compounded "not FDA-approved as a finished drug," off-label framing
 * for enclomiphene/HCG, TRT risk + monitoring, controlled-substance status,
 * state availability, and the general not-medical-advice disclaimer.
 */
export function TreatmentDisclosures({ treatment }: Props) {
  const isCompounded = treatment.fdaStatus === 'Compounded';
  const items: string[] = [];

  if (isCompounded) {
    items.push(
      `${treatment.shortName} is compounded — it is not FDA-approved as a finished drug. It is prepared per individual prescription by a licensed 503A pharmacy to your physician’s specifications.`,
    );
  } else if (treatment.fdaStatus === 'Both available') {
    items.push(
      `${treatment.shortName} is dispensed either as an FDA-approved generic or as a compounded preparation. Compounded preparations are made per individual prescription by a licensed 503A pharmacy and are not FDA-approved as finished drugs.`,
    );
  }

  if (treatment.offLabel) {
    items.push(
      `Using ${treatment.shortName} to support testosterone is an off-label use. Your licensed clinician may prescribe off-label at their clinical discretion based on your individual labs and history.`,
    );
  }

  items.push(
    'Testosterone replacement can raise red-blood-cell count (hematocrit), may suppress fertility, and is not appropriate for men trying to conceive or with untreated prostate or certain cardiovascular conditions. Your physician orders baseline and follow-up labs and reviews them with you.',
  );
  items.push(
    'Testosterone is a Schedule III controlled substance and is prescribed only after a licensed physician reviews your labs and medical history.',
  );
  items.push(
    'Available in 47 states. Not yet available in Hawaii, Alaska, or Puerto Rico.',
  );
  items.push(
    `This page is general educational information, not medical advice. Talk with a licensed clinician about whether ${treatment.shortName} is right for you.`,
  );

  return (
    <section className="bg-surface-alt">
      <div className="container py-14 md:py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-7 md:p-9">
          <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
            Important safety &amp; regulatory information
          </p>
          <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-muted">
            {items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/50" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
