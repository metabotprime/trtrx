import { SITE_URL } from '@/lib/utils';

type Props = {
  name: string;
  description: string;
  path: string;
  lastReviewed?: string;
  reviewedBy?: { name: string; jobTitle: string; honorificSuffix?: string };
};

/**
 * Inline JSON-LD MedicalWebPage — emitted alongside BlogPosting on
 * clinical articles to give Google a clearer YMYL signal.
 */
export function MedicalWebPageSchema({
  name,
  description,
  path,
  lastReviewed,
  reviewedBy,
}: Props) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name,
    description,
    url: `${SITE_URL}${path}`,
    audience: { '@type': 'MedicalAudience', audienceType: 'Patients' },
  };
  if (lastReviewed) data.lastReviewed = lastReviewed;
  if (reviewedBy) {
    data.reviewedBy = {
      '@type': 'Person',
      name: reviewedBy.name,
      jobTitle: reviewedBy.jobTitle,
      ...(reviewedBy.honorificSuffix
        ? { honorificSuffix: reviewedBy.honorificSuffix }
        : {}),
    };
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
