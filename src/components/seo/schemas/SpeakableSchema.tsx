type SpeakableSchemaProps = {
  name?: string;
  url?: string;
  /** CSS selectors for AI voice assistants to read aloud. Prefer over xPath. */
  speakableSelectors?: string[];
  xPath?: string[];
};

/**
 * Marks specific page elements as "speakable" for voice-search engines and
 * AI assistants (Alexa, Google Assistant, etc.). Pair with QuickAnswerBox
 * or other dedicated answer blocks that should be read aloud verbatim.
 */
export function SpeakableSchema({ name, url, speakableSelectors, xPath }: SpeakableSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    ...(name ? { name } : {}),
    ...(url ? { url } : {}),
    speakable: {
      '@type': 'SpeakableSpecification',
      ...(speakableSelectors ? { cssSelector: speakableSelectors } : {}),
      ...(xPath ? { xpath: xPath } : {}),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
