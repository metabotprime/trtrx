import { SITE_URL } from '@/lib/utils';

type Props = {
  name: string;
  jobTitle: string;
  credentials: string[];
  image?: string;
};

export function PersonSchema({ name, jobTitle, credentials, image }: Props) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    honorificSuffix: credentials.join(', '),
    worksFor: {
      '@type': 'Organization',
      name: 'trtrx',
      url: SITE_URL,
    },
  };
  if (image) {
    data.image = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
