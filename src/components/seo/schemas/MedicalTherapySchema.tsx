import { SITE_URL } from '@/lib/utils';
import { type Treatment } from '@/content/treatments';

type Props = { treatment: Treatment };

export function MedicalTherapySchema({ treatment }: Props) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name: treatment.name,
    description: treatment.summary,
    url: `${SITE_URL}/treatments/${treatment.slug}`,
    relevantSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Endocrinology',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
