import { SITE_URL } from '@/lib/utils';

type Item = { name: string; url: string; description?: string };

type Props = { items: Item[]; name?: string };

export function ItemListSchema({ items, name }: Props) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
  if (name) {
    data.name = name;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
